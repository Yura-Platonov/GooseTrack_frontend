import{n as c,P as o,j as t,r as d,e as v,u as f,b,f as m,h as y,C as w,i as k}from"./index-0cdfd998.js";import{T,P as j}from"./CalendarToolbar.styled-bbe111cc.js";import"./react-datepicker-67cc433f.js";import"./index-d9c9bf76.js";const D=c.div`
overflow: hidden;
 
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
`,u=({typeDay:r,setType:e})=>t.jsxs(C,{children:[t.jsx(M,{active:!r,onClick:()=>{e(!1)},children:"Month"}),t.jsx(P,{active:r,onClick:()=>{e(!0)},children:"Day"})]});u.propTypes={typeDay:o.bool.isRequired,setType:o.func.isRequired};const x=({selectedDate:r,setSelectedDate:e,typeDay:a,setType:n})=>t.jsx(t.Fragment,{children:t.jsxs(T,{children:[t.jsx(j,{selectedDate:r,typeDay:a,setSelectedDate:e}),t.jsx(u,{typeDay:a,setType:n})]})});x.propTypes={selectedDate:o.instanceOf(Date),setSelectedDate:o.func.isRequired,typeDay:o.bool.isRequired,setType:o.func.isRequired};const B=()=>{const r=new Date,[e,a]=d.useState(r);let n=e.getMonth()+1,g=e.getFullYear();const[s,l]=d.useState(!1),p=v(),h=f(),i=b(m);return d.useEffect(()=>{s?s&&p(`/calendar/day/${e.getTime()}`):p(`/calendar/month/${e.getTime()}`),!(i.length!==0&&new Date(i.tasks[0].date).getMonth()+1===n)&&h(y({year:g,month:n}))},[h,e,s,i]),t.jsxs(D,{children:[t.jsx(x,{selectedDate:e,setSelectedDate:a,typeDay:s,setType:l}),s?t.jsx(k,{selectedDate:e,setSelectedDate:a,tasks:i.tasks}):t.jsx(w,{selectedDate:e,setSelectedDate:a,setType:l})]})};export{B as default};
