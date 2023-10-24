import{n as d,P as n,j as t,r as p,e as b,u as f,b as m,f as v,h as w,i as y,C as k,k as T}from"./index-6d7dec78.js";import{T as j,P as D}from"./CalendarToolbar.styled-de61c63a.js";import"./react-datepicker-f351a15c.js";import"./index-7d1a8717.js";const C=d.div`
 /* box-sizing: border-box;
  margin: 0 auto;

  padding: 0 20px;
  background-color: #f7f6f9; //delete later

  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px 42px;
  }
  @media screen and (min-width: 1440px) {
    width: 1151px;
    padding: 0 32px 32px 32px;
    margin: 0;
  } */
`,M=d.div``,P=d.button`
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
`,S=d.button`
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
`,u=({typeDay:a,setType:e})=>t.jsxs(M,{children:[t.jsx(P,{active:!a,onClick:()=>{e(!1)},children:"Month"}),t.jsx(S,{active:a,onClick:()=>{e(!0)},children:"Day"})]});u.propTypes={typeDay:n.bool.isRequired,setType:n.func.isRequired};const g=({selectedDate:a,setSelectedDate:e,typeDay:r,setType:o})=>t.jsx(t.Fragment,{children:t.jsxs(j,{children:[t.jsx(D,{selectedDate:a,typeDay:r,setSelectedDate:e}),t.jsx(u,{typeDay:r,setType:o})]})});g.propTypes={selectedDate:n.instanceOf(Date),setSelectedDate:n.func.isRequired,typeDay:n.bool.isRequired,setType:n.func.isRequired};const B=()=>{const a=new Date,[e,r]=p.useState(a);let o=e.getMonth()+1,l=e.getFullYear();const[i,h]=p.useState(!1),c=b(),x=f(),s=m(v);return w(),p.useEffect(()=>{i?i&&c(`/calendar/day/${e.getTime()}`):c(`/calendar/month/${e.getTime()}`),!(s.length!==0&&new Date(s.tasks[0].date).getMonth()+1===o)&&x(y({year:l,month:o}))},[x,c,e,o,l,s.length,s.tasks,i]),t.jsxs(C,{children:[t.jsx(g,{selectedDate:e,setSelectedDate:r,typeDay:i,setType:h}),i?t.jsx(T,{selectedDate:e,setSelectedDate:r}):t.jsx(k,{selectedDate:e,setSelectedDate:r,setType:h})]})};export{B as default};
