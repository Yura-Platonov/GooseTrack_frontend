import{s as n,L as r,j as e}from"./index-3bc80ce9.js";import{G as m}from"./iconBase-9e3ff6b2.js";const d="/GooseTrack_frontend/assets/logo_goose1x-75fc3bc2.png",g="/GooseTrack_frontend/assets/logo_goose2x-49dc0cb7.png";function f(h){return m({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}},{tag:"polyline",attr:{points:"10 17 15 12 10 7"}},{tag:"line",attr:{x1:"15",y1:"12",x2:"3",y2:"12"}}]})(h)}const b=n.section`
  max-width: 1440px;
  height: 812px;
  padding-inline: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  background-color: var(--blue);

  @media screen and (min-width: 768px) {
    height: 1024px;

    gap: 40px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1440px;
    height: 770px;

    gap: 40px;
  }
`,u=n.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 2px;
  flex: 2;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex: 0;
  }
`,w=n.img`
  display: block;
  width: 142px;
  height: 142px;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,j=n.h1`
  color: var(--white);
  text-shadow: var(--logo-text-shadow);
  font-family: var(--main-font);
  font-size: 44px;
  line-height: 1.1;

  @media screen and (min-width: 768px) {
    font-size: 120px;
    line-height: 1.25;
  }
`,_=n.span`
  font-style: italic;
`,v=n.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  flex: 1.5;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    flex: 0;
  }
`,k=n(r)`
  color: var(--blue);
  font-family: var(--main-font);
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.28px;

  border-radius: 16px;
  background-color: var(--white);
  box-shadow: var(--shadow-btn);
  border: 1px solid transparent;
  padding: 14px 22px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--white);
    background-color: transparent;
    border-color: var(--white);
    box-shadow: var(--box-shadow-hover);
  }
`,y=n(r)`
  color: var(--white);
  text-shadow: var(--text-shadow);
  font-family: var(--main-font);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-decoration-line: underline;

  border-radius: 16px;
  background-color: transparent;
  box-shadow: none;
  border: 1px solid transparent;
  padding: 14px 22px;

  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--white);
    background-color: transparent;
    border-color: var(--white);
    box-shadow: var(--box-shadow-hover);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`,T=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > a {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`,G=()=>e.jsxs(b,{children:[e.jsxs(u,{children:[e.jsx(T,{children:e.jsx(r,{to:"/",children:e.jsx(w,{src:`${d}`,srcSet:`${d} 1x, ${g} 2x`,alt:"Logo"})})}),e.jsxs(j,{children:["G",e.jsx(_,{children:"oo"}),"seTrack"]})]}),e.jsxs(v,{children:[e.jsxs(k,{to:"/login",children:["Log in ",e.jsx(f,{size:18})]}),e.jsx(y,{to:"/register",children:"Sign up"})]})]}),$=n.section`
  padding: 64px 20px;
  margin: 0 auto;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 64px 32px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1440px;
    padding: 118px 128px;
  }
`,S=n.h2`
  visibility: hidden;
  width: 1px;
  height: 1px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-1px, -1px);
`,z=n.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 64px;
`,t=n.li`
  display: inline-flex;
  flex-direction: column;
  :nth-child(2n) {
    align-items: flex-end;
  }

  @media screen and (min-width: 768px) {
    &:nth-child(2n) {
      margin-left: auto;
    }
  }

  @media screen and (min-width: 1024px) {
    max-width: 1107px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16vw;

    &:nth-child(2n) {
      flex-direction: row-reverse;
      align-items: center;
    }
    &:nth-child(2n-1) {
      margin-left: auto;
    }
  }
`,i=n.h3`
  display: inline-flex;
  flex-direction: column;
  color: var(--heading-text-color);
  font-size: 32px;
  line-height: 1.25;
  font-family: var(--main-font);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    width: 275px;
    font-size: 40px;
    line-height: 1.1;
    margin-bottom: 24px;
  }
`,o=n.span`
  color: var(--blue);
  font-size: 80px;
  line-height: 1;
  letter-spacing: -4px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 104px;
    line-height: 1;
    letter-spacing: -4px;
  }
`,c=n.span`
  color: var(--blue);
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  padding: 8px 19px;
  border-radius: 44px;
  background: var(--modal-backdrop);
  margin-bottom: 8px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`,s=n.p`
  color: var(--description-text-color);
  font-size: 14px;
  line-height: 1.29;
  font-family: var(--main-font);
  font-weight: 500;

  @media screen and (min-width: 768px) {
    max-width: 275px;
  }
`,a=n.div`
  margin-top: 40px;

  @media screen and (min-width: 1024px) {
    margin-top: 0;
  }
`,x="/GooseTrack_frontend/assets/calendar-mob-c87d26a1.jpg",L="/GooseTrack_frontend/assets/calendar-mob2x-d06dba08.jpg",C="/GooseTrack_frontend/assets/calendar-tab-fcd20eb5.jpg",A="/GooseTrack_frontend/assets/calendar-tab2x-0b7904e8.jpg",D="/GooseTrack_frontend/assets/calendar-desk-bb27c391.jpg",H="/GooseTrack_frontend/assets/calendar-desk2x-ed00d5a6.jpg",l="/GooseTrack_frontend/assets/sidebar-mob-b97f9cc4.jpg",B="/GooseTrack_frontend/assets/sidebar-mob2x-f5663405.jpg",I="/GooseTrack_frontend/assets/sidebar-tab-2648add1.jpg",M="/GooseTrack_frontend/assets/sidebar-tab2x-cc7a8216.jpg",F="/GooseTrack_frontend/assets/sidebar-desk-27e6f454.jpg",N="/GooseTrack_frontend/assets/sidebar-desk2x-10bdfd52.jpg",p="/GooseTrack_frontend/assets/all_in_one_mob-77d0ae1b.jpg",W="/GooseTrack_frontend/assets/all_in_one_mob2x-879bd72b.jpg",q="/GooseTrack_frontend/assets/all_in_one_tab-4d3f4fcb.jpg",E="/GooseTrack_frontend/assets/all_in_one_tab2x-46b45d1f.jpg",O="/GooseTrack_frontend/assets/all_in_one_desk-0996a03f.jpg",P="/GooseTrack_frontend/assets/all_in_one_desk2x-d1b71c99.jpg",R=()=>e.jsxs($,{children:[e.jsx(S,{children:"Description"}),e.jsxs(z,{children:[e.jsxs(t,{children:[e.jsxs("div",{children:[e.jsxs(i,{children:[e.jsx(o,{children:"1."}),e.jsx(c,{children:"Calendar"}),"View"]}),e.jsx(s,{children:"GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout."})]}),e.jsx(a,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(max-width: 767px)",srcSet:`${x} 1x, ${L} 2x`}),e.jsx("source",{media:"(max-width: 1279px)",width:"604px",srcSet:`${C} 1x, ${A} 2x`}),e.jsx("source",{media:"(min-width: 1280px)",width:"604px",srcSet:`${D} 1x, ${H} 2x`}),e.jsx("img",{src:`${x}`,alt:"Calendar landing"})]})})]}),e.jsxs(t,{children:[e.jsxs("div",{children:[e.jsxs(i,{children:[e.jsx(o,{children:"2."}),"Sidebar"]}),e.jsx(s,{children:'GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.'})]}),e.jsx(a,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(max-width: 767px)",srcSet:`${l} 1x, ${B} 2x`}),e.jsx("source",{media:"(max-width: 1279px)",srcSet:`${I} 1x, ${M} 2x`}),e.jsx("source",{media:"(min-width: 1280px)",srcSet:`${F} 1x, ${N} 2x`}),e.jsx("img",{src:`${l}`,alt:"Calendar landing"})]})})]}),e.jsxs(t,{children:[e.jsxs("div",{children:[e.jsxs(i,{children:[e.jsx(o,{children:"3."}),e.jsx(c,{children:"All in"}),"One"]}),e.jsx(s,{children:"GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack."})]}),e.jsx(a,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(max-width: 767px)",srcSet:`${p} 1x, ${W} 2x`}),e.jsx("source",{media:"(max-width: 1279px)",srcSet:`${q} 1x, ${E} 2x`}),e.jsx("source",{media:"(min-width: 1280px)",srcSet:`${O} 1x, ${P} 2x`}),e.jsx("img",{src:`${p}`,alt:"Calendar landing"})]})})]})]})]});function J(){return e.jsxs(e.Fragment,{children:[e.jsx(G,{}),e.jsx(R,{})]})}export{J as default};
