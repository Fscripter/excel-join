# Inner Join

Aqui se estudiara el tipo de algoritmo Inner Join aplicado a Excel Join

Para esto, utilizaremos, una tabla de hash, con el fin de buscar valores iguales, todo esto con el fin de reducir las iteraciones entre elementos

| Valor celda | Direccion celda excel |
| --- | --- |
| “Juan” | “A2” |
| “Skill” | "B5” |

Luego de crear esta tabla procederos a iterar sobre ella con el valor de la columa del otro excel, con el fin de buscar valores iguales, en el diccionario y la tabla de hash

Con el fin de buscar los datos iguales, cabe aclarar que al ser una tabla, estos datos no pueden ser repetidos, sino que el ultimo dato igual a la tabla de hash, sera el que se vera representado en el excel de resultados

Con un recorrido total de Na + Nb, lo cual nos genera un algoritmo mas practico que un algoritmo de iteracion en un doble bucle for lo cual tiene un recorrido de Na*Nb

> Na*Nb > Na+Nb, siempre que Na > 2 y Nb >2
> 

Refierase a Na como el total de elementos pertenecientes al diccionario creado anteriormente
Y nos referimos a Nb como el total de elementos pertenenicentes a los datos del excel a comparar