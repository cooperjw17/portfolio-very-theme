/**
 * Copyright 2025 cooperjw17
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./port-header-button.js";

/**
 * `port-header`
 * 
 * @demo index.html
 * @element port-header
 */
export class PortHeader extends DDDSuper(I18NMixin(LitElement)) {

    static get tag() {
      return "port-header";
    }
  
    constructor() {
      super();
      this.title = "";
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
        
        h3 span {
          font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
        }
  
  
        .banner {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--ddd-theme-default-coalyGray);
          opacity: 0.6;
          position: fixed;
          top: var(--ddd-spacing-13);
          left: var(--ddd-spacing-0);
          height: 100px;
          right: var(--ddd-spacing-0);
          z-index: 1;
        }
        .banner a {
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-3);
          color: var(--ddd-theme-default-white);
          text-decoration: none;
        }
      `];
    }
  
    // Lit render the HTML
    render() {
      return html`
       <div class="banner">
          <port-header-button title="About" screen-id="screen-1"></port-header-button>
          <port-header-button title="Work Experience" screen-id="screen-2"></port-header-button>
          <port-header-button title="Presentations & Publications" screen-id="screen-3"></port-header-button>
          <port-header-button title="Professional Development" screen-id="screen-4"></port-header-button>
          <port-header-button title="Contact Me" screen-id="screen-5"></port-header-button>
        </div>
        <slot></slot>
  `;
    }
  }
  
  globalThis.customElements.define(PortHeader.tag, PortHeader);