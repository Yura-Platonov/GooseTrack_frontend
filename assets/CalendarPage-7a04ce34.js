import{j as e,r as f,I as H,G as O,s as h,F as P,M as W}from"./index-dafe381b.js";import{s as V,r as F,t as y,a as N,g as G,n as d,b as z,f as j,c as _,e as Z,d as J,h as K,i as Q,j as E,T as U,P as X,C as Y}from"./CalendarToolbar.styled-44eb0a09.js";import{P as u}from"./index-75d7768b.js";import"./index-554fe49c.js";function q(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return V(i)}function k(n,i){var r;F(1,arguments);var o=n||{},p=y(o.start),c=y(o.end),l=c.getTime();if(!(p.getTime()<=l))throw new RangeError("Invalid interval");var a=[],s=p;s.setHours(0,0,0,0);var x=Number((r=i==null?void 0:i.step)!==null&&r!==void 0?r:1);if(x<1||isNaN(x))throw new RangeError("`options.step` must be a number greater than 1");for(;s.getTime()<=l;)a.push(y(s)),s.setDate(s.getDate()+x),s.setHours(0,0,0,0);return a}function T(n,i){var r,o,p,c,l,a,s,x;F(1,arguments);var w=G(),m=N((r=(o=(p=(c=i==null?void 0:i.weekStartsOn)!==null&&c!==void 0?c:i==null||(l=i.locale)===null||l===void 0||(a=l.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&p!==void 0?p:w.weekStartsOn)!==null&&o!==void 0?o:(s=w.locale)===null||s===void 0||(x=s.options)===null||x===void 0?void 0:x.weekStartsOn)!==null&&r!==void 0?r:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=y(n),b=g.getDay(),C=(b<m?-7:0)+6-(b-m);return g.setDate(g.getDate()+C),g.setHours(23,59,59,999),g}const tt=d.div``,et=d.button`
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
  background-color: ${n=>n.active?"var(--switch-active)":""};
  @media screen and (min-width: 768px) {
    width: 82px;
  }
  &:hover,
  &:focus   {
    background-color: var(--switch-active);
  }
`,nt=d.button`
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
  background-color: ${n=>n.active?"var(--switch-active)":""};
  @media screen and (min-width: 768px) {
    width: 82px;
  }
  &:hover,
  &:focus,
  &:active {
    background-color: var(--switch-active);
  }
`,it=({typeDateDay:n,setType:i})=>e.jsxs(tt,{children:[e.jsx(et,{active:!n,onClick:()=>{i(!1)},children:"Month"}),e.jsx(nt,{active:n,onClick:()=>{i(!0)},children:"Day"})]}),rt=d.div`
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
`,ot=d.div`
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
`,at=({selectedDate:n})=>{const i=window.innerWidth<768,r=z(n,{weekStartsOn:1}),o=T(n,{weekStartsOn:1}),p=k({start:r,end:o});return e.jsx(e.Fragment,{children:e.jsx(rt,{children:p.map((c,l=f.useId())=>e.jsxs(ot,{children:[e.jsx("p",{children:j(c,i?"eeeee":"eee")})," "]},l))})})},st=n=>q`
  //color: ${n.color};
  background-color: ${n.currentDay};
`,dt=d.div`
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
`,lt=d.a`
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
  @media screen and (min-width: 768px) {
    padding: 4px 4px;
  }
`,ct=d.p`
  ${st};
  display: flex;
  width: 8px;
  height: 14px;
  padding: 4px 6px;
  margin: 6px 2px 8px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
  color: ${n=>n.currentMonth?"#343434":"#34343450"};
  color: ${n=>n.currentDay?"var(--white)":""};
  background-color: ${n=>n.currentDay?"var(--blue)":""};
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 11px;
    height: 18px;
    padding: 4px 8px;
    margin: 10px 10px 6px;
    font-size: 16px;
    line-height: 18px;
  }
`,pt=({selectedDate:n,setSelectedDate:i})=>{const r=_(n),o=Z(n),p=z(r,{weekStartsOn:1}),c=T(o,{weekStartsOn:1}),l=k({start:p,end:c});if(l.length<36){const a=J(c,1);l.push(...k({start:K(c,1),end:a}))}return e.jsx(dt,{children:l.map((a,s=f.useId())=>e.jsx(lt,{onClick:()=>i(a),children:e.jsx(ct,{currentMonth:!!Q(a,n),currentDay:!!E(a,n),children:j(a,"d")})},s))})},ht=({selectedDate:n,setSelectedDate:i})=>e.jsxs(e.Fragment,{children:[e.jsx(at,{selectedDate:n}),e.jsx(pt,{selectedDate:n,setSelectedDate:i})]}),xt=n=>q`
  background-color: ${n.currentDay};
`,ut=d.div`
  display: flex;
  gap: 19px;
  width: calc(100% - 36px);
  padding: 14px 18px;
  margin-bottom: 14px;
  border: 1px solid #dce3e580;
  border-radius: 8px;
  background-color: var(--white);
  @media screen and (min-width: 768px) {
    gap: 69px;
    width: calc(100% - 64px);
    padding: 10px 32px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1440px) {
    gap: 128px;
    width: calc(100% - 92px);
    padding: 10px 46px;
  }
`,mt=d.a`
  display: flex;
  flex-direction: column;
  width: calc((100% - (19px * 6)) / 7);
  height: 44px;
  text-align: center;
  font-family: Inter;
  color: #343434;
  cursor: pointer;
  &:nth-of-type(6) {
    color: var(--blue);
  }
  &:nth-of-type(7) {
    color: var(--blue);
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - (69px * 6)) / 7);
    height: 46px;
  }
  @media screen and (min-width: 1440px) {
    width: calc((100% - (128px * 6)) / 7);
    height: 46px;
  }
`,gt=d.p`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-bottom: 4px;
    font-size: 14px;
  }
`,ft=d.p`
  ${xt};
  display: flex;
  width: 8px;
  height: 14px;
  padding: 4px 6px;
  margin: auto;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  border-radius: 6px;
  color: #343434;
  color: ${n=>n.currentDay?"var(--white)":""};
  background-color: ${n=>n.currentDay?"var(--blue)":""};
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 11px;
    height: 18px;
    padding: 4px 8px;
    font-size: 16px;
  line-height: 18px;
  }
`,wt=({selectedDate:n,setSelectedDate:i})=>{const r=window.innerWidth<768,o=z(n,{weekStartsOn:1}),p=T(n,{weekStartsOn:1}),c=k({start:o,end:p});return e.jsx(e.Fragment,{children:e.jsx(ut,{children:c.map((l,a=f.useId())=>e.jsxs(mt,{onClick:()=>i(l),children:[e.jsx(gt,{children:j(l,r?"eeeee":"eee")}),e.jsx(ft,{currentDay:!!E(l,n),children:j(l,"d")})]},a))})})},vt=d.div`
  display: flex;
  width: 100%;
  height: 38px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px; //якщо немає тасок, якщо є 24px
`,bt=d.h2`
  font-family: Inter;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #111111;
`,yt=d.a`
  fill: #111111;
  &:hover {
    fill: var(--blue);
  }
`,jt=d(H)`
  width: 22px;
  height: 22px;
  fill: inherit;
  &:hover {
    fill: inherit;
  }
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,kt=({title:n,idGroup:i})=>e.jsxs(vt,{children:[e.jsx(bt,{children:n}),e.jsx(yt,{children:e.jsx(jt,{})})]});function Ct(n){return O({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"}},{tag:"path",attr:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"}}]})(n)}const Dt=d.button`
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px dashed var(--blue);
  border-radius: 8px;
  color: #111111;
  fill: #111111;
  transition: var(--transition);
  background-color: var(--user-panel-active);
  &:hover {
    background-color: var(--switch-active);
  }
  @media screen and (min-width: 768px) {
    height: 52px;
  }
`,It=d(Ct)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  fill: inherit;
`,St=d.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
`,L=({onClick:n})=>e.jsxs(Dt,{type:"button",onClick:n,children:[e.jsx(It,{}),e.jsx(St,{children:"Add task"})]});L.propTypes={onClick:u.func.isRequired};const Mt=d.li`
  display: flex;
  flex-direction: column;
  min-width: calc(100% - 36px);
  width: 100%;
  padding: 18px 18px 20px;
  border: 1px solid #dce3e5cc;
  border-radius: 8px;
  background-color: var(--white);
  overflow-y: auto;
  scroll-snap-align: start;
  @media screen and (min-width: 768px) {
    min-width: 302px;
    padding: 20px 20px;
  }
`,Ot=h.form`
  min-width: 246px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: var(--primary-text-color);

  @media (min-width: 375px) {
    width: 267px;
  }

  @media (min-width: 768px) {
    width: 396px;
  }
`,D=h.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--label-text-color);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`,I=h.span`
  margin-bottom: 8px;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: var(--label-text-color);
`,S=h.input`
  height: 42px;
  padding: 14px;

  outline: none;
  background-color: var(--form-textarea);
  border: var(--border-dark-theme);
  border-radius: 8px;
  font-family: var(--main-font);
  color: --user-panel-text;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  @media (min-width: 768px) {
    height: 46px;
  }

  &::placeholder {
    color: var(--user-panel-text);
  }
`,M=h.span`
  min-height: 14px;
  margin-top: 4px;
  margin-bottom: 2px;
  color: red;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;

  @media (min-width: 768px) {
    margin-bottom: 4px;
  }
`,$=h.button`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding: 14px;
  background-color: var(--blue);
  box-shadow: var(--shadow-btn);
  border-radius: 8px;
  border: none;
  color: var(--white);
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  transition: var(--transition);

  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    background-color: var(--hover);
  }

  @media (min-width: 768px) {
    height: 48px;
  }
`,zt=h.button`
  width: 100%;
  height: 42px;
  padding: 12px;
  column-gap: 12px;
  background: var(--task-btn-cancel-bg-color);
  border-radius: 8px;
  border: none;
  text-align: center;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  transition: var(--transition);

  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
  }

  @media (min-width: 768px) {
    height: 48px;
  }
`;h.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: #ffffff;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;const B=h.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
`,Tt=h.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding-bottom: 20px;
`,$t=h.label`
  padding-left: 20px;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: var(--user-panel-text);
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`,Bt=h.input`
  appearance: none;
  position: absolute;
  height: 0;
  width: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: -17px;
    border-radius: 50%;
    height: 12px;
    width: 12px;

    @media (min-width: 768px) {
      height: 14px;
      width: 14px;
      top: 2px;
      left: -20px;
    }

    /* color: green; */
    ${({priority:n})=>{switch(n){case"Low":return"background-color: var(--day-status-low); color: var(--task-priority-low-checked-color); border-color: var(--day-status-low)";case"Medium":return"background-color: var(--day-status-medium); color: var(--task-priority-medium-checked-color)";case"High":return"background-color: var(--day-status-high); color: var(--task-priority-high-checked-color)";default:return"background-color: var(--day-status-low); color: var(--task-priority-low-checked-color); color: var(--day-status-low)"}}}
  }

  &:checked::before {
    content: '';
    position: absolute;
    height: 12px;
    width: 12px;
    color: var(--user-panel-active);
    outline: 2px solid;

    @media (min-width: 768px) {
      height: 14px;
      width: 14px;
    }
  }
`;function Ft(n){return O({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}}]})(n)}function Et(n){return O({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59 2.41 15l4.12-2.36.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3 1.45 1.45-2.96 1.55zm3.83-2.06L4.47 9.76l8-8 1.77 1.77-8 8z"}}]})(n)}const R=({onClose:n,task:i,status:r,...o})=>{const p=(o==null?void 0:o.editMode)||!1,c={title:(i==null?void 0:i.title)||"",start:(i==null?void 0:i.start)||"",end:(i==null?void 0:i.end)||"",priority:(i==null?void 0:i.priority)||"Low"},l=[{value:"Low",name:"Low"},{value:"Medium",name:"Medium"},{value:"High",name:"High"}];return e.jsx(e.Fragment,{children:e.jsx(P,{initialValues:c,validateOnBlur:!0,validateOnChange:!0,onSubmit:(a,{setSubmitting:s})=>{s(!1)},children:({values:a,errors:s,touched:x,handleChange:w,handleBlur:m,handleSubmit:g,isSubmitting:b,setFieldValue:C})=>e.jsxs(Ot,{onSubmit:g,children:[e.jsxs(D,{htmlFor:"title",children:[e.jsx(I,{children:"Title"}),e.jsx(S,{type:"text",name:"title",id:"title",onChange:w,onBlur:m,value:a.title,placeholder:"Enter text"}),e.jsx(M,{children:s.title&&x.title&&t(s.title)})]}),e.jsxs(B,{children:[e.jsxs(D,{htmlFor:"start",children:[e.jsx(I,{children:"Start"}),e.jsx(S,{type:"time",step:"60",name:"start",id:"start",onChange:w,onBlur:m,value:a.start,placeholder:"Select time"}),e.jsx(M,{children:s.start&&x.start&&t(s.start)})]}),e.jsxs(D,{htmlFor:"end",children:[e.jsx(I,{children:"End"}),e.jsx(S,{type:"time",step:"60",name:"end",id:"end",onChange:w,onBlur:m,value:a.end,placeholder:"Select time"}),e.jsx(M,{children:s.end&&x.end&&t(s.end)})]})]}),e.jsx(Tt,{children:l.map(v=>e.jsxs($t,{children:[e.jsx(Bt,{type:"radio",value:v.name,name:"priority",priority:v.name,checked:a.priority===v.name,onChange:()=>{C("priority",v.name)}}),v.value]},v.value))}),e.jsxs(B,{children:[p?e.jsxs($,{type:"submit",disabled:b,children:[e.jsx(Et,{}),"Edit"]}):e.jsxs($,{type:"submit",children:[e.jsx(Ft,{}),"Add"]}),e.jsx(zt,{type:"button",disabled:b,onClick:n,children:"Cancel"})]})]})})})};R.propTypes={onClose:u.func.isRequired,task:u.shape({title:u.string,start:u.string,end:u.string,priority:u.string}),status:u.string};const A=({onClose:n,task:i,status:r,...o})=>e.jsx(R,{onClose:n,task:i,status:r,...o});A.propTypes={onClose:u.func.isRequired,task:u.object,status:u.string};const qt=({title:n,collection:i})=>{const[r,o]=f.useState(!1),p=()=>{o(!0)},c=()=>{o(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Mt,{children:[e.jsx(kt,{title:n,handleShowModal:p}),e.jsx(L,{onClick:p})]}),r&&e.jsx(W,{onClose:c,children:e.jsx(A,{onClose:c})})]})},Lt=d.ul`
  display: flex;
  width: 100%;
  min-height: 100%;
  gap: 16px;
  overflow: auto hidden;
  scroll-snap-type: x mandatory;
  @media screen and (min-width: 1440px) {
    gap: 27px;
  }
`,Rt=({selectedDate:n,setSelectedDate:i})=>{const r=["To do","In progress","Done"];return e.jsxs(e.Fragment,{children:[e.jsx(wt,{selectedDate:n,setSelectedDate:i}),e.jsx(Lt,{children:r.map(o=>e.jsx(qt,{title:o,collection:""},f.useId()))})]})},At=()=>{const[n,i]=f.useState(Date.now()),[r,o]=f.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:[e.jsx(X,{selectedDate:n,typeDateDay:r,setSelectedDate:i}),e.jsx(it,{typeDateDay:r,setType:o})]}),r?e.jsx(Rt,{selectedDate:n,setSelectedDate:i}):e.jsx(ht,{selectedDate:n,setSelectedDate:i})]})},Nt=()=>e.jsx(Y,{children:e.jsx(At,{})});export{Nt as default};
