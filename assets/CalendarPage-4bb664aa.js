import{n as c,P as a,j as t,r as d,e as v,u as f,b,f as m,h as y,C as w,i as T}from"./index-a0e52115.js";import{T as j,P as k}from"./CalendarToolbar.styled-bdf9cc5e.js";import"./react-datepicker-7a383a34.js";import"./index-1ec26dd0.js";const D=c.div`
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
`,u=({typeDay:r,setType:e})=>t.jsxs(C,{children:[t.jsx(M,{active:!r,onClick:()=>{e(!1)},children:"Month"}),t.jsx(P,{active:r,onClick:()=>{e(!0)},children:"Day"})]});u.propTypes={typeDay:a.bool.isRequired,setType:a.func.isRequired};const x=({selectedDate:r,setSelectedDate:e,typeDay:o,setType:i})=>t.jsx(t.Fragment,{children:t.jsxs(j,{children:[t.jsx(k,{selectedDate:r,typeDay:o,setSelectedDate:e}),t.jsx(u,{typeDay:o,setType:i})]})});x.propTypes={selectedDate:a.instanceOf(Date),setSelectedDate:a.func.isRequired,typeDay:a.bool.isRequired,setType:a.func.isRequired};const B=()=>{const r=new Date,[e,o]=d.useState(r);let i=e.getMonth()+1,g=e.getFullYear();const[n,l]=d.useState(!1),p=v(),h=f(),{tasks:s}=b(m);return d.useEffect(()=>{n?n&&p(`/calendar/day/${e.getTime()}`):p(`/calendar/month/${e.getTime()}`),!(s&&s.length!==0&&new Date(s[0].date).getMonth()+1===i)&&h(y({year:g,month:i}))},[h,e,n,s]),t.jsxs(D,{children:[t.jsx(x,{selectedDate:e,setSelectedDate:o,typeDay:n,setType:l}),n?t.jsx(T,{selectedDate:e,setSelectedDate:o,tasks:s}):t.jsx(w,{selectedDate:e,setSelectedDate:o,setType:l})]})};export{B as default};
