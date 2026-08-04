# Redes sociales vs. landing — Alambrar SRL

Análisis de 16 piezas del Facebook oficial (junio–julio 2026) contrastadas contra
el código actual del sitio.

**Titular:** la landing describe una empresa más chica y más genérica que la que
muestran las redes. Hay una línea de negocio entera que no aparece en la web, un
diferenciador técnico verificable que no se usa, y el contenido que resolvería la
objeción principal del cliente ya está escrito — solo que en Facebook.

---

## 1. Lo que dicen las redes (datos extraídos)

### Identidad y contacto

| Dato | Valor en redes | Fuente |
|---|---|---|
| Nombre | Alambrar SRL — Alambres y cercos perimetrales | Perfil |
| Categoría | Constructora | Perfil |
| Antigüedad | **"más de 15 años de experiencia comprobada"** | Bio |
| Seguidores | 1.203 | Perfil |
| Dirección | **Zabala 410 – Salta Capital** | Portada + post torniquetas |
| Teléfono fijo | **(0387) 426-2676** | Portada |
| WhatsApp | **+54 9 387 570-5341** | 3 posts |
| Email | **info@alambrarsrl.com** | Portada |
| Zonas con obra | Salta Capital, San Lorenzo, Valle Escondido, La Lucinda Norte | Posts |

### Catálogo real (lo que efectivamente venden e instalan)

**Servicios de instalación**
- Cercos perimetrales con tejido romboidal
- Sistema antirrobo reforzado (planchuelas soldadas punto por punto en cada poste)
- Alambrado de púas (uso rural y agrícola)
- Concertina de acero de alta resistencia
- Portones de caño estructural 2" (ej.: 4,00 × 2,40 m, punta de lanza con planchuelas)
- Tranqueras y puertas de madera estilo campo (tablas 1"×4", quebracho)

**Venta de materiales y accesorios — por mayor y menor, con stock permanente**
- Tejido romboidal (calibres 12, 13, 14)
- Alambre de púas
- Alambre concertina
- Postes de quebracho colorado (vida útil declarada +30 años enterrados)
- Torniquetas para estirar alambre
- Ganchos tensores de acero galvanizado (kit con tuerca y arandela)

**Guía de decisión ya publicada (carrusel de calibres)**
- **Calibre 12** — máxima seguridad hogareña, cerramientos industriales, canchas
  deportivas, perros grandes y movedizos
- **Calibre 13** — el estándar de sus obras (malla 2½" × 13 aparece en casi todas)
- **Calibre 14** — liviano y económico: patios internos, huertas, mascotas chicas
- Cierre del carrusel: *"¿Seguís con dudas sobre cuál se adapta mejor a tu terreno?"*
  → WhatsApp

### Tono del copy en redes

Técnico y específico: medidas, calibres, materiales, alturas.

`tejido romboidal 2½" × calibre 13` · `postes de quebracho colorado tratado` ·
`cordón de hormigón enterrado` · `altura útil 1,20 m` · `zócalo de hormigón 20 cm` ·
`caño estructural 2"`.

---

## 2. Discrepancias con la landing

Ordenadas por impacto.

### 🔴 D1 — Falta una línea de negocio completa: venta de materiales

Las redes venden insumos y accesorios **por mayor y menor** con **local físico en
Zabala 410** y stock permanente. Cuatro de las 16 piezas son exclusivamente de
producto (torniquetas, ganchos tensores, postes de quebracho, rollos de tejido).
La landing solo habla de fabricación e instalación. `Servicios.tsx:8-27` tiene 3
tarjetas, todas de servicio. No hay una sola mención a que se puede ir a comprar
un rollo de alambre o una caja de torniquetas.

**Impacto:** un corralón, un instalador independiente o un productor rural que
busca "alambre tejido Salta" no encuentra nada que le hable. Es tráfico y venta
que hoy la web no captura.

### 🔴 D2 — El diferenciador técnico real no está en la web

Dos posts completos sobre el **sistema antirrobo reforzado**: planchuelas soldadas
punto por punto en cada poste del tejido romboidal, para evitar desprendimientos y
sabotajes. Es concreto, verificable y difícil de copiar.

`PorQueElegirnos.tsx:23-58` tiene 6 tarjetas: "Trabajo que queda bien", "Cumplimos
los tiempos", "Te ayudamos a decidir". Son promesas que dice todo el rubro.

**El audit anterior marcó "el copy vende adjetivos". La corrección ya está escrita
por el propio cliente, en Facebook.**

### 🔴 D3 — Datos de contacto: hay que cargar los que ya existen

El audit de Claude Code encontró 5 env vars vacías → CTAs muertas. Los valores
están todos en la portada de Facebook:

```
NEXT_PUBLIC_TELEFONO=+543874262676
NEXT_PUBLIC_WHATSAPP_VENTAS=5493875705341
NEXT_PUBLIC_DIRECCION=Zabala 410, Salta Capital
NEXT_PUBLIC_EMAIL=info@alambrarsrl.com
```

**Pero hay un problema de fondo:** la landing define **dos** WhatsApp
(`WHATSAPP_VENTAS` y `WHATSAPP_OBRAS`) y en redes aparece **uno solo**. O la
empresa tiene un segundo número que no publica, o la bifurcación obra/casa de
`Bifurcacion.tsx` está partiendo un canal que en la realidad no está partido.
**A confirmar con el cliente antes de cargar envs.**

Nota menor: en redes el mismo número aparece escrito de tres formas distintas
(`3875 705341`, `387 570-5341`, `+54 9 3875 705-341`). Es el mismo número. En la
web hay que normalizarlo a `5493875705341` para `wa.me`.

### 🟠 D4 — "Más de 15 años" no aparece por ningún lado

La bio de Facebook lo dice. El hero no tiene ningún número, ninguna cifra, ninguna
ancla de credibilidad. `QuienesSomos.tsx:14-20` es un párrafo institucional sin un
solo dato duro.

Es la prueba de autoridad más barata que hay disponible y está sin usar.

### 🟠 D5 — Las obras de la landing son inventadas; las reales están en Facebook

`lib/obras.ts:17-30` tiene 12 obras con títulos genéricos y **cero fotos**:
"Cerco perimetral en vivienda", "Cerramiento de depósito".

En redes hay obras reales, con ubicación y ficha técnica:

| Obra | Ubicación | Specs publicadas |
|---|---|---|
| Cerramiento residencial | **Valle Escondido** | Quebracho colorado tratado, romboidal 2½"×13, cordón de hormigón enterrado |
| Cerco de propiedad | **La Lucinda Norte** | Quebracho labrado, romboidal 2½"×13, cordón enterrado, altura útil 1,20 m |
| Concertina sobre tejido | **San Lorenzo** | Romboidal + postes de madera sobre base de hormigón + concertina |
| Puerta de tablas estilo campo | — | Tablas 1"×4", quebracho colorado, malla 2½"×13, zócalo hormigón 20 cm |
| Portón de caño estructural | — | Caño 2", malla 2½×13, punta de lanza con planchuelas, 4,00 × 2,40 m |

Una obra con nombre de barrio y ficha técnica es prueba. Un título genérico sin
foto es relleno.

### 🟠 D6 — Las categorías de la galería no coinciden con lo que hacen

`lib/obras.ts:9-14` filtra por Residencial / Comercial / Industrial / Seguridad.
En 16 piezas de redes no hay **una sola** obra comercial ni industrial mostrada.
Lo que sí hay y no tiene categoría: **rural / campo** (tranqueras, púas, quebracho,
subdivisiones) y **country / barrio privado**.

Riesgo concreto: el cliente entra, toca "Industrial" y ve una grilla vacía.

Categorías sugeridas según la evidencia: **Residencial · Country · Rural · Seguridad**.

### 🟠 D7 — Falta el segmento rural en la bifurcación

`Bifurcacion.tsx` ofrece dos caminos: "Para tu obra" y "Para tu casa".

Las redes hablan constantemente de campo, uso rural y agrícola, subdivisiones,
tranqueras, resistencia al paso de animales. Y de clubes y canchas deportivas
(calibre 12). Ninguno de esos entra limpio en "obra" ni en "casa".

### 🟡 D8 — El contenido que baja la fricción ya existe y no se usó

El audit anterior marcó como problema mayor el formulario de ~15 campos como
camino principal (`FormularioObra.tsx`).

El carrusel de calibres de Facebook hace exactamente lo contrario y funciona:
explica 3 opciones en lenguaje de uso real ("si en casa hay perros grandes que
saltan"), y cierra con *"¿Seguís con dudas sobre cuál se adapta mejor a tu
terreno? → WhatsApp"*. Cero campos.

Esa pieza es la solución al hallazgo #4 del audit anterior, y ya está escrita.

### 🟢 D9 — El rojo dominante está validado (contra la recomendación anterior)

El primer audit sugería bajar el rojo de fondo pleno a acento de CTA, apoyado en
que el rubro construcción tiende a gris + naranja.

**Las 16 piezas de redes son rojo saturado pleno, sin excepción**, con el patrón de
rombos de fondo. El rojo dominante no es una decisión del sitio: es la identidad
real de la marca, sostenida por años de comunicación.

Corrijo la recomendación: **no bajar el rojo a acento.** El trabajo es ordenar su
jerarquía (qué rojo es fondo, cuál es acción), no reducirlo. Y la textura de rombos
que se agregó en `app/globals.css:22-39` coincide con el patrón de las piezas — es
coherencia de marca real, no decoración. Buen instinto, mantenerla.

### 🟢 D10 — Hay fotos, con una advertencia

El audit encontró "ni una sola foto real en todo el sitio". Las hay: obras
terminadas, depósito con rollos, accesorios en primer plano.

**Pero las de Facebook están comprimidas y con plantilla roja + logo superpuesto.**
No sirven para un hero ni para fichas de obra. Hay que pedirle al cliente los
**originales sin plantilla**. Si no los tiene, las de redes sirven como provisorias
declaradas para la presentación — nunca para producción.

---

## 3. Secciones nuevas propuestas

Ordenadas por impacto sobre el objetivo (presupuesto por WhatsApp).

### S1 — Guía de calibres (la más valiosa)

Comparador de calibre 12 / 13 / 14: para qué sirve cada uno, en lenguaje de uso
("perros grandes", "huerta", "cancha deportiva"), y un CTA único de WhatsApp para
el que sigue con dudas.

**Por qué primero:** resuelve la objeción #1 del rubro, baja la fricción sin pedir
datos, y captura búsquedas de tipo *"qué calibre de tejido romboidal necesito"*.
El contenido ya está escrito y probado en redes. Costo de producción: casi cero.

### S2 — Materiales y accesorios / Venta en el local

Grilla de productos: tejido por rollo, púas, concertina, postes de quebracho,
torniquetas, ganchos tensores. Con tres señales: **por mayor y menor**,
**stock permanente**, **Zabala 410**.

Abre una línea de negocio que hoy la web ignora por completo, y le da a la
dirección física un motivo de existir más allá del footer.

### S3 — Sistema antirrobo reforzado

Bloque dedicado al diferenciador técnico: cerco convencional vs. cerco con
planchuelas soldadas punto por punto. Idealmente un comparativo visual.

Reemplaza adjetivos por un hecho verificable. Es la sección que justifica un
precio más alto que el del competidor.

### S4 — Obras con ficha técnica

Reescribir `lib/obras.ts` con las obras reales de redes: ubicación + materiales +
medidas. Cada tarjeta pasa de título genérico a evidencia auditable.

### S5 — Tercer camino: campo y rural

Sumar a la bifurcación (o convertirla en tres caminos). Tranqueras, púas,
quebracho, subdivisiones. Es un segmento con vocabulario, producto y objeciones
propias.

### S6 — FAQ técnica

Construida con el contenido de las publicaciones: ¿qué calibre necesito? ¿cuánto
dura un poste de quebracho? ¿para qué sirve el cordón de hormigón enterrado? ¿qué
altura conviene? ¿venden materiales sueltos?

Cada respuesta ya está escrita en un post.

### S7 — Proceso en 4 pasos

Sigue faltando desde el primer audit: consulta → visita y medición → presupuesto
sin cargo → instalación. Reduce la ansiedad de "¿y ahora qué pasa si escribo?".

---

## 4. Prompt para Claude Code

```markdown
Tenés el reporte `REDES-VS-LANDING.md` en la raíz: análisis de 16 piezas del
Facebook oficial contrastadas contra el código.

## Alcance de esta corrida

Implementá SOLO lo que no requiere confirmación del cliente. Todo lo que dependa
de un dato que hay que verificar va en una lista de pendientes, no en el código.

### Sí implementar

1. **Reescribir `lib/obras.ts`** con las obras reales del reporte (Valle Escondido,
   La Lucinda Norte, San Lorenzo) + ficha técnica por obra. Extendé el tipo `Obra`
   con `ubicacion?` y `specs?: string[]`. Actualizá `CATEGORIAS` a
   Residencial / Country / Rural / Seguridad y verificá que ningún filtro quede vacío
   (`GaleriaObras.tsx`).
2. **Nueva sección `GuiaCalibres.tsx`** — comparador 12/13/14 con el copy del
   reporte, CTA único de WhatsApp. Reutilizá `FeatureCard` y `Container`; no
   introduzcas componentes nuevos si los existentes alcanzan.
3. **Nueva sección `Materiales.tsx`** — productos de venta + "por mayor y menor" +
   "stock permanente" + dirección del local.
4. **Reescribir el copy de `PorQueElegirnos.tsx`** reemplazando los adjetivos por
   los hechos técnicos del reporte (planchuelas soldadas, quebracho +30 años,
   fabricación propia, cordón de hormigón enterrado). Mantené la estructura y los
   iconos; cambiá solo el contenido.
5. **Sumar "más de 15 años" al hero y a QuienesSomos** como dato de credibilidad.
6. **JSON-LD `HomeAndConstructionBusiness`** con los datos de la portada de
   Facebook (nombre, dirección, teléfono, email, área de servicio Salta).
   La categoría declarada por la empresa es "Constructora".

### No implementar todavía — va a la lista de pendientes

- Cargar `.env.local`: **primero confirmar si existen uno o dos WhatsApp.** Redes
  publica uno solo y el código define `VENTAS` y `OBRAS`.
- Fotos: las de Facebook tienen plantilla y logo superpuesto. Pedir originales.
  Si se usan las de redes en la maqueta, marcarlas como provisorias.
- Tercer camino rural en `Bifurcacion.tsx`: cambia la arquitectura de conversión,
  decisión del cliente.
- FAQ y sección de Proceso: proponé el contenido en el reporte, no el componente.

### Reglas

- Actualizá `app/page.tsx` con el orden nuevo y justificá dónde ubicaste cada
  sección nueva.
- No toques el sistema de color ni la textura de rombos: el rojo dominante quedó
  validado contra la identidad real de marca.
- Ningún dato inventado. Si un número no está en el reporte, no lo escribas.
- Al terminar: `npm run build` y `npm run lint` limpios, y un resumen de qué
  cambiaste con archivo:línea.
```

---

## 5. Lo que hay que confirmar con el cliente

1. ¿Uno o dos WhatsApp? (redes publica uno; el código asume dos)
2. ¿Cuántos años exactos? La bio dice "más de 15" — conviene el número real.
3. ¿Tienen las fotos originales sin la plantilla roja?
4. ¿La venta de materiales es un canal que quieren empujar desde la web, o
   prefieren que el sitio sea solo de servicios?
5. ¿Hay clientes empresa/institución que autoricen mostrar su logo? (la sección
   "Confían en nosotros" sigue con `Cliente 1..8` y en redes no hay ni un logo)
