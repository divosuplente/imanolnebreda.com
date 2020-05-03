---
title: "Truco del almendruco 2: Solucionar error al empaquetar solución con SPFx"
date: 2018-01-11
author: Imanol Nebreda
categories:
- [Truco del almendruco]
- [SharePoint]
- [SPFx]
tags:
- SharePoint
- SPFx
---

## Bienvenido

Bienvenido a la segunda parte de la serie de trucos del almendruco, donde aparecen pequeños trucos que nos hacen la vida algo más fácil.

## Escenario

Estás todo ilusionado haciendo un **webpart para Sharepoint 2016/Sharepoint Online**, con Sharepoint Framework y React. La pera. El webpart funciona en el workbench local (ejecutando `gulp serve`) y te propones a empaquetar la solución para su despliegue. Ejecutas `gulp build --production` y luego `gulp package-solucion --production` y… explota. No entiendes nada. El error que sale es algo asi:

{% asset_img error.png Error al ejecutar gulp package-solution –production %}

Y piensas… _pero si tengo los manifiestos en su sitio y las rutas están bien, ¡qué raro!_, y te desesperas porque no eres capaz de solucionarlo.

Pruebas a crearte un nuevo proyecto con la plantilla de yeoman, y sin hacer nada más, ejecutas los comandos para empaquetar la solución. Y pasa lo mismo. _Aaaahhh, que es un error de la plantilla del proyecto. Uffff. Menos mal_.

## Solución

La solución es tan sencilla como olvidarte del primer comando `gulp build --production` y en su lugar ejecutar `gulp bundle --ship`.

Verás cómo ahora, despues de haber ejecutado este nuevo comando, que en definitiva hace lo mismo, se empaqueta perfectamente la solución y puedes desplegarlo.

De nada.

Happy Coding!

Este blog post apareció por primera vez en [https://itblogsogeti.com/2018/01/11/truco-del-almendruco-2-solucionar-error-al-empaquetar-solucion-con-spfx/](https://itblogsogeti.com/2018/01/11/truco-del-almendruco-2-solucionar-error-al-empaquetar-solucion-con-spfx/)