import{s as t,L as n,j as e}from"./index-644024b8.js";import{G as r}from"./iconBase-ff6358bf.js";const o="/GooseTrack_frontend/assets/logo_goose1x-75fc3bc2.png",a="/GooseTrack_frontend/assets/logo_goose2x-49dc0cb7.png";function s(i){return r({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}},{tag:"polyline",attr:{points:"10 17 15 12 10 7"}},{tag:"line",attr:{x1:"15",y1:"12",x2:"3",y2:"12"}}]})(i)}const d=t.section`
  height: 812px;
  padding-inline: 20px;
  padding-bottom: 74px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  background-color: var(--blue);

  @media screen and (min-width: 768px) {
    min-height: 460px;
    gap: 40px;
  }
`,c=t.div`
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
`,l=t.img`
  display: block;
  width: 142px;
  height: 142px;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,x=t.h1`
  color: var(--white);
  text-shadow: var(--logo-text-shadow);
  font-family: var(--main-font);
  font-size: 44px;
  line-height: 1.1;

  @media screen and (min-width: 768px) {
    font-size: 120px;
    line-height: 1.25;
  }
`,p=t.span`
  font-style: italic;
`,h=t.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  flex: 1.5;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    flex: 0;
    gap: 24px;
  }
`,g=t(n)`
  color: var(--blue);
  font-family: 'Inter';
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.28px;

  border-radius: 16px;
  background-color: var(--white);
  box-shadow: var(--shadow-btn);
  border: 1px solid transparent;
  padding: 14px 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  transition: var(--transition);

  :hover,
  :focus {
    color: var(--white);
    background-color: transparent;
    border-color: var(--white);
    box-shadow: var(--box-shadow-hover);
  }
`,f=t(n)`
  color: var(--white);
  text-shadow: var(--text-shadow);
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-decoration-line: underline;

  border-radius: 16px;
  background-color: transparent;
  box-shadow: none;
  border: 1px solid transparent;
  padding: 14px 32px;

  transition: var(--transition);

  :hover,
  :focus {
    color: var(--white);
    background-color: transparent;
    border-color: var(--white);
    box-shadow: var(--box-shadow-hover);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`,m=t.div`
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
`,u=()=>e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(m,{children:e.jsx(n,{to:"/",children:e.jsx(l,{src:`${o}`,srcSet:`${o} 1x, ${a} 2x`,alt:"Logo"})})}),e.jsxs(x,{children:["G",e.jsx(p,{children:"oo"}),"seTrack"]})]}),e.jsxs(h,{children:[e.jsxs(g,{to:"/login",children:["Log in ",e.jsx(s,{size:18})]}),e.jsx(f,{to:"/register",children:"Sign up"})]})]});function b(){return e.jsx(e.Fragment,{children:e.jsx(u,{})})}export{b as default};
