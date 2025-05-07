/**
 * Copyright 2025 cooperjw17
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';

/**
 * `port-scroll-button`
 * 
 * @demo index.html
 * @element port-scroll-button
 */
export class PortScrollButton extends DDDSuper(I18NMixin(LitElement)) {
    static get tag() {
      return "port-scroll-button";
    }
    
    constructor() {
      super();
      this.title = "";
      this.t = this.t || {};
      this.t = {
        ...this.t,
        title: "Title",
      };
     
    }
    // Lit reactive properties
    static get properties() {
      return {
        ...super.properties,
        title: { type: String },
        icon: { type: String },
        label: { type: String },
      };
    }
    // Lit scoped styles
    static get styles() {
      return [super.styles,
      css`
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
  
  
        h3 span {
          font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
        }
  
  
        :host {
          position: fixed;
          bottom: var(--ddd-spacing-10);
          right: var(--ddd-spacing-10);
          z-index: 9999;
          display: block;
        }

        scroll-button{
            position: fixed;
            bottom: var(--ddd-spacing-2);
            right: var(--ddd-spacing-2);
        }
        
        
        button {
          background-color: var(--ddd-theme-default-inventOrange);
          color: var(--ddd-theme-default-white);
          border: var(--ddd-border-0);
          border-radius: var(--ddd-radius-lg);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
    
        .buttonInside {
          font-size: var(--ddd-spacing-12);
        }
  
      `];
    }
    
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    
    
    // Lit render the HTML
    render() {
      return html`
       <scroll-button></scroll-button>
      `;
    }
  }
  globalThis.customElements.define(PortScrollButton.tag, PortScrollButton);