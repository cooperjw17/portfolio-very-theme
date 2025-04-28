/**
 * Copyright 2025 cooperjw17
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

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
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        h3 span {
          font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
        }
        .banner {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #00000066;
            opacity: 0.8;
            position: fixed;
            top: 50px;
            left: 0;
            height: 100px;
            right: 0;
            z-index:1;
        }
        .banner a{
            margin: 10px;
            padding: 10px;
            color: white;
            text-decoration: none;
        }
      `];
    }
  
    // Lit render the HTML
    render() {
      return html`
    <div class="banner">
    <a href ="#screen-1">About Me</a>
    <a href ="#screen-2">Research</a>
    <a href ="#screen-3">Presentations and Publications</a>
    <a href ="#screen-4">Professional Development</a>
    <a href ="#screen-5">Conatct</a>
    </div>
    <slot></slot>
  `;
    }
  }
  
  globalThis.customElements.define(PortHeader.tag, PortHeader);