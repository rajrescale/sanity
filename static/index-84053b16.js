import{h as f,r as l,aP as P,j as e,Y as h,aQ as j,aR as B,e as I,Z as E,aS as H,W as k,B as C,aT as R,U as S}from"./sanity-16d56cda.js";const T=f(S)`
  position: relative;
`;function U(a){const{children:o}=a,{collapsed:t}=B();return e.jsx(T,{hidden:t,height:"fill",overflow:"auto",children:o})}function b(a){const{actionHandlers:o,index:t,menuItems:n,menuItemGroups:r,title:i}=a,{features:s}=I();return!(n!=null&&n.length)&&!i?null:e.jsx(E,{actions:e.jsx(H,{menuItems:n,menuItemGroups:r,actionHandlers:o}),backButton:s.backButton&&t>0&&e.jsx(k,{as:C,"data-as":"a",icon:R,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}function g(a){const{index:o,pane:t,paneKey:n,...r}=a,{child:i,component:s,menuItems:u,menuItemGroups:d,type:v,...m}=t,[c,p]=l.useState(null),{title:x=""}=P(t);return e.jsxs(h,{id:n,minWidth:320,selected:r.isSelected,children:[e.jsx(b,{actionHandlers:c==null?void 0:c.actionHandlers,index:o,menuItems:u,menuItemGroups:d,title:x}),e.jsxs(U,{children:[j.isValidElementType(s)&&l.createElement(s,{...r,...m,ref:p,child:i,paneKey:n}),l.isValidElement(s)&&s]})]})}export{g as default};
