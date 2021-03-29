_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"2In8":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"5KiJ":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/GettingStarted/GettingStartedPage",function(){return n("hZl/")}])},Alxx:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},UFnO:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},"hZl/":function(e,t,n){"use strict";n.r(t);var r=n("jg1C"),o=n("ZUh6"),c=n("NGm3"),i=n("lebv"),a=n("Fhg5"),s=n("ERkP"),l=n("j/s1"),u=n("plWM"),p=n("lS4U"),b=n("lIm4");t.default=function(){var e=Object(s.useContext)(l.a).spacing;return Object(r.jsxs)(o.a,{flexDirection:"column",children:[Object(r.jsx)("figure",{style:{textAlign:"center"},children:Object(r.jsx)("img",{src:"".concat("/big-design","/logo.svg"),alt:"BigDesign Logo",style:{width:200}})}),Object(r.jsx)(c.a,{alignSelf:"center",children:Object(r.jsx)(i.b,{children:"BigDesign Developer Playground"})}),Object(r.jsx)(i.m,{children:"BigCommerce\u2019s library of React components lets developers build stylish apps that have a native BigCommerce feel at their core. Our components implement BigDesign principles to allow you to create an empathetic and frictionless user experience. The documentation will demonstrate the visual style and behavior of each component. Each component has props that you can pass to the components for further configuration."}),Object(r.jsx)(c.a,{alignSelf:"center",children:Object(r.jsx)(i.c,{marginBottom:"none",children:"Helpful Resources"})}),Object(r.jsx)(c.a,{alignSelf:"center",children:Object(r.jsxs)(u.a,{columnCount:2,columnGap:e.xxxLarge,children:[Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(a.a,{href:"https://design.bigcommerce.com/components",target:"_blank",children:"Design Guidelines"})}),Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(a.a,{href:"https://github.com/bigcommerce/big-design",target:"_blank",children:"GitHub Repo"})}),Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(a.a,{href:"https://medium.com/bigcommerce-developer-blog/bigdesign-build-native-looking-uis-with-the-bigcommerce-design-system-fb06a01a24f2",target:"_blank",children:"Dev Blog Demo"})}),Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(a.a,{href:"https://support.bigcommerce.com/s/group/0F91B000000bnqoSAA/bigdesign-beta",target:"_blank",children:"Beta Community Group"})}),Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(a.a,{href:"https://www.figma.com/file/jTVuUkiZ1j3rux8WHG4IKK/BigDesign-UI-Kit",target:"_blank",children:"Figma UI Kit"})}),Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(a.a,{href:"https://github.com/bigcommerce/channels-app",target:"_blank",children:"Sample App"})}),Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(a.a,{href:"https://codesandbox.io/s/github/bigcommerce/big-design/tree/%40bigcommerce/examples%400.16.1/packages/examples",target:"_blank",children:"CodeSandbox Example"})}),Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(a.a,{href:"https://developer.bigcommerce.com",target:"_blank",children:"Dev Center"})}),Object(r.jsx)(u.a.Item,{children:Object(r.jsx)(a.a,{href:"https://developer.bigcommerce.com/api-docs/getting-started/building-apps-bigcommerce/building-apps",target:"_blank",children:"Building an App"})})]})}),Object(r.jsx)(i.c,{children:"Getting Started"}),Object(r.jsx)(i.m,{children:"Add BigDesign and styled-components to your project:"}),Object(r.jsx)(p.a,{showControls:!1,language:"bash",children:"npm install @bigcommerce/big-design styled-components@4"}),Object(r.jsxs)(i.m,{children:["Import the ",Object(r.jsx)(b.a,{children:"GlobalStyles"})," component and use it once in your app. This will set a few styles globally, including a base font family,"," ",Object(r.jsx)(a.a,{href:"https://fonts.google.com/specimen/Source+Sans+Pro",target:"_blank",children:"Source Sans Pro"})," ","and"," ",Object(r.jsx)(a.a,{href:"https://github.com/necolas/normalize.css/",target:"_blank",children:"normalize.css"}),". We recommend placing it close to your root component. Then import any component, such as ",Object(r.jsx)(b.a,{children:"Button"}),", to use it anywhere in your app."]}),Object(r.jsx)(p.a,{children:"\n        import { Button, GlobalStyles } from '@bigcommerce/big-design';\n\n        // ...\n\n        <App>\n          <GlobalStyles />\n          <Button>Click me</Button>\n        </App>\n      "}),Object(r.jsx)(i.c,{children:"Using this Documentation"}),Object(r.jsx)(i.m,{marginBottom:"none",children:"This documentation uses the React components in the BigDesign library so you can edit them and preview them in real time."}),Object(r.jsxs)(u.a,{children:[Object(r.jsx)(u.a.Item,{children:"Select an element or utility in the left menu to view their props, types and descriptions below, including examples."}),Object(r.jsx)(u.a.Item,{children:"Type directly in the code editor to make changes. Click the time icon to restore the component to default."}),Object(r.jsx)(u.a.Item,{children:"Click the clipboard icon to copy the code snippet to your clipboard. Click the dual color icon to change the background color of the code editor."})]})]})}},i3ax:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",(function(){return o}))},lIm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("LHL8"),o=n("jg1C"),c=(n("ERkP"),n("j/s1")),i=c.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var t=e.highlight,n=e.primary,r=e.theme;return t&&!n&&Object(c.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var t=e.primary,n=e.theme;return t&&Object(c.d)(["color:",";"],n.colors.primary70)}));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var s=function(e){return Object(o.jsx)(i,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))};s.defaultProps={highlight:!0}},lS4U:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("jg1C"),o=n("mVVF"),c=n("/U4Q"),i=n.n(c),a=n("ERkP"),s=n("/QLj"),l=n("+Jfu"),u=n("Bhrl");var p=function(e){var t=e.children,n=e.language,c=e.showControls,p=Object(a.useContext)(u.a).theme,b=function(e){if("string"!==typeof e)throw new Error("<CodeSnippet> children must be of type string");return function(e){var t=e.split("\n");""===t[0].trim()&&t.splice(0,1),""===t[t.length-1].trim()&&t.pop();var n=t[0].search(/\S|$/);return t.map((function(e){return e.substr(n)})).join("\n")}(e)}(t);return Object(r.jsxs)(o.a,{border:"box",marginBottom:"xxLarge",children:[c&&Object(r.jsx)(l.a,{copyToClipboard:function(){return i()(b)},helperText:"Code example"}),Object(r.jsx)(s.a,{code:b,theme:p,language:n,disabled:!0})]})};p.defaultProps={language:"jsx",showControls:!0}},plWM:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("jg1C"),o=n("2In8"),c=n("Alxx"),i=n("UFnO"),a=n("i3ax"),s=n("whUO"),l=n("LHL8"),u=n("ERkP");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var f=n("j/s1"),h=Object(f.d)(["color:",";font-size:",";font-weight:",";line-height:",";padding-left:",";","{column-count:",";column-gap:",";}"],(function(e){return e.theme.colors.secondary70}),(function(e){return e.theme.typography.fontSize.medium}),(function(e){return e.theme.typography.fontWeight.regular}),(function(e){return e.theme.lineHeight.medium}),(function(e){return e.theme.spacing.xLarge}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.columnCount}),(function(e){return e.columnGap})),d=f.e.ol.withConfig({displayName:"styled__StyledOrderedList",componentId:"un4gt8-0"})(["",";list-style-type:",";"],h,(function(e){var t=e.bulleted;return"".concat(t?"decimal":"none")})),m=f.e.ul.withConfig({displayName:"styled__StyledUnorderedList",componentId:"un4gt8-1"})([""," list-style-type:",""],h,(function(e){var t=e.bulleted;return"".concat(t?"disc":"none")}));function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var y=function(e){Object(i.a)(n,e);var t=O(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.ordered?d:m;return Object(r.jsx)(n,j(j({},this.props),{},{children:t}))}}]),n}(u.PureComponent);Object(l.a)(y,"defaultProps",{columnCount:1,columnGap:"normal",ordered:!1,bulleted:!0}),Object(l.a)(y,"Item",(function(e){var t=p({},e);return Object(r.jsx)("li",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))}))},whUO:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))}},[["5KiJ",0,1,4,2,6]]]);