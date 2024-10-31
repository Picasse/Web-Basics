export const PI=Math.PI;
//3). EXPORTAMOS la constante PI
//4). modulos.js

export let usuario="Sebas"
let password="123456789"
/*Como no han sido EXPORTADOS, no son accesibles
desde otro script*/

export default function saludar(){console.log("Hola modulos ES6, funcion")}
/*9). Exportar una funcion.
        default: al usar la funcion en otro script
        no hay que importarla, automatico se hace
        al llamar la funcion

        default 1 POR SCRIPT*****
        default carga automaticamnete el doc, PERO
        se poner fuera de los {} del import
10). modulos.js*/

//export default const constante ="777";
/*11). No se puede en una misma linea, da error
(exportar default)&&(inicializar variable)
CONST & LET=NO , FUNCIONES & CLASES=SI
en su lugar puedes hacer esto: 
Recuerda solo 1 DEFAULT por SCRIPT*/
//const constantee ="888";
//export default constantee;


export class Saludar{//OJO VA CON MAYUS PRIMERA KEY PARA CLASES
    constructor(){
        console.log("Hola Modulos EC6, clase");
    }
}
/*12). Exportar clases
13). modulos.js*/




