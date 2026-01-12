# wc-mmd - Web Component for Mermaid Diagrams

A lightweight web component for rendering [Mermaid](https://mermaid-js.github.io/mermaid/#/) diagrams in any environment. Supports all Mermaid diagram types including flowcharts, sequence diagrams, Gantt charts, and C4 diagrams.

## Installation

```bash
npm install wc-mmd
```

## Usage

### 1. In HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>Mermaid Web Component Example</title>
</head>
<body>
  <!-- Using the chart property -->
  <mermaid-chart></mermaid-chart>
  
  <!-- Using slots (alternative approach) -->
  <mermaid-chart>
    graph TD
      A[Start] --> B{Is it?}
      B -->|Yes| C[OK]
      B -->|No| D[Not OK]
      C --> E[End]
      D --> E
  </mermaid-chart>
  
  <script type="module">
    import 'wc-mmd/mermaid-chart.js';
    
    // Only needed for the first chart
    const chart = document.querySelector('mermaid-chart');
    chart.chart = `
      graph TD
        A[Start] --> B{Is it?}
        B -->|Yes| C[OK]
        B -->|No| D[Not OK]
        C --> E[End]
        D --> E
    `;
  </script>
</body>
</html>
```

### 2. In React

```jsx
import React, { useEffect, useRef } from 'react';
import 'wc-mmd/mermaid-chart.js';

function App() {
  const chartRef = useRef(null);
  
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chart = `
        graph TD
          A[Start] --> B{Is it?}
          B -->|Yes| C[OK]
          B -->|No| D[Not OK]
          C --> E[End]
          D --> E
      `;
    }
  }, []);
  
  return (
    <div className="App">
      {/* Using the chart property */}
      <mermaid-chart ref={chartRef}></mermaid-chart>
      
      {/* Using slots (alternative approach) */}
      <mermaid-chart>
        graph TD
          A[Start] --> B{Is it?}
          B -->|Yes| C[OK]
          B -->|No| D[Not OK]
          C --> E[End]
          D --> E
      </mermaid-chart>
    </div>
  );
}

export default App;
```

### 3. With Unpkg (No Build Step Required)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Mermaid Web Component via Unpkg</title>
</head>
<body>
  <!-- Using the chart property -->
  <mermaid-chart></mermaid-chart>
  
  <!-- Using slots (alternative approach) -->
  <mermaid-chart>
    graph TD
      A[Start] --> B{Is it?}
      B -->|Yes| C[OK]
      B -->|No| D[Not OK]
      C --> E[End]
      D --> E
  </mermaid-chart>
  
  <script type="module">
    import 'https://unpkg.com/wc-mmd/mermaid-chart.js';
    
    const chart = document.querySelector('mermaid-chart');
    chart.chart = `
      graph TD
        A[Start] --> B{Is it?}
        B -->|Yes| C[OK]
        B -->|No| D[Not OK]
        C --> E[End]
        D --> E
    `;
  </script>
</body>
</html>
```

## Configuration

You can configure the mermaid instance by setting the `config` property:

```javascript
const chart = document.querySelector('mermaid-chart');
chart.config = {
  theme: 'forest',
  securityLevel: 'loose'
};
```

## C4 Diagram Example

Using the chart property:
```javascript
const chart = document.querySelector('mermaid-chart');
chart.chart = `
  C4Context
    title System Context Diagram for Internet Banking System
    Enterprise_Boundary(b0, "BankBoundary0") {
      Person(customerA, "Banking Customer", "A customer of the bank, with personal bank accounts.")
      System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")
      SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")
    }
    Rel(customerA, SystemAA, "Uses")
    Rel(SystemAA, SystemE, "Uses")
`;
```

Using slots:
```html
<mermaid-chart>
  C4Context
    title System Context Diagram for Internet Banking System
    Enterprise_Boundary(b0, "BankBoundary0") {
      Person(customerA, "Banking Customer", "A customer of the bank, with personal bank accounts.")
      System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")
      SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")
    }
    Rel(customerA, SystemAA, "Uses")
    Rel(SystemAA, SystemE, "Uses")
</mermaid-chart>
```

## Properties

| Property | Type   | Description                          |
|----------|--------|--------------------------------------|
| chart    | string | The mermaid diagram definition       |
| config   | object | Configuration options for mermaid.js |

## Slots

You can define your diagram directly in the HTML using the default slot:

```html
<mermaid-chart>
  graph TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    B -->|No| D[Not OK]
    C --> E[End]
    D --> E
</mermaid-chart>
```

The component will automatically extract the diagram definition from the slot content.

## Events

The component does not emit any custom events but will render the diagram when the `chart` property is set.

## Browser Support

This web component works in all modern browsers that support ES modules and Web Components (Chrome, Firefox, Safari, Edge).

## License

MIT
```
</file_path>