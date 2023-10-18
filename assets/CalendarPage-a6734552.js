import{j as t,r as x}from"./index-8b964c83.js";import{r as k,t as g,a as C,g as S,s as O,n as i,b as w,f as m,d as $,e as M,h as T,i as z,j as A,k as j,I as q,T as B,P as W,C as E}from"./CalendarPage.styled-3425b39d.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import{G}from"./iconBase-7fabefaf.js";function f(e,n){var r;k(1,arguments);var o=e||{},c=g(o.start),s=g(o.end),a=s.getTime();if(!(c.getTime()<=a))throw new RangeError("Invalid interval");var d=[],l=c;l.setHours(0,0,0,0);var p=Number((r=n==null?void 0:n.step)!==null&&r!==void 0?r:1);if(p<1||isNaN(p))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=a;)d.push(g(l)),l.setDate(l.getDate()+p),l.setHours(0,0,0,0);return d}function v(e,n){var r,o,c,s,a,d,l,p;k(1,arguments);var b=S(),u=C((r=(o=(c=(s=n==null?void 0:n.weekStartsOn)!==null&&s!==void 0?s:n==null||(a=n.locale)===null||a===void 0||(d=a.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&c!==void 0?c:b.weekStartsOn)!==null&&o!==void 0?o:(l=b.locale)===null||l===void 0||(p=l.options)===null||p===void 0?void 0:p.weekStartsOn)!==null&&r!==void 0?r:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=g(e),y=h.getDay(),I=(y<u?-7:0)+6-(y-u);return h.setDate(h.getDate()+I),h.setHours(23,59,59,999),h}function D(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return O(n)}const H=i.div``,N=i.button`
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
`,P=i.button`
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
`,F=({typeDateDay:e,setType:n})=>t.jsxs(H,{children:[t.jsx(N,{active:!e,onClick:()=>{n(!1)},children:"Month"}),t.jsx(P,{active:e,onClick:()=>{n(!0)},children:"Day"})]}),_=i.div`
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
`,R=i.div`
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
`,V=({selectedDate:e})=>{const n=window.innerWidth<768,r=w(e,{weekStartsOn:1}),o=v(e,{weekStartsOn:1}),c=f({start:r,end:o});return t.jsx(t.Fragment,{children:t.jsx(_,{children:c.map((s,a=x.useId())=>t.jsxs(R,{children:[t.jsx("p",{children:m(s,n?"eeeee":"eee")})," "]},a))})})},Z=e=>D`
  //color: ${e.color};
  background-color: ${e.currentDay};
`,L=i.div`
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
`,J=i.a`
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
`,K=i.p`
  ${Z};
  display: flex;
  width: 8px;
  height: 14px;
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
    width: 11px;
    height: 18px;
    padding: 4px 8px;
    margin: 10px 10px 6px;
    font-size: 16px;
    line-height: 18px;
  }
`,Q=({selectedDate:e,setSelectedDate:n})=>{const r=$(e),o=M(e),c=w(r,{weekStartsOn:1}),s=v(o,{weekStartsOn:1}),a=f({start:c,end:s});if(a.length<36){const d=T(s,1);a.push(...f({start:z(s,1),end:d}))}return t.jsx(L,{children:a.map((d,l=x.useId())=>t.jsx(J,{onClick:()=>n(d),children:t.jsx(K,{currentMonth:!!A(d,e),currentDay:!!j(d,e),children:m(d,"d")})},l))})},U=({selectedDate:e,setSelectedDate:n})=>t.jsxs(t.Fragment,{children:[t.jsx(V,{selectedDate:e}),t.jsx(Q,{selectedDate:e,setSelectedDate:n})]}),X=e=>D`
  background-color: ${e.currentDay};
`,Y=i.div`
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
`,ee=i.a`
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
`,te=i.p`
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
`,ne=i.p`
  ${X};
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
  color: ${e=>e.currentDay?"var(--white)":""};
  background-color: ${e=>e.currentDay?"var(--blue)":""};
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 11px;
    height: 18px;
    padding: 4px 8px;
    font-size: 16px;
  line-height: 18px;
  }
`,re=({selectedDate:e,setSelectedDate:n})=>{const r=window.innerWidth<768,o=w(e,{weekStartsOn:1}),c=v(e,{weekStartsOn:1}),s=f({start:o,end:c});return t.jsx(t.Fragment,{children:t.jsx(Y,{children:s.map((a,d=x.useId())=>t.jsxs(ee,{onClick:()=>n(a),children:[t.jsx(te,{children:m(a,r?"eeeee":"eee")}),t.jsx(ne,{currentDay:!!j(a,e),children:m(a,"d")})]},d))})})},ie=i.div`
  display: flex;
  width: 100%;
  height: 38px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px; //якщо немає тасок, якщо є 24px
`,ae=i.h2`
  font-family: Inter;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #111111;
`,oe=i.a`
  fill: #111111;
  &:hover {
    fill: var(--blue);
  }
`,de=i(q)`
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
`,se=({title:e,idGroup:n})=>t.jsxs(ie,{children:[t.jsx(ae,{children:e}),t.jsx(oe,{children:t.jsx(de,{})})]});function ce(e){return G({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"}},{tag:"path",attr:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"}}]})(e)}const le=i.button`
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
`,pe=i(ce)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  fill: inherit;
`,xe=i.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
`,he=({idGroup:e})=>t.jsxs(le,{children:[t.jsx(pe,{}),t.jsx(xe,{children:"Add task"})]}),ue=i.li`
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
`,ge=({title:e,collection:n})=>t.jsxs(ue,{children:[t.jsx(se,{title:e,idGroup:""}),t.jsx(he,{idGroup:""})]}),me=i.ul`
  display: flex;
  width: 100%;
  min-height: 100%;
  gap: 16px;
  overflow: auto hidden;
  scroll-snap-type: x mandatory;
  @media screen and (min-width: 1440px) {
    gap: 27px;
  }
`,fe=({selectedDate:e,setSelectedDate:n})=>{const r=["To do","In progress","Done"];return t.jsxs(t.Fragment,{children:[t.jsx(re,{selectedDate:e,setSelectedDate:n}),t.jsx(me,{children:r.map(o=>t.jsx(ge,{title:o,collection:""},x.useId()))})]})},we=()=>{const[e,n]=x.useState(Date.now()),[r,o]=x.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsxs(B,{children:[t.jsx(W,{selectedDate:e,typeDateDay:r,setSelectedDate:n}),t.jsx(F,{typeDateDay:r,setType:o})]}),r?t.jsx(fe,{selectedDate:e,setSelectedDate:n}):t.jsx(U,{selectedDate:e,setSelectedDate:n})]})},je=()=>t.jsx(E,{children:t.jsx(we,{})});export{je as default};
