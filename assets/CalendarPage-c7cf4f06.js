import{j as n,r as T,I as ht,G as oe,s as w,b as xt,d as ke,e as ie,f as ue,u as Re,h as mt,F as gt,R as V,i as vt,a as yt,M as wt}from"./index-aeb4e2e9.js";import{s as bt,r as Ge,t as je,a as kt,g as Tt,n as j,b as Ae,f as Ce,c as jt,e as Ct,d as Ot,h as Et,i as St,j as Ke,k as Ye,p as Te,l as Mt,T as It,P as Pt,C as Dt}from"./CalendarToolbar.styled-642ca7fd.js";import{P,p as $t}from"./index-83acaf64.js";import"./index-edf3d520.js";function Je(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return bt(t)}function Oe(e,t){var r;Ge(1,arguments);var o=e||{},a=je(o.start),d=je(o.end),s=d.getTime();if(!(a.getTime()<=s))throw new RangeError("Invalid interval");var m=[],p=a;p.setHours(0,0,0,0);var v=Number((r=t==null?void 0:t.step)!==null&&r!==void 0?r:1);if(v<1||isNaN(v))throw new RangeError("`options.step` must be a number greater than 1");for(;p.getTime()<=s;)m.push(je(p)),p.setDate(p.getDate()+v),p.setHours(0,0,0,0);return m}function _e(e,t){var r,o,a,d,s,m,p,v;Ge(1,arguments);var S=Tt(),y=kt((r=(o=(a=(d=t==null?void 0:t.weekStartsOn)!==null&&d!==void 0?d:t==null||(s=t.locale)===null||s===void 0||(m=s.options)===null||m===void 0?void 0:m.weekStartsOn)!==null&&a!==void 0?a:S.weekStartsOn)!==null&&o!==void 0?o:(p=S.locale)===null||p===void 0||(v=p.options)===null||v===void 0?void 0:v.weekStartsOn)!==null&&r!==void 0?r:0);if(!(y>=0&&y<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=je(e),b=g.getDay(),O=(b<y?-7:0)+6-(b-y);return g.setDate(g.getDate()+O),g.setHours(23,59,59,999),g}const zt=j.div``,Lt=j.button`
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
`,Rt=j.button`
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
`,At=({typeDateDay:e,setType:t})=>n.jsxs(zt,{children:[n.jsx(Lt,{active:!e,onClick:()=>{t(!1)},children:"Month"}),n.jsx(Rt,{active:e,onClick:()=>{t(!0)},children:"Day"})]}),_t=j.div`
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
`,qt=j.div`
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
`,Ft=({selectedDate:e})=>{const t=window.innerWidth<768,r=Ae(e,{weekStartsOn:1}),o=_e(e,{weekStartsOn:1}),a=Oe({start:r,end:o});return n.jsx(n.Fragment,{children:n.jsx(_t,{children:a.map((d,s=T.useId())=>n.jsxs(qt,{children:[n.jsx("p",{children:Ce(d,t?"eeeee":"eee")})," "]},s))})})},Ht=e=>Je`
  //color: ${e.color};
  background-color: ${e.currentDay};
`,Wt=j.div`
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
`,Nt=j.a`
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
`,Bt=j.p`
  ${Ht};
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
`,Yt=({selectedDate:e,setSelectedDate:t})=>{const r=jt(e),o=Ct(e),a=Ae(r,{weekStartsOn:1}),d=_e(o,{weekStartsOn:1}),s=Oe({start:a,end:d});if(s.length<36){const m=Ot(d,1);s.push(...Oe({start:Et(d,1),end:m}))}return n.jsx(Wt,{children:s.map((m,p=T.useId())=>n.jsx(Nt,{onClick:()=>t(m),children:n.jsx(Bt,{currentMonth:!!St(m,e),currentDay:!!Ke(m,e),children:Ce(m,"d")})},p))})},Xt=({selectedDate:e,setSelectedDate:t})=>n.jsxs(n.Fragment,{children:[n.jsx(Ft,{selectedDate:e}),n.jsx(Yt,{selectedDate:e,setSelectedDate:t})]}),Ut=e=>Je`
  background-color: ${e.currentDay};
`,Vt=j.div`
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
`,Zt=j.a`
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
`,Gt=j.p`
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
`,Kt=j.p`
  ${Ut};
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
`,Jt=({selectedDate:e,setSelectedDate:t})=>{const r=window.innerWidth<768,o=Ae(e,{weekStartsOn:1}),a=_e(e,{weekStartsOn:1}),d=Oe({start:o,end:a});return n.jsx(n.Fragment,{children:n.jsx(Vt,{children:d.map((s,m=T.useId())=>n.jsxs(Zt,{onClick:()=>t(s),children:[n.jsx(Gt,{children:Ce(s,r?"eeeee":"eee")}),n.jsx(Kt,{currentDay:!!Ke(s,e),children:Ce(s,"d")})]},m))})})},Qt=j.div`
  display: flex;
  width: 100%;
  height: 38px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px; //якщо немає тасок, якщо є 24px
`,en=j.h2`
  font-family: Inter;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #111111;
`,tn=j.a`
  fill: #111111;
  &:hover {
    fill: var(--blue);
  }
`,nn=j(ht)`
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
`,rn=({title:e,handleShowModal:t})=>n.jsxs(Qt,{children:[n.jsx(en,{children:e}),n.jsx(tn,{children:n.jsx(nn,{onClick:t})})]});function on(e){return oe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"}},{tag:"path",attr:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"}}]})(e)}function an(e){return oe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]})(e)}const sn=j.button`
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
`,ln=j(on)`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  fill: inherit;
`,dn=j.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
`,Qe=({onClick:e})=>n.jsxs(sn,{type:"button",onClick:e,children:[n.jsx(ln,{}),n.jsx(dn,{children:"Add task"})]});Qe.propTypes={onClick:P.func.isRequired};const cn=j.li`
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
`,un=w.form`
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
`,Ie=w.label`
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
`,Pe=w.span`
  margin-bottom: 8px;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: var(--label-text-color);
`,De=w.input`
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
`,$e=w.span`
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
`,Xe=w.button`
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
`,pn=w.button`
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
`;w.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: #ffffff;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;const Ue=w.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
`,fn=w.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding-bottom: 20px;
`,hn=w.label`
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
`,xn=w.input`
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

    /* color: ; */
    ${({priority:e})=>{switch(e){case"Low":return"background-color: var(--day-status-low); color: var(--task-priority-low-checked-color); border-color: var(--day-status-low)";case"Medium":return"background-color: var(--day-status-medium); color: var(--task-priority-medium-checked-color)";case"High":return"background-color: var(--day-status-high); color: var(--task-priority-high-checked-color)";default:return"background-color: var(--day-status-low); color: var(--task-priority-low-checked-color); color: var(--day-status-low)"}}}
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
`;function mn(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z"}}]})(e)}function gn(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"}}]})(e)}function vn(e){return oe({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59 2.41 15l4.12-2.36.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3 1.45 1.45-2.96 1.55zm3.83-2.06L4.47 9.76l8-8 1.77 1.77-8 8z"}}]})(e)}const yn=xt({title:ke().required("Title is required").max(250,"Title should not exceed 250 characters"),start:ke().test("valid-time","Invalid time format",e=>Ye(Te(e,"HH:mm",new Date))).required("Start is required"),end:ke().nullable().test("valid-time","Invalid time format",e=>e?Ye(Te(e,"HH:mm",new Date)):!0).when("start",(e,t)=>t.test("end-time-greater","Less than start",r=>e&&r?Mt(Te(r,"HH:mm",new Date),Te(e,"HH:mm",new Date)):!0)),priority:ke().required("Priority is required").oneOf(["Low","Medium","High"],"Invalid priority")});ie.defaults.baseURL="https://goosetrack-backend-y622.onrender.com";ue("task/getTasksByMonth",async({year:e,month:t},{rejectedWithValue:r})=>{try{const{data:o}=await ie.get(`/api/task/month/${e}-${t}`);return o}catch(o){return r(o.message)}});ue("task/getTasksByDay",async({year:e,month:t,day:r},{rejectedWithValue:o})=>{try{const{data:a}=await ie.get(`/api/task/day/${e}-${t}-${r}`);return a}catch(a){return o(a.message)}});const wn=ue("task/addTask",async(e,{rejectedWithValue:t})=>{try{return(await ie.post("/api/task",e)).data}catch(r){return t(r.message)}}),bn=ue("task/deleteTask",async(e,{rejectedWithValue:t})=>{try{return(await ie.delete(`/api/task/${e}`)).data}catch(r){t(r.message)}});ue("task/editTask",async({id:e,task:t},{rejectedWithValue:r})=>{try{return(await ie.patch(`/api/task/${e}`,t)).data}catch(o){r(o.message)}});const kn=ue("task/changeCategory",async({id:e,categoryData:t},r)=>{try{return(await ie.patch(`/api/task/category/${e}`,t)).data}catch(o){return r.rejectWithValue(o.message)}}),et=({onClose:e,task:t,status:r,...o})=>{const a=Re(),d=(o==null?void 0:o.editMode)||!1,s=r||"To do",{currentDate:m}=mt(),p={title:(t==null?void 0:t.title)||"",start:(t==null?void 0:t.start)||"",end:(t==null?void 0:t.end)||"",priority:(t==null?void 0:t.priority)||"Low"},v=[{value:"Low",name:"Low"},{value:"Medium",name:"Medium"},{value:"High",name:"High"}],S=y=>{d?(a(updateTask({id:t._id,task:{date:t.date,...y,category:s}})),e()):(a(wn({...y,category:s,date:m})),e())};return n.jsx(n.Fragment,{children:n.jsx(gt,{initialValues:p,validateOnBlur:!0,validateOnChange:!0,validationSchema:yn,onSubmit:(y,{setSubmitting:g})=>{g(!1),S(y)},children:({values:y,errors:g,touched:b,handleChange:O,handleBlur:C,handleSubmit:M,isSubmitting:R,setFieldValue:A})=>n.jsxs(un,{onSubmit:M,children:[n.jsxs(Ie,{htmlFor:"title",children:[n.jsx(Pe,{children:"Title"}),n.jsx(De,{type:"text",name:"title",id:"title",onChange:O,onBlur:C,value:y.title,placeholder:"Enter text"}),n.jsx($e,{children:g.title&&b.title&&g.title})]}),n.jsxs(Ue,{children:[n.jsxs(Ie,{htmlFor:"start",children:[n.jsx(Pe,{children:"Start"}),n.jsx(De,{type:"time",step:"60",name:"start",id:"start",onChange:O,onBlur:C,value:y.start,placeholder:"Select time"}),n.jsx($e,{children:g.start&&b.start&&g.start})]}),n.jsxs(Ie,{htmlFor:"end",children:[n.jsx(Pe,{children:"End"}),n.jsx(De,{type:"time",step:"60",name:"end",id:"end",onChange:O,onBlur:C,value:y.end,placeholder:"Select time"}),n.jsx($e,{children:g.end&&b.end&&g.end})]})]}),n.jsx(fn,{children:v.map(z=>n.jsxs(hn,{children:[n.jsx(xn,{type:"radio",value:z.name,name:"priority",priority:z.name,checked:y.priority===z.name,onChange:()=>{A("priority",z.name)}}),z.value]},z.value))}),n.jsxs(Ue,{children:[d?n.jsxs(Xe,{type:"submit",disabled:R,children:[n.jsx(vn,{}),"Edit"]}):n.jsxs(Xe,{type:"submit",children:[n.jsx(gn,{}),"Add"]}),n.jsx(pn,{type:"button",disabled:R,onClick:e,children:"Cancel"})]})]})})})};et.propTypes={onClose:P.func.isRequired,task:P.shape({title:P.string,start:P.string,end:P.string,priority:P.string}),status:P.string};const tt=({onClose:e,task:t,status:r,...o})=>n.jsx(et,{onClose:e,task:t,status:r,...o});tt.propTypes={onClose:P.func.isRequired,task:P.object,status:P.string};const Ve={low:"Low",medium:"Medium",high:"High"},Tn=w.li`
  position: relative;
`,jn=w.ul`
  display: flex;
  gap: 10px;
`,ze=w.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;
    fill: rgba(17, 17, 17, 1);
    transition: fill var(--transition);

    &:hover,
    &:focus {
      fill: var(--blue);
    }
  }
`;function nt(e){return oe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"}}]})(e)}function Cn(e){return oe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Trash"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"}},{tag:"path",attr:{d:"M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z"}},{tag:"path",attr:{d:"M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z"}}]}]}]})(e)}const On=w.div`
  position: absolute;
  top: 12px;
  right: -64px;
  width: 115px;
  height: 70px;
  padding: 12px;

  background-color: rgba(220, 227, 229, 0.8);
  border: var(--border-modal);
  border-radius: 8px;
  box-shadow: var(--box-shadow);

  @media screen and (min-width: 768px) {
    top: 10px;
    left: -8px;
    width: 147px;
    height: 90px;
    padding: 20px;
  }
`,En=w.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
`,Sn=w.button`
  color: rgba(17, 17, 17, 1);
  font-family: var(--main-font);
  font-size: 12px;
  font-weight: 500;

  padding: 0;
  display: flex;
  justify-content: center;
  background-color: transparent;

  &:hover,
  &:focus {
    color: var(--blue);
    transition: color var(--transition);
  }

  &:hover > svg,
  &:focus > svg {
    fill: currentColor;
    transition: fill var(--transition);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,Mn=w(nt)`
  width: 14px;
  height: 14px;
  margin-left: 10px;
  fill: rgba(17, 17, 17, 1);

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,In=[{id:1,name:"To do"},{id:2,name:"In progress"},{id:3,name:"Done"}],rt=({task:e,toggleMenu:t})=>{T.useEffect(()=>(window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}));const r=d=>{d.code==="Escape"&&t()},o=Re();let a=In.filter(d=>d.name!==e.category);return n.jsx(On,{children:n.jsx(En,{children:a.map(d=>n.jsx("li",{children:n.jsxs(Sn,{type:"button",onClick:()=>o(kn({id:e._id,categoryData:{category:d.name}})),children:[d.name,n.jsx(Mn,{})]})},d.id))})})};rt.propTypes={toggleMenu:P.func.isRequired,task:P.shape({_id:P.string.isRequired,category:P.string.isRequired}).isRequired};function ve(){return ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},ve.apply(this,arguments)}var Pn=function(t,r){r===void 0&&(r=!0),T.useEffect(function(){if(r){var o=function(d){d.key==="Escape"&&t(d)};return document.addEventListener("keyup",o),function(){r&&document.removeEventListener("keyup",o)}}},[t,r])},Dn=function(t,r){r===void 0&&(r=!0),T.useEffect(function(){if(r){var o=function(){t()};return window.addEventListener("resize",o),function(){r&&window.removeEventListener("resize",o)}}},[t,r])},$n=function(t,r,o){o===void 0&&(o=!0),T.useEffect(function(){if(o){var a=function(s){var m=Array.isArray(t)?t:[t],p=!1;m.forEach(function(v){if(!v.current||v.current.contains(s.target)){p=!0;return}}),s.stopPropagation(),p||r(s)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){o&&(document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a))}}},[t,r,o])},zn=function(t,r){r===void 0&&(r=!0),T.useEffect(function(){if(r){var o=function(d){if(d.keyCode===9){var s,m=t==null||(s=t.current)===null||s===void 0?void 0:s.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),p=Array.prototype.slice.call(m);if(p.length===1){d.preventDefault();return}var v=p[0],S=p[p.length-1];d.shiftKey&&document.activeElement===v?(d.preventDefault(),S.focus()):document.activeElement===S&&(d.preventDefault(),v.focus())}};return document.addEventListener("keydown",o),function(){r&&document.removeEventListener("keydown",o)}}},[t,r])},Ln=typeof window<"u"?T.useLayoutEffect:T.useEffect,ge={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},Rn=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],An=function(t,r,o,a,d){var s=d.offsetX,m=d.offsetY,p=a?8:0,v=o.split(" "),S=t.top+t.height/2,y=t.left+t.width/2,g=r.height,b=r.width,O=S-g/2,C=y-b/2,M="",R="0%",A="0%";switch(v[0]){case"top":O-=g/2+t.height/2+p,M="rotate(180deg)  translateX(50%)",R="100%",A="50%";break;case"bottom":O+=g/2+t.height/2+p,M="rotate(0deg) translateY(-100%) translateX(-50%)",A="50%";break;case"left":C-=b/2+t.width/2+p,M=" rotate(90deg)  translateY(50%) translateX(-25%)",A="100%",R="50%";break;case"right":C+=b/2+t.width/2+p,M="rotate(-90deg)  translateY(-150%) translateX(25%)",R="50%";break}switch(v[1]){case"top":O=t.top,R=t.height/2+"px";break;case"bottom":O=t.top-g+t.height,R=g-t.height/2+"px";break;case"left":C=t.left,A=t.width/2+"px";break;case"right":C=t.left-b+t.width,A=b-t.width/2+"px";break}return O=v[0]==="top"?O-m:O+m,C=v[0]==="left"?C-s:C+s,{top:O,left:C,transform:M,arrowLeft:A,arrowTop:R}},_n=function(t){var r={top:0,left:0,width:window.innerWidth,height:window.innerHeight};if(typeof t=="string"){var o=document.querySelector(t);o!==null&&(r=o.getBoundingClientRect())}return r},qn=function(t,r,o,a,d,s){var m=d.offsetX,p=d.offsetY,v={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},S=0,y=_n(s),g=Array.isArray(o)?o:[o];for((s||Array.isArray(o))&&(g=[].concat(g,Rn));S<g.length;){v=An(t,r,g[S],a,{offsetX:m,offsetY:p});var b={top:v.top,left:v.left,width:r.width,height:r.height};if(b.top<=y.top||b.left<=y.left||b.top+b.height>=y.top+y.height||b.left+b.width>=y.left+y.width)S++;else break}return v},Fn=0,Hn=function(){var t=document.getElementById("popup-root");return t===null&&(t=document.createElement("div"),t.setAttribute("id","popup-root"),document.body.appendChild(t)),t},Wn=T.forwardRef(function(e,t){var r=e.trigger,o=r===void 0?null:r,a=e.onOpen,d=a===void 0?function(){}:a,s=e.onClose,m=s===void 0?function(){}:s,p=e.defaultOpen,v=p===void 0?!1:p,S=e.open,y=S===void 0?void 0:S,g=e.disabled,b=g===void 0?!1:g,O=e.nested,C=O===void 0?!1:O,M=e.closeOnDocumentClick,R=M===void 0?!0:M,A=e.repositionOnResize,z=A===void 0?!0:A,ye=e.closeOnEscape,we=ye===void 0?!0:ye,ae=e.on,l=ae===void 0?["click"]:ae,c=e.contentStyle,u=c===void 0?{}:c,i=e.arrowStyle,f=i===void 0?{}:i,x=e.overlayStyle,_=x===void 0?{}:x,E=e.className,L=E===void 0?"":E,se=e.position,Z=se===void 0?"bottom center":se,N=e.modal,Q=N===void 0?!1:N,G=e.lockScroll,ee=G===void 0?!1:G,k=e.arrow,B=k===void 0?!0:k,D=e.offsetX,te=D===void 0?0:D,q=e.offsetY,X=q===void 0?0:q,K=e.mouseEnterDelay,le=K===void 0?100:K,pe=e.mouseLeaveDelay,fe=pe===void 0?100:pe,de=e.keepTooltipInside,he=de===void 0?!1:de,ce=e.children,qe=T.useState(y||v),Y=qe[0],Fe=qe[1],U=T.useRef(null),H=T.useRef(null),ne=T.useRef(null),He=T.useRef(null),We=T.useRef("popup-"+ ++Fn),W=Q?!0:!o,xe=T.useRef(0);Ln(function(){return Y?(He.current=document.activeElement,Ne(),lt(),at()):st(),function(){clearTimeout(xe.current)}},[Y]),T.useEffect(function(){typeof y=="boolean"&&(y?be():J())},[y,b]);var be=function(h){Y||b||(Fe(!0),setTimeout(function(){return d(h)},0))},J=function(h){var F;!Y||b||(Fe(!1),W&&((F=He.current)===null||F===void 0||F.focus()),setTimeout(function(){return m(h)},0))},Ee=function(h){h==null||h.stopPropagation(),Y?J(h):be(h)},Se=function(h){clearTimeout(xe.current),xe.current=setTimeout(function(){return be(h)},le)},it=function(h){h==null||h.preventDefault(),Ee()},Me=function(h){clearTimeout(xe.current),xe.current=setTimeout(function(){return J(h)},fe)},at=function(){W&&ee&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},st=function(){W&&ee&&(document.getElementsByTagName("body")[0].style.overflow="auto")},lt=function(){var h,F=H==null||(h=H.current)===null||h===void 0?void 0:h.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),I=Array.prototype.slice.call(F)[0];I==null||I.focus()};T.useImperativeHandle(t,function(){return{open:function(){be()},close:function(){J()},toggle:function(){Ee()}}});var Ne=function(){if(!(W||!Y)&&!(!(U!=null&&U.current)||!(U!=null&&U.current)||!(H!=null&&H.current))){var h=U.current.getBoundingClientRect(),F=H.current.getBoundingClientRect(),I=qn(h,F,Z,B,{offsetX:te,offsetY:X},he);if(H.current.style.top=I.top+window.scrollY+"px",H.current.style.left=I.left+window.scrollX+"px",B&&ne.current){var re,me;ne.current.style.transform=I.transform,ne.current.style.setProperty("-ms-transform",I.transform),ne.current.style.setProperty("-webkit-transform",I.transform),ne.current.style.top=((re=f.top)===null||re===void 0?void 0:re.toString())||I.arrowTop,ne.current.style.left=((me=f.left)===null||me===void 0?void 0:me.toString())||I.arrowLeft}}};Pn(J,we),zn(H,Y&&W),Dn(Ne,z),$n(o?[H,U]:[H],J,R&&!C);var dt=function(){for(var h={key:"T",ref:U,"aria-describedby":We.current},F=Array.isArray(l)?l:[l],I=0,re=F.length;I<re;I++)switch(F[I]){case"click":h.onClick=Ee;break;case"right-click":h.onContextMenu=it;break;case"hover":h.onMouseEnter=Se,h.onMouseLeave=Me;break;case"focus":h.onFocus=Se,h.onBlur=Me;break}if(typeof o=="function"){var me=o(Y);return!!o&&V.cloneElement(me,h)}return!!o&&V.cloneElement(o,h)},ct=function(){var h=W?ge.popupContent.modal:ge.popupContent.tooltip,F={className:"popup-content "+(L!==""?L.split(" ").map(function(I){return I+"-content"}).join(" "):""),style:ve({},h,u,{pointerEvents:"auto"}),ref:H,onClick:function(re){re.stopPropagation()}};return!Q&&l.indexOf("hover")>=0&&(F.onMouseEnter=Se,F.onMouseLeave=Me),F},Be=function(){return V.createElement("div",Object.assign({},ct(),{key:"C",role:W?"dialog":"tooltip",id:We.current}),B&&!W&&V.createElement("div",{ref:ne,style:ge.popupArrow},V.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(L!==""?L.split(" ").map(function(h){return h+"-arrow"}).join(" "):""),viewBox:"0 0 32 16",style:ve({position:"absolute"},f)},V.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),ce&&typeof ce=="function"?ce(J,Y):ce)},ut=!(l.indexOf("hover")>=0),pt=W?ge.overlay.modal:ge.overlay.tooltip,ft=[ut&&V.createElement("div",{key:"O","data-testid":"overlay","data-popup":W?"modal":"tooltip",className:"popup-overlay "+(L!==""?L.split(" ").map(function($){return $+"-overlay"}).join(" "):""),style:ve({},pt,_,{pointerEvents:R&&C||W?"auto":"none"}),onClick:R&&C?J:void 0,tabIndex:-1},W&&Be()),!W&&Be()];return V.createElement(V.Fragment,null,dt(),Y&&vt.createPortal(ft,Hn()))});const ot=({toggleModal:e,task:t})=>{const r=Re(),o=()=>r(bn(t._id));return n.jsxs(jn,{children:[n.jsx(Tn,{children:n.jsx(Wn,{arrow:!1,trigger:n.jsx(ze,{type:"button",children:n.jsx(nt,{})}),position:"bottom center",on:"click",closeOnDocumentClick:!0,closeOnEscape:!0,lockScroll:!0,children:a=>n.jsx(rt,{task:t,toggleMenu:a})})}),n.jsx("li",{children:n.jsx(ze,{type:"button",onClick:e,children:n.jsx(mn,{})})}),n.jsx("li",{children:n.jsx(ze,{type:"button",onClick:o,children:n.jsx(Cn,{})})})]})};ot.propTypes={toggleModal:P.func.isRequired,task:P.shape({_id:P.string.isRequired}).isRequired};var Le={exports:{}};(function(e,t){(function(r,o){o(t,T,$t)})(void 0,function(r,o,a){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var d=m(o),s=m(a);function m(l){return l&&l.__esModule?l:{default:l}}function p(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?p=function(u){return typeof u}:p=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},p(l)}function v(l,c){if(l==null)return{};var u=S(l,c),i,f;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(l);for(f=0;f<x.length;f++)i=x[f],!(c.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(l,i)&&(u[i]=l[i])}return u}function S(l,c){if(l==null)return{};var u={},i=Object.keys(l),f,x;for(x=0;x<i.length;x++)f=i[x],!(c.indexOf(f)>=0)&&(u[f]=l[f]);return u}function y(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")}function g(l,c){for(var u=0;u<c.length;u++){var i=c[u];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,i.key,i)}}function b(l,c,u){return c&&g(l.prototype,c),u&&g(l,u),l}function O(l,c){return c&&(p(c)==="object"||typeof c=="function")?c:M(l)}function C(l){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(u){return u.__proto__||Object.getPrototypeOf(u)},C(l)}function M(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function R(l,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(c&&c.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),c&&A(l,c)}function A(l,c){return A=Object.setPrototypeOf||function(i,f){return i.__proto__=f,i},A(l,c)}function z(l,c,u){return c in l?Object.defineProperty(l,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[c]=u,l}var ye=1e-4,we=function(c,u){return Math.abs(c-u)<ye},ae=function(l){R(c,l);function c(){var u,i;y(this,c);for(var f=arguments.length,x=new Array(f),_=0;_<f;_++)x[_]=arguments[_];return i=O(this,(u=C(c)).call.apply(u,[this].concat(x))),z(M(i),"onResize",function(){i.rafId&&window.cancelAnimationFrame(i.rafId),i.rafId=window.requestAnimationFrame(i.update.bind(M(i)))}),z(M(i),"onToggled",function(E){typeof i.props.onToggled=="function"&&setTimeout(function(){return i.props.onToggled(E)},0)}),z(M(i),"onTruncated",function(){typeof i.props.onTruncated=="function"&&setTimeout(function(){return i.props.onTruncated()},0)}),z(M(i),"onCalculated",function(){typeof i.props.onCalculated=="function"&&setTimeout(function(){return i.props.onCalculated()},0)}),z(M(i),"update",function(){var E=window.getComputedStyle(i.scope),L=[E["font-weight"],E["font-style"],E["font-size"],E["font-family"],E["letter-spacing"]].join(" ");i.canvas.font=L,i.forceUpdate()}),i}return b(c,[{key:"componentDidMount",value:function(){var i=document.createElement("canvas"),f=document.createDocumentFragment(),x=window.getComputedStyle(this.scope),_=[x["font-weight"],x["font-style"],x["font-size"],x["font-family"]].join(" ");f.appendChild(i),this.canvas=i.getContext("2d"),this.canvas.font=_,this.forceUpdate(),window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize),this.rafId&&window.cancelAnimationFrame(this.rafId)}},{key:"measureWidth",value:function(i){return this.canvas.measureText(i).width}},{key:"getRenderText",value:function(){var i=this.props;i.containerClassName,i.element;var f=i.line;i.onCalculated,i.onTruncated,i.onToggled;var x=i.text,_=i.textElement,E=i.textTruncateChild,L=i.truncateText,se=i.maxCalculateTimes,Z=v(i,["containerClassName","element","line","onCalculated","onTruncated","onToggled","text","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),N=this.scope.getBoundingClientRect().width;if(N===0)return null;var Q=this.measureWidth(x);if(N>Q||we(N,Q))return this.onToggled(!1),(0,o.createElement)(_,Z,x);var G="";if(E&&typeof E.type=="string"){var ee=E.type;(ee.indexOf("span")>=0||ee.indexOf("a")>=0)&&(G=E.props.children)}for(var k=1,B=x.length,D="",te=0,q=0,X=f,K=0,le=!1,pe=!1,fe=0,de=-1,he="",ce=0;X-- >0;){for(he=X?"":L+(G?" "+G:"");k<=B;)if(D=x.substr(q,k),K=this.measureWidth(D+he),K<N)te=x.indexOf(" ",k+1),te===-1?(k+=1,le=!1):(le=!0,k=te);else{do{if(ce++>=se)break;D=x.substr(q,k),X||k--,D[D.length-1]===" "&&(D=x.substr(q,k-1)),le?(de=D.lastIndexOf(" "),de>-1?(k=de,X&&k++,D=x.substr(q,k)):(k--,D=x.substr(q,k))):(k--,D=x.substr(q,k)),K=this.measureWidth(D+he)}while((K>N||we(K,N))&&D.length>0);q+=k;break}if(k>=B){q=B;break}le&&!pe&&x.substr(fe,k).indexOf(" ")===-1&&(pe=x.substr(fe,k).indexOf(" ")===-1,X--),fe=k+1}return q===B?(this.onToggled(!1),(0,o.createElement)(_,Z,x)):(this.onTruncated(),this.onToggled(!0),d.default.createElement("span",Z,(0,o.createElement)(_,Z,x.substr(0,q)+L+" "),E))}},{key:"render",value:function(){var i=this,f=this.props,x=f.element,_=f.text,E=f.style,L=E===void 0?{}:E,se=f.containerClassName,Z=f.line;f.onCalculated,f.onTruncated,f.onToggled;var N=f.textElement;f.textTruncateChild,f.truncateText,f.maxCalculateTimes;var Q=v(f,["element","text","style","containerClassName","line","onCalculated","onTruncated","onToggled","textElement","textTruncateChild","truncateText","maxCalculateTimes"]),G=L.fontWeight,ee=L.fontStyle,k=L.fontSize,B=L.fontFamily,D=this.scope&&Z?this.getRenderText():(0,o.createElement)(N,Q,_),te={ref:function(X){i.scope=X},className:se,style:{overflow:"hidden",fontWeight:G,fontStyle:ee,fontSize:k,fontFamily:B}};return this.scope&&this.onCalculated(),(0,o.createElement)(x,te,D)}}]),c}(o.Component);z(ae,"propTypes",{containerClassName:s.default.string,element:s.default.string,line:s.default.oneOfType([s.default.number,s.default.bool]),onCalculated:s.default.func,onTruncated:s.default.func,onToggled:s.default.func,text:s.default.string,textElement:s.default.elementType,textTruncateChild:s.default.node,truncateText:s.default.string,maxCalculateTimes:s.default.number}),z(ae,"defaultProps",{element:"div",line:1,text:"",textElement:"span",truncateText:"…",maxCalculateTimes:10}),r.default=ae,e.exports=r.default})})(Le,Le.exports);var Nn=Le.exports;const Bn=yt(Nn),Yn=w.li`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 14px;
  width: 100%;

  background-color: var(--form-textarea);
  border: var(--border-dark-theme);
  border-radius: 8px;

  @media (min-width: 1280px) {
    min-height: 110px;
    padding-top: 14px;
    padding-right: 10px;
    padding-bottom: 18px;
  }

  > h4 {
    overflow: visible !important;
  }
`,Ze=w.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
`,Xn=w(Bn)`
  font-weight: 500;
  font-size: 14px;
  width: 200px;
  font-family: var(--main-font);
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.29;
  color: red;
`,Un=w(an)`
  width: 32px;
  height: 32px;
  color: red;
  border: 2px solid;
  border-radius: 60%;
  border-color: var(--accent-bg-color);
  object-fit: cover;
  color: var(--auth-bg-color);
`,Vn=w.div`
  width: 32px;
  height: 32px;
`,Zn=w.p`
  padding: 4px 12px;
  background: var(
    ${e=>e.priority===Ve.medium?"--day-status-medium":e.priority===Ve.high?"--day-status-high":"--day-status-low"}
  );
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.2;
  text-align: center;
  color: var(white);
`,Gn=w(ot)`
  margin-left: auto;
`,Kn=w.img`
  width: inherit;
  height: 100%;
  border-radius: 50%;
  border: solid 1px var(--blue);
  object-fit: cover;
`,Jn=(e,t)=>{const{description:r,avatarUrl:o,priority:a}=e;return n.jsxs(Yn,{children:[n.jsx(Xn,{line:1,element:"h4",truncateText:"...",text:task.title}),n.jsxs(Ze,{children:[n.jsxs(Ze,{children:[n.jsx(Vn,{children:o?n.jsx(Kn,{src:o,alt:"User Avatar"}):n.jsx(Un,{})}),n.jsx(Zn,{style:{backgroundColor:Qn(a)},children:a})]}),n.jsx(Gn,{task:e,title:t})]})]})},Qn=e=>{if(e==="high")return"#EA3D65";if(e==="medium")return"#F3B249";if(e==="low")return"#72C2F8"},er=w.ul`
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: auto;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0;
  gap: 14px;
  max-height: 301px;
  padding-right: 6px;
  min-height: 1px;
  scrollbar-width: thin;
  scrollbar-color: rgba(242, 242, 242, 1);
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 12px;
  }

  @media (min-width: 768px) {
    gap: 18px;
    padding-right: 7px;

    &::-webkit-scrollbar {
      width: 8px;
    }
  }
`,tr=({tasks:e,title:t,selectedDate:r})=>n.jsx(n.Fragment,{children:n.jsx(er,{title:t,children:e&&e.map(o=>o.data.map(a=>n.jsx(Jn,{selectedDate:r,description:a.title,avatarUrl:a.owner.avatarURL,id:a._id,date:a.date,category:a.category,priority:a.priority,start:a.start,end:a.end},a.createdAt)))})}),nr=({tasks:e,title:t,selectedDate:r})=>{const[o,a]=T.useState(!1),d=()=>{a(!0)},s=()=>{a(!1)};return n.jsxs(n.Fragment,{children:[n.jsxs(cn,{children:[n.jsx(rn,{title:t,handleShowModal:d}),n.jsx(tr,{selectedDate:r,tasks:e,title:t}),n.jsx(Qe,{onClick:d,title:t})]}),o&&n.jsx(wt,{onClose:s,children:n.jsx(tt,{onClose:s})})]})},rr=j.ul`
  display: flex;
  width: 100%;
  min-height: 100%;
  gap: 16px;
  overflow: auto hidden;
  scroll-snap-type: x mandatory;
  @media screen and (min-width: 1440px) {
    gap: 27px;
  }
`,or=({selectedDate:e,setSelectedDate:t})=>{const r=["To do","In progress","Done"];return n.jsxs(n.Fragment,{children:[n.jsx(Jt,{selectedDate:e,setSelectedDate:t}),n.jsx(rr,{children:r.map(o=>n.jsx(nr,{title:o,collection:""},T.useId()))})]})},ir=()=>{const[e,t]=T.useState(Date.now()),[r,o]=T.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(It,{children:[n.jsx(Pt,{selectedDate:e,typeDateDay:r,setSelectedDate:t}),n.jsx(At,{typeDateDay:r,setType:o})]}),r?n.jsx(or,{selectedDate:e,setSelectedDate:t}):n.jsx(Xt,{selectedDate:e,setSelectedDate:t})]})},cr=()=>n.jsx(Dt,{children:n.jsx(ir,{})});export{cr as default};
