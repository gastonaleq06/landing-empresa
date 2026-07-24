# Auditoría de landing — Alambrar SRL

> **Solo diagnóstico. No se modificó ningún archivo del proyecto.**
> Único archivo creado: este reporte.

## Contexto (inferido del código — los `[COMPLETAR]` del brief venían vacíos)

Los campos del brief estaban sin completar, así que los deduje del propio código y los metadatos.
**Confirmá o corregí antes de accionar:**

- **Rubro/cliente:** Alambrar SRL — fabricación e instalación de cercos, alambrados, portones,
  concertina y seguridad perimetral en Salta (`app/layout.tsx:21`).
- **Objetivo único (asumido):** que el usuario pida presupuesto por WhatsApp. Todo el sitio
  desemboca en `wa.me` / `tel:` / `mailto:` — no hay backend ni persistencia de leads.
- **Audiencia (asumida):** dos segmentos explícitos en la propia página — obras/empresas
  (factura A, cotización formal) y casas particulares (resolución rápida por WhatsApp).
- **Stack real:** Next.js 16.2.11 (App Router) + React 19 + Tailwind v4 + `motion` v12.
  **Supabase figura en el brief pero no está en `package.json` ni se usa** — hoy no existe
  captura de leads.

---

## 1. Mapa de la página

### Config y raíz
| Archivo | Rol |
|---|---|
| `tailwind.config.mts` | Paleta (`rojo #C42126`, `carbon #1C1C1E`, `gris-texto #6B6B70`, `fondo-claro #F4F4F5`, `whatsapp #25D366`) + fuentes `display`/`sans` |
| `app/globals.css` | Import de Tailwind v4, `scroll-behavior`, utilidad `no-scrollbar` |
| `app/layout.tsx` | Fuentes Poppins (display) + Inter (sans), metadata SEO, monta Navbar + Footer + WhatsAppFloat |
| `app/page.tsx` | Home: compone 7 secciones |
| `app/contacto/page.tsx` | Página de contacto: FormularioObra + FormularioSimple |
| `app/obras/page.tsx` | Galería filtrable de obras |
| `.env.example` | 10 variables `NEXT_PUBLIC_*` (WhatsApps, teléfono, dirección, redes, etc.) |

### Home (`app/page.tsx`), sección por sección
1. **Hero** (`components/sections/Hero.tsx`) — headline + subtítulo + 3 garantías con check + CTA WhatsApp/Llamar, sobre fondo gris plano, sin imagen.
2. **Bifurcación** (`Bifurcacion.tsx`) — dos tarjetas: "Para tu obra" → form largo / "Para tu casa" → WhatsApp.
3. **Quiénes somos** (`QuienesSomos.tsx`) — párrafo institucional sobre fondo rojo + placeholder de imagen.
4. **Por qué elegirnos** (`PorQueElegirnos.tsx`) — 4 tarjetas con overlay oscuro (imágenes aún placeholder).
5. **Confían en nosotros** (`ConfianEnNosotros.tsx`) — carrusel de logos **todos placeholder** ("Cliente 1..8"), fondo rojo.
6. **Servicios** (`Servicios.tsx`) — 3 FeatureCards + CTA WhatsApp/Ver obras.
7. **Reseñas** (`Resenas.tsx`) — 5 testimonios (4 reales de Google + **1 de ejemplo**), fondo rojo.

Global: **Navbar** roja sticky (`Navbar.tsx`, client), **Footer** carbón (`Footer.tsx`), **WhatsAppFloat** fijo (`WhatsAppFloat.tsx`).

### Contacto
- `FormularioObra.tsx` — presupuesto detallado, **~15+ campos** (datos + tejido/poste/malla/terreno por RadioCards + medidas + portón condicional), compone un mensaje y abre WhatsApp o email.
- `FormularioSimple.tsx` — 5 campos + `InfoOficina.tsx` (horarios, mapa embebido de Google).

### Obras
- `GaleriaObras.tsx` — filtros por categoría + grid de 12 obras (`lib/obras.ts`, todas sin imagen real).

### UI compartida
`Button`, `Container`, `Logo` (texto "ALAMBRAR"), `FadeUp` (motion), `Carousel`, `Placeholder`,
`FeatureCard`, `form/Field`, `form/TextInput`, `form/TextArea`, `form/RadioCards`, `icons/SocialIcons`.
Helpers: `lib/whatsapp.ts`, `lib/obras.ts`, `lib/usePrefersReducedMotion.ts`, `lib/useAutoScrollDrag.ts`.

---

## 2. Hallazgos por fase

### Fase 2 — Dirección visual (base ui-ux-pro-max vs. código actual)

| Dimensión | Hoy en el código | Qué sugiere la base | Lectura |
|---|---|---|---|
| **Paleta** | Rojo saturado `#C42126` como color dominante (secciones enteras en rojo) + carbón + gris claro | Rubro Construcción/Arquitectura → **gris industrial `#64748B` + naranja seguridad `#EA580C`**, estética Swiss/minimal, acento solo en el CTA | El rojo es un activo de marca fuerte, pero la base marca dos cosas: (a) el rubro tiende a *gris + acento cálido*, y (b) el acento debería reservarse al CTA, no pintar 3 secciones enteras. |
| **Tipografía** | Poppins (display) + Inter (body) | La búsqueda por "professional/trustworthy" devuelve **"Modern Professional = Poppins + Open Sans"** como opción *default* | Poppins es literalmente el pairing "seguro/genérico" de la base. No es un error, pero **no diferencia**: es un vehículo neutro, no personalidad. |
| **Estructura de landing** | Hero → bifurcación → institucional → prueba → servicios → reseñas | Patrón **"Trust & Authority + Lead Magnet"**: Hero credibilidad → **Proof (logos/certs/stats reales)** → solución → CTA de baja fricción | La estructura está bien encaminada, pero el "proof" hoy es **humo** (logos y una reseña placeholder) y el CTA principal para obras es de **alta** fricción, al revés de lo que pide el patrón. |

> Nota metodológica: el `--design-system` auto-sugirió JetBrains Mono como tipografía; es un
> mismatch del auto-ruteo (aesthetic "terminal/hacker"), lo descarto. La lectura de tipografía
> se basa en la búsqueda `--domain typography` explícita.

### Fase 3 — Criterio de diseño (duro, porque es v1)

- **¿Hero tesis o template?** **Template.** Evita bien la trampa "número grande + gradiente",
  pero cae en la otra: bloque de texto a la izquierda sobre gris plano, **sin ningún elemento
  visual** (`Hero.tsx:16-54`). No comunica el oficio con una imagen, no tiene jerarquía visual
  más allá del tamaño de fuente. Se siente inacabado, no intencional.
- **¿Tipografía con personalidad?** **No.** Poppins + Inter = vehículo neutro (ver Fase 2).
  Para un oficio físico/industrial (cercos, caño estructural, tensado) la tipografía podría
  aportar solidez/carácter y hoy no dice nada.
- **¿Los elementos estructurales codifican algo?** **Parcialmente decoración.** El acento
  `border-t-[3px] border-t-rojo` de las tarjetas de bifurcación (`Bifurcacion.tsx:18`) es lo
  más cercano a un motivo, pero **no se repite** en `FeatureCard` (`FeatureCard.tsx:11`) ni en
  `ResenaCard` (`Resenas.tsx:53`). Los eyebrows en mayúscula + `tracking-widest`
  (`obras/page.tsx:19`) y las hairlines `border-[0.5px]` omnipresentes son estética, no señal.
- **¿Cae en algún "look de IA"?** No en los tres puros (no es crema+serif+terracota, no es
  negro+acid-green, no es broadsheet). **Pero hay una deriva parcial** hacia el look #3:
  hairlines `border-[0.5px]` en casi todo (`FeatureCard`, `Resenas`, `TextInput`, tarjetas) +
  eyebrows en mayúscula espaciada. La saturación del rojo es lo único que lo aleja.
- **¿Hay UN elemento signature memorable?** **No.** El activo más fuerte es el rojo de marca,
  pero se usa como *relleno* plano (secciones completas `bg-rojo`) en vez de como una firma
  trabajada. No hay un gesto único y consistente que se recuerde.

### Fase 4 — Conversión (objetivo: presupuesto por WhatsApp)

- **Claridad en 5 s:** ✅ Buena. "Cercos, portones y seguridad perimetral a tu medida /
  Fabricación e instalación en Salta" (`Hero.tsx:20-25`) dice **qué** y **dónde**.
- **CTA sobre el pliegue y repetido:** ✅ WhatsApp verde + Llamar en el hero, y se repite con
  criterio (bifurcación, servicios, formularios, botón flotante). Bien.
- **Fricción antes del CTA:** ⚠️ **Alta y contradictoria con el objetivo.** El camino "Para tu
  obra" manda a un formulario de **~15+ campos** (`FormularioObra.tsx:206-432`) antes de llegar
  a WhatsApp. Para "pedir presupuesto por WhatsApp" es muchísimo. El patrón de la base pide
  ≤3 campos para máxima conversión.
- **Copy dice qué hace o vende adjetivos:** ✅ Mayormente concreto ("bien tensado, bien
  instalado, sin atajos", "de la medición a la instalación final", `PorQueElegirnos.tsx:11-31`).
  Algún título vende adjetivo ("Trabajo que queda bien") pero el cuerpo lo respalda con hechos.
- **Dark patterns / prueba social falsa:** 🔴 **Sí, y hay que marcarlo:**
  - **Reseña fabricada** shipeada: `{ autor: "Nombre Apellido", estrellas: 5, texto: "Reseña de
    ejemplo, la reemplazo yo." }` (`Resenas.tsx:29-33`). Un testimonio 5★ inventado en una
    página de conversión es una violación de confianza. **Ship-blocker.**
  - **Logos de clientes todos placeholder** ("Cliente 1..8", `ConfianEnNosotros.tsx:12-21`) bajo
    el título "Confían en nosotros". Si sale así, afirma clientes que no se muestran.
  - No hay countdowns, escasez falsa ni continuidad forzada. Fuera de lo anterior, limpio.

### Fase 5 — Código (solo lo crítico: waterfalls + bundle)

- **Waterfalls de datos:** ✅ **Ninguno.** No hay fetching async; todo es data hardcodeada
  (`lib/obras.ts`, arrays en cada sección). Supabase no está integrado.
- **Bundle:** ⚠️ La dependencia **`motion` v12** (`package.json:14`) se carga al cliente solo
  para el fade-in de `FadeUp` (`FadeUp.tsx:4`), que envuelve casi todas las secciones. Es el
  peso de JS evitable más grande de la página. El mismo efecto se logra con IntersectionObserver
  + CSS (o `animation-timeline: view()`), eliminando la librería. `lucide-react` con imports
  nombrados sí se tree-shakea bien — no es problema.
- **Contra-nota (leads):** el objetivo es conversión pero **no hay red de contención**: si el
  usuario no completa el salto a WhatsApp/mail, el lead se pierde (`FormularioObra.tsx:181-197`).
  No es un waterfall ni bundle, pero es la brecha de conversión de fondo (aquí entraría Supabase).

### Fase 6 — Accesibilidad (pasada rápida: lo caro de arreglar después)

- **Contraste de la paleta:** mayormente ✅.
  - `#C42126` sobre blanco y blanco sobre `#C42126` ≈ **5.8:1** → AA ✅.
  - `gris-texto #6B6B70` sobre blanco ≈ 5.3:1 ✅ / sobre `fondo-claro` ≈ 4.8:1 ✅ (justo).
  - `text-white/90` sobre rojo ≈ 4.6:1 ✅ (al límite); **`text-white/80` sobre rojo ≈ 3.6:1 →
    falla AA** para texto chico (`InfoOficina.tsx:69`, subtítulo del mapa). Puntual.
- **Jerarquía de headings:** ✅ un solo `h1` por página (Home `Hero.tsx:20`, Contacto/Obras ok).
  ⚠️ En Obras hay salto `h1` → `h3` (las cards de galería, `GaleriaObras.tsx:27`) sin `h2`
  intermedio, y recién después aparece un `h2` (`obras/page.tsx:35`). Menor.
- **Labels en formularios:** ✅ `Field` asocia `label htmlFor` ↔ input. ⚠️ Para RadioCards y el
  checkbox, el `htmlFor` (p. ej. `"obra-tejido"`, `FormularioObra.tsx:283`) apunta a un id que no
  existe (RadioCards renderiza un `radiogroup`, `RadioCards.tsx:54`) → **label huérfano**; el
  grupo igual queda etiquetado por `aria-label`. ⚠️ El error de campo no se enlaza por
  `aria-describedby` al input (`Field.tsx:27`), aunque tiene `role="alert"`.
- **Foco visible:** ✅ **Excelente cobertura.** Botones, links, inputs, radios, carrusel y botón
  flotante tienen `focus-visible:outline` con color adaptado al fondo (comentado a propósito en
  `Button.tsx:29-31`). Es lo mejor resuelto de la accesibilidad.
- Menor: botones de filtro `py-2` ≈ 36px de alto (`GaleriaObras.tsx:49`), bajo el objetivo de
  44×44px táctil.

---

## 3. Tabla priorizada (ordenada por impacto)

| # | Hallazgo | Impacto | Esfuerzo | Archivo:línea |
|---|---|---|---|---|
| 1 | Reseña de ejemplo fabricada (5★) shipeada | **Alto** | Bajo | `components/sections/Resenas.tsx:29-33` |
| 2 | Logos de clientes todos placeholder bajo "Confían en nosotros" | **Alto** | Bajo | `components/sections/ConfianEnNosotros.tsx:12-21` |
| 3 | Hero template sin tesis ni elemento visual | **Alto** | Medio | `components/sections/Hero.tsx:16-54` |
| 4 | Fricción: form de ~15 campos como camino principal a WhatsApp | **Alto** | Medio | `components/sections/FormularioObra.tsx:206-432`, `Bifurcacion.tsx:59` |
| 5 | CTAs muertas (`href="#"`) si faltan las envs `NEXT_PUBLIC_*` | **Alto** (para launch) | Bajo | `lib/whatsapp.ts:1-5`, `Hero.tsx:13-14` |
| 6 | Sobrecarga de rojo (3 secciones full-rojo) + falta de signature consistente | Medio | Medio | `QuienesSomos.tsx:7`, `ConfianEnNosotros.tsx:39`, `Resenas.tsx:65` |
| 7 | Tipografía Poppins/Inter = default genérico, sin carácter | Medio | Medio | `app/layout.tsx:8-18`, `tailwind.config.mts:18-21` |
| 8 | `motion` cargado al cliente solo para el fade (bundle evitable) | Medio | Medio | `components/ui/FadeUp.tsx:4`, `package.json:14` |
| 9 | Leads no persistidos (Supabase del brief sin integrar) | Medio | Medio | `package.json`, `FormularioObra.tsx:181-197` |
| 10 | `text-white/80` sobre rojo ≈ 3.6:1 (falla AA texto chico) | Bajo | Bajo | `components/sections/InfoOficina.tsx:69` |
| 11 | `label htmlFor` huérfano en RadioCards/checkbox | Bajo | Bajo | `FormularioObra.tsx:283`, `RadioCards.tsx:54` |
| 12 | Error de campo sin `aria-describedby` | Bajo | Bajo | `components/ui/form/Field.tsx:27` |
| 13 | Salto de jerarquía `h1`→`h3` en Obras | Bajo | Bajo | `app/obras/page.tsx:22`, `GaleriaObras.tsx:27` |
| 14 | Target táctil de filtros ~36px (<44px) | Bajo | Bajo | `components/sections/GaleriaObras.tsx:49` |

---

## 4. Los 3 cambios que más mueven la aguja (en orden)

1. **Sacar la prueba social falsa antes de cualquier cosa** (hallazgos #1 y #2).
   Una reseña 5★ inventada + logos "Cliente 1..8" en una página cuyo trabajo es *generar
   confianza para que te escriban* es contraproducente y erosiona todo lo demás. Esfuerzo
   trivial, y hasta que no se resuelva no tiene sentido pulir el resto. **No es opcional para
   deploy.** Mientras no haya logos reales, mejor ocultar la sección que llenarla de humo.

2. **Convertir el Hero de template a tesis + un elemento signature** (hallazgo #3, y ancla del #6).
   Es lo que se juzga en los primeros 5 segundos y hoy se ve inacabado. Darle una imagen real del
   oficio (un cerco/portón bien hecho) o un tratamiento visual con carácter, y de paso **definir
   UN motivo** (p. ej. el acento rojo como firma coherente en todas las tarjetas, no solo en
   bifurcación) que ordene la identidad. Esto también ataca la sobrecarga de rojo: menos relleno
   plano, más acento intencional.

3. **Bajar la fricción del camino a WhatsApp** (hallazgo #4).
   El objetivo declarado es presupuesto por WhatsApp, pero el camino "obra" arranca con 15+
   campos. Hacer que **WhatsApp de baja fricción sea el default** para ambos segmentos y dejar el
   formulario detallado como opción avanzada / paso posterior. Alinea la página con su único
   objetivo y con el patrón de conversión de la base.

---

## 5. Lo que NO hay que tocar todavía (y por qué)

- **El sistema de color de marca (el rojo).** Es el activo más fuerte; el problema es *cómo* se
  aplica (relleno vs. acento), no el color. No lo reemplaces por el gris industrial de la base
  hasta decidir la dirección: sería tirar identidad. Refinar uso ≠ cambiar paleta.
- **La arquitectura de formularios (Field/TextInput/RadioCards/validación).** Está sólida y bien
  tipada; los ajustes de a11y (#11, #12) son quirúrgicos, no justifican refactor.
- **El sistema de foco visible.** Ya es lo mejor resuelto; no lo toques.
- **Integrar Supabase / persistencia de leads.** Importante, pero **prematuro** hasta fijar
  dirección visual y camino de conversión. Meter backend ahora es construir sobre arena.
- **Auditoría de accesibilidad completa (100+ reglas).** Por instrucción: recién antes de deploy.
  Esta pasada solo cubrió lo caro de arreglar después (contraste, headings, labels, foco).
- **Los slots de imagen (`Placeholder`).** No diseñes tratamientos de imagen (overlays, ratios,
  `next/image`) hasta tener las fotos reales; hoy sería optimizar sobre marcadores.
- **Micro-optimizaciones de código** (memo, listeners, etc.). Fuera del alcance de esta etapa; el
  único tema de bundle real es `motion` (#8) y puede esperar a que la dirección visual se congele.

---

## Criterio de aceptación

- ✅ Ningún archivo del proyecto modificado (solo se creó este reporte).
- ✅ Cada hallazgo tiene archivo y línea concretos.
- ✅ La tabla está ordenada por impacto.

**Punto de parada:** no se implementó ninguna corrección. Esperando tu decisión sobre los 3
cambios prioritarios.
