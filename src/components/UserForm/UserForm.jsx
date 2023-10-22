import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Error,
  About,
  Button,
  Container,
  Fields,
  Icon,
  Image,
  PlusContainer,
  Section,
  StyledForm,
  StyledInput,
  StyledLabel,
  Title,
  User,
  Wrapper,
  DateInput,
  TickIcon,
} from './UserForm.style.jsx';

import 'react-datepicker/dist/react-datepicker.css';

import image from '../../images/side-head/Elli.png';
import { useSelector } from 'react-redux';
// import { useSelector } from "react-redux";
// import { BsFillPlusCircleFill } from "react-icons/bs";

const UserForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const userData = useSelector((state) => state.auth.user);

  const formik = useFormik({
    initialValues: {
      avatar: userData.avatar ? userData.avatar : '',
      name: userData.name ? userData.name : '',
      email: userData.email ? userData.email : '',
      birthdate: userData.birthdate ? userData.birthdate : '',
      phone: userData.phone ? userData.phone : '',
      skype: userData.skype ? userData.skype : '',
    },
    validationSchema: Yup.object({
      avatar: Yup.mixed()
        .test('isFile', 'Wrong file type', (value) => {
          if (!value) {
            return true;
          }
          return value instanceof File;
        })
        .required('Choose a file'),
      name: Yup.string()
        .min(2, 'Min 2 symbols')
        .max(16, 'Max 16 symbols')
        .required('Name is a requierd field'),
      email: Yup.string()
        .email('Wrong email address')
        .required('Email is a requierd field'),
      birthdate: Yup.date('Choose a date').required('Date is a requierd field'),
      phone: Yup.number()
        .min(7, 'Min 7 symbols')
        .required('Phone is a requierd field'),
      skype: Yup.string().max(16).optional(),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <Container>
      <Wrapper>
        <StyledForm onSubmit={formik.handleSubmit}>
          <>
            <Section>
              <label htmlFor="file">
                <About>
                  <Image src={image} alt="nadiia doe" />
                  <PlusContainer>
                    <Icon />
                  </PlusContainer>
                  <Title>Nadiia Doe</Title>
                  <User>User</User>
                </About>
              </label>
              <input
                type="file"
                id="file"
                name="file"
                accept=".jpg, .jpeg, .png, .gif"
                style={{ display: 'none' }}
              />
              {formik.errors.file && formik.touched.file ? (
                <Error>{formik.errors.file}</Error>
              ) : null}
            </Section>
          </>
          <Fields>
            <div>
              <Section>
                <StyledLabel htmlFor="name">User Name</StyledLabel>
                <StyledInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nadiia Doe"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <Error>{formik.errors.name}</Error>
                ) : null}
              </Section>
              <Section>
                <StyledLabel htmlFor="birthdate">Birthday</StyledLabel>
                {/* <StyledInput
                        type="date"
                        name="birthdate"
                        id="birthdate"
                        placeholder="25/08/1995"
                        value={formik.values.birthdate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      /> */}

                <DateInput
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  icon={<TickIcon />}
                />

                {formik.errors.birthdate && formik.touched.birthdate ? (
                  <Error>{formik.errors.birthdate}</Error>
                ) : null}
              </Section>
              <Section>
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="nadiia@gmail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <Error>{formik.errors.email}</Error>
                ) : null}
              </Section>
            </div>
            <div>
              <Section>
                <StyledLabel htmlFor="phone">Phone</StyledLabel>
                <StyledInput
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="38 (097) 256 34 77"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <Error>{formik.errors.phone}</Error>
                ) : null}
              </Section>
              <Section>
                <StyledLabel htmlFor="skype">Skype</StyledLabel>
                <StyledInput
                  type="text"
                  name="skype"
                  id="skype"
                  placeholder="Add a skype number"
                  value={formik.values.skype}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.skype && formik.touched.skype ? (
                  <Error>{formik.errors.skype}</Error>
                ) : null}
              </Section>
            </div>
          </Fields>
        </StyledForm>
        <Button type="button">Save Changes</Button>
      </Wrapper>
    </Container>
  );
};

export default UserForm;
