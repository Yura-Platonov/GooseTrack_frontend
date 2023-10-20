import{n as s,j as t,r as i,u as d,b as l,C as h,d as p}from"./index-1f47d2ab.js";import{T as x,P as u,C as g}from"./CalendarToolbar.styled-1c8f7348.js";import"./index-1f32e839.js";const v=s.div``,b=s.button`
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
`,f=s.button`
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
`,m=({typeDateDay:r,setType:e})=>t.jsxs(v,{children:[t.jsx(b,{active:!r,onClick:()=>{e(!1)},children:"Month"}),t.jsx(f,{active:r,onClick:()=>{e(!0)},children:"Day"})]}),w=({selectedDate:r,setSelectedDate:e,typeDay:o,setType:a})=>t.jsx(t.Fragment,{children:t.jsxs(x,{children:[t.jsx(u,{selectedDate:r,typeDateDay:o,setSelectedDate:e}),t.jsx(m,{typeDateDay:o,setType:a})]})}),k=()=>{const r=new Date,[e,o]=i.useState(r),[a,c]=i.useState(!1),n=d();return l(),i.useEffect(()=>{a?a&&n(`/calendar/day/${e.getTime().toString().slice(0,-5)}`):n(`/calendar/month/${e.getTime().toString().slice(0,-5)}`)},[e,a,n]),t.jsxs(g,{children:[t.jsx(w,{selectedDate:e,setSelectedDate:o,typeDay:a,setType:c}),a?t.jsx(p,{selectedDate:e,setSelectedDate:o}):t.jsx(h,{selectedDate:e,setSelectedDate:o,setType:c})]})};export{k as default};
