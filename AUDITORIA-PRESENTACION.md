# Auditoría de pre-presentación — Alambrar SRL

> **Solo diagnóstico. No se modificó ningún archivo del proyecto.**
> Único archivo creado: este reporte.

Corrida sobre el estado actual de `main` (commit `508bd4e`), 7 commits después de
`AUDITORIA-LANDING.md`. Build (`npm run build`) y lint (`npm run lint`) verificados en
esta corrida: **ambos limpios, sin errores ni warnings.**

---

## 1. Veredicto en una línea

**No, todavía no** — pero está a un cambio de configuración de estarlo. Hoy mismo, con
`.env.local` tal cual está, los botones de WhatsApp y "Llamar" de **toda la página**
(`Hero`, `Bifurcacion`, `Servicios`, `WhatsAppFloat`, ambos formularios) están rotos
porque `NEXT_PUBLIC_WHATSAPP_VENTAS`, `NEXT_PUBLIC_WHATSAPP_OBRAS`,
`NEXT_PUBLIC_WHATSAPP_ADMIN`, `NEXT_PUBLIC_TELEFONO` y `NEXT_PUBLIC_EMAIL` están
vacíos — confirmado leyendo `.env.local` en esta corrida. Sumale que
"Empresas que confían en nosotros" sigue mostrando `Cliente 1`...`Cliente 8`. Cargar
esos 5 valores y resolver la sección de logos es lo único que separa esta maqueta de
ser presentable.

---

## 2. Ship-blockers

Lo que no puede verse en la reunión bajo ningún concepto, tal como está hoy:

| # | Blocker | Evidencia | Estado |
|---|---|---|---|
| B1 | **CTAs de WhatsApp/teléfono muertas** — `href="#"` o `tel:` vacío en todos los botones principales del sitio | `lib/whatsapp.ts:2` (`if (!numero) return "#"`) + `.env.local` con `NEXT_PUBLIC_WHATSAPP_VENTAS`, `_OBRAS`, `_ADMIN`, `NEXT_PUBLIC_TELEFONO`, `NEXT_PUBLIC_EMAIL` vacíos hoy | **Activo ahora mismo** |
| B2 | **Logos de clientes placeholder** bajo el título "Empresas que confían en nosotros" | `components/sections/ConfianEnNosotros.tsx:8-16` (`"Cliente 1"..."Cliente 8"`) | **Activo** |

La reseña 5★ inventada (blocker del reporte anterior) **ya no existe** — ver
re-verificación abajo. Es la mejora más importante desde la corrida anterior.

---

## 3. Re-verificación de los 14 hallazgos previos

| # | Hallazgo original | Estado | Evidencia actual |
|---|---|---|---|
| 1 | Reseña 5★ fabricada (`"Nombre Apellido"`) | ✅ **RESUELTO** | `components/sections/Resenas.tsx:8-28` — los 4 testimonios son reales (Roberto, Pia Sayons, Shadi Askar, Rafael Urquidi), coinciden con los de Google citados en el propio audit anterior. Sin rastro del registro de ejemplo. |
| 2 | Logos "Cliente 1..8" bajo "Confían en nosotros" | 🔴 **SIGUE ABIERTO** | `components/sections/ConfianEnNosotros.tsx:8-16` — mismos 8 placeholders, comentario `// Reemplazar cada entrada por el logo real` (línea 6) sigue sin resolverse. |
| 3 | Hero template sin tesis ni elemento visual | 🟡 **PARCIAL** | Sigue sin foto real (`HERO_IMAGE: string \| undefined = undefined`, `Hero.tsx:9`), pero ganó lockup de marca (logo + "ALAMBRAR" + subtítulo, `Hero.tsx:50-65`), textura de rombos consistente (`bg-rojo-textura`, `Hero.tsx:27`) y `RotatingWord` para el producto. Comunica más que antes; sigue sin mostrar el oficio. |
| 4 | Formulario de ~15 campos como camino principal a WhatsApp | 🔴 **SIGUE ABIERTO** | `components/sections/FormularioObra.tsx:17-59` (mismos 18 campos de estado) y `Bifurcacion.tsx:112-114` sigue mandando "Para tu obra" directo a `/contacto` → este formulario. |
| 5 | CTAs muertas si faltan envs | 🔴 **SIGUE ABIERTO** (y activo hoy) | Ver Ship-blocker B1. |
| 6 | Sobrecarga de rojo + falta de elemento signature | 🟡 **PARCIAL** | `ConfianEnNosotros.tsx:20` y `Resenas.tsx:66` migraron de `bg-rojo` a `bg-fondo-claro` (menos relleno rojo). A cambio, apareció un signature real: la textura de rombos (`app/globals.css:22-39`) se usa de forma **idéntica** en `Hero.tsx:27`, `QuienesSomos.tsx:7`, `Servicios.tsx:33` y `contacto/page.tsx:15`, y el filete superior `border-t-[3px] border-t-rojo` ahora se repite en `FeatureCard.tsx:11`, `Resenas.tsx:48` y `GaleriaObras.tsx:15` (antes solo estaba en `Bifurcacion`). Es la respuesta correcta al hallazgo, todavía no completa: siguen siendo 4 bloques en rojo sólido/textura. |
| 7 | Tipografía Poppins + Inter genérica | 🔴 **SIGUE ABIERTO** | `app/layout.tsx:8-18`, `tailwind.config.mts:18-21` sin cambios. |
| 8 | `motion` cargado solo para el fade de `FadeUp` | 🔴 **SIGUE ABIERTO** | `components/ui/FadeUp.tsx:4`, `package.json:14` (`motion: ^12.42.2`) sin cambios. |
| 9 | Leads no persistidos (Supabase del brief sin integrar) | 🔴 **SIGUE ABIERTO** | `package.json` sin Supabase ni backend; `FormularioObra.tsx:210-226` sigue siendo `window.open` puro. |
| 10 | `text-white/80` sobre rojo falla AA (`InfoOficina.tsx:69`) | 🟡 **PARCIAL** | El sitio original se corrigió: `InfoOficina.tsx:37` ahora usa `text-white/85` para `valueColor`. Pero el mismo patrón reapareció en otro lugar nuevo: `components/sections/Servicios.tsx:39` (`text-white/80` sobre `bg-rojo-textura`) — mismo defecto, distinta línea. |
| 11 | `label htmlFor` huérfano en RadioCards | 🔴 **SIGUE ABIERTO** | `FormularioObra.tsx:336-341` (`htmlFor="obra-tejido"`) apunta a `RadioCards.tsx:55` (`role="radiogroup"`, sin `id`). *Precisión: el checkbox de portón sí está bien enlazado* (`FormularioObra.tsx:450-456`, `htmlFor`/`id` coinciden) — el hallazgo original lo incluía por error; solo aplica a los grupos `RadioCards`. |
| 12 | Error de campo sin `aria-describedby` | 🔴 **SIGUE ABIERTO** | `components/ui/form/Field.tsx:27-31` — el error tiene `role="alert"` pero no se vincula al input por `id`/`aria-describedby`. |
| 13 | Salto de jerarquía `h1`→`h3` en Obras | 🔴 **SIGUE ABIERTO** | `app/obras/page.tsx:22` (`h1`) → `GaleriaObras.tsx:35` (`h3` en cada `ObraCard`) → recién `app/obras/page.tsx:35` (`h2`). |
| 14 | Target táctil de filtros ~36px | 🔴 **SIGUE ABIERTO** | `components/sections/GaleriaObras.tsx:57` (`py-2` + `text-sm`) sin cambios, sigue por debajo de 44×44px. |

**Resumen:** 1 resuelto, 3 parciales, 10 siguen abiertos. El resuelto es exactamente el
de mayor impacto reputacional (reseña falsa). Los dos ship-blockers restantes de la
corrida anterior (#2 logos, y el envs del #5) siguen siendo los que más importan.

---

## 4. Hallazgos nuevos por fase

### Fase 1 — Inventario y estructura

- **Cero fotos reales en todo el sitio.** No es solo el Hero: `QuienesSomos.tsx:23`,
  `PorQueElegirnos.tsx:78-92`, ambas tarjetas de `Bifurcacion.tsx:88,106`, los 8 logos
  de `ConfianEnNosotros.tsx`, las 12 obras de `lib/obras.ts:17-30` (todas con `src`
  ausente) y las 9 imágenes de opciones en `FormularioObra.tsx:63-98` renderizan
  `Placeholder`. Es un solo hallazgo de fondo, no doce sueltos: **no hay un solo activo
  fotográfico real en el proyecto**, más allá de `logo.png`/`logo-mark.png`.
- **Orden de secciones invertido respecto al patrón sugerido.** Home
  (`app/page.tsx:9-21`) es: Hero → Bifurcación → Quiénes somos → Por qué elegirnos →
  Servicios → **Confían en nosotros → Reseñas** (al final). El patrón "Trust &
  Authority" pide la prueba social **arriba** del pliegue extendido, no como cierre.
- **Faltan dos bloques del checklist por completo:** no existe sección de
  **Proceso** (3-4 pasos) ni de **FAQ/objeciones** en ningún componente de
  `components/sections/`. Son, según la propia base, "las que más se saltean y las
  que más pesan en un servicio presencial".
- **Home no tiene CTA final dedicado.** La página termina en `Resenas.tsx` con un
  botón "Ver todas nuestras reseñas en Google" — no hay un cierre de baja fricción
  post-prueba-social. (`Obras` sí lo tiene: `app/obras/page.tsx:34-41`).
- Envs: 10 variables documentadas en `.env.example` y las mismas 10 presentes en
  `.env.local` — buena cobertura de documentación, pero 5 de 10 vacías hoy (ver B1).

### Fase 2-4 — Dirección visual, sistema de diseño, criterio de diseño

- **Mejora real y verificable:** el Navbar pasó de rojo a blanco con acentos rojos
  (`Navbar.tsx:32`, `linkStyles` línea 17), lo que reserva el rojo para navegación/CTA
  en vez de pintar otro bloque entero — exactamente la corrección que pedía la Fase 2
  del audit anterior ("el acento debería reservarse al CTA").
- **La textura de rombos es una buena resolución del "elemento signature" que
  faltaba.** `app/globals.css:18-21` lo dice explícito en el comentario: "Único punto
  de la textura: todas las secciones rojas deben usar esta clase". El motivo (rombos a
  45°/-45°) además **codifica el producto** (tejido romboidal) — responde con creces a
  la pregunta dura de Fase 4 ("¿los elementos estructurales codifican algo?").
- El filete superior `border-t-[3px] border-t-rojo` ahora es consistente entre
  `FeatureCard.tsx:11`, `Resenas.tsx:48` y `GaleriaObras.tsx:15` — antes solo vivía en
  `Bifurcacion`. Es un segundo motivo repetido y reconocible.
- Sigue sin resolver: tipografía Poppins/Inter como vehículo neutro (sin cambios), y
  la deriva de hairlines `border-[0.5px]` sigue extendida (`ConfianEnNosotros.tsx:39`,
  `Resenas.tsx:48`, `FeatureCard.tsx:11`, `GaleriaObras.tsx:15`, `TextInput.tsx:11`,
  `InfoOficina.tsx:109`) — es consistente, pero es la misma estética "look de IA #3"
  señalada en la corrida anterior, sin resolver ni empeorar.
- Valores arbitrarios de Tailwind contados: `text-[10px]` (`Hero.tsx:62`,
  `Logo.tsx:45`), `tracking-[0.4em]` (`Hero.tsx:62`), `border-[0.5px]` (8 apariciones),
  `duration-[400ms]` (`Bifurcacion.tsx:39,46`, `GaleriaObras.tsx:22,27`). Son pocos y
  repetidos con intención (mismo valor en contextos similares), no dispersión — lectura:
  intención, no deriva.

### Fase 5 — Movimiento

- `FadeUp.tsx:32` anima con `duration: 0.6` (600ms) — por encima del rango 150-400ms
  que pide el checklist de movimiento. Se mantiene igual que en la corrida anterior.
- **Nuevo desde el último audit:** se agregaron microinteracciones de hover
  consistentes y bien acotadas — `motion-safe:hover:-translate-y-1` +
  `hover:shadow-lg` en `ResenaCard` (`Resenas.tsx:48`), `FeatureCard.tsx:11`,
  `BifurcacionCard` (`Bifurcacion.tsx:32`) y `ObraCard` (`GaleriaObras.tsx:15`), todas
  con `transition-all duration-200 ease-out`. Cumplen la regla de animar solo
  `transform`/`opacity`/`shadow` y están todas envueltas en `motion-safe:`, por lo que
  respetan `prefers-reduced-motion` (verificado también en `lib/usePrefersReducedMotion.ts`
  y su uso en `FadeUp`, `RotatingWord.tsx:32,50` y `useAutoScrollDrag.ts:42`).
- `RotatingWord.tsx` está bien resuelto técnicamente: reserva el ancho con un ghost
  span invisible (líneas 60-66) para no reflowar el layout, usa `aria-live="off"`
  (línea 59) para no spammear lectores de pantalla con cada rotación, y separa
  ease-in de salida / ease-out de entrada (líneas 7-11) — el tipo de detalle que
  Fase 5 pide evaluar y que acá está bien pensado.
- `FadeUp` en cada sección del Home (7 de 7 secciones lo usan) sigue generando el
  patrón "revelar todo al scrollear" que el checklist de movimiento marca como fatiga
  — sin cambios desde la corrida anterior.

### Fase 6 — Código y performance

- **Nuevo:** `GaleriaObras.tsx:18-22` usa `<Image fill>` **sin la prop `sizes`**. Con
  `fill` y sin `sizes`, Next.js sirve la imagen a 100vw de ancho por defecto aunque el
  grid la muestre a ~33vw en desktop (`sm:grid-cols-2 lg:grid-cols-3`,
  `GaleriaObras.tsx:70`) — sobre-descarga cuando haya fotos reales. Contraste:
  `Bifurcacion.tsx:38` y `PorQueElegirnos.tsx:83` sí declaran `sizes` correctamente.
- Fronteras `"use client"` mínimas y justificadas: `Navbar.tsx:1` (toggle + scroll),
  `FormularioObra.tsx:1`/`FormularioSimple.tsx:1` (estado de formulario),
  `GaleriaObras.tsx:1` (filtro), `RadioCards.tsx:1` (navegación por teclado),
  `Carousel.tsx:1` (drag), `FadeUp.tsx:1`/`RotatingWord.tsx:1` (animación). Ninguna
  parece innecesaria.
- Fuentes vía `next/font/google` con subsets y pesos acotados
  (`app/layout.tsx:8-18`, Poppins 500/600, Inter 400/500) — sin FOIT, correcto.
- `npm run build` limpio (Turbopack, 0 errores) y `npm run lint` sin salida — sin
  warnings. `tsconfig.json:7` tiene `strict: true`. No se encontró ningún `any`
  explícito en `app/`, `components/` ni `lib/`.
- LCP estimado: hoy es bajo porque no hay foto real en el Hero (el candidato a LCP es
  el `<h1>` o el logo de 160×160 con `priority`, `Hero.tsx:51-58`) — pero es una
  ventaja accidental de no tener contenido, no una optimización. El código para la
  foto real ya está listo y correcto (`fill priority` en `Hero.tsx:31-37`), así que
  el día que se cargue `HERO_IMAGE` no hay que tocar nada ahí.
- CLS: sin waterfalls de datos, sin fuentes bloqueantes, `RotatingWord` sin reflow
  (ver Fase 5) — riesgo de CLS bajo.

### Fase 7 — SEO local y accesibilidad

- **Nada de SEO técnico local está implementado:** sin `app/sitemap.ts`, sin
  `app/robots.ts`, sin `metadataBase`, sin Open Graph ni Twitter cards (`grep` sobre
  `app/` no encontró `openGraph` ni `twitter` en ningún metadata export), y **sin
  JSON-LD `LocalBusiness`** en ningún archivo — crítico según el propio checklist para
  un negocio local en Salta, y los datos ya existen (`NEXT_PUBLIC_DIRECCION`,
  `NEXT_PUBLIC_TELEFONO`, horarios en `InfoOficina.tsx:4-7`) para armarlo sin pedirle
  nada nuevo al cliente.
- Metadata por ruta: sí existe y es única en `contacto/page.tsx:7-10` y
  `obras/page.tsx:7-11`; la home hereda el `metadata` de `app/layout.tsx:20-24`, que
  está bien pero es genérico (no menciona Salta en el `title`).
- `lang="es"` (`app/layout.tsx:32`) en vez de `lang="es-AR"` que sugiere el checklist
  para SEO local en Argentina.
- Favicon incompleto: solo existe `app/favicon.ico` — no hay `icon.png`,
  `apple-icon.png` ni manifest.
- A11y AA (más allá de los hallazgos #10-14 ya re-verificados): jerarquía de
  headings correcta en Home y Contacto (un solo `h1` cada una — `Hero.tsx:67`,
  `contacto/page.tsx:18`); foco visible sigue siendo lo mejor resuelto del sitio,
  confirmado también en los componentes nuevos (`RadioCards.tsx:74`,
  `Carousel.tsx:49`, filtros de `GaleriaObras.tsx:57`).

### Fase 8 — Conversión y captura de leads *(n8n-mcp-skills, evaluado sin ejecutar)*

No corresponde invocar el servidor n8n-mcp para *construir* nada acá: no hay una
instancia n8n del cliente para apuntar, y esta fase pide una propuesta en
pseudocódigo, no un workflow real — ejecutarlo sería una acción con efecto persistente
fuera del alcance de "solo diagnóstico". Skill salteada por esa razón; sí uso su
conocimiento de patrones para la propuesta:

```
Webhook (POST /leads)
  → Validar payload (nombre, contacto, tipo: "obra" | "casa", mensaje)
  → Nodo Set: normalizar + timestamp
  → Google Sheets / Airtable: append row (planilla "Leads Alambrar")
  → IF (tipo == "obra"): Slack/Email a administración con resumen
  → Respond to Webhook: 200 { ok: true }
  → Error branch: log a canal de errores, respuesta 4xx clara al form
```

Se dispara desde `FormularioObra.tsx:210-226` y `FormularioSimple.tsx:75-84` **antes**
de abrir WhatsApp (`fetch` no bloqueante al webhook, luego `window.open`), así el lead
queda guardado aunque el usuario cierre la pestaña de WhatsApp sin escribir. Resuelve
el hallazgo #9.

### Fase 9 — Diagrama del sitio

No hay `graphify-out/` en el repo y esta necesidad puntual (sitemap + flujo de
conversión para una presentación a cliente) es más directa en Mermaid que pasando el
proyecto por el pipeline de grafo de conocimiento de `graphify` — se saltea esa skill
por no ajustar al entregable.

```mermaid
flowchart TD
    N[Navbar: Inicio/Servicios/Obras/Contacto] --> H[Hero]
    H --> BIF{¿Qué necesitás?}
    BIF -->|Para tu casa| WA1[WhatsApp directo]
    BIF -->|Para tu obra/empresa| CTA1[/contacto]
    H --> QS[Quiénes somos]
    QS --> PQ[Por qué elegirnos]
    PQ --> SV[Servicios]
    SV -->|WhatsApp| WA1
    SV -->|Ver obras| OB[/obras]
    SV --> CN[Confían en nosotros]
    CN --> RS[Reseñas]
    RS --> GR[Google Reviews externo]

    OB --> OBCTA[CTA: Pedir presupuesto] --> CTA1

    CTA1 --> F1[FormularioObra ~15 campos]
    CTA1 --> F2[FormularioSimple 5 campos]
    F1 -->|Enviar por WhatsApp| WA2[WhatsApp Obras]
    F1 -->|Enviar por email| MAIL[mailto]
    F2 -->|Enviar por WhatsApp| WA1

    WA1 -.->|hoy: lead se pierde si no completa| X((sin persistencia))
    WA2 -.->|hoy: lead se pierde si no completa| X
    MAIL -.-> X

    style X fill:#C42126,color:#fff
    style WA1 fill:#25D366,color:#1C1C1E
    style WA2 fill:#25D366,color:#1C1C1E
```

### Fase 10 — Readiness de deploy *(checklist, sin deployar)*

| Ítem | Estado |
|---|---|
| Build limpio | ✅ `npm run build` — 0 errores, 4 rutas estáticas generadas |
| Lint limpio | ✅ `npm run lint` — sin salida |
| Repo con remoto | ✅ `origin` → `github.com/gastonaleq06/landing-empresa` |
| Proyecto Vercel vinculado | ❌ No existe `.vercel/` — no está importado a Vercel todavía |
| Envs cargadas en Vercel | ❌ No verificable desde el repo; localmente 5/10 vacías (ver B1) — hay que cargarlas en el dashboard de Vercel antes del primer deploy |
| `sitemap.ts` / `robots.ts` | ❌ Ausentes (ver Fase 7) |
| Página 404 | ⚠️ No hay `not-found.tsx` — usa el 404 genérico de Next, no uno de marca |
| `vercel.json` | No existe — no hace falta para un Next.js estándar, zero-config funciona |
| Headers de seguridad | No configurados (ni falta explícita del checklist para esta etapa; Vercel aplica defaults razonables) |

---

## 5. Tabla priorizada

| # | Hallazgo | Impacto | Esfuerzo | Archivo:línea |
|---|---|---|---|---|
| 1 | CTAs de WhatsApp/tel muertas por envs vacías (B1) | **Alto** | **Bajo** | `.env.local`, `lib/whatsapp.ts:2` |
| 2 | Logos de clientes "Cliente 1..8" (B2) | **Alto** | **Bajo** | `ConfianEnNosotros.tsx:8-16` |
| 3 | JSON-LD `LocalBusiness` ausente | **Alto** | **Bajo** | nuevo archivo, datos ya en `.env` |
| 4 | Falta bloque Proceso y FAQ/objeciones | **Alto** | Medio | inventario de secciones (Fase 1) |
| 5 | Fricción: formulario ~15 campos como default para "obra" | **Alto** | Medio | `FormularioObra.tsx:17-59`, `Bifurcacion.tsx:112-114` |
| 6 | Cero fotos reales en todo el sitio | **Alto** | Alto (depende del cliente) | ver lista completa en Fase 1 |
| 7 | Prueba social al final del scroll, no arriba | Medio | Bajo | `app/page.tsx:9-21` |
| 8 | Sin sitemap.ts/robots.ts/OG/Twitter/metadataBase | Medio | Bajo | `app/` (ausentes) |
| 9 | Leads no persistidos | Medio | Medio | ver propuesta Fase 8 |
| 10 | `motion` cargado solo para `FadeUp` | Medio | Medio | `FadeUp.tsx:4` |
| 11 | Tipografía Poppins/Inter sin carácter | Medio | Medio | `tailwind.config.mts:18-21` |
| 12 | `GaleriaObras` `Image fill` sin `sizes` | Bajo-Medio | Bajo | `GaleriaObras.tsx:18-22` |
| 13 | `text-white/80` sobre rojo, nueva instancia | Bajo | Bajo | `Servicios.tsx:39` |
| 14 | `label htmlFor` huérfano en RadioCards | Bajo | Bajo | `FormularioObra.tsx:336-341`, `RadioCards.tsx:55` |
| 15 | Error de campo sin `aria-describedby` | Bajo | Bajo | `Field.tsx:27-31` |
| 16 | Salto `h1`→`h3` en Obras | Bajo | Bajo | `obras/page.tsx:22`, `GaleriaObras.tsx:35` |
| 17 | Target táctil filtros ~36px | Bajo | Bajo | `GaleriaObras.tsx:57` |
| 18 | Sin `not-found.tsx` de marca | Bajo | Bajo | ausente |
| 19 | Proyecto no vinculado a Vercel todavía | — (bloquea demo) | Bajo | fuera del repo |

---

## 6. Los 3 cambios que más mueven la aguja

1. **Cargar los 5 envs faltantes y decidir qué hacer con los logos placeholder**
   (#1 y #2). Es literalmente configuración, no diseño: minutos de trabajo que
   convierten el sitio de "no presentable" a "presentable". Mientras tanto, la
   sección de logos debería **ocultarse condicionalmente** (ya existe el patrón:
   `Resenas.tsx:63` hace `if (RESENAS.length === 0) return null` — aplicar el mismo
   criterio a `ConfianEnNosotros` cuando no hay logos reales) en vez de mostrarse con
   humo.
2. **Agregar el JSON-LD `LocalBusiness`** (#3). Con los datos que ya están en
   `.env.local`/`.env.example` (dirección, teléfono, horarios en
   `InfoOficina.tsx:4-7`) es un componente server-only de bajísimo esfuerzo con alto
   impacto en SEO local — y a diferencia de las fotos, no depende de que el cliente
   entregue nada.
3. **Sumar Proceso y FAQ/objeciones al Home** (#4). Son los dos bloques que el propio
   checklist marca como los más salteados y los que más pesan en un servicio
   presencial, y hoy no existen ni como componente. No requieren fotos ni backend,
   solo copy — se pueden armar con el mismo lenguaje visual que ya funciona
   (`FeatureCard`, acordeón simple para FAQ).

---

## 7. Lo que NO hay que tocar todavía (y por qué)

- **La textura de rombos y el filete `border-t-rojo`.** Ya está resuelto y bien
  resuelto — es el elemento signature que faltaba en la corrida anterior. Tocarlo
  ahora sería deshacer trabajo bueno.
- **El rediseño del Navbar (blanco + acentos rojos).** Va en la dirección correcta
  del sistema de color; no revertir a rojo sólido.
- **La arquitectura de formularios** (`Field`/`TextInput`/`RadioCards`/validación).
  Sigue sólida; los ajustes de a11y son quirúrgicos (ver #14, #15), no ameritan
  refactor.
- **El sistema de foco visible.** Sigue siendo lo mejor resuelto del sitio.
- **Integrar Supabase o el flujo de n8n propuesto en Fase 8.** Correcto tenerlo
  documentado, prematuro implementarlo antes de que la dirección visual y el camino
  de conversión (fricción del formulario largo) estén decididos con el cliente.
- **Los slots de imagen (`Placeholder`).** No diseñar tratamientos (overlays,
  aspect ratios) hasta tener fotos reales — sería optimizar sobre marcadores.
- **Micro-optimización de `motion`/bundle.** Real, pero puede esperar a que la
  dirección visual esté congelada; no es lo que decide si la reunión sale bien.

---

## 8. Guion de presentación — 5 decisiones a validar con el cliente

1. **¿Las fotos de obras terminadas las provee el cliente esta semana, o coordinamos
   una sesión de fotos con Alambrar antes de cargar contenido definitivo?**
2. **Para el camino "Para tu obra": ¿el primer contacto puede ser un WhatsApp corto
   (nombre + qué necesita) y el detalle de medidas se pide después por teléfono, o
   el cliente prefiere mantener el formulario largo como filtro previo?**
3. **¿La sección "Empresas que confían en nosotros" se completa con logos reales de
   clientes (¿cuáles autorizan mostrarse?), o se retira de esta versión de la landing?**
4. **¿El rojo se mantiene como fondo de bloques completos (Hero, Quiénes somos,
   Servicios), o se reduce a franjas/acentos y el resto pasa a fondo claro?**
5. **¿Confirman los datos de negocio para el SEO local — horario de sábados
   10:00-13:00, dirección Zabala 410, y que la única vía de contacto formal por ahora
   es WhatsApp/teléfono (sin persistencia de leads todavía)?**

---

## 9. Lista de pendientes declarados

Para decir antes de que el cliente lo señale:

- Todavía no hay una sola foto real del trabajo de Alambrar en el sitio — todo son
  marcadores intencionales, listos para recibir contenido.
- Los botones de WhatsApp están con la lógica lista pero sin los números cargados en
  este entorno de demo — se van a ver rotos o van a abrir sin destino hasta que se
  configuren.
- No hay página de "cómo trabajamos" (proceso) ni de preguntas frecuentes todavía.
- El sitio no persiste ningún dato de contacto: si alguien completa el formulario y
  no llega a mandar el WhatsApp, ese contacto se pierde — está identificado y hay una
  propuesta de solución (Fase 8), pendiente de decisión.
- El SEO local (aparecer bien en Google Maps/búsquedas de "cercos en Salta") todavía
  no está configurado a nivel técnico, aunque los datos para hacerlo ya están.
- La preview no está publicada en Vercel todavía — antes de la reunión hay que
  vincular el repo y cargar las variables de entorno ahí.

---

## Criterio de aceptación

- ✅ Ningún archivo del proyecto modificado (solo se creó este reporte).
- ✅ Cada hallazgo cita archivo y línea.
- ✅ Los 14 hallazgos previos fueron re-verificados con evidencia actual, no repetidos
  de memoria.
- ✅ Las skills que no aplicaban a una fase (n8n-mcp-skills para *ejecutar* un
  workflow, graphify para el diagrama) se saltearon explicando por qué.

**Punto de parada:** no se implementó ninguna corrección. Esperando la decisión del
cliente sobre las 5 preguntas de la Fase 8 del guion antes de tocar código.
