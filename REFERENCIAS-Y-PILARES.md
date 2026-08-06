# Referencias y arquitectura de tres pilares — Alambrar SRL

> Complemento de `DATOS-REUNION.md`. Este archivo baja las 7 referencias que eligió
> el cliente a decisiones concretas de sitio, organizadas por unidad de negocio.
> Fuente de las referencias: revisadas una por una en agosto 2026.

---

## 0. El dato que reordena todo

> **"La gente no sabe que vendemos materiales."**

Esto no es un dato más de la reunión: es un **diagnóstico de negocio dicho por el
dueño**. Y cambia la prioridad de las tres unidades.

- **Fábrica** e **Instalación** tienen un problema de *conversión*: la gente ya sabe
  que Alambrar hace eso, hay que convencerla de elegirlos.
- **Materiales** tiene un problema de **conocimiento**: la gente ni siquiera sabe
  que existe. Nadie va a "convertir" en algo que no sabe que se ofrece.

Un problema de conocimiento se resuelve con **superficie y repetición**, no con un
CTA mejor redactado. Consecuencia práctica: **Materiales no puede ser la tercera
sección de la home.** Tiene que estar en el nav, en el hero, en una sección propia
arriba del pliegue extendido, y en el footer. El sitio actual lo tiene en
`/materiales` con un link de nav — es un piso, no el techo.

---

## 1. Los tres pilares, como los dijo el cliente

| | 🏭 FÁBRICA | 🔧 INSTALACIÓN | 🏬 MATERIALES |
|---|---|---|---|
| **Dónde** | Cerrillos *(solo la localidad, sin dirección)* | En obra, Salta y alrededores | Zabala 410, Salta Capital |
| **Qué** | Tejido romboidal, tejido artístico, premoldeados de hormigón *(próximamente)* | Cercos olímpico, rural, country, piscina | Postes, tejidos, mallas, eléctricas, gaviones, geotextil |
| **Cliente** | Respalda a los otros dos | Particular, country, empresa, institución, campo | Mostrador, corralón, instalador, productor |
| **Problema a resolver** | Nadie sabe que fabrican *acá* | Competencia y precio | **Nadie sabe que existe** |
| **Rol en el sitio** | Prueba de autoridad | Motor de presupuestos | **Descubrimiento** |

**La fábrica es el argumento que sostiene a los otros dos.** No es un pilar
paralelo: es la razón por la que la instalación sale mejor y el material sale más
barato. Todo el copy debería cerrar ahí.

---

## 2. Lo más importante de cada referencia

### 🥇 maddio.com.ar — Maddio Hnos. SA, Godoy Cruz, Mendoza

La referencia más completa del grupo y la más parecida al caso de Alambrar.

- **El hero resuelve las tres unidades en tres palabras:** *"Bienvenidos a un mundo
  de soluciones en: **CERCOS. METALÚRGICA. CONSTRUCCIÓN.**"* — sobre video, fondo
  oscuro, tipografía enorme. Es exactamente la jugada que Alambrar necesita con
  *Fabricamos · Instalamos · Vendemos*.
- **CTA de hero: "TENGO UN PROYECTO"**, no "pedí tu presupuesto". Habla desde el
  usuario, no desde la empresa. Fricción mental mucho más baja.
- **Grilla de 6 productos** con título + una línea. Sin párrafos.
- **Calculadora de cerco** con lugar propio en el nav. Es la mejor idea del grupo
  para robar (ver §4).
- **Tienda online** con precio tachado y precio actual, y un banner *"No detengas tu
  obra"*. Ataca frontalmente el problema de "nadie sabe que vendemos materiales".
- Banner intermedio **"¿NECESITÁS MATERIALES?"** → asesoramiento. Repetición del
  mensaje de venta a mitad de página.
- Blog de novedades técnicas (*"Hierro, ¿liso o nervado?"*).

**Lo que NO hay que copiar:** el hero de video ocupa la pantalla entera antes de que
aparezca el texto. En conexiones lentas se ve un rectángulo negro. Alambrar tiene
que resolver el hero con foto, no con video.

### 🥈 alambre.com.ar — Alambre Pallás, Córdoba

- **"A través de estas primeras nueve décadas de trabajo…"** y **tercera
  generación**, con el fundador nombrado (Santiago Pallás). La antigüedad es el
  primer párrafo institucional, no un dato escondido.
- **Navegación 100% por taxonomía de producto**: 12 categorías en el menú
  (Alambres, Cercos, Gaviones, Tejidos y mallas, Postes y parantes, Seguridad
  perimetral, Metal desplegado, Chapas, Cintas cubrecerco…). El usuario entra por lo
  que fue a buscar.
- 🔑 **"Obras destacadas" con el cliente nombrado**: *"Cerco de alta seguridad
  Securifor — Empresa Claro"*, *"Cerco Acmafor 3D — Hospital Regional Eva Perón"*.
  **Esto resuelve el placeholder `Cliente 1..8` sin depender de que ningún cliente
  autorice su logo.** Nombrar la obra es más fuerte que mostrar un logo, y no
  necesita permiso de uso de marca.
- **Servicios como 6 tarjetas cortas**: fabricación y comercialización, asesoramiento
  personalizado, trabajos a medida, diseño y calidad, formas de pago, garantía. Es
  el mismo esqueleto que ya tiene `PorQueElegirnos.tsx`.
- Link directo a **Mercado Libre** como canal de venta de material — cero fricción,
  cero desarrollo.

### 🥉 tomalino.com.ar — Tomalino Alambres, Córdoba

- **Hero con foto macro del tejido romboidal como fondo**, desenfocada. El producto
  *es* la imagen. Es la solución más barata y más digna para el hero de Alambrar
  mientras no lleguen fotos de obra: **una macro del tejido que sale de su propia
  fábrica**.
- Primera línea: *"Fabricantes de alambres y soluciones para cercos perimetrales."*
  La palabra **fabricantes** va primero, antes que cualquier otra cosa.
- **"Más de 90 años de trayectoria"** + **"stock permanente"** + **"respaldo
  industrial"**. Tres señales, en el hero.
- Posicionamiento **B2B explícito**: abastecen revendedores y distribuidores de todo
  el país. Alambrar vende por mayor y no lo dice en ningún lado.

### abaco.com.ar — Abacos SRL (Red Acindar), CABA

- Navegación por **"Líneas de Productos": Rurales / Construcción / Industria /
  Ferretería**. Es el mismo principio que los tres pilares: segmentar por uso, no
  por tipo de cliente.
- Tiendanube. Deja ver que **una tienda online del rubro es viable sin desarrollo
  propio** — relevante si más adelante quieren vender material online sin backend.
- El menú tiene ~9 niveles de profundidad y categorías que no vienen al caso
  (joyería, librería). **Contraejemplo:** así se ve una taxonomía que creció sin
  criterio.

### acindar.com.ar — Acindar

Siderúrgica. Es el **origen del acero** de buena parte de la cadena. Su valor acá no
es de diseño: es que **nombrarla como proveedor le pone piso de calidad al material
de Alambrar**.

### ingrosembergsa.com — Ingro Semberg SA

⚠️ **No pude acceder.** El sitio bloquea acceso automatizado y el permiso de
navegador quedó denegado. **Pendiente:** abrilo vos y pasame de qué se trata, o
confirmame que es proveedor y con eso alcanza para la franja.

### aycrevista.com.ar/proveedores/domingo-bravo — Domingo Bravo, Tucumán

**Este es el que excluiste como proveedor.** Confirmado: la ficha lo lista en el
rubro **ALAMBRES – Tucumán**, dirección Uruguay y 25 de Mayo. No es un sitio propio,
es una ficha en la guía de proveedores de la revista *Arquitectura y Construcción*.

Valor real: **es el formato "ficha de proveedor de la construcción"**. Si Alambrar
quiere que los arquitectos y constructores de Salta la encuentren, estar listada en
guías así vale más que muchas cosas del sitio. **Acción concreta para el cliente,
no para el sitio:** pedir alta en la guía de AyC y equivalentes de Salta.

---

## 3. Los cuatro patrones que repiten TODAS

1. **La antigüedad va primero.** "Nueve décadas", "más de 90 años", "tercera
   generación". Nunca es un dato de la sección institucional: está en el hero.
   → Alambrar: **más de 30 años** + **pioneros en Salta**, en el hero.
2. **El producto es la navegación.** Ninguna organiza la home por "servicios" o
   "por qué elegirnos". Organizan por **qué venden**.
   → Alambrar: los tres pilares son el nav.
3. **La prueba social es obra nombrada, no logo de cliente.**
   → Alambrar: reemplazar `ConfianEnNosotros.tsx` por obras con institución
   nombrada + franja de proveedores.
4. **"Stock permanente" y "fábrica propia" son las dos palabras que más se
   repiten.** Son las señales del rubro. Alambrar tiene las dos y no usa ninguna
   con fuerza.

---

## 4. Las tres ideas para robar, en orden de impacto

### 💡 1. Calculadora de cerco (de Maddio) — resuelve dos problemas de una

Metros lineales + altura + calibre ⇒ estimación de materiales ⇒ CTA de WhatsApp con
el resultado precargado.

- Mata el formulario de 15 campos de `FormularioObra.tsx` como camino principal
  (marcado como problema desde el primer audit).
- **Y hace visible la venta de materiales sin decir "vendemos materiales"**: el
  usuario ve una lista de postes, rollos y accesorios con cantidades. Descubre el
  negocio por el uso.
- Alambrar tiene fábrica propia: puede hacerla más precisa que nadie en Salta.

### 💡 2. Franja de proveedores (de todas)

Acindar · Maddio · Pallás · Tomalino · Ingro Semberg · Abaco.

Reemplaza la sección de logos placeholder con contenido **verificable y que no
depende de que ningún cliente autorice nada**.

⚠️ **Ojo legal:** usar el logotipo de un tercero necesita, en rigor, su
autorización, y "proveedor de X" no habilita a usar la marca de X. **Arrancar
nombrándolos en texto** ("Trabajamos con Acindar, Tomalino, Pallás…") es seguro y
casi igual de efectivo. Los logos, después de pedir permiso.

### 💡 3. Hero con macro del tejido (de Tomalino)

Mientras no lleguen las fotos de obra, una **foto macro del tejido romboidal saliendo
de la fábrica de Cerrillos** resuelve el hero, muestra el oficio y prueba la
fabricación propia en una sola imagen. Es la foto más barata de conseguir del
proyecto entero y la que más trabaja.

---

## 5. Contenido resuelto — se puede escribir ya

### Trayectoria

Usar **"más de 30 años"**, sin año de fundación.

*Por qué:* el cliente no está seguro si fue 1995 o 1996, y **"30 años" a secas
envejece**: en 2027 ya es falso. "Más de 30 años" es cierto en los dos escenarios y
no se rompe con el tiempo. Cuando confirme el año exacto, se cambia por "desde 19XX",
que es más fuerte todavía.

### Fábrica — Cerrillos

Mencionar **solo la localidad**, sin dirección. Copy tipo: *"Fabricamos en nuestra
planta de Cerrillos."*

- Tejido romboidal ✅
- Tejido artístico ✅
- **Premoldeados de hormigón — PRÓXIMAMENTE** ✅ (etiqueta explícita, no listarlo
  como disponible)

### Instalación — tipos de cerco

Confirmados por el cliente: **olímpico, rural, country, piscina**.

🟡 Propuestos por mí para completar la grilla — **el cliente los tiene que validar
uno por uno antes de publicar**, ninguno está confirmado:

- Cerco perimetral residencial
- Cerco deportivo / cancha
- Cerco industrial y de obra
- Cerco con concertina / seguridad perimetral
- Portones y tranqueras
- Loteos y subdivisiones rurales

### Materiales — Zabala 410

- Postes ✅
- Tejidos ✅
- **Mallas** ✅ — sin especificar tipo. Copy honesto: *"Mallas — consultanos por
  tipo, medida y calibre."* Es preferible a inventar "electrosoldada" y que el
  cliente lo corrija delante suyo en la presentación.
- **Eléctricas** ✅ — confirmado que son **las dos cosas**: alambre para cerco
  eléctrico **y** boyeros / electrificadores. Se listan como dos ítems separados,
  porque son dos búsquedas distintas en Google.
- Gaviones ✅
- Geotextil ✅
- \+ los 8 que ya están en `lib/materiales.ts`

**Señales obligatorias en esta sección** (las que repiten todas las referencias):
**por mayor y menor** · **stock permanente** · **fabricación propia** · **Zabala 410**.

---

## 6. Lo que necesito de tu lado

Ordenado por lo que más bloquea.

### 🔴 Bloquea

1. **Una foto del mostrador de Zabala con stock a la vista.** Sin esto, el pilar de
   materiales no existe visualmente y el problema que el dueño identificó no se
   resuelve. Es la foto más importante del proyecto.
2. **Una foto macro del tejido saliendo de la fábrica de Cerrillos** (§4.3).
3. **¿Uno o dos WhatsApp?** Sigue abierto desde el primer audit. Las CTAs de todo el
   sitio están muertas hasta que se defina. Redes publica uno solo; el código asume
   dos (`VENTAS` y `OBRAS`).

### 🟠 Necesario antes de publicar

4. **Validación de la lista de cercos** (§5). Los 4 confirmados van; los 6
   propuestos los tiene que aprobar el cliente uno por uno.
5. **2 o 3 obras con la institución nombrada** + confirmación de que se pueden
   nombrar. Es lo que reemplaza `Cliente 1..8`.
6. **Ingro Semberg** — no pude entrar al sitio. ¿Qué proveen?
7. **¿Hacen envíos de material? ¿A qué zona?** Cambia por completo si la sección de
   materiales apunta solo a Salta Capital o a toda la provincia / NOA.

### 🟡 Mejora mucho, no bloquea

8. Desde qué cantidad hay **precio mayorista**, y si facturan A y B.
9. **Horario del local de Zabala** (tenemos sábados 10-13 sin confirmar).
10. ¿Tienen **lista de precios o catálogo en PDF**? Un catálogo descargable es la
    conversión más fácil del pilar de materiales.
11. Año exacto de fundación (1995 o 1996) para pasar de "más de 30 años" a
    "desde 19XX".
12. ¿Autorizan los proveedores el uso de su logo? (§4.2)

---

## 7. Decisión pendiente antes de tocar código

**¿Los tres pilares reemplazan la bifurcación "Para tu obra / Para tu casa", o
conviven?**

Mi recomendación: **la reemplazan.** El dueño dijo que su diferenciador es abarcar a
todos los clientes — una bifurcación de dos caminos comunica lo contrario. Y
"materiales" no entra ni en "obra" ni en "casa", que es probablemente parte de por
qué nadie sabe que lo venden.

Los segmentos (casa, country, rural, deportivo, revendedor) pasan a ser **filtros
dentro de Instalación**, no la puerta de entrada al sitio.
