import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Definición de un componente personalizado de Lit
@customElement('holas-element')
class SimpleGreeter extends LitElement {

  static styles = css`
    h1 {
      color: blue;
    }
  `;

  @property({ type: String })
  name = '';

  //Lit element template
  render() {
    return html`
      <h1>Hello ${this.name}</h1>
      <button @click=${this.onClick}>Say more...</button>
    `;
  }

  onClick(e) {
    console.log('Hi again', this.name);
  }
}
