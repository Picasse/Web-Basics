import  saludar,{ PI,usuario, Saludar } from "./constantes.js";
/*4.) IMPORTAMOS PI de aritmetica.js
    ./  busca en la carpeta en la que estamos
    ../ busca en la carpeta ANTERIOR en la que estamos

    
*/ 
console.log("Hola mundo")
console.log(PI,usuario)

import { sumar,restar } from "./aritmetica.js";
//6.)IMPORTAMOS funciones
console.log("La suma de 1 + 2 es: "+sumar(1,2))

saludar();
/*10). Al llamar la funcion exportada, con DEFAULT IMPORT
en la Linea 1. Se importa automaticamente ->" import saludar"
import normal:
    import { PI,saludar } from "./constantes.js";
import CON DEFAULT:
    import saludar,{ PI } from "./constantes.js";
11): constante.js */


const saludo = new Saludar();
/*13).Importar una clase 
        Al instanciar la clase (crear un objeto hijo)
        El constructor laza el console.log()
14):algebra.js*/

import {objAlgebra} from "./algebra.js"
console.log(objAlgebra.trinomioCuadradoPerfecto(7,8,9))
const miBinomio = objAlgebra.binomioAlCubo(9,7)




