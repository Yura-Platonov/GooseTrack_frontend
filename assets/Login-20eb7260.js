import{s as i,N as a,j as e}from"./index-14ee80d0.js";import{u as d}from"./formik.esm-6ad12484.js";import{c as p,a as o}from"./index.esm-bbe4298a.js";const x=i.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin: auto;
  height: 100vh;
  background-color: #dcebf7;
`,c=i.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  padding: 24px;
  position: relative;
  width: 287px;
  /* height: 376px; */
  background-color: #ffffff;
  border-radius: 8px;

  @media (min-width: 768px) {
    margin-top: 174px;
    width: 400px;
    padding: 40px;
  }
`,m=i.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  color: #3e85f3;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`,n=i.div`
  display: flex;
  flex-direction: column;
`,r=i.label`
  text-align: left;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 14px;
  }
`,h=i.input`
  display: flex;
  justify-content: center;
  height: 46px;
  border-radius: 8px;
  padding-left: 14px;
  border: 1px solid #dce3e5;
  &::placeholder {
    content: "";
    color: #dce3e5;
    font-size: 16px;
    line-height: 46px;
  }
  &.custom {
    &::placeholder {
      font-size: 30px;
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    height: 54px;
  }
`,f=i.input`
  display: flex;
  justify-content: center;
  height: 46px;
  border-radius: 8px;
  padding-left: 14px;
  border: 1px solid #dce3e5;
  &::placeholder {
    content: "";
    position: absolute;
    top: 5px;
    bottom: 5px;
    color: #dce3e5;
    font-size: 32px;
    line-height: 46px;
  }

  @media (min-width: 768px) {
    height: 54px;
    &::placeholder {
      top: 10px;
      bottom: 5px;
    }
  }
`,g=i.button`
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
`,u=i.svg`
  /* width: 24px;
  height: 24px;
  fill: white; */
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`,b=i(a)`
  color: #3e85f3;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  top: 10px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,w=i.img`
  display: none;

  @media (min-width: 1200px) {
    position: fixed;
    top: 230px;
    margin-left: 950px;
    display: block;
    font-size: 18px;
  }
  background-color: transparent;
`,l=i.div`
  margin-top: 5px;
  font-size: 12px;
  color: #3e85f3;
`,z=()=>{const t=d({initialValues:{email:"",password:""},validationSchema:p({email:o().email("Невірний email адрес").required("Обов'язкове поле"),password:o().min(7,"Пароль мінімум 7 символів").required("Обов'язкове поле")}),onSubmit:s=>console.log(JSON.stringify(s,null,2))});return e.jsxs(x,{children:[e.jsx(w,{alt:"goose"}),e.jsxs(c,{onSubmit:t.handleSubmit,children:[e.jsx(m,{className:"title",children:"Log In"}),e.jsxs(n,{children:[e.jsx(r,{htmlFor:"email",children:"Email"}),e.jsx(h,{type:"email",id:"email",name:"email",placeholder:"nadiia@gmail.com",value:t.values.email,onChange:t.handleChange}),t.errors.email&&t.touched.email?e.jsx(l,{children:t.errors.email}):null]}),e.jsxs(n,{children:[e.jsx(r,{htmlFor:"password",children:"Password"}),e.jsx(f,{type:"text",id:"password",name:"password",placeholder:"• • • • • • •",className:"custom",value:t.values.password,onChange:t.handleChange}),t.errors.password&&t.touched.password?e.jsx(l,{children:t.errors.password}):null]}),e.jsxs(g,{children:["Log In",e.jsx(u,{children:e.jsx("use",{href:"../../images/symbol-defs.svg#icon-Icon"})})]})]}),e.jsx(b,{to:"/",children:"Sign Up"})]})};export{z as default};
