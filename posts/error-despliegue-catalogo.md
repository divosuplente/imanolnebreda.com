---
title: "SPO: Error en despliegue en catálogo de aplicaciones"
date: 2018-04-05
author: Imanol Nebreda
categories:
- [SharePoint Online]
- [O365]
- [SPFx]
tags:
- App Catalog
- O365 
- SharePoint
- SharePoint Online
- SPFx
toc: false
summary: "Tu webpart desaparece repentinamente, el despliegue de la aplicación da problemas... ¿qué puede estar pasando?"
---

![Error en despliegue en catálogo de aplicaciones](blog/Screenshot.png)

Recientemente hemos tenido un problema en un cliente que nos ha dejado un poco perplejos. El escenario es el siguiente: Hace unos meses deplegamos sin problemas en el _tenant_ del cliente un webpart creado con spfx y que se ha estado usando satisfactoriamente. De repente, **hace un par de semanas el webpart desapareció de la página** en la que estaba (de tipo clásico) y tampoco aparecía en la galería de webparts.

Trasteando por internet y yammer, encontramos que bajo ciertas circunstancias, y debido a un bug de la plantilla de yeoman para spfx 1.4.0, los webparts podían no aparecer en la galería al actualizarlos.

Por probar, **generamos el mismo webpart como un proyecto aparte**con la versión actualizada de spfx (1.4.1) que arreglaba este problema.

A la hora de desplegar la aplicación en el catálogo de aplicaciones del cliente nos encontramos con que nos daba error. ¡_Oh, sorpresa_! En**nuestros_ tenants_ de desarrollo se despliega sin problemas.**

Revisas el código, los manifiestos, el empaquetado… todo está bien. Te rascas la cabeza. Vuelves a comprobarlo. Vuelves a desplegarlo en el tenant del cliente, y vuelve a dar error. Más rascado de cabeza.

Probamos a desplegar la aplicación en dos tenants de producción diferentes y falla en uno de los dos ¡_toma ya_!

¿La diferencia entre ambos _tenants_? El [Office Store](https://appsource.microsoft.com/es-es/marketplace/apps?product=office&page=1&src=office&corrid=65684852-8803-4e1d-9b40-ca538c954f55&omexanonuid=cd2841d4-0358-44d5-a5a6-6bacd543e0e0) estaba desactivado. **Activamos el Office Store y volvemos a desplegar la aplicación y ¡_funciona_!**

> **Moraleja: Si tienes problemas de despliegue sin razon aparente, mira el estado del Office Store**

PD: a día 4 de abril del 2018, el Office Store ya no se llama así, sino “User owned Apps and Services”.  

Este blog post apareció por primera vez en [https://itblogsogeti.com/2018/04/05/spo-error-en-despliegue-en-catalogo-de-aplicaciones/](https://itblogsogeti.com/2018/04/05/spo-error-en-despliegue-en-catalogo-de-aplicaciones/)