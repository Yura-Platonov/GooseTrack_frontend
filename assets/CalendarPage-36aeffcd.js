import{n as c,P as a,j as t,r as l,e as v,u as f,b,f as m,h as y,C as w,i as T}from"./index-9a8d88c7.js";import{T as j,P as k}from"./CalendarToolbar.styled-673d9567.js";import"./react-datepicker-a6fa2762.js";import"./index-b534a81c.js";const D=c.div`
  overflow-y: scroll;
  overflow-x: hidden;
`,C=c.div``,M=c.button`
  width: 76px;
  height: 34px;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-right: 1px solid var(--month-btn-border-right);
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
  background-color: ${r=>r.active?"var(--switch-active)":""};
  @media screen and (min-width: 768px) {
    width: 82px;
  }
  &:hover,
  &:focus {
    background-color: var(--switch-active);
  }
`,P=c.button`
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
  background-color: ${r=>r.active?"var(--switch-active)":""};
  @media screen and (min-width: 768px) {
    width: 82px;
  }
  &:hover,
  &:focus,
  &:active {
    background-color: var(--switch-active);
  }
`,x=({typeDay:r,setType:e})=>t.jsxs(C,{children:[t.jsx(M,{active:!r,onClick:()=>{e(!1)},children:"Month"}),t.jsx(P,{active:r,onClick:()=>{e(!0)},children:"Day"})]});x.propTypes={typeDay:a.bool.isRequired,setType:a.func.isRequired};const g=({selectedDate:r,setSelectedDate:e,typeDay:o,setType:n})=>t.jsx(t.Fragment,{children:t.jsxs(j,{children:[t.jsx(k,{selectedDate:r,typeDay:o,setSelectedDate:e}),t.jsx(x,{typeDay:o,setType:n})]})});g.propTypes={selectedDate:a.instanceOf(Date),setSelectedDate:a.func.isRequired,typeDay:a.bool.isRequired,setType:a.func.isRequired};const B=()=>{const r=new Date,[e,o]=l.useState(r);let n=e.getMonth()+1,p=e.getFullYear();const[s,h]=l.useState(!1),d=v(),u=f(),{tasks:i}=b(m);return l.useEffect(()=>{s?s&&d(`/calendar/day/${e.getTime()}`):d(`/calendar/month/${e.getTime()}`),!(i&&i.length!==0&&new Date(i[0].date).getMonth()+1===n)&&u(y({year:p,month:n}))},[u,e,s,i,n,p,d]),t.jsxs(D,{children:[t.jsx(g,{selectedDate:e,setSelectedDate:o,typeDay:s,setType:h}),s?t.jsx(T,{selectedDate:e,setSelectedDate:o,tasks:i}):t.jsx(w,{selectedDate:e,setSelectedDate:o,setType:h})]})};export{B as default};
