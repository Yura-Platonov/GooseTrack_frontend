import{n as c,j as a,r as i,u as g,b as u,d as v,e as b,f as x,C as f,h as m}from"./index-e2a716a5.js";import{T as w,P as y,C as k}from"./CalendarToolbar.styled-a5084202.js";import"./react-datepicker-5d18c34d.js";import"./index-13514193.js";const j=c.div``,C=c.button`
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
  background-color: ${t=>t.active?"var(--switch-active)":""};
  @media screen and (min-width: 768px) {
    width: 82px;
  }
  &:hover,
  &:focus {
    background-color: var(--switch-active);
  }
`,D=c.button`
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
  background-color: ${t=>t.active?"var(--switch-active)":""};
  @media screen and (min-width: 768px) {
    width: 82px;
  }
  &:hover,
  &:focus,
  &:active {
    background-color: var(--switch-active);
  }
`,M=({typeDateDay:t,setType:e})=>a.jsxs(j,{children:[a.jsx(C,{active:!t,onClick:()=>{e(!1)},children:"Month"}),a.jsx(D,{active:t,onClick:()=>{e(!0)},children:"Day"})]}),T=({selectedDate:t,setSelectedDate:e,typeDay:r,setType:o})=>a.jsx(a.Fragment,{children:a.jsxs(w,{children:[a.jsx(y,{selectedDate:t,typeDateDay:r,setSelectedDate:e}),a.jsx(M,{typeDateDay:r,setType:o})]})}),P=({tasks:t})=>t.monthTasks,z=()=>{const t=new Date,[e,r]=i.useState(t);let o=e.getMonth()+1,d=e.getFullYear();const[s,l]=i.useState(!1),h=g(),p=u(),n=v(P);return b(),console.log(n),i.useEffect(()=>{if(s?s&&h(`/calendar/day/${e.getTime()}`):h(`/calendar/month/${e.getTime()}`),n.length===0||t.getMonth()+1!==o)p(x({year:d,month:o}));else if(n.length!==0&&t.getMonth()+1===o)p(x({year:d,month:o}));else if(n.length!==0&&new Date(n.tasks[0].date).getMonth()+1===o)return},[e]),a.jsxs(k,{children:[a.jsx(T,{selectedDate:e,setSelectedDate:r,typeDay:s,setType:l}),s?a.jsx(m,{selectedDate:e,setSelectedDate:r}):a.jsx(f,{selectedDate:e,setSelectedDate:r,setType:l})]})};export{z as default};
