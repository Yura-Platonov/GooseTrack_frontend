import{n as c,P as o,j as t,r as i,e as v,u as b,b as f,f as m,h as y,i as w,C as k,k as T}from"./index-4452f938.js";import{T as j,P as D,C}from"./CalendarToolbar.styled-bbbc8697.js";import"./react-datepicker-96b6c1d7.js";import"./index-d91d4f20.js";const M=c.div``,P=c.button`
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
`,S=c.button`
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
`,h=({typeDay:a,setType:e})=>t.jsxs(M,{children:[t.jsx(P,{active:!a,onClick:()=>{e(!1)},children:"Month"}),t.jsx(S,{active:a,onClick:()=>{e(!0)},children:"Day"})]});h.propTypes={typeDay:o.bool.isRequired,setType:o.func.isRequired};const u=({selectedDate:a,setSelectedDate:e,typeDay:r,setType:s})=>t.jsx(t.Fragment,{children:t.jsxs(j,{children:[t.jsx(D,{selectedDate:a,typeDay:r,setSelectedDate:e}),t.jsx(h,{typeDay:r,setType:s})]})});u.propTypes={selectedDate:o.instanceOf(Date),setSelectedDate:o.func.isRequired,typeDay:o.bool.isRequired,setType:o.func.isRequired};const E=()=>{const a=new Date,[e,r]=i.useState(a);let s=e.getMonth()+1,x=e.getFullYear();const[n,d]=i.useState(!1),l=v(),g=b(),p=f(m);return y(),i.useEffect(()=>{n?n&&l(`/calendar/day/${e.getTime()}`):l(`/calendar/month/${e.getTime()}`),!(p.length!==0&&new Date(p.tasks[0].date).getMonth()+1===s)&&g(w({year:x,month:s}))},[e]),t.jsxs(C,{children:[t.jsx(u,{selectedDate:e,setSelectedDate:r,typeDay:n,setType:d}),n?t.jsx(T,{selectedDate:e,setSelectedDate:r}):t.jsx(k,{selectedDate:e,setSelectedDate:r,setType:d})]})};export{E as default};
