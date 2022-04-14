# Outer Join

Aqui se estudiara el tipo de algoritmo Inner Join aplicado a Excel Join

Para esto, utilizaremos, una tabla de hash, con el fin de buscar valores iguales, todo esto con el fin de reducir las iteraciones entre elementos

Luego de crear esta tabla procederos a iterar sobre ella con el valor de la columa del otro excel

Con un recorrido total de Na + Nb, lo cual nos genera un algoritmo mas practico que un algoritmo de iteracion en un doble bucle for lo cual tiene un recorrido de Na*Nb

> Na*Nb > Na+Nb, siempre que Na > 1 y Nb >1
> 

Refierase a Na como el total de elementos pertenecientes al diccionario creado anteriormente
Y nos referimos a Nb como el total de elementos pertenenicentes a los datos del excel a comparar