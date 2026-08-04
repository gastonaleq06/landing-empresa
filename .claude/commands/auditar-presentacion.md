Vas a auditar esta landing (Next.js 16 + React 19 + Tailwind v4) con UN objetivo
concreto: determinar si está lista para presentarle la maqueta al cliente, y qué
falta para que lo esté.

## Reglas de la corrida

- **Solo diagnóstico. No modifiques ningún archivo del proyecto.**
  El único archivo que creás es `AUDITORIA-PRESENTACION.md` en la raíz.
- Ya existe `AUDITORIA-LANDING.md` de una corrida anterior. **Leelo primero** y
  marcá para cada hallazgo previo: RESUELTO / PARCIAL / SIGUE ABIERTO, con
  archivo:línea que lo pruebe. No repitas el análisis, verificalo.
- Cada afirmación tuya tiene que tener `archivo:línea`. Si no podés citar
  código, no es un hallazgo: es una opinión, y va marcada como tal.
- Si una skill no aplica a esta fase, decilo y salteala. No fuerces su uso.

## Fases y qué skill usar en cada una

**Fase 0 — Verificación del estado anterior**
Leé `AUDITORIA-LANDING.md`. Tabla de re-verificación de los 14 hallazgos.
Los ship-blockers (#1 reseña falsa, #2 logos placeholder, #5 CTAs muertas sin
env) se verifican primero: si alguno sigue abierto, arranca el reporte diciéndolo.

**Fase 1 — Inventario y estructura** *(sin skill)*
Mapa actualizado: rutas, secciones, componentes, dependencias, envs requeridas.
Contrastalo contra el orden canónico de secciones del checklist de la Parte 2 y
marcá qué bloque falta (proceso, FAQ/objeciones, CTA final, etc.).

**Fase 2 — Dirección visual** *(skill: `ui-ux-pro-max` + `web-design-guidelines`)*
Paleta, tipografía, patrón de landing según rubro. Comparar lo que sugiere la
base contra lo que hay. No cambiar la marca: evaluar *cómo* se aplica.

**Fase 3 — Sistema de diseño** *(skill: `ui-styling`)*
Tokens de color con rol semántico, escala tipográfica, escala de espaciado,
radios, sombras, breakpoints. ¿Hay sistema o hay valores mágicos sueltos?
Contá los valores arbitrarios de Tailwind (`text-[10px]`, `border-[0.5px]`,
`tracking-[0.4em]`) y decidí si son intención o deriva.

**Fase 4 — Criterio de diseño** *(skill: `emil-design-eng`)*
Las preguntas duras: ¿el hero es tesis o template? ¿hay UN elemento signature?
¿los elementos estructurales codifican algo o son decoración? ¿cae en "look de IA"?

**Fase 5 — Movimiento** *(skill: `animation-vocabulary`)*
Duraciones, easings, qué propiedades se animan (solo `transform`/`opacity`),
`prefers-reduced-motion`, si el `RotatingWord` del hero suma o distrae, si
`FadeUp` en cada sección genera fatiga de scroll. Y si `motion` (v12) se
justifica o el mismo efecto sale con CSS/IntersectionObserver.

**Fase 6 — Código y performance** *(skill: `vercel-react-best-practices`)*
Fronteras server/client, `next/image` (`sizes`, `priority`, `fill`), carga de
fuentes, waterfalls, peso del bundle, envs faltantes, estados de error/carga.
Estimá LCP y CLS del hero.

**Fase 7 — SEO local y accesibilidad** *(skill: `web-design-guidelines`)*
Metadata por ruta, OG/Twitter, `sitemap.ts`, `robots.ts`, canonical,
**JSON-LD LocalBusiness** (crítico: negocio local en Salta), favicon, `lang`.
A11y: contraste AA, jerarquía de headings, labels ↔ inputs, foco visible,
targets ≥44px, `alt` reales.

**Fase 8 — Conversión y captura de leads** *(skill: `n8n-skills`, si aplica)*
El objetivo es presupuesto por WhatsApp. Medí fricción por camino. Hoy el lead
no se persiste: si `n8n-skills` sirve para armar el flujo de captura
(form → webhook → planilla/CRM → notificación), proponé el flujo mínimo en
pseudocódigo. Si la skill no aplica, decilo y proponé la alternativa más simple.

**Fase 9 — Diagrama del sitio** *(skill: `graphify`, si aplica)*
Un diagrama del sitemap y del flujo de conversión, para usar en la presentación
al cliente. Si `graphify` no genera este tipo de gráfico, hacelo en Mermaid.

**Fase 10 — Readiness de deploy** *(skill: `deploy-to-vercel`)*
Checklist de lo que hace falta para una preview estable y compartible: build
limpio, envs cargadas en Vercel, dominio/preview URL, 404, headers.
**No deployees nada.** Solo el checklist.

## Formato del reporte

1. **Veredicto en una línea**: ¿se puede presentar la maqueta o no? Sí/No + motivo.
2. **Ship-blockers**: lo que no puede verse en la presentación bajo ningún concepto.
3. **Re-verificación** de los 14 hallazgos previos (tabla).
4. **Hallazgos nuevos** por fase, con archivo:línea.
5. **Tabla priorizada**: hallazgo | impacto | esfuerzo | archivo:línea, ordenada
   por impacto/esfuerzo.
6. **Los 3 cambios que más mueven la aguja**, con el porqué.
7. **Lo que NO hay que tocar todavía** y por qué.
8. **Guion de presentación**: 5 decisiones que el cliente tiene que validar en la
   reunión, redactadas como preguntas cerradas (no "¿qué te parece?").
9. **Lista de pendientes declarados**: lo que le decís al cliente que ya sabés
   que falta, antes de que lo señale él.

Al final, parás. No implementes ninguna corrección.
