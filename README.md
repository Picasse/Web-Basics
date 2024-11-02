<!--Fast Documentation
////////////////////////
//     SETUP:         //
////////////////////////
in path: vscode/git/node/github 
vscode extensions:
    Auto Rename Tag
    HTML End Tag Labels
    Indent-rainbow
    Live Server
    open in browser


////////////////////////
//     HTML&CSS       //
////////////////////////
Temas:
Estructura Basica de HTML  (Doctype/Html/Head/Body)
Etiquetas habituales
    (Head: tittle/style/script/ Body: div/span/br/label/input/a/textarea )
    Argumentos posibles(type/for/id/max/min/required/step etc...)
Formularios (login: user/pass)(Registro todos los datos posibles: user/pass/name/tel/correo etc...)[js diligencio bien]
    Estructura Label(for="xxx")&Input(id="xxx")(Placeholder/Required)
    Actions(Get->Html/Json/Xml...)
    Redireccionamientos((Get->Html)
    Botones(Submit/Reset...)
tablas
img  (src="link local o web de img"/)
video(src="intro.mp4"/Type="video.mp4/webm/ogg SUBTITULO)
     (controls/autoplay/muted/loop/Escala/Posicionamiento)
audio(src="audio.mp4"/Type="audio.mp3/wav/ogg SUBTITULO)
     (controls/autoplay/muted/loop/Escala/Posicionamiento)
selectores css          PESO 
    #id                 100 ID             (mayor peso, mayor prioridad)
    .clase              10  CLASE
    input[type="text"]  10  ATRIBUTO       /* Selecciona todos los inputs de tipo texto */
    :hover              10  PSEUDOCLASE    /* Cambia __ del texto al pasar el ratón POR ENCIMA */
    h1                  1   ETIQUETA
    p::first-letter     1   PSEUDOELEMENTO /* Pseudo-elemento para estilizar la primera letra de un párrafo */
    ul > li             0   Combinadores   /* Selecciona TODOS los <p> QUE SIGUE a un                <h2> */
    h2 ~ p              0   Combinadores   /* Selecciona EL        <p> QUE SIGUE INMEDIATAMENTE a un <h1> */
    ul > li             0   Combinadores   /* Selecciona SOLO LOS  <li> que son HIJOS directos de un <ul> */
    *                   0   Universal      /* SELECIONA TODO*/
    Ejemplo: #miId .miClase →100(ID) +10Clase) =110(Puntos) /*selectores combinados, sumar pesos, sabe la jerarquia */
MULTIPLES ELEMENTOS POR SEPARADO (Ejemplo: poner estos de rojo)
    .autor,.fecha,.ubicacion,h1,#segunda-noticia{ color:red; }
VARIAS CONDICIONES PARA UN ESTILO (debe cumplir todas las condiciones)
    .autor .fecha{color:red} (el elemento debe tener las 2 clases .autor&&.fecha)
PSEUDOELEMENTOS
    p::selection{background-color:chocolate;color: lime;}  /* Parrafo seleccionado colores, fondo chocolate & letra lima */ 
    p::first-line             /* primera linea del parrafo */
    .listado ul li::marker{}  /* de clase listado, con listas DESordenadas,en los listed elements, los puntos de viñeta, colorear de rojo )
    .listado ol li::marker{}  /* de clase listado, con listas ordenadas,en los listed elements, la NUMERACION de viñeta, colorear de rojo )
Resumen de Pseudo-elementos
    ::selection:    Estiliza el texto seleccionado por el usuario.
    ::first-line:   Estiliza la primera línea de un bloque de texto.
    ::first-letter: Estiliza la primera letra de un bloque de texto.
    ::after:        Inserta contenido después de un elemento.
    ::before:       Inserta contenido antes de un elemento.
    ::marker:       Estiliza los marcadores (puntos o números) de las listas.
    ::caption:      Estiliza el título de una tabla.
Resumen de Pseudo-clases
    :hover:         Aplica estilos cuando el ratón está sobre un elemento.
    :active:        Aplica estilos cuando un elemento es clicado.
    :focus:         Aplica estilos cuando un elemento tiene el foco.
    :first-child:   Selecciona el primer hijo de un elemento padre.
    :last-child:    Selecciona el último hijo de un elemento padre.
    :nth-child(n):  Selecciona el enésimo hijo de un elemento padre (puede usar números, palabras como odd o even).
    :visited:       Aplica estilos a enlaces que han sido visitados.
    :not():         Selecciona elementos que no cumplen con un criterio específico.

Diccionario de Etiquetas HTML, Atributos 
1. Etiquetas HTML y sus Atributos
ETIQUETA	DESCRIPCION	                ATRIBUTOS COMUNES	
<a>	        Crea un enlace.	            href, target, rel, title, download, id, class, style	URL, _blank, _self, etc.
<img>	    Inserta una imagen.	        src, alt, width, height, title, id, class, style	URL de imagen, dimensiones en px o %, etc.
<form>	    Define un formulario.	    action, method, enctype, id, class, style	GET, POST, multipart/form-data, etc.
<input>	    Campo de entrada de datos.	type, name, value, placeholder, required, id, class, style, min, max, step	text, email, password, number, etc.
<textarea>	Campo de texto de varias líneas.	name, rows, cols, placeholder, required, id, class, style	Número de filas y columnas en caracteres.
<select>	Lista desplegable.	        name, id, class, style, multiple, required	-
<option>	Opción en un <select>.	    value, disabled, selected, label	Texto de la opción, valor para enviar.
<table>	    Crea una tabla.	            border, cellpadding, cellspacing, width, id, class, style	Dimensiones y estilos en px o %.
<tr>	    Fila de una tabla.	        id, class, style	-
<td>	    Celda de datos en una tabla.        colspan, rowspan, id, class, style	Número de columnas o filas que ocupa.
<th>	    Encabezado de una celda.	colspan, rowspan, id, class, style, scope	row, col, rowgroup, colgroup
<div>	    Contenedor genérico.	    id, class, style, title	-
<span>	    Contenedor en línea.	    id, class, style, title	-
<header>	Encabezado de una página o sección.	id, class, style, role	-
<footer>	Pie de página de una sección.	    id, class, style, role	-
<nav>	    Navegación.	                id, class, style, role	-
<section>	Sección de contenido.	    id, class, style, role	-
<article>	Contenido independiente.	id, class, style, role	-
<aside>	    Contenido relacionado o adicional.	id, class, style, role	-
<main>	    Contenido principal del documento.	id, class, style, role	-
<blockquote>Cita en bloque.	            cite, id, class, style	URL de la fuente de la cita.
<code>	    Fragmento de código.	    id, class, style, title	-

Diccionario de Atributos HTML y sus Valores
1. Atributos Comunes
ATRIBUTO	DESCRIPCION	                            POSIBLES VALORES
id	        Identificador único para el elemento.	Cualquier cadena única (sin espacios).
class	    Clase(s) para aplicar estilos.	        Nombres de clases separados por espacios (ej. class="clase1 clase2").
style	    Estilos en línea.	                    Declaraciones CSS (ej. color: red; font-size: 16px;).
title	    Texto que aparece como tooltip.	        Cualquier cadena de texto (ej. title="Descripción del elemento").
placeholder	Texto de ejemplo en campos de entrada.	Cualquier cadena de texto (ej. placeholder="Escribe aquí").
required	Indica que el campo es obligatorio.	    Sin valor (booleano) o required="required"
disabled	Desactiva un campo.	                    Sin valor (booleano) o disabled="disabled"
value	    Valor predefinido de un campo.	        Cualquier cadena de texto (ej. value="Texto predeterminado").
href	    URL del enlace.	                        URL completa (ej. href="https://www.ejemplo.com").
src	        URL de la imagen o archivo multimedia.	URL completa o ruta local (ej. src="imagen.jpg").
action	    URL a la que se envían los datos del formulario.	URL completa o ruta local (ej. action="/enviar").
method	    Método HTTP para enviar datos.	        GET, POST, PUT, DELETE.
enctype	    Tipo de codificación para formularios.	application/x-www-form-urlencoded, multipart/form-data, text/plain.
width	    Ancho del elemento.	                    Valores en píxeles o porcentaje (ej. width="100" o width="50%").
height	    Altura del elemento.	                Valores en píxeles o porcentaje (ej. height="100" o height="50%").
target	    Donde se abrirá el enlace.	            _blank, _self, _parent, _top, o una ventana con nombre.
role	    Rol del elemento para accesibilidad.	Valores como button, navigation, alert, dialog, tab, etc.






////////////////////////
//    JAVASCRIPT      //
////////////////////////

////////////////////////
//       REACT        //
////////////////////////

////////////////////////
//       NODE         //
////////////////////////
Para front


////////////////////////
//       BD           //
////////////////////////
maria mongo aws?

////////////////////////
//       OTROS        //
////////////////////////
Captchas

//////////////////////// 
//   ENTORNO VIRTUAL  // 
//////////////////////// 
in a future when using venv/virtualenv in terminal:
1) El entorno virtual(EV) es una carpeta con las versiones de tus dependencias
2) Al activar el EV: los archivos abiertos por la terminal usaran la version del PROGRAMA EN EL ENTORNO VIRTUAL que esta en la carpeta y no la version global del windows
3) Toca decirle al vscode que lea el entorno virtual tambien jaja
    View/command pallette or ( Ctrl+Shift+P ) 
        python: select Interpreter 
            Python3.x(venv)    /Entorno virtual, usualmente con Flask/Node etc...
            Python3.x(conda)   /conda
            Python3.x(windows) /python tiemda windows 
4) Terminal EV apagado, en paralelo a, OTRA Termial EV activo, no se interfieren 
5) Terminal de windows = Terminal VScode

//////////////////////// 
//    GIT COMMANDS    // 
//////////////////////// 
Create a repo local if not exist 
    add .git to inicializate the repo:
	cd C:\Users\Sebas\Desktop\Basics
	git init
	git status
	git add .    
	git status                            
    git commit -m "first commit"
	git branch -M main                                                  //renombrando la rama local del pc a main
	git remote add origin https://github.com/Picasse/Web-Basics.git     //AÑADIR un REPOSITORIO REMOTO de NOMBRE origin en el LINK del proyecto de github 
	git push -u origin main                                             //enviar los cambios realizados en la rama main local al repositorio remoto origin

	










-->
