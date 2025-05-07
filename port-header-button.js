/**
 * Copyright 2025 cooperjw17
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


/**
 * `port-header-button`
 * 
 * @demo index.html
 * @element port-header
 */
export class PortHeaderButton extends DDDSuper(I18NMixin(LitElement)) {

    static get tag() {
      return "port-header-button";
    }
  
    constructor() {
      super();
      this.title = "";
      this.screenId = "";
      this.href = "";
      this.clickHandler = () => {
        if (this.screenId) {
          window.location.hash = this.screenId;
          const target = document.querySelector(`#${this.screenId}`);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      };
  
      this.registerLocalization({
          context: this,
          localesPath: new URL("./locales/", import.meta.url).href, 
          locales: ["ar", "es", "hi", "zh"],
        });
    }
  
    // Lit reactive properties
    static get properties() {
      return {
        ...super.properties,
        title: { type: String },
        screenId: { type: String, attribute: 'screen-id'  },
      };
    }
  
    // Lit scoped styles
    static get styles() {
      return [super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        h3 span {
          font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
        }
  
        .buttonSelection {
          display: inline-block;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-3), var(--ddd-spacing-5);
          color: var(--ddd-theme-default-white);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: var(--ddd-radius-sm);
        }
  
  
        
      `];
    }
  
  
    // Lit render the HTML
    render() {
      return html`
  <div class="buttonSelection" @click="${this.clickHandler}">
          ${this.title}
          <slot></slot>
        </div>
        `;
    }
  }
  
  globalThis.customElements.define(PortHeaderButton.tag, PortHeaderButton);