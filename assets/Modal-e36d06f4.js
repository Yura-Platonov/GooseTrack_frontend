import{d as s,s as e,r as c,e as p,j as t}from"./index-14ee80d0.js";import{a as l}from"./index.esm-589db7d2.js";const n=s`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }`,x=e.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--modal-backdrop);
  animation: ${n} 500ms linear;
  opacity: 1;
  z-index: 1000;
  overflow: auto;
`,h=e.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  animation: ${n} 1500ms linear;
  opacity: 1;
  z-index: 1000;
`,m=e.div`
  max-width: 335px;
  min-height: 290px;
  width: 100%;
  padding: 20px;
  background-color: var(--white);
  border: var(--border-modal);
  border-radius: 8px;
  box-shadow: 0px 4px 57px 0px #1111110d;

  @media screen and (min-width: 768px) {
    max-width: 396px;
    min-height: 360px;
    padding: 32px;
  }
`,u=e.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: var(--white);
  border: none;
`,f=e(l)`
  width: 24px;
  height: 24px;

  fill: var(--primary-text-color);
  transition: fill var(--transition);
  background-color: var(--white);

  &:hover,
  &:focus {
    fill: var(--blue);
  }
`,w=({children:r,onCloseModal:i})=>{const a=o=>{o.currentTarget===o.target&&i()};return c.useEffect(()=>{const o=d=>{d.code==="Escape"&&i()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[i]),p.createPortal(t.jsxs(t.Fragment,{children:[t.jsx(x,{onClick:a}),t.jsx(h,{children:t.jsxs(m,{children:[t.jsx(u,{type:"button",onClick:i,children:t.jsx(f,{})}),r]})})]}),document.getElementById("portal"))};export{w as M};
