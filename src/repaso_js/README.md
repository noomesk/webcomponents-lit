# Repaso JS1

Estos archivos exploran conceptos básicos de JavaScript que son útiles antes de trabajar con Lit y componentes web.

## Archivos

- `molde_clase.js`
  - Explica qué es una clase en JavaScript.
  - Muestra cómo crear una clase base (`PerfilGitHub`) y una clase que hereda de ella (`PerfilAdmin`).

- `extend.js`
  - Habla sobre la herencia con `extends`.
  - Muestra que una clase hija puede agregar propiedades propias sobre la clase padre.
  - Explica el uso de `super()` para llamar al constructor de la clase padre.

- `instancia.js`
  - Muestra cómo crear una instancia con `new`.
  - Explica que los datos específicos del usuario se pasan como argumentos al constructor.
  - Ejemplo de uso de la instancia `perfilDelJefe`.

- `modulos.js`
  - Describe la idea de exportar código desde un archivo y luego importarlo desde otro.
  - Muestra cómo `export` y `import` permiten organizar el proyecto en varios archivos.

## Idea general

- La clase es el molde genérico.
- `extends` crea un molde más especializado.
- `new` crea un objeto concreto con datos reales.
- Los módulos permiten separar el código en archivos reutilizables.

## Relación con Lit

En Lit también trabajas con clases:

- cada componente es una clase que hereda de `LitElement`.
- `@property` define propiedades reactivas.
- el método `render()` devuelve la plantilla HTML.
- dividir tu código en módulos ayuda a mantener el proyecto ordenado.
