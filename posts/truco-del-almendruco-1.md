---
title: "Truco del almendruco 1: Inicio condicional de flujos con expresión regular"
date: 2017-09-05
author: Imanol Nebreda
categories:
- [Truco del almendruco]
- [SharePoint]
- [Workflow]
tags:
- SharePoint
- SharePoint Designer
- SharePoint Workflow
summary: "Cómo crear condiciones de inicio para flujos usando expresiones regulares"
---


## Bienvenido

Bienvenido al inicio de la serie de trucos del almendruco, donde irán apareciendo pequeños trucos que nos hacen la vida algo más fácil.

## Escenario

Si has trabajado con **Nintex**, probablemente sepas que en su producto para **Sharepoint 2010** introdujeron el concepto de **inicio condicional de flujo**, en el que puedes poner ciertas condiciones que si no se cumplen, el flujo no se inicia.

**Sharepoint Designer** no tiene esta característica, así que… ¿Cómo lo hacemos? Fácil, ponemos un If como primer paso, y si no se cumple, paramos el flujo.

Ahora bien, supongamos que tenemos varias condiciones y que el flujo no debe correr si se cumple alguna de ellas.

## Solución

Con Nintex, podemos fácilmente implementarlo con su interfaz gráfica. En Sharepoint Designer tenemos que usar algún truco que otro. ¿Se te ocurre qué podemos usar? ¡Una expresión regular! Este truco también sirve para Nintex, ya que a veces los inicios condicionales no funcionan tan bien como sería deseable.

Supongamos que el flujo no debe correr o iniciarse si alguna de las siguientes condiciones se cumple:

*   Duración es 0 Días
*   Duración es 0 meses
*   Duración es 0 años

¿Cuál sería nuestra expresión regular?

^(0 Días|0 meses|0 años)$

“^” indica el inicio de la cadena, “$” indica el final de la cadena, “|” separa los distintos valores a comprobar y los paréntesis agrupan los distintos valores

## ¿Cómo lo interpretamos?

Comprueba que el valor pasado coincide exactamente (de principio a fin, incluyendo espacios en blanco)  
con alguno de los valores de la lista entre paréntesis

**Nota**: Fíjate que en la interpretación anterior dice: “incluyendo espacios en blanco”. Esto es extremadamente importante, ya que si dejas un espacio entre la línea vertical y el valor (por ejemplo: “| 0 meses”), ese espacio en blanco se tiene en cuenta y cuando pruebes tu flujo la condición no se cumplirá nunca. Lo mismo ocurre con el paréntesis inicial y el final. _¡No dejes espacios en blanco que no existan en el valor!_

Se ve así en Sharepoint Designer:

![](blog/inicio-condicional-sharepoint.png "Inicio condicional con expresión regular en Sharepoint Designer")

Este blog post apareció por primera vez en [https://itblogsogeti.com/2017/09/05/truco-del-almendruco-1-inicio-condicional-de-flujos-con-expresion-regular/](https://itblogsogeti.com/2017/09/05/truco-del-almendruco-1-inicio-condicional-de-flujos-con-expresion-regular/)
