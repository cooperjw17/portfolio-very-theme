/**
 * Copyright 2025 cooperjw17
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `port-screen`
 * 
 * @demo index.html
 * @element port-screen
 */
export class PortScreen extends DDDSuper(I18NMixin(LitElement)) {

    static get tag() {
      return "port-screen";
    }
  
    constructor() {
      super();
      this.screenType = "";
      this.t = this.t || {};
      this.t = {
        ...this.t,
        title: "Title",
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
        screenNumber: { type: String },
        screenType: { type: String },
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
          height: 100vh;
          width: 100vw;
          box-sizing: border-box;
          
        }
  
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        h3 span {
          font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
        }
        ::slotted(portfolio-screen){
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
      }

      .screenContainer {
      display: flex;
      height: 100vh;
      width: 100vw;
      padding: 2rem;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center; 
    }

    .contentContainer {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center; 
    }

   
    .imageContainer {
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .screenImage {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }


    :host(.screenLeft) .screenContainer {
  flex-direction: row;
  justify-content: space-between;
}

:host(.screenRight) .screenContainer {
  flex-direction: row-reverse;
  justify-content: space-between;
}

:host(.screenBottom) .screenContainer {
  flex-direction: column;
  justify-content: space-between;
}
      `];
    }
    firstUpdated() {
      if (this.screenType) {
        this.classList.add(this.screenType);
      }
    }
    // Lit render the HTML
    render() {
        return html`
        <div class="screenContainer ${this.screenType}">
          <div class="contentContainer">
            <h1>${this.title}</h1>
            <slot name="content"></slot>
          </div>
          <div class="imageContainer">
            <slot name="image"></slot>
          </div>
        </div>
      `;
    }
    
  }
  
  globalThis.customElements.define(PortScreen.tag, PortScreen);