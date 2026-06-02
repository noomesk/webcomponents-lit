//definiciòn de un componente segun documentaciòn de lit: 
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  render() {
    return html`<p>Hello, world!</p>`;
  }
}
/*Imagina que quieres crear un botón personalizado para usar en varias partes de tu página web.

El nombre de la etiqueta HTML será mi-boton.

El nombre de la clase será MiBoton.

Dentro del render(), debe devolver un simple <button>¡Haz clic aquí!</button>.

Aquí tienes la primera línea con las herramientas importadas para que empieces. 
¿Cómo escribirías el resto del código para definir este componente?*/
//componente boton:
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('mi-boton')
export class MiBoton extends LitElement {
  render() {
    return html`<button>¡Haz clic aquí!</button>`;
  }
}