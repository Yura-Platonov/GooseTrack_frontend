import{s,j as e,r,a as c}from"./index-cf2539fd.js";import g from"./sidebar-e85d0e3f.js";const C=s.section`
  margin-top: 24px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 335px;
   /* display: flex; */

.btn {
    padding: 0;
    border: 0;
    background-color: var(--white);
  }
  .burgerBtn {
    margin-right: auto;
  }
  .fedBut {
  }
  .head-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-items: flex-start;
  }
  .avi {
    border-radius: 32px;
    border: 1.8px solid #3e85f3;
    width: 32px;
    height: 32px;
  }
  .user-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  .user-name {
    color: var(--user-panel-text);

    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.28;
  }
  @media (min-width: 768px) {
    margin-top: 24px;
    margin-left: 20px;
    margin-right: 20px;
    max-width: 704px;

    .head-box {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .avi {
      border-radius: 44px;
      border: 1.8px solid #3e85f3;
      width: 44px;
      height: 44px;
    }
    .user-box {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 14px;
    }
    .user-name {
      color: var(--user-panel-text);
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 1;
    }
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`,u="data:image/png;base64,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",m=s.button`
  /* padding: 12px 32px;
  color: var(--white);
  background-color: var(--blue);
  border-radius: 14px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.06em;
  font-weight: 600;
  border: none;
  text-shadow: var(--text-shadow);
  box-shadow: var(--box-shadow);
  transition: var(--transition); */
  display: flex;
  align-items: flex-start;
  gap: 10px;
  border: 0px;
  background: var(--blue);
  color: var(--white);
  padding: 8px 20px;
  border-radius: 10px;
  margin-right: 18px;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;

  &:hover {
    color: var(--black);
    box-shadow: var(--box-shadow-hover);
  }
  @media (min-width: 768px) {
    padding: 12px 32px;
    border-radius: 14px;
    margin-right: 24px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.28;
  }
`,w=({onOpenModal:t})=>e.jsx(m,{onClick:t,children:"Feedback"}),f=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--modal-backdrop);
  opacity: 1;
  z-index: 1000;
  overflow: auto;
  transition: opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1);
`,j=s.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  border-radius: 16px;
  z-index: 1000;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
`,b=({children:t,onCloseModal:i})=>{const a=n=>{n.currentTarget===n.target&&i()};return r.useEffect(()=>{const n=o=>{o.code==="Escape"&&i()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[i]),c.createPortal(e.jsxs(e.Fragment,{children:[e.jsx(f,{onClick:a}),e.jsx(j,{children:t})]}),document.getElementById("portal"))},A=({open:t,onCloseModal:i})=>t?e.jsx("div",{children:e.jsx(b,{onCloseModal:i,children:"Feedbackform will be here"})}):null,y=()=>{const[t,i]=r.useState(!1),[a,n]=r.useState(!1),[o,h]=r.useState(window.innerWidth),d=()=>{i(!t)},x=()=>{n(!0)},p=()=>{n(!1)};return r.useEffect(()=>{const l=()=>{h(window.innerWidth)};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]),e.jsxs(C,{children:[t&&o<1440?e.jsx(g,{toggleMenu:d}):null,e.jsxs("div",{className:"head-box",children:[e.jsx("button",{className:"btn burgerBtn",type:"button",onClick:d,children:o>=768?e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",children:[e.jsx("path",{d:"M4.25 17H29.75",stroke:"#343434",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M4.25 8.5H29.75",stroke:"#343434",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M4.25 25.5H29.75",stroke:"#343434",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M3 12H21",stroke:"#343434",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M3 6H21",stroke:"#343434",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M3 18H21",stroke:"#343434",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx(w,{onOpenModal:x}),e.jsxs("div",{className:"user-box",children:[e.jsx("button",{className:"btn",type:"button",children:o>=768?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:e.jsx("path",{d:"M27.6558 17.3933C26.7523 17.6333 25.8214 17.7547 24.8865 17.7546C22.0398 17.7546 19.3665 16.648 17.3585 14.64C16.0399 13.3138 15.0919 11.6651 14.6091 9.85837C14.1262 8.05161 14.1253 6.14985 14.6065 4.34264C14.6666 4.11669 14.6662 3.8789 14.6054 3.65314C14.5446 3.42738 14.4255 3.22157 14.26 3.05638C14.0945 2.89119 13.8885 2.77241 13.6627 2.71196C13.4368 2.65151 13.199 2.65152 12.9732 2.71198C10.7107 3.31489 8.64659 4.50214 6.98784 6.15464C1.79051 11.352 1.79051 19.812 6.98784 25.012C8.22321 26.2542 9.69269 27.2391 11.3112 27.9097C12.9298 28.5803 14.6652 28.9232 16.4172 28.9186C18.1687 28.9236 19.9037 28.5809 21.5218 27.9105C23.14 27.2402 24.609 26.2554 25.8438 25.0133C27.4976 23.3542 28.6854 21.289 29.2878 19.0253C29.3477 18.7994 29.3472 18.5618 29.2864 18.3362C29.2256 18.1106 29.1067 17.9049 28.9415 17.7397C28.7762 17.5745 28.5705 17.4555 28.3449 17.3947C28.1193 17.334 27.8817 17.3335 27.6558 17.3933ZM23.9598 23.128C22.9718 24.1214 21.7965 24.9091 20.5021 25.4453C19.2076 25.9815 17.8196 26.2557 16.4185 26.252C15.0169 26.2555 13.6285 25.981 12.3336 25.4446C11.0387 24.9081 9.86302 24.1203 8.87451 23.1266C4.71718 18.968 4.71718 12.2 8.87451 8.04131C9.67785 7.23887 10.6053 6.57119 11.6212 6.06398C11.4725 7.98272 11.7398 9.91095 12.4048 11.7169C13.0698 13.5228 14.1169 15.1639 15.4745 16.528C16.8356 17.8898 18.4762 18.9398 20.2829 19.6053C22.0896 20.2709 24.0193 20.5361 25.9385 20.3826C25.4285 21.3968 24.7607 22.3235 23.9598 23.128Z",fill:"#3E85F3"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M20.7419 13.045C20.0642 13.225 19.366 13.3161 18.6649 13.316C16.5299 13.316 14.5249 12.486 13.0189 10.98C12.0299 9.98536 11.3189 8.74887 10.9568 7.39381C10.5947 6.03874 10.594 4.61242 10.9549 3.25701C11 3.08755 10.9997 2.90921 10.9541 2.73988C10.9084 2.57056 10.8191 2.41621 10.695 2.29232C10.5709 2.16842 10.4164 2.07934 10.247 2.034C10.0776 1.98866 9.89928 1.98867 9.72988 2.03401C8.03304 2.4862 6.48494 3.37664 5.24088 4.61601C1.34288 8.51401 1.34288 14.859 5.24088 18.759C6.16741 19.6907 7.26952 20.4294 8.48342 20.9323C9.69733 21.4353 10.9989 21.6924 12.3129 21.689C13.6265 21.6927 14.9278 21.4357 16.1414 20.9329C17.355 20.4302 18.4567 19.6916 19.3829 18.76C20.6232 17.5157 21.514 15.9668 21.9659 14.269C22.0108 14.0996 22.0104 13.9214 21.9648 13.7522C21.9192 13.583 21.83 13.4287 21.7061 13.3048C21.5822 13.1809 21.4279 13.0917 21.2587 13.0461C21.0895 13.0005 20.9113 13.0001 20.7419 13.045ZM17.9699 17.346C17.2289 18.0911 16.3474 18.6818 15.3766 19.084C14.4057 19.4862 13.3647 19.6918 12.3139 19.689C11.2627 19.6916 10.2214 19.4858 9.25021 19.0835C8.27904 18.6811 7.39727 18.0903 6.65588 17.345C3.53788 14.226 3.53788 9.15001 6.65588 6.03101C7.25839 5.42918 7.95398 4.92843 8.71588 4.54801C8.60436 5.98707 8.80483 7.43324 9.30361 8.7877C9.80238 10.1422 10.5877 11.373 11.6059 12.396C12.6267 13.4174 13.8571 14.2049 15.2122 14.704C16.5672 15.2032 18.0144 15.4021 19.4539 15.287C19.0714 16.0476 18.5705 16.7426 17.9699 17.346Z",fill:"#3E85F3"})})}),e.jsx("h2",{className:"user-name",children:"Nadiia"}),e.jsx("img",{className:"avi",src:u,alt:"user-AVi"})]})]}),e.jsx(A,{open:a,onCloseModal:p})]})};export{y as default};
