---
title: "Truco del almendruco 3: Mi flujo de SP 2013 no se inicia automáticamente al crear el elemento con otro flujo"
date: 2018-05-10
author: Imanol Nebreda
categories:
- [Truco del almendruco, Sharepoint, Workflow]
tags:
- Sharepoint
- Sharepoint Designer
- Sharepoint Workflow
---

## Escenario

*   Tienes una lista de solicitudes en la que desarrollas un flujo con el motor de flujos de Sharepoint 2013 usando Sharepoint Designer.
*   En este flujo, llega un momento en el que asignas una tarea a un grupo de usuarios.
*   En la solicitud existe un campo de usuarios (“Responsables”) que contiene los usuarios que forman parte del grupo al que se le ha asignado la tarea.
*   Tienes un webpart de lista de tareas en tu página de inicio filtrada para que te muestre tus tareas pendientes, pero, cáspita, no te aparecen las tareas asignadas a tu grupo de usuarios.
*   Te llevas las manos a la cabeza y piensas… ¿Qué hago ahora?
    *   Creas un flujo en la lista de tareas, también con el motor de Sharepoint 2013 que:
        *   Obtiene el ID de la solicitud del json que hay en el campo “Elementos Relacionados”
        *   Copias el contenido de “Responsables” de la solicitud en un campo de usuarios en la tarea de forma que las tareas puedan filtrarse por usuario.
    *   Haces la prueba para comprobar que va todo sobre ruedas… y no va. **El flujo de la lista de tareas no se ejecuta automáticamente, pero sí manualmente.**
        *   Aqui es cuando das golpes con la cabeza en la pared y maldices a Sharepoint Designer por enésima vez +1.

## Causa

La causa de este comportamiento es que la tarea aparece como creada por el flujo de trabajo en nombre de, cuando en realidad, en el fondo, está creada por la cuenta del sistema.

{% asset_img creado_por.png El motor de flujos de Sharepoint 2013 se niega rotundamente a ejecutar automáticamente flujos sobre elementos creados por la cuenta del sistema. %}


## Solución

¿Qué otra opción queda?

¡Los flujos del motor de Sharepoint 2010!

Estos flujos _SÍ_ se inician automáticamente, por lo que podemos desarrollar nuestro proceso como un flujo de Sharepoint 2010 y ya está.

En un próximo artículo veremos si este problema puede solucionarse mediante un App Step de flujo de Sharepoint 2013. ¡Permanece atentx!

_P.D.: Ten en cuenta que los flujos de Sharepoint 2010 no disponen de bastantes acciones y funcionalidades que sí existen en Sharepoint 2013 como fases, obtención del índice de un carácter o texto en una cadena de texto, etc._

Este post apareció por primera vez en [https://itblogsogeti.com/2018/05/10/truco-del-almendruco-3-mi-flujo-de-sp-2013-no-se-inicia-automaticamente-al-crear-el-elemento-con-otro-flujo/](https://itblogsogeti.com/2018/05/10/truco-del-almendruco-3-mi-flujo-de-sp-2013-no-se-inicia-automaticamente-al-crear-el-elemento-con-otro-flujo/)