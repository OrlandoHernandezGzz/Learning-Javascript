# Apuntes de Curso Básico de JavaScript.
By: Diego de Granda, Platzi.


## Capitulo 1. ¿Qué es javascript?

<br>

### ¿Cómo nace Javascript?
> Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros.

<br>

### ¿Qué es javascript?
> Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.

<br>

### Orientado a objetos.
> Javascript tambien es un lenguaje orientado a objetos, esto quiere decir que podremos crear objetos para representar una entidad (objeto, persona, etc).

<br>

### Ejemplos de débilmente tipado.
```js
    4 * "7"         // 28
    4 + "7"         // 47
    2 + true        // 3
    false - 3       // -3
```

<br>

### Dinámico
![alt text for image](./imgMD/dinamicoJS.png)

Javascript es dinámico, ya que no necesita de un compilador para que el código javascript pueda correr en el navegador, A medida que vayamos interactuando, el código javascript será leído y traducido por la máquina.

<br>

### Motor de Javascript v8
![alt motor js v8](./imgMD/motorJsv8.png)

> 1. Toma el código javascript.
> 1. Génera un árbol de palabras claves javascript para poder entender lo que queramos hacer.
> 1. Interpreta nuestro código a bytecode.
> 1. Traé el resultado de la compilación.

<br>

### Backwards y Forwards
>  Forwards: Ser compatible con versiones futuras quiere decir que al implementar funcionalidades nuevas del leguaje no daña nuestro código y se puede usan en versiones anteriores del motor de compilación.

> Javascript es Backwards, esto quiere decir que todas las versiones nuevas no van a romper tu código, sin embargo, no vas a poder usarlas en dicho proyecto, pero para poder utilizarlas, podemos usar herramientas como: **BABEL** ya que estas traducen el código de nuevas versiones a versiones estándares que entiende el navegador.

<br><br>
## Capitulo 2. ¿Por qué javascript?

<br>

> JavaScript tiene una comunidad enorme de desarrolladores que te pueden ir ayudando a generar diferentes cosas. A continuación nos enfocaremos en las áreas que puedes aplicar para aprenderlo.

<br>

**Desarrollo Web**

Para construir aplicaciones web, existen librerías o frameworks robustos basados en JavaScript. Algunos de estos son: Angular, React o Vue.

![Desarrollo web con js](./imgMD/desarrollowebjs.webp)

<br>

**Desarrollo de aplicaciones**

Si el desarrollo web no es lo tuyo, también puedes utilizar JavaScript para construir aplicaciones nativas. React Native es un framework que te permite construir aplicaciones nativas en Android o iOS.


![Desarrollo apps con js](./imgMD/desarrolloAppsjs.webp)

<br>

**Desarrollo de apps para escritorio**

Electron es un framework que te permite construir aplicaciones de escritorio en Mac o Windows.

![Electron js](./imgMD/electronjs.webp)

<br>

**Backend o Internet of Things (IOT)**

Node.js es un entorno de ejecución de JavaScript del lado del servidor. Este te permite manejar las solicitudes y respuestas que el navegador recibe por medio del usuario, este componente se lo conoce como Backend, mientras que todas las interacciones con el usuario se denomina Frontend.

Igualmente, puedes construir aplicaciones dedicadas al IOT (Internet of Things), que te permite relacionar objetos cotidianos con el internet.

![node js](./imgMD/nodejs.webp)


<br><br>

## Capitulo 3. Elementos de un Lenguaje de Programación: Variables, Funciones y Sintaxis.

<br>

### Dos componentes principales.
> 1. Data que guardamos en memoria.
> 1. Tareas (funciones) que haremos con esa data.

<br>

### Tipos de datos en Javascript.

![Tipos de datos en js](./imgMD/tipos_de_datos.webp)

**Nota:** Para verificar que tipo de dato es un valor se puede utilizar la siguiente palabra reservada: **typeof**, ejemplo:

```js
    // Tipos de datos primitivos
    typeof 5  // 'number'
    typeof "hola" // 'string'
    typeof true  // 'boolean'
    typeof null  // 'object'
    typeof undefined // 'undefined'

    // Tipos de datos de objeto 
    typeof console.log  // 'function'
    typeof {tipo: "objeto"} // 'object'
    typeof [1,2,3,4]  // 'object'
```

<br>

### Variables

> Es la representación de algun lugar en memroia que nosotros vamos a reservar para poder guardar el valor.

> Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let.
> - var: Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma global.
> - const: sirve para declarar variables que nunca van a ser modificadas.
> - Let: Son variables que pueden ser modificadas y su contexto es de bloque.

#### Ejemplo:
```js
    var nombre = "Orlando";

    // Declarar variable
    var edad;

    // Inicializar esa variable
    edad = 23

    var elementos = ["Computadora", "Celular"];

    var persona = {
        nombre: "Orlando",
        edad: 23
    };

    // Acceder a una variable.
    console.log(nombre) //"Orlando"
```

<br>

### ¿Que son las funciones?

> Las funciones son bloques de código que solucionan un problema específico para ser reutilizados. Existen dos tipos de funciones: declarativas y expresivas.

#### ¿Qué son las funciones declarativas?
> En JavaScript, las funciones declarativas se las declara con la palabra reservada function.

> Ejemplo de una función declarativa.

```js
    // Declaración de la función
    function suma(a, b)
    {
        return a + b;
    }

    function otraSuma(a, b)
    {
        console.log(`La suma es ${a+b}`)
    }
```

> La invocación o llamada es la manera que utilizamos las funciones para utilizar el valor de retorno (return) según ciertos argumentos.

```js
    // Invocación de la función
    suma(2,3)

    var resultado1 = suma(2,3)
    var resultado2 = suma(4,6)
    var resultado3 = suma(10,12)
    
    console.log(`Resultado: ${resultado1}`) //5
    console.log(resultado2) //10
    console.log(resultado3) //22
```

#### ¿Qué son las funciones expresivas o anónimas?
> Las funciones expresivas o anónimas consisten en guardar la función en una variable. Tienen la misma declaración e invocación que las funciones declarativas. La diferencia consiste en no especificar un nombre en la función, sino que utiliza el nombre de la variable.

```js
    // Declaración
    var suma = function (a, b) {
        return a + b
    }
    // Invocación
    var resultado = suma(2, 2)

    console.log(resultado) //4
```

#### Diferencias de estas dos tipos de funciones.
> A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

> Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

![hosting funciones](./imgMD/hoisting.webp)


<br><br>

## Capitulo 4. Scope
> El scope es cada uno de los entornos donde las variables tienen alcance dentro del código de JavaScript. En otras palabras, determina que valor tendrá la variable dependiendo dónde se encuentre.

- Tipos de scope

> Scope Global:
> - Las variables globales son aquellas que se encuentran declaradas fuera de los bloques de código o funciones .El scope global es el entorno donde las variables globales pueden ser accedidas desde cualquier lugar de nuestro programa.

```js
    var nombre = "JavaScript"

    function saludar(){
        console.log("Hola " + nombre)
    }

    saludar()
```

> Scope Local:
> - Las variables locales son aquellas que se encuentran declaradas dentro de los bloques de código o funciones. El scope local es el entorno donde las variables locales solo se pueden acceder desde una función o bloque del programa.

```js
    function saludo() {
        let nombre = "Andres" // scope local
        console.log(nombre)
    }

    saludo() // "Andres"
    console.log(nombre) // ReferenceError: nombre is not defined
```


<br><br>

## Capitulo 5. Hoisting

> Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

> El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.

Hoisting en variables declaradas con var

```js
    console.log(nombre) // undefined
    var nombre = "Orlando" 
```
Lo que JavaScript está haciendo sería lo siguiente:

```js
    // Hoisting: Declara y asigna undefined
    var nombre = undefined
    console.log(nombre) // undefined
    nombre = "Orlando"
```
Aquí el nombre de Hoisting o elevación.

<br>
Hoisting en funciones.

```js
    console.log( saludar() )

    function saludar() {
        return "Hola"
    }
```

La respuesta es "Hola", porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.

```js
    // Hoisting: Declara la función antes de ser invocada
    function saludar() {
    return "Hola"
    }

    console.log( saludar() ) // "Hola"
```

Pero, lo que realmente sucede es que JavaScript guarda la función en memoria en la fase de creación de un contexto de ejecución, no asigna undefined como con las variables.

### Buenas prácticas

> El tema de Hoisting solo sucede con las declaraciones de variables y funciones, por lo que se recomienda declarar las variables y las funciones lo más arriba posible del código, para evitar errores.

> También, el tema de hoisting ya está solucionado con las nuevas formas de declarar variables con let y const.


<br><br>
## Capitulo 6. Coerción