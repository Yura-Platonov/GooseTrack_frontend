import{s as o,N as d,j as e}from"./index-14ee80d0.js";import{c as p,a as n}from"./index.esm-bbe4298a.js";import{u as m}from"./formik.esm-6ad12484.js";const x="/GooseTrack_frontend/assets/signUpElement-b017ea60.png",c=o.form`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  margin: auto;
  height: 100vh;
  background-color: #dcebf7;
`,h=o.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  position: relative;
  padding: 24px;
  width: 287px;
  background-color: #ffffff;
  border-radius: 8px;

  @media (min-width: 768px) {
    margin-top: 124px;
    width: 400px;
    padding: 40px;
  }
`,g=o.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #3e85f3;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`,t=o.div`
  display: flex;
  flex-direction: column;
`,r=o.label`
  text-align: left;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 14px;
  }
`,a=o.input`
  height: 46px;
  border-radius: 8px;
  padding-left: 14px;
  border: 1px solid #dce3e5;
  &::placeholder {
    color: #dce3e5;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    height: 54px;
  }
`,u=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  margin-top: 8px;
  border-radius: 16px;
  background-color: #3e85f3;
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: white;

  @media (min-width: 768px) {
    height: 56px;
    font-size: 18px;
  }
`,f=o.svg`
  /* width: 24px;
  height: 24px;
  fill: white; */
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`,b=o(d)`
  color: #3e85f3;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  top: 10px;

  @media (min-width: 768px) {
    font-size: 18px;
    bottom: 60px;
  }
`,w=o.img`
  display: none;

  @media (min-width: 1200px) {
    position: fixed;
    top: 354px;
    /* left: 49px; */
    margin-right: 950px;
    display: block;
    font-size: 18px;
  }
  background-color: transparent;
`,l=o.div`
  margin-top: 5px;
  font-size: 12px;
  color: #3e85f3;
`,S=()=>{const i=m({initialValues:{name:"",email:"",password:""},validationSchema:p({name:n().min(2,"Мінімум 2 символи").required("Обов'язкове поле"),email:n().email("Невірний email адрес").required("Обов'язкове поле"),password:n().min(7,"Пароль мінімум 7 символів").required("Обов'язкове поле")}),onSubmit:s=>console.log(JSON.stringify(s,null,2))});return e.jsxs(c,{children:[e.jsx(w,{src:x,alt:"goose with tablet"}),e.jsxs(h,{onSubmit:i.handleSubmit,className:"form",children:[e.jsx(g,{className:"title",children:"Sign Up"}),e.jsxs(t,{children:[e.jsx(r,{htmlFor:"name",children:"Name"}),e.jsx(a,{type:"text",id:"name",name:"name",placeholder:"Enter your name",value:i.values.name,onChange:i.handleChange,onBlur:i.handleBlur}),i.errors.name&&i.touched.name?e.jsx(l,{children:i.errors.name}):null]}),e.jsxs(t,{children:[e.jsx(r,{htmlFor:"email",children:"Email"}),e.jsx(a,{type:"email",id:"email",name:"email",placeholder:"Enter email",value:i.values.email,onChange:i.handleChange,onBlur:i.handleBlur}),i.errors.email&&i.touched.email?e.jsx(l,{children:i.errors.email}):null]}),e.jsxs(t,{children:[e.jsx(r,{htmlFor:"password",children:"Password"}),e.jsx(a,{type:"password",id:"password",name:"password",placeholder:"Enter password",value:i.values.password,onChange:i.handleChange,onBlur:i.handleBlur}),i.errors.password&&i.touched.password?e.jsx(l,{children:i.errors.password}):null]}),e.jsxs(u,{children:["Sign Up",e.jsx(f,{children:e.jsx("use",{href:"../../images/symbol-defs.svg#icon-Icon"})})]})]}),e.jsx(b,{to:"/login",children:"Log In"})]})};export{S as default};
