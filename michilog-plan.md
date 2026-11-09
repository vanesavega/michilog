# Michilog: plan del proyecto Angular + Nest

Actualizado: 9 de noviembre de 2026

## Resumen

Michilog se construye en 13 hitos (0 a 12) y unas 160 horas, más 20 horas de colchón. A 3 horas diarias de lunes a viernes (15 h por semana) son 12 semanas de trabajo más una de descanso a fin de año, del 27 de octubre de 2026 al 27 de enero de 2027.

- **Qué es:** una app para registrar lo que cambia en la vida de mis gatos (arenero, vómitos, agua, ánimo, síntomas, fotos) y que me avise cuando algo se sale de lo normal.
- **Meta de aprendizaje:** cubrir más del 70% de Angular y de Nest. Con este plan la cobertura estimada es de 75 a 80% en Angular y cerca de 75% en Nest.
- **Reparto del tiempo:** 45% Angular (consolidar) y 55% Nest (lo nuevo).
- **Fuera de este plan:** la fase IoT, que viene después.
- **Supuesto:** las 3 horas son de lunes a viernes. Si también son fines de semana (21 h por semana), el plan baja a unas 9 semanas.

## Hitos

Los hitos 1 y 2 son solo Angular a propósito: llego a Nest con la app ya funcionando en pantalla. Los hitos 3 y 6 son los más difíciles; si algo se alarga, casi seguro es uno de esos.

| # | Hito | Qué se construye | Angular | Nest | Horas |
|---|---|---|---|---|---|
| 0 | Arranque | Dos repos (frontend y backend), sin Nx, estructura por feature | Proyecto zoneless, carpetas por dominio | Proyecto base, módulos | 3 |
| 1 | Perfiles de los gatos | Crear, ver y editar cada gato, datos en memoria | Signals, `computed`, rutas, lazy loading, formularios reactivos, `signalStore` | Todavía nada | 10 |
| 2 | Hoy y registro rápido | Pantalla Hoy, registrar arenero, vómito, agua, comida, historial | Signal Forms, `ng-content`, `viewChild`, pipe "hace X h", hoja inferior con `<dialog>`, animaciones | Todavía nada | 16 |
| 3 | API con base de datos | Endpoints de gatos y registros guardados en PostgreSQL | Nada nuevo | Controllers, providers, DTOs con validación, ORM, relaciones, migraciones, ConfigModule, Swagger | 22 |
| 4 | Conectar front y back | La app deja los datos en memoria y usa la API | `httpResource()`, interceptors, manejo de errores y carga | Exception filters, interceptor de logging | 10 |
| 5 | Fotos | Foto de perfil y fotos de síntomas | Subir y previsualizar imágenes | Subida de archivos, validación, servir imágenes | 8 |
| 6 | Login | Mi cuenta protegida | Guard de rutas, interceptor del token | JWT, guards, hash de contraseñas, rate limiting, helmet | 16 |
| 7 | Tendencias y alertas | Gráficas por gato y avisos como "30 h sin popó" | Gráficas, `@defer`, `effect()` | Eventos internos, jobs programados, caché | 18 |
| 8 | Tiempo real | Celular y portátil sincronizados al instante | RxJS sobre el socket, `toSignal()` | Gateways de WebSockets | 10 |
| 9 | Informe para el veterinario | PDF del último mes | Botón y descarga | Colas con BullMQ y Redis, generar PDF | 8 |
| 10 | Testing | Tests de lo más importante | TestBed, `HttpTestingController` | Tests unitarios y e2e | 18 |
| 11 | Modo offline | Registrar sin internet y sincronizar después | Service worker, PWA | Nada nuevo | 8 |
| 12 | Despliegue | Usarla de verdad desde el celular | Build de producción | Docker, variables de entorno en producción | 12 |
| | **Total** | | **~72 h** | **~88 h** | **~160 h + 20 h de colchón** |

## Calendario

Fechas aproximadas, a 3 h por día hábil desde el 27 de octubre. No considera festivos de Colombia, así que si trabajas en un festivo o lo descansas, se corre un día.

| # | Hito | Horas | Acumuladas | Termina (aprox.) |
|---|---|---|---|---|
| 0 | Arranque | 3 | 3 | 27 oct |
| 1 | Perfiles de los gatos | 10 | 13 | 2 nov |
| 2 | Hoy y registro rápido | 16 | 29 | 9 nov |
| 3 | API con base de datos | 22 | 51 | 18 nov |
| 4 | Conectar front y back | 10 | 61 | 24 nov |
| 5 | Fotos | 8 | 69 | 26 nov |
| 6 | Login | 16 | 85 | 4 dic |
| 7 | Tendencias y alertas | 18 | 103 | 14 dic |
| 8 | Tiempo real | 10 | 113 | 17 dic |
| 9 | Informe para el veterinario | 8 | 121 | 22 dic |
| | Descanso de fin de año | | | 28 dic a 1 ene |
| 10 | Testing | 18 | 139 | 6 ene |
| 11 | Modo offline | 8 | 147 | 8 ene |
| 12 | Despliegue | 12 | 159 | 14 ene |
| | Colchón | 20 | 179 | ~25 a 27 ene |

El testing (hito 10) queda partido por el descanso de fin de año. Las 20 horas de colchón al final absorben cualquier hito que se alargue, sobre todo el 3 y el 6.

## Cobertura

Cada tema se marca cuando el hito donde aparece queda funcionando y lo puedo explicar sin mirar. El número entre paréntesis es el hito.

### Angular (meta 75 a 80%)

- [ ] Signals, `computed`, `effect()` (1, 7)
- [ ] `input()` y `output()`, smart y presentational (1, 2)
- [ ] Rutas, lazy loading, guards (1, 6)
- [x] Servicios, `inject()`, scope de providers (1)
- [x] Estado con `signalStore` (1)
- [x] Formularios reactivos (1)
- [ ] Signal Forms (2)
- [ ] `ng-content` y `viewChild` (2)
- [ ] Pipes y directivas propios (2)
- [ ] Angular CDK y animaciones (2)
- [ ] `httpResource()` e interceptors (4, 6)
- [ ] RxJS e interop con signals (8)
- [ ] `@defer` (7)
- [ ] Testing con TestBed (10)
- [ ] Service worker y PWA (11)
- [ ] Build y despliegue (12)

### Nest (meta 75%)

- [ ] Módulos, controllers, providers (3)
- [ ] DTOs y validación (3)
- [ ] ORM, relaciones, migraciones (3)
- [ ] ConfigModule y variables de entorno (3, 12)
- [ ] Swagger (3)
- [ ] Exception filters e interceptors (4)
- [ ] Subida de archivos (5)
- [ ] Autenticación con JWT y guards (6)
- [ ] Seguridad: rate limiting y helmet (6)
- [ ] Eventos internos (7)
- [ ] Jobs programados (7)
- [ ] Caché (7)
- [ ] WebSockets (8)
- [ ] Colas con BullMQ (9)
- [ ] Testing unitario y e2e (10)
- [ ] Docker (12)

## Cómo trabajar

Un chat por hito y un push al terminar cada uno, para revisión antes de seguir, igual que con los mini proyectos.

- **Repos:** `michilog-web` (Angular) y `michilog-api` (Nest), separados y sin Nx. Hoy viven juntos en un solo repo `michilog` con las dos carpetas.
- **Sesión de 3 horas:** 20 minutos repasando lo del día anterior, 2 horas construyendo, 30 minutos anotando en el cuaderno lo nuevo que aprendí, 10 minutos haciendo commit.
- **Regla del atasco:** si algo me bloquea más de 45 minutos, pregunto en vez de seguir dando vueltas.
- **Datos reales:** desde el hito 2 registro lo de mis gatos de verdad, así la app se prueba sola.
- **Testing:** el hito 10 es el fuerte, pero desde el hito 3 dejo al menos un test por cada módulo nuevo para no llegar en cero.
- **Al cerrar cada hito:** marcar sus temas en Cobertura y anotar las horas reales que tomó.
- **Ideas nuevas de diseño:** van a una lista y se aplican al cerrar cada hito, para no atrasar el siguiente.

## Fuera de alcance y fase IoT

SSR, microservicios, GraphQL e internacionalización quedan por fuera: son el 20 a 25% que menos se usa en el día a día.

La fase IoT empieza cuando el hito 12 esté desplegado, y suma unas 15 a 25 horas:

- Una báscula con ESP32 bajo el arenero que registra cada visita y reconoce qué gato fue por su peso.
- Un bebedero que mide cuánta agua toman.
- En Nest: un endpoint o un microservicio con MQTT para recibir los datos de los dispositivos, lo que sube aún más la cobertura de Nest.

## Estado actual (9 de noviembre de 2026)

- **Hito 0:** completo (27 oct).
- **Hito 1:** completo (4 de noviembre). Perfil del gato en `/gatos/:id`, lista enlazada al perfil y, con un solo gato, `/gatos` va directo a su perfil. La edición del perfil se quitó a propósito y se rehará mejor más adelante.
- **Hito 2:** completo (9 de noviembre; empezó el 4). Pantalla Hoy con registro rápido, hoja para corregir hora y nota, y Diario por días en `/diario`. Las animaciones (paso 7) se dejaron para después.
- **Cronograma:** el hito 2 terminó el 9 de noviembre, la fecha prevista en el calendario, así que el atraso de 1 o 2 días que traía el hito 1 se recuperó. No se anotaron horas reales; el avance se mide por fechas. El rediseño de UI y de los formularios de bienvenida no estaba en el plan.
- **Siguiente:** hito 3, API con base de datos (Nest y PostgreSQL), en un chat nuevo. Antes de empezar hay que decidir el ORM y cómo levantar PostgreSQL.

### Hito 2: pasos

1. Modelo y stores: `Registro`, `RegistrosStore`, gato seleccionado en `GatosStore`. *(hecho)*
2. Pipe "hace X h" con date-fns. *(hecho; sin reloj: el texto no se refresca solo, se suma un `RelojService` si hace falta)*
3. Pantalla Hoy: el feature `registros` pasa a `hoy`; selector de gatos, botones "Anotar para…" (registro rápido), "Su día", enlace "Ver perfil" y chip de estado. *(hecho)*
4. Hoja inferior para corregir la hora y la nota de un registro, con `ng-content`, `viewChild` y Signal Forms. Se usa el `<dialog>` nativo; el CDK se probó aparte en la rama `prueba-cdk-hoja-inferior` y no se adoptó. *(hecho)*
5. Directiva de alerta: se probó y se descartó. Con un `[class]` en el template basta, y las directivas propias se harán cuando de verdad hagan falta. El chip de estado ("Todo normal") ya existe desde el paso 3. *(cerrado)*
6. Diario (el historial): `/diario`, solo lectura, registros del gato elegido agrupados por día. *(hecho)*
7. Animaciones. *(diferido: ver "Para después")*
8. Cierre: cobertura y plan. *(hecho; la cobertura se marca cuando yo lo diga)*

### Decisiones de diseño tomadas

- Angular 22 zoneless; Tailwind v4 con tokens en `styles.css`; sin SCSS ni Flowbite.
- Íconos con Material Symbols Rounded. Diseño pastel, redondeado, mobile first, con tema claro y oscuro.
- Datos en memoria con `signalStore` hasta el hito 4. Los guards `conGatos` y `sinGatos` deciden si se muestra la bienvenida.
- `nacimiento` admite `YYYY`, `YYYY-MM` o `YYYY-MM-DD`; si no hay fecha, se guarda `edad` aparte. Solo el nombre es obligatorio.
- En el alta de varios gatos solo se pide nombre y sexo. El color de la tarjeta depende del sexo.
- El gato guarda su `apariencia` (pelaje y ojos como colores libres en hex). Las paletas de pelajes y ojos típicos y el picker son solo ayudas para elegirlos; se cambian desde un modal con `<dialog>` nativo. Los patrones (rayas, manchas) se sumarán a `Apariencia` después.
- La carita es una cara de gato de frente con dos patitas (SVG propio con `apariencia`: pelaje y ojos), derivada de la cara de la pose acurrucada: cabeza casi redonda, orejas con punta suave y separadas, ojos ovalados pequeños. El contorno es un tono más oscuro del pelaje (`color-mix`). Estilo simple a propósito.
- Las tarjetas de gato usan un fondo pastel estable según el id del gato, distinto del color del pelaje.
- Fechas con `date-fns` (locale `es`).
- Hoy no tiene tarjeta del gato: el gato elegido se ve en la fila de arriba (deslizable hasta 8 gatos; con más, un desplegable con `popover`) y un enlace "Ver perfil" lleva a `/gatos/:id`. No hay ruta de registros aparte: Hoy es la pantalla principal.
- Tipos de registro: arenero, agua, comida y vómito (ánimo y síntoma se quitaron por ahora). Un registro es tipo, hora y una nota opcional; los detalles se definen después.
- Un toque en un botón de Hoy registra "ahora". Un doble toque abre la hoja con la hora del registro recién creado, sin crear uno nuevo.
- En la lista, cada registro tiene un botón con su hora y otro de nota. Cada uno abre la hoja con solo ese campo. Si cambia la hora, la lista se reordena. La hora solo se cambia dentro del mismo día y no puede ser futura.
- Signal Forms: en Angular 22 su API ya es pública (`FormField`, `form()`). El formulario de la hoja es el primero que los usa.
- Diario: pantalla propia en el menú, entre Hoy y Gatos. Solo muestra; la edición de registros se queda en Hoy. El selector de gatos pasó a `shared/components/` para usarlo en Hoy y en el Diario.
- Nest con CommonJS y Jest (ver nota `09-nest-cjs-vs-esm.md`).

### Para después

- Rehacer la edición del perfil (nombre, color, fecha de nacimiento parcial, raza, peso, notas). Las ideas previas, con su validación de edad y fecha, quedaron en la carpeta temporal de la sesión.

- Patrones del pelaje (rayas, manchas) en el gato ilustrado y en el formulario.
- Retomar un gato de cuerpo entero (pose sentada); los dibujos de prueba quedaron en la carpeta temporal de la sesión.
- Revisar el contraste de la carita negra en tema oscuro.
- Renderizar con `@if` los menús web y móvil al empaquetar la app.
- Accesibilidad.
- Animaciones (el paso 7 del hito 2): filas nuevas que entran con `animate.enter` en la lista de Hoy y un `transition-colors` en el chip de estado. Incluir `prefers-reduced-motion`. Sin `@angular/animations`: `animate.enter` y `animate.leave` ya vienen en `@angular/core`.
- Directivas propias: ninguna hace falta todavía. Se harán cuando haga falta de verdad; el tema queda sin cubrir en Cobertura hasta entonces.
- Poner un `animate.leave` a los registros cuando se puedan eliminar.
