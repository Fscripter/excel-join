# Left Join

Para este algoritmo utilizaremos la tabla de hash para el archivo B

> Notese que al iniciar la aplicacion se elige el archivo A, archivo B
> 

Se utiliza la tabla de hash para el archivo B, y al contrario que los demas algoritmos, el archivo a iterar seria el A, utilizando un recorrido para determinar que datos estan en el archivo A, y que datos estan en el diccionario generado por el archivo B, para eliminarlo del resultado, el cual sera una copia del archivo A, sin los datos compaginados en ambos.

Siguiendo este lineamiento, una forma grafica de representarlo es un diagrama de Venn, con el tendremos una explicacion un poco mas abstracta para este algoritmo