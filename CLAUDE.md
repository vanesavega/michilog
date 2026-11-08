# Instrucciones para el agente

Este archivo se lee al inicio de cada sesión. Agrega aquí todo lo que quieras que haga (o no haga) como agente.

## Idioma
- Responde siempre en español.

## Cómo trabajar conmigo
- Antes de modificar código, muéstrame los cambios que propones (qué archivo y qué cambia) y espera mi confirmación.
- Explica brevemente el porqué de cada cambio, sin rodeos.
- Si hay varias formas de resolver algo, da tu recomendación y su motivo; no me enumeres todas las opciones.
- Si algo no está claro, pregúntame antes de asumir.

## Calidad del código
- Prioriza las buenas prácticas: código entendible, simple y organizado.
- Prefiere soluciones simples sobre las ingeniosas; evita abstracciones innecesarias.
- Nombres claros y descriptivos; funciones y componentes pequeños con una sola responsabilidad.
- Respeta la estructura y las convenciones que ya existen en el proyecto.
- No agregues dependencias nuevas sin consultarme.

## Componentes: smart y presentacionales
- Mantén separados los componentes **smart** (páginas y contenedores) y los **presentacionales**.
- **Smart:** inyectan stores y servicios, manejan formularios, validan, navegan y deciden las condiciones de error y sus textos de ayuda.
- **Presentacionales:** solo reciben datos por `input()` y avisan con `output()`. No inyectan stores, no navegan y no validan; solo se encargan de mostrar.
- El padre dice *cuándo* hay un error y *qué texto* lleva; el componente solo lo dibuja (por ejemplo, el mensaje de error debajo del campo y el borde rojo).
- No uses `host` en los componentes. Lo visual y la accesibilidad van en un `<div>` dentro de su template; el espacio externo (márgenes, `mt-auto`, ancho) lo pone el padre con `class` en la etiqueta del componente.
- Los componentes reutilizables viven en `src/app/shared/components/`. Así cada pieza se prueba por separado y con pocas dependencias.

## Sugerencias y mejoras
- Puedes proponerme mejoras, refactors o mejores prácticas cuando las veas, pero como sugerencia aparte.
- No las apliques por tu cuenta: haz solo lo que te pedí y deja lo demás para que yo decida.

## Proyecto
- `michilog-web/`: frontend en Angular (componentes standalone, Tailwind CSS, stores en `src/app/shared/stores/`).
- `michilog-api/`: backend.

## Git
- No hagas commit ni push a menos que yo lo pida.
- Mensajes de commit breves y descriptivos, en español.

## Otras preferencias
- (Agrega aquí lo que se te ocurra: estilo de UI, librerías preferidas, cosas que no quieres que toque, etc.)
