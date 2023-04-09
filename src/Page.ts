import { One } from "../one";
import { Title } from "./components/Title";

import { BasicComponent } from "./examples/BasicComponent";
import srcBasicComponent from "!!raw-loader!./examples/BasicComponent";

import { TextExample } from "./examples/TextExample";
import srcLTextExamplefrom from "!!raw-loader!./examples/TextExample";

import { IfExample } from "./examples/IfExample";
import srcIfExample from "!!raw-loader!./examples/IfExample";

import { ForExample } from "./examples/ForExample";
import srcForExample from "!!raw-loader!./examples/ForExample";

import { BindingExample } from "./examples/BindingExample";
import srcBindingExample from "!!raw-loader!./examples/BindingExample";

import { SlotExample } from "./examples/SlotExample";
import srcExampleSlot from "!!raw-loader!./examples/SlotExample";

import { ChildExample } from "./examples/ChildExample";
import srcChildExample from "!!raw-loader!./examples/ChildExample";

import srcChildExampleRecommended from "!!raw-loader!./examples/ChildExampleRecommended";

import srcSelfClosingExample from "!!raw-loader!./examples/SelfClosingExample";
import { SelfClosingExample } from "./examples/SelfClosingExample";

import { ComponentEventExample } from "./examples/ComponentEventExample";
import srcBindingExample2 from "!!raw-loader!./examples/ComponentEventExample";

import { TwoWayBindingExample } from "./examples/TwoWayBindingExample";
import srcTwoWayBindingExample from "!!raw-loader!./examples/TwoWayBindingExample";

import { MultipleSlotsExample } from "./examples/MultipleSlotsExample";
import srcMultipleSlotExample from "!!raw-loader!./examples/MultipleSlotsExample";

import { EOP } from "./components/EOP";

import { CodeAndDemo } from "./components/CodeAndDemo";
import { HighlightCode } from "./components/HighlightCode";
import { injectFileCode } from "./utils/injectFileCode";
import { injectCode } from "./utils/injectCode";
import { escapeHtml } from "./utils/escapeHtml";

export class Page extends One {
  render() {
    return `
<x-title></x-title>

<h2>Overview</h2>
<p>
One is a lightweight framework that makes it easy to build web applications with its focus on simplicity and transparency.
</p>
<p>
The entire framework is contained within a single class, making it easy to use and understand.
<p>
At only 11KB TypeScript in size (1.7KB JavaScript when gzip compressed), the class includes implementation of basic features found in modern frameworks, such as if statements, for loops, slots, and props.
</p>
<p>
With zero dependencies and no build step required, One is a great choice for building small to medium-sized web applications.
</p>

<h2>Usage</h2>

<h3>install</h3>
<p>Install the package with npm.</p>
<pre><code class="code language-xml">npm install @toshusai/one</code></pre>

<h3>basic</h3>
<p>You may inherit the Component class and implement the template method.</p>
<${HighlightCode.tag}
  :code="${injectFileCode(
    srcBasicComponent.replace('  static tag = "x-child-example";\n', "")
  )}">
</${HighlightCode.tag}>
<p>To initialize the application, create an instance and pass the root HTMLElement as an argument to the mount method.</p>
<${CodeAndDemo.tag}
  :code="${injectCode(
    `new BasicComponent().mount(document.getElementById("app")!);`
  )}">
  <${BasicComponent.tag}></${BasicComponent.tag}>
</${CodeAndDemo.tag}>

<h3>components</h3>
<${CodeAndDemo.tag}
  :code="${injectFileCode(
    srcChildExample.replace('  static tag = "x-child-example";\n', "")
  )}"
>
  <tpl2>
    <p>By passing the name and class when using the component to deps, you can use that tag in the component.</p>
  </tpl2>
  <${ChildExample.tag}></${ChildExample.tag}>
</${CodeAndDemo.tag}>
<details>
  <summary class="note-card">It is recommended to store tag names as variables.</summary>
  <div class="details-child">
    <p>By declaring tag names as static properties and reusing them, you can avoid typos and make refactoring easier. </p>
    <${HighlightCode.tag} :code="${injectFileCode(srcChildExampleRecommended)}">
    </${HighlightCode.tag}>
  </div>
</details>
<details>
  <summary class="note-card">Please avoid using self-closing tags in components.</summary>
  <div class="details-child">
    <p>closing tags are not considered valid HTML and may prevent subsequent sibling elements from being rendered.</p>
    <${CodeAndDemo.tag} :code="${injectFileCode(srcSelfClosingExample)}">
      <${SelfClosingExample.tag}></${SelfClosingExample.tag}>
    </${CodeAndDemo.tag}>
  </div>
</details>

<h3>-text</h3>
<${CodeAndDemo.tag}
  :code="${injectFileCode(srcLTextExamplefrom)}"
>
  <tpl2>
    <p>-text is a directive that can give expressions.</p>
  </tpl2>
  <${TextExample.tag}></${TextExample.tag}>
</${CodeAndDemo.tag}>

<h3>:attrs & @event</h3>
<${CodeAndDemo.tag}
  :code="${injectFileCode(srcBindingExample)}"
>
  <tpl2>
    <p>
Attributes starting with <span class="inline-code">:</span> or <span class="inline-code">@</span> evaluate the value as an expression.
For <span class="inline-code">:</span> attributes, the result is assigned to the attribute.
For <span class="inline-code">@</span> attributes, the result is registered using <span class="inline-code">addEventListener()</span>.
    </p>
  </tpl2>
  <${BindingExample.tag}></${BindingExample.tag}>
</${CodeAndDemo.tag}>

<h3>:props</h3>
<${CodeAndDemo.tag}
  :code="${injectFileCode(srcTwoWayBindingExample)}"
>
  <tpl2>
    <p>Attributes starting with <span class="inline-code">:</span> evaluate the value as an expression and bind it to a property of the child component.</p>
    <p>Using <span class="inline-code">::</span> creates a two-way binding, allowing changes in the child component to update the corresponding property of the parent component.</p>
    <p class="note-card">Please use kebab-case for attributes, and camelCase for methods and properties.</p>
  </tpl2>
  <${TwoWayBindingExample.tag}></${TwoWayBindingExample.tag}>
</${CodeAndDemo.tag}>

<h3>@event</h3>
<${CodeAndDemo.tag}
  :code="${injectFileCode(srcBindingExample2)}"
>
  <tpl2>
    <p>When an attribute starting with <span class="inline-code">@</span> is attached to a component, the value is evaluated as an expression and registered as an event listener for the child component. The child component can trigger the event using emit.</p>
  </tpl2>
  <${ComponentEventExample.tag}></${ComponentEventExample.tag}>
</${CodeAndDemo.tag}>

<h3>-if</h3>
<${CodeAndDemo.tag}
  :code="${injectFileCode(srcIfExample)}"
>
  <tpl2>
    <p>if can toggle the display of the DOM itself. receives a bool.</p>
  </tpl2>
  <${IfExample.tag}></${IfExample.tag}>
</${CodeAndDemo.tag}>

<h3>-for</h3>
<${CodeAndDemo.tag} :code="${injectFileCode(srcForExample)}">
  <tpl2>
    <${HighlightCode.tag} :lang="'xml'" :code="${injectCode(
      escapeHtml(`<div -for="X in Y"></div>`)
    )}">
    </${HighlightCode.tag}>
    <p>
<span class="inline-code">X</span> is the current item in the for scope.
<span class="inline-code">Y</span> is the array to iterate over.
    </p>
  </tpl2>
  <${ForExample.tag}></${ForExample.tag}>
</${CodeAndDemo.tag}>

<h3>&lt;slot&gt;</h3>
<${CodeAndDemo.tag} :code="${injectFileCode(srcExampleSlot)}">
  <tpl2>
    <p>When you include <span class="inline-code">&lt;slot&gt;</span> in a component, the child elements of the parent component will be rendered into the <span class="inline-code">&lt;slot&gt;</span>.</p>
  </tpl2>
  <${SlotExample.tag}></${SlotExample.tag}>
</${CodeAndDemo.tag}>

<h3>&lt;multiple-slots&gt;</h3>
<${CodeAndDemo.tag} :code="${injectFileCode(srcMultipleSlotExample)}">
  <tpl2>
    <p>
If you want to use multiple slots, you can specify them as <span class="inline-code">&lt;slot-XXX&gt;</span> in the child component,
and use <span class="inline-code">&lt;tpl-XXX&gt;</span> in the parent component to render into the corresponding slot with the same suffix.
<span class="inline-code">&lt;tpl&gt;</span> can also be used to render into the unnamed <span class="inline-code">&lt;slot&gt;</span>.
The suffix-less <span class="inline-code">&lt;tpl&gt;</span> is optional.
    </p>
  </tpl2>
  <${MultipleSlotsExample.tag}></${MultipleSlotsExample.tag}>
</${CodeAndDemo.tag}>

<${EOP.tag}></${EOP.tag}>
`;
  }

  public deps = {
    [BasicComponent.tag]: BasicComponent,
    [TextExample.tag]: TextExample,
    [HighlightCode.tag]: HighlightCode,
    [Title.tag]: Title,
    [IfExample.tag]: IfExample,
    [ForExample.tag]: ForExample,
    [BindingExample.tag]: BindingExample,
    [EOP.tag]: EOP,
    [CodeAndDemo.tag]: CodeAndDemo,
    [SlotExample.tag]: SlotExample,
    [ChildExample.tag]: ChildExample,
    [SelfClosingExample.tag]: SelfClosingExample,
    [ComponentEventExample.tag]: ComponentEventExample,
    [TwoWayBindingExample.tag]: TwoWayBindingExample,
    [MultipleSlotsExample.tag]: MultipleSlotsExample,
  };
}
