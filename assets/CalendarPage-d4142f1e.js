import{j as r,r as x}from"./index-00f3f1f4.js";import{r as k,t as g,a as j,g as S,s as O,n as l,b as m,f,d as v,e as $,h as C,i as I,j as M,k as T,T as z,P as W,C as E}from"./CalendarPage.styled-6d8b77bc.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./iconBase-8465132f.js";function y(e,t){var n;k(1,arguments);var o=e||{},a=g(o.start),c=g(o.end),d=c.getTime();if(!(a.getTime()<=d))throw new RangeError("Invalid interval");var i=[],s=a;s.setHours(0,0,0,0);var p=Number((n=t==null?void 0:t.step)!==null&&n!==void 0?n:1);if(p<1||isNaN(p))throw new RangeError("`options.step` must be a number greater than 1");for(;s.getTime()<=d;)i.push(g(s)),s.setDate(s.getDate()+p),s.setHours(0,0,0,0);return i}function H(e,t){var n,o,a,c,d,i,s,p;k(1,arguments);var w=S(),u=j((n=(o=(a=(c=t==null?void 0:t.weekStartsOn)!==null&&c!==void 0?c:t==null||(d=t.locale)===null||d===void 0||(i=d.options)===null||i===void 0?void 0:i.weekStartsOn)!==null&&a!==void 0?a:w.weekStartsOn)!==null&&o!==void 0?o:(s=w.locale)===null||s===void 0||(p=s.options)===null||p===void 0?void 0:p.weekStartsOn)!==null&&n!==void 0?n:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=g(e),b=h.getDay(),D=(b<u?-7:0)+6-(b-u);return h.setDate(h.getDate()+D),h.setHours(23,59,59,999),h}function P(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return O(t)}const _=l.div``,R=l.button`
  width: 76px;
  height: 34px;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-right: 1px solid rgba(62, 133, 243, 0.2);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: var(--user-panel-active);
  color: var(--blue);
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  transition: var(--transition);
  background-color: ${e=>e.active?"var(--switch-active)":""};
  @media screen and (min-width: 768px) {
    width: 82px;
  }
  &:hover,
  &:focus   {
    background-color: var(--switch-active);
  }
`,N=l.button`
  width: 76px;
  height: 34px;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: var(--white);
  background-color: var(--user-panel-active);
  color: var(--blue);
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  transition: var(--transition);
  background-color: ${e=>e.active?"var(--switch-active)":""};
  @media screen and (min-width: 768px) {
    width: 82px;
  }
  &:hover,
  &:focus,
  &:active {
    background-color: var(--switch-active);
  }
`,A=({typeDateDay:e,setType:t})=>r.jsxs(_,{children:[r.jsx(R,{active:!e,onClick:()=>{t(!1)},children:"Month"}),r.jsx(N,{active:e,onClick:()=>{t(!0)},children:"Day"})]}),B=l.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-bottom: 14px;
  border: 1px solid #dce3e580;
  border-radius: 8px;
  background-color: var(--white);
  @media screen and (min-width: 768px) {
    height: 46px;
    margin-bottom: 18px;
  }
`,F=l.div`
  width: calc(100% / 7);
  padding: 16px 0;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
  color: #343434;
  &:nth-of-type(6) {
    color: var(--blue);
  }
  &:nth-of-type(7) {
    color: var(--blue);
  }
`,V=({selectedDate:e})=>{const t=window.innerWidth<768,n=m(e,{weekStartsOn:1}),o=[];for(let a=0;a<7;a++)o.push(r.jsx(F,{children:f(v(n,a),t?"eeeee":"eee")},x.useId()));return r.jsx(B,{children:o})},q=e=>P`
  color: ${e.color};
  background-color: ${e.currentDay};
`,G=l.div`
  display: grid;
  width: 100%;
  height: 470px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  border: 1px solid #dce3e580;
  border-radius: 8px;
  background-color: #dce3e580;
  @media screen and (min-width: 768px) {
    height: 720px;
  }
`,L=l.a`
  display: flex;
  justify-content: end;
  padding: 2px 2px;
  background-color: var(--white);
  cursor: pointer;
  &:first-of-type {
    border-top-left-radius: 8px;
  }
  &:nth-of-type(7) {
    border-top-right-radius: 8px;
  }
  &:nth-of-type(36) {
    border-bottom-left-radius: 8px;
  }
  &:nth-of-type(42) {
    border-bottom-right-radius: 8px;
  }
  @media screen and (min-width: 768px){
    padding: 4px 4px;
  }
`,J=l.p`
  ${q};
  display: flex;
  width: 20px;
  height: 20px;
  padding: 4px 6px;
  margin: 6px 2px 8px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
  color: ${e=>e.currentMonth?"#343434":"#34343450"};
  color: ${e=>e.currentDay?"var(--white)":""};
  background-color: ${e=>e.currentDay?"var(--blue)":""};
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
    margin: 10px 10px 6px;
    font-size: 16px;
    line-height: 18px;
  }
`,K=({selectedDate:e,setSelectedDate:t})=>{const n=$(e),o=C(e),a=m(n,{weekStartsOn:1}),c=H(o,{weekStartsOn:1}),d=y({start:a,end:c});if(d.length<36){const i=I(c,1);d.push(...y({start:v(c,1),end:i}))}return r.jsx(G,{children:d.map((i,s=x.useId())=>r.jsx(L,{onClick:()=>t(i),children:r.jsx(J,{currentMonth:!!M(i,e),currentDay:!!T(i,e),children:f(i,"d")})},s))})},Q=({selectedDate:e,setSelectedDate:t})=>r.jsxs(r.Fragment,{children:[r.jsx(V,{selectedDate:e}),r.jsx(K,{selectedDate:e,setSelectedDate:t})]}),U=l.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-bottom: 14px;
  border: 1px solid #dce3e580;
  border-radius: 8px;
  background-color: var(--white);
  @media screen and (min-width: 768px) {
    height: 46px;
    margin-bottom: 18px;
  }
`,X=l.div`
  width: calc(100% / 7);
  padding: 16px 0;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  text-transform: uppercase;
  color: var(--user-panel-text);
  `,Y=({selectedDate:e})=>{const t=window.innerWidth<768,n=m(e,{weekStartsOn:1}),o=[];for(let a=0;a<7;a++)o.push(r.jsxs(X,{children:[r.jsx("p",{children:f(v(n,a),t?"eeeee":"eee")}),r.jsx("p",{children:f(v(n,a),"e")})]},x.useId()));return r.jsx(U,{children:o})},Z=({selectedDate:e})=>r.jsx(Y,{selectedDate:e}),ee=()=>{const[e,t]=x.useState(Date.now()),[n,o]=x.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(z,{children:[r.jsx(W,{selectedDate:e,typeDateDay:n,setSelectedDate:t}),r.jsx(A,{typeDateDay:n,setType:o})]}),n?r.jsx(Z,{selectedDate:e}):r.jsx(Q,{selectedDate:e,setSelectedDate:t})]})},oe=()=>r.jsx(E,{children:r.jsx(ee,{})});export{oe as default};
