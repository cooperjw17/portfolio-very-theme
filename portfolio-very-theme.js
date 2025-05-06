/**
 * Copyright 2025 cooperjw17
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "@haxtheweb/scroll-button/scroll-button.js";
import "./navbar.js";

/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
  }
  //   this.title = "";
  //   this.t = this.t || {};
  //   this.t = {
  //     ...this.t,
  //     title: "Title",
  //   };
  //   this.registerLocalization({
  //     context: this,
  //     localesPath:
  //       new URL("./locales/portfolio-very-theme.ar.json", import.meta.url).href +
  //       "/../",
  //     locales: ["ar", "es", "hi", "zh"],
  //   });
  // }

  // // Lit reactive properties
  // static get properties() {
  //   return {
  //     ...super.properties,
  //     title: { type: String },
  //   };
  // }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        width: 100vw;
        height: 100vh;
        color-scheme: light dark;
        box-sizing: border-box;
        color: light-dark(var(--ddd-theme-default-white), var(--ddd-theme-default-white));
      }
      .wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }
      portfolio-scroll-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
      }
      @media (max-width: 742px){
        .wrapper{
          width: 100vw;
          height: auto;
        }
      }

    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <nav-bar></nav-bar>
    <portfolio-scroll-button></portfolio-scroll-button>
    <div class="wrapper">
    <slot></slot>
    </div>`;
  }

  // /**
  //  * haxProperties integration via file reference
  //  */
  // static get haxProperties() {
  //   return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
  //     .href;
  // }
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);