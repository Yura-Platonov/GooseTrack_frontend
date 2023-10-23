import{n as i,j as e,r as s,e as x,u,b as g,f as v,h as b,i as f,C as m,k as w}from"./index-53187884.js";import{T as k,P as y,C as j}from"./CalendarToolbar.styled-96008f1b.js";import"./react-datepicker-1ef91789.js";import"./index-34e5d205.js";const C=i.div``,D=i.button`
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
  background-color: ${a=>a.active?"var(--switch-active)":""};
  @media screen and (min-width: 768px) {
    width: 82px;
  }
  &:hover,
  &:focus {
    background-color: var(--switch-active);
  }
`,T=i.button`
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
  background-color: ${a=>a.active?"var(--switch-active)":""};
  @media screen and (min-width: 768px) {
    width: 82px;
  }
  &:hover,
  &:focus,
  &:active {
    background-color: var(--switch-active);
  }
`,M=({typeDateDay:a,setType:t})=>e.jsxs(C,{children:[e.jsx(D,{active:!a,onClick:()=>{t(!1)},children:"Month"}),e.jsx(T,{active:a,onClick:()=>{t(!0)},children:"Day"})]}),P=({selectedDate:a,setSelectedDate:t,typeDay:r,setType:o})=>e.jsx(e.Fragment,{children:e.jsxs(k,{children:[e.jsx(y,{selectedDate:a,typeDateDay:r,setSelectedDate:t}),e.jsx(M,{typeDateDay:r,setType:o})]})}),z=()=>{const a=new Date,[t,r]=s.useState(a);let o=t.getMonth()+1,h=t.getFullYear();const[n,c]=s.useState(!1),d=x(),p=u(),l=g(v);return b(),s.useEffect(()=>{n?n&&d(`/calendar/day/${t.getTime()}`):d(`/calendar/month/${t.getTime()}`),!(l.length!==0&&new Date(l.tasks[0].date).getMonth()+1===o)&&p(f({year:h,month:o}))},[t]),e.jsxs(j,{children:[e.jsx(P,{selectedDate:t,setSelectedDate:r,typeDay:n,setType:c}),n?e.jsx(w,{selectedDate:t,setSelectedDate:r}):e.jsx(m,{selectedDate:t,setSelectedDate:r,setType:c})]})};export{z as default};
