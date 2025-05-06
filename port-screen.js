/**
 * Copyright 2025 cooperjw17
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

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
      this.title = "";
      this.color = "";
    }
  
    // Lit reactive properties
    static get properties() {
      return {
        ...super.properties,
        title: { type: String },
        color: { type: String },
      };
    }
  
    // Lit scoped styles
    static get styles() {
      return [super.styles,
      css`
        :host {
          display: block;
          color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-white));
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          height: 100vh;
          max-width: 100vw;
          color-scheme: light dark;
        }
  
        .wrapper {
          display: flex;
          flex-direction: row;
          height: 100vh;
          max-width: 100vw;
          background-color: var(--theme-default-color);
          align-items: center;
          gap: var(--ddd-spacing-2);
        }

        ::slotted(img[slot="image"]){
          height: auto;
          max-width: 350px;
          width: 100%;
          border-radius: var(--ddd-border-radius, 8px);
        }

        .content-container {
          text-align: left;
          flex: 2;
          max-width: 100%;
          font-size: var(--ddd-font-size-s);
          color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-white));
        }

        .image-container {
          text-align: center;
          flex: 1;
          max-width: 100%
        }

        @media(max-width: 742px){
          .wrapper {
          display: flex;
          width: 100vw;
          height: auto;
          flex-direction: column-reverse;
        }
        .content-container {
          font-size: var(--ddd-font-size-4xs);
        }
        ::slotted(img[slot="image"]) {
          max-width: 150px;
          height: auto;
        }
        }        
      `];
    }
    
    updated(changedProperties){
      super.updated(changedProperties);
      if (changedProperties.has('color')){
        this.style.setProperty('--theme-default-color', `var(--ddd-theme-default-${this.color})`);
      }
    }

    // Lit render the HTML
    render() {
        return html`
        <div class="wrapper">
          <div class="image-container">            
            <slot name="image"></slot>
          </div>
          <div class="content-container">
          <h1 class="title">${this.title}</h1>
            <slot name="content"></slot>
          </div>
        </div>
      `;
    }
    
  }
  
  globalThis.customElements.define(PortScreen.tag, PortScreen);