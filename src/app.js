import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * MiSaludo es un componente web creado con Lit.
 *
 * - Extiende LitElement para aprovechar la actualización reactiva.
 * - Define una propiedad `nombre` que se puede cambiar desde HTML.
 * - Usa `render()` para devolver una plantilla HTML declarativa.
 */
@customElement('mi-saludo')
export class MiSaludo extends LitElement {
  @property({ type: String })
  nombre = 'Mundo';

  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      padding: 16px;
      border-radius: 12px;
      background: #f5f7ff;
      color: #1f2937;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
      max-width: 400px;
    }

    strong {
      color: #0f4c81;
    }
  `;

  render() {
    return html`
      <!-- La plantilla se actualiza automáticamente cuando cambia `nombre`. -->
      <p>Hola, <strong>${this.nombre}</strong>! 👋</p>
      <p>Este es un componente Lit sencillo que usa propiedades reactivas.</p>
    `;
  }
}
