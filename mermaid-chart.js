import { LitElement, html, css } from 'https://unpkg.com/lit@3.1.0/index.js?module';

export class MermaidChart extends LitElement {
  static properties = {
    chart: { type: String },
    config: { type: Object },
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
    
    #mermaid-container {
      overflow: auto;
      width: 100%;
    }
    
    .error {
      color: red;
      font-family: monospace;
      padding: 10px;
      border: 1px solid red;
      border-radius: 4px;
      background-color: #ffe6e6;
    }
  `;

  constructor() {
    super();
    this.chart = '';
    this.config = {};
  }

  async renderDiagram() {
    try {
      // Import Mermaid dynamically
      const mermaid = await import('https://unpkg.com/mermaid@10.7.0/dist/mermaid.esm.min.mjs');
      
      // Initialize mermaid with any provided config
      if (Object.keys(this.config).length > 0) {
        mermaid.default.initialize(this.config);
      }
      
      // Render the diagram
      const { svg, bindFunctions } = await mermaid.default.render(
        'mermaid-svg-' + Math.random().toString(36).substring(2, 15),
        this.chart
      );
      
      this.shadowRoot.getElementById('mermaid-container').innerHTML = svg;
    } catch (error) {
      console.error('Error rendering Mermaid diagram:', error);
      this.shadowRoot.getElementById('mermaid-container').innerHTML = 
        `<div class="error">Error rendering diagram: ${error.message}</div>`;
    }
  }

  updated(changedProperties) {
    if (changedProperties.has('chart') || changedProperties.has('config')) {
      if (this.chart) {
        this.renderDiagram();
      }
    }
  }

  render() {
    return html`
      <div id="mermaid-container">
        <!-- Mermaid diagram will be rendered here -->
      </div>
    `;
  }
}

customElements.define('mermaid-chart', MermaidChart);
