_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"/+1d":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Input/InputPage",function(){return t("JUCr")}])},HOTy:function(e,n,t){"use strict";var r=t("x3oR");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),d=u[0],p=u[1],f=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||d||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,i=r.elements;return i.set(e,n),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,d]);return(0,o.useEffect)((function(){if(!i&&!d){var e=(0,c.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[d]),[f,d]};var o=t("ERkP"),c=t("ZeW2"),i="undefined"!==typeof IntersectionObserver;var a=new Map},JUCr:function(e,n,t){"use strict";t.r(n);var r=t("jg1C"),o=t("lebv"),c=t("Fhg5"),i=(t("ERkP"),t("GsAr")),a=t("lIm4"),s=t("LHL8"),l=t("R5dR"),u=t("nFRM");function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var p=[{name:"description",types:["string","FormControlDescription"],description:"Append a description to the input field."},{name:"error",types:["string","string[]","FormControlError","FormControlError[]"],description:Object(r.jsxs)(r.Fragment,{children:["Displays an error message for the field. Error message will be passed to the ",Object(r.jsx)(a.a,{children:"FormGroup"})," for display purposes."]})},{name:"iconLeft",types:Object(r.jsx)(l.a,{href:"/Icons/IconsPage",as:"/icons",children:"Icon"}),description:Object(r.jsxs)(r.Fragment,{children:["Pass in an"," ",Object(r.jsx)(l.a,{href:"/Icons/IconsPage",as:"/icons",children:"Icon"})," ","component to display to the left of the text."]})},{name:"iconRight",types:Object(r.jsx)(l.a,{href:"/Icons/IconsPage",as:"/icons",children:"Icon"}),description:Object(r.jsxs)(r.Fragment,{children:["Pass in an"," ",Object(r.jsx)(l.a,{href:"/Icons/IconsPage",as:"/icons",children:"Icon"})," ","component to display to the right of the text."]})},{name:"label",types:["string","FormControlLabel"],description:Object(r.jsxs)(r.Fragment,{children:["Label element for inputs. Component with auto generate ",Object(r.jsx)(a.a,{children:"id"}),"'s for the accessibility API."]})},{name:"labelId",types:"string",description:Object(r.jsxs)(r.Fragment,{children:["Appends an ",Object(r.jsx)(a.a,{children:"id"})," to the generated label element."]})}],f=function(e){return Object(r.jsx)(u.a,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({title:"Input",propList:p},e))};n.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{children:"Input"}),Object(r.jsxs)(o.m,{children:["Inputs are stylized form controls with the ability of controling validation."," ",Object(r.jsx)(c.a,{href:"https://design.bigcommerce.com/components/text-field",target:"_blank",children:"Text Field Design Guidelines"}),"."]}),Object(r.jsx)(i.a,{children:'function Example() {\n  const [value, setValue] = useState(\'\');\n\n  const handleChange = (event) => setValue(event.target.value);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Input\n          label="Label"\n          description="Description for the input."\n          placeholder="Placeholder"\n          type="text"\n          value={value}\n          onChange={handleChange}\n        />\n      </FormGroup>\n    </Form>\n  );\n}'}),Object(r.jsx)(o.b,{children:"API"}),Object(r.jsxs)(o.m,{children:["Supports all native ",Object(r.jsx)(a.a,{children:"<input />"})," element attributes."]}),Object(r.jsx)(f,{}),Object(r.jsx)(o.b,{children:"Error State"}),Object(r.jsxs)(o.m,{children:["Inputs allow you to pass in an ",Object(r.jsx)(a.a,{primary:!0,children:"error"})," message that will control the styles of an input. The logic on the input can be controlled with the ",Object(r.jsx)(a.a,{primary:!0,children:"onChange"})," prop."]}),Object(r.jsx)(i.a,{children:'<Form>\n  <FormGroup>\n    <Input\n      label="Email Address"\n      description="Provide a valid email address."\n      value="example@"\n      error="Email address must contain a domain name."\n      onChange={() => null}\n    />\n  </FormGroup>\n</Form>'}),Object(r.jsx)(o.b,{children:"Icons"}),Object(r.jsxs)(o.m,{children:["Inputs can also contain icons via the ",Object(r.jsx)(a.a,{children:"iconLeft"})," & ",Object(r.jsx)(a.a,{children:"iconRight"})," props."]}),Object(r.jsx)(i.a,{children:'<Form>\n  <FormGroup>\n    <Input label="Example" placeholder="Example" iconLeft={<CheckCircleIcon color="success" />} />\n    <Input label="Example" placeholder="Example" iconRight={<CheckCircleIcon color="success" />} />\n  </FormGroup>\n</Form>'})]})}},KeDb:function(e,n,t){"use strict";var r=t("x3oR"),o=t("pONU");n.__esModule=!0,n.default=void 0;var c=o(t("ERkP")),i=t("L9lV"),a=t("7xIC"),s=t("HOTy"),l={};function u(e,n,t,r){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),o=t&&t.pathname||"/",d=c.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],a=t[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),p=d.href,f=d.as,h=e.children,j=e.replace,b=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var O=c.Children.only(h),y=O&&"object"===typeof O&&O.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),v=r(x,2),I=v[0],P=v[1],w=c.default.useCallback((function(e){I(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,I]);(0,c.useEffect)((function(){var e=P&&n&&(0,i.isLocalURL)(p),r="undefined"!==typeof g?g:t&&t.locale,o=l[p+"%"+f+(r?"%"+r:"")];e&&!o&&u(t,p,f,{locale:r})}),[f,p,P,g,n,t]);var E={ref:w,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,a,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:s,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,t,p,f,j,b,m,g)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),u(t,p,f,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var C="undefined"!==typeof g?g:t&&t.locale,F=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(f,C,t&&t.locales,t&&t.domainLocales);E.href=F||(0,i.addBasePath)((0,i.addLocale)(f,C,t&&t.defaultLocale))}return c.default.cloneElement(O,E)};n.default=d},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("jg1C"),o=t("Fhg5"),c=t("jvFD"),i=t.n(c);t("ERkP");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n="/big-design";return n+e}}var s=function(e){var n=e.as,t=e.children,c=e.href;return Object(r.jsx)(i.a,{href:c,as:a(n),passHref:!0,children:"string"===typeof t?Object(r.jsx)(o.a,{children:t}):t})}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("jg1C"),o=t("lebv"),c=t("XPf/"),i=t("BtTX"),a=t("ERkP"),s=t("ZUh6"),l=t("j/s1"),u=Object(l.e)(s.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),d=function(e){var n=e.children,t=e.title,s=Object(a.useState)(!0),l=s[0],d=s[1],p=function(){return d(!l)};return Object(r.jsxs)("div",{children:[Object(r.jsxs)(u,{marginBottom:"xLarge",alignItems:"center",onClick:p,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||p()},tabIndex:0,children:[l?Object(r.jsx)(c.a,{title:"Expand"}):Object(r.jsx)(i.a,{title:"Collapse"}),Object(r.jsx)(o.m,{children:t})]}),!l&&n]})}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("LHL8"),o=t("jg1C"),c=(t("ERkP"),t("j/s1")),i=c.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(c.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(c.d)(["color:",";"],t.colors.primary70)}));function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var s=function(e){return Object(o.jsx)(i,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e))};s.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("jg1C"),o=t("yGqs"),c=t("lebv"),i=t("Fhg5"),a=t("ERkP"),s=t.n(a),l=t("lIm4"),u=t("c2K2"),d=function(e){var n=e.collapsible,t=e.id,i=e.propList,a=e.title,s=function(){return Object(r.jsxs)(o.b,{marginBottom:"xLarge",children:[Object(r.jsx)(o.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.a,{primary:!0,children:n}),t?Object(r.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:function(e){var n=e.types;return Object(r.jsx)(p,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return Object(r.jsx)(l.a,{highlight:!1,children:n})}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return Object(r.jsx)(c.m,{children:n})}}],items:i}),Object(r.jsx)(c.g,{marginTop:"xSmall",children:"Props ending with * are required"})]})};return n?Object(r.jsx)(u.a,{title:"".concat(a," Props"),children:s()}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.c,{id:t,children:a}),s()]})},p=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return Object(r.jsxs)(s.a.Fragment,{children:[e.type===i.a?Object(r.jsx)(l.a,{highlight:!1,children:e}):Object(r.jsx)(l.a,{children:e}),t<n.length-1?" | ":null]},e)})):n.type===i.a?Object(r.jsx)(l.a,{highlight:!1,children:n}):Object(r.jsx)(l.a,{children:n})}}},[["/+1d",0,1,4,7,11,8,9,2,3,6,5,10,12]]]);