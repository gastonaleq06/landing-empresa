# Datos de reunión con el cliente — Alambrar SRL

> Fuente: reunión presencial con el cliente (agosto 2026), transcripta por Gastón.
> Este archivo es **ground truth** de contenido: reemplaza lo inferido en
> `REDES-VS-LANDING.md` cuando haya conflicto.
> Todo lo marcado 🟡 está **sin verificar** y no se puede escribir en el sitio todavía.

---

## 1. Datos nuevos dichos por el cliente

| Dato | Valor | Estado |
|---|---|---|
| Trayectoria | **30 años** | ✅ Dicho por el cliente. Conflicto con redes (ver §2) |
| Posición en el mercado | **Pioneros en Salta** en el rubro | ✅ Dicho. 🟡 Falta el año exacto de fundación |
| Cadena de provisión | **Proveedores de todo el país** | ✅ Dicho. 🟡 Falta la lista concreta |
| Diferenciador declarado | **Abarcan todos los segmentos de cliente** — no se especializan en uno solo | ✅ Dicho |
| Planta industrial | **Fábrica propia en Cerrillos** | ✅ Nuevo. No figuraba en ningún lado hasta ahora |
| Local de venta | **Zabala 410, Salta Capital** | ✅ Ya lo teníamos, ahora confirmado como unidad separada |

---

## 2. Conflicto a resolver antes de escribir código

**Redes dicen "más de 15 años de experiencia comprobada". El cliente dice 30.**

No es una contradicción lógica (30 > 15), pero sí es una **subestimación en su propia
bio de Facebook**. Si el sitio dice 30 y su Facebook dice 15, cualquiera que compare
las dos cosas ve la inconsistencia — y la trayectoria es justamente el activo de
credibilidad más fuerte que tienen.

**Acción:** poner 30 en el sitio **y** pedirle al cliente que actualice la bio de
Facebook e Instagram el mismo día que se publica. Si no está dispuesto a actualizar
redes, hay que decidir un solo número y usarlo en los dos lados.

**Dato derivado a confirmar:** 30 años en 2026 ⇒ fundación aproximada **1996**.
Un año concreto ("desde 1996") pesa mucho más que "30 años" y no envejece mal.

---

## 3. Las tres unidades de negocio

Este es el hallazgo estructural de la reunión. El cliente no describió una lista de
servicios: describió **tres negocios distintos, con lugar físico distinto y cliente
distinto**. Hoy el sitio no refleja eso.

### 🏭 1. FÁBRICA — Cerrillos

Producción propia.

- Tejido romboidal
- Tejido artístico
- Premoldeados de hormigón 🟡 *(dicho como "promold hormigón" — confirmar si son
  postes premoldeados, placas, o toda una línea)*

### 🔧 2. INSTALACIÓN DE CERCOS

Servicio con obra en el lugar.

- Cerco olímpico (deportivo / institucional)
- Cerco rural
- Cerco de country
- Cerco de piscina
- *etc.* 🟡 *(el cliente dijo "etc." — pedir la lista cerrada)*

### 🏬 3. VENTA DE MATERIALES — Zabala 410

Mostrador, por mayor y menor.

- Postes
- Tejidos
- Mallas 🟡 *(¿electrosoldada? ¿sima? ¿mosquitera? confirmar cuáles)*
- Eléctricas 🟡 *(¿alambre para cerco eléctrico? ¿boyeros/electrificadores?
  ¿aisladores? confirmar — hoy no se puede escribir esta palabra sin ambigüedad)*
- Gaviones
- Geotextil

---

## 4. Qué está en el sitio hoy y qué falta

`lib/materiales.ts` tiene 8 productos. La reunión suma **6 categorías nuevas** y
mueve una a fábrica:

| Producto | En `lib/materiales.ts` | Estado tras la reunión |
|---|---|---|
| Tejido romboidal galvanizado | ✅ | Sin cambios — marcar **fabricación propia** |
| Tejido revestido en PVC | ✅ | Sin cambios |
| Tejido símil ligustrina | ✅ | Sin cambios |
| Alambre de púas | ✅ | Sin cambios |
| Alambre concertina | ✅ | Sin cambios |
| Postes de quebracho | ✅ | Sin cambios |
| Torniquetas | ✅ | Sin cambios |
| Ganchos tensores | ✅ | Sin cambios |
| **Tejido artístico** | ❌ | **Nuevo — de fábrica propia** |
| **Premoldeados de hormigón** | ❌ | **Nuevo — de fábrica propia** 🟡 |
| **Mallas** | ❌ | **Nuevo** 🟡 |
| **Eléctricas** | ❌ | **Nuevo** 🟡 |
| **Gaviones** | ❌ | **Nuevo** |
| **Geotextil** | ❌ | **Nuevo** |
| **Postes (genérico, no solo quebracho)** | Parcial | Confirmar si hay de hormigón y de caño |

---

## 5. Lectura de las referencias que le gustaron al cliente

Revisé las siete. Son **casi todas proveedores mayoristas de otras provincias**, no
competidores locales de Salta. Eso importa: el cliente no eligió referencias por
"quiero parecerme a mi competencia", eligió **el lenguaje visual de la industria a la
que pertenece**.

| Sitio | Quién es | Qué le puede haber gustado |
|---|---|---|
| **maddio.com.ar** | Maddio Hnos. SA, Godoy Cruz, Mendoza | La referencia más completa del grupo. Hero en video, oscuro, con tres palabras: *Cercos. Metalúrgica. Construcción.* Grilla de 6 productos. **Calculadora de cerco**. Tienda online. Blog. |
| **alambre.com.ar** | Alambre Pallás, Córdoba. "Nueve décadas", tercera generación | Navegación 100% por taxonomía de producto (12 categorías). **"Obras destacadas" con clientes nombrados** (Claro, Hospital Regional Eva Perón). Testimonios reales. |
| **tomalino.com.ar** | Tomalino Alambres, Córdoba. Más de 90 años | Hero con **foto macro del tejido** como fondo — el producto es la imagen. Posicionamiento B2B explícito: abastecen revendedores de todo el país. |
| **abaco.com.ar** | Abacos SRL, Red Acindar, CABA | Navegación por **"Líneas de Productos"**: Rurales / Construcción / Industria / Ferretería. Tiendanube. |
| **acindar.com.ar** | Acindar — la siderúrgica. Proveedor de origen del acero | Autoridad de marca industrial. |
| **ingrosembergsa.com** | Ingro Semberg SA | Proveedor. |
| **aycrevista.com.ar/…/domingo-bravo** | Ficha de proveedor en revista del rubro | Formato de perfil institucional. |

### Los tres patrones que se repiten en todas

1. **El producto es la navegación.** Ninguna de estas empresas organiza la home por
   "servicios" o "por qué elegirnos". Organizan por **qué venden**, y el usuario
   entra por el producto que fue a buscar. Alambrar tiene 3 unidades de negocio y
   hoy no las usa como eje.
2. **La antigüedad va arriba de todo.** "Nueve décadas", "más de 90 años", "tercera
   generación". Es el primer párrafo, no un dato de la sección institucional.
   Alambrar tiene 30 años y pioneros en Salta — y no lo dice en ningún lado.
3. **La prueba social es obra nombrada, no logo de cliente.** Pallás no muestra
   logos: muestra *"Cerco Acmafor 3D — Hospital Regional Eva Perón"*. Esto
   **resuelve el placeholder `Cliente 1..8`** sin depender de que ningún cliente
   autorice su logo.

### Dos ideas concretas para robar

- **Calculadora de cerco** (Maddio). Herramienta de captación sin fricción: metros
  lineales + altura + calibre ⇒ materiales estimados ⇒ CTA de WhatsApp con el
  resultado precargado. Ataca directo el problema del formulario de 15 campos que
  ya está marcado en `AUDITORIA-PRESENTACION.md`. Alambrar tiene fábrica propia:
  puede hacerlo mejor que nadie en Salta.
- **Franja de proveedores** (todos). El cliente dijo "proveedores de todo el país" y
  entregó una lista que es, literalmente, esa franja: Acindar, Tomalino, Pallás,
  Ingro Semberg, Abaco. **Reemplaza la sección "Empresas que confían en nosotros"
  con contenido verificable y sin permisos de terceros.** 🟡 Confirmar cuáles son
  proveedores reales antes de poner un solo logo.

---

## 6. Lo que esto le hace a la arquitectura del sitio

La bifurcación actual (`Bifurcacion.tsx`: "Para tu obra" / "Para tu casa") **parte por
el tipo de cliente**. El cliente acaba de decir dos cosas que la vuelven en contra:

1. Su diferenciador es que **abarcan todos los clientes**. Una bifurcación de dos
   caminos comunica lo opuesto: que hay dos.
2. El negocio no está partido por cliente, está partido por **unidad de negocio**:
   fabricamos / instalamos / vendemos.

**Propuesta:** reemplazar la bifurcación de 2 caminos por **tres pilares**
(Fábrica / Instalación / Materiales), que es además exactamente lo que hace Maddio
con *Cercos · Metalúrgica · Construcción*. Los segmentos de cliente (casa, country,
rural, deportivo, revendedor) pasan a ser **filtros dentro de Instalación**, no la
puerta de entrada.

Esto es un cambio de arquitectura, no de copy. **Decidirlo antes de tocar código.**

---

## 7. Pendientes de confirmar con el cliente

Mandar por WhatsApp, son cortas:

1. ¿Año exacto de fundación? (para poner "desde 19XX" en vez de "30 años")
2. "Eléctricas" — ¿te referís a alambre para cerco eléctrico, a boyeros /
   electrificadores, o a los dos?
3. "Mallas" — ¿cuáles? (electrosoldada, sima, mosquitera, hexagonal…)
4. "Premoldeados de hormigón" — ¿qué se fabrica en Cerrillos exactamente? ¿Postes?
   ¿Placas? ¿Otra cosa?
5. La lista completa de cercos que instalan (dijiste "olímpico, rural, country,
   piscina, etc." — necesito el "etc.")
6. ¿Cuáles de estas empresas son proveedores reales de Alambrar, para poner los
   logos? (Acindar, Tomalino, Pallás, Ingro Semberg, Abaco)
7. Dirección de la fábrica en Cerrillos — ¿se publica o es solo planta?
8. La bio de Facebook dice "más de 15 años". ¿La actualizamos a 30 el mismo día que
   sale el sitio?

---

## 8. Qué se puede implementar ya (sin esperar respuestas)

- Cambiar "más de 15 años" por **30 años** en Hero y `QuienesSomos.tsx`.
- Sumar **"pioneros en Salta"** como línea de credibilidad.
- Sumar **fábrica propia en Cerrillos** — hoy el sitio dice "fabricación propia"
  sin decir dónde. Un lugar concreto vale mucho más.
- Sumar a `lib/materiales.ts` los productos que **no** tienen ambigüedad:
  **tejido artístico, gaviones, geotextil**.
- Reescribir `Servicios.tsx` sobre los tres pilares.
- Sumar a la ficha de instalación los tipos de cerco confirmados: **olímpico,
  rural, country, piscina**.
- JSON-LD: dos ubicaciones (local Zabala 410 + planta Cerrillos) 🟡 pendiente §7.7.

**No escribir todavía:** "eléctricas", "mallas", "premoldeados", ningún logo de
proveedor, ningún año de fundación.
