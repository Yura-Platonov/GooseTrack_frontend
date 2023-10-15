import{e as l,s as a,L as d,j as o}from"./index-0dc8361b.js";const g="/GooseTrack_frontend/assets/logo_goose1x-75fc3bc2.png",v="/GooseTrack_frontend/assets/logo_goose2x-49dc0cb7.png";var p={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=l.createContext&&l.createContext(p),s=globalThis&&globalThis.__assign||function(){return s=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)},w=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]]);return t};function f(e){return e&&e.map(function(n,t){return l.createElement(n.tag,s({key:t},n.attr),f(n.child))})}function b(e){return function(n){return l.createElement(y,s({attr:s({},e.attr)},n),f(e.child))}}function y(e){var n=function(t){var r=e.attr,i=e.size,x=e.title,m=w(e,["attr","size","title"]),h=i||t.size||"1em",c;return t.className&&(c=t.className),e.className&&(c=(c?c+" ":"")+e.className),l.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,m,{className:c,style:s(s({color:e.color||t.color},t.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),x&&l.createElement("title",null,x),e.children)};return u!==void 0?l.createElement(u.Consumer,null,function(t){return n(t)}):n(p)}function j(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}},{tag:"polyline",attr:{points:"10 17 15 12 10 7"}},{tag:"line",attr:{x1:"15",y1:"12",x2:"3",y2:"12"}}]})(e)}const k=a.section`
  height: 812px;
  padding-inline: 20px;
  padding-bottom: 74px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  background-color: var(--blue);

  @media screen and (min-width: 768px) {
    min-height: 460px;
    gap: 40px;
  }
`,z=a.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 2px;
  flex: 2;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex: 0;
  }
`,O=a.img`
  display: block;
  width: 142px;
  height: 142px;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,_=a.h1`
  color: var(--white);
  text-shadow: var(--logo-text-shadow);
  font-family: var(--main-font);
  font-size: 44px;
  line-height: 1.1;

  @media screen and (min-width: 768px) {
    font-size: 120px;
    line-height: 1.25;
  }
`,L=a.span`
  font-style: italic;
`,C=a.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  flex: 1.5;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    flex: 0;
    gap: 24px;
  }
`,T=a(d)`
  color: var(--blue);
  font-family: 'Inter';
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.28px;

  border-radius: 16px;
  background-color: var(--white);
  box-shadow: var(--shadow-btn);
  border: 1px solid transparent;
  padding: 14px 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  transition: var(--transition);

  :hover,
  :focus {
    color: var(--white);
    background-color: transparent;
    border-color: var(--white);
    box-shadow: var(--box-shadow-hover);
  }
`,E=a(d)`
  color: var(--white);
  text-shadow: var(--text-shadow);
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-decoration-line: underline;

  border-radius: 16px;
  background-color: transparent;
  box-shadow: none;
  border: 1px solid transparent;
  padding: 14px 32px;

  transition: var(--transition);

  :hover,
  :focus {
    color: var(--white);
    background-color: transparent;
    border-color: var(--white);
    box-shadow: var(--box-shadow-hover);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`,I=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > a {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`,N=()=>o.jsxs(k,{children:[o.jsxs(z,{children:[o.jsx(I,{children:o.jsx(d,{to:"/",children:o.jsx(O,{src:`${g}`,srcSet:`${g} 1x, ${v} 2x`,alt:"Logo"})})}),o.jsxs(_,{children:["G",o.jsx(L,{children:"oo"}),"seTrack"]})]}),o.jsxs(C,{children:[o.jsxs(T,{to:"/login",children:["Log in ",o.jsx(j,{size:18})]}),o.jsx(E,{to:"/register",children:"Sign up"})]})]});function P(){return o.jsx(o.Fragment,{children:o.jsx(N,{})})}export{P as default};
