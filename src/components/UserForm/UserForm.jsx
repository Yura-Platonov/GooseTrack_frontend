import React, { useEffect, useState } from 'react';
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
} from './UserForm.styled.jsx';

import 'react-datepicker/dist/react-datepicker.css';

// import logo from '../../images/userForm/logo1-min.jpeg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/auth/operations.js';
import { selectUser } from '../../redux/auth/selectors.js';
// import Notiflix from 'notiflix';
// import { BsFillPlusCircleFill } from "react-icons/bs";

const UserForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const userData = useSelector(selectUser);
  // console.log(userData);

  const dispatch = useDispatch();

  const handleSave = (values) => {
    dispatch(updateUser({ ...values, birthday: "1999-15-04"  }));
  };

  const formik = useFormik({
    initialValues: {
      avatar: null,
      username: userData ? userData.username || '' : '',
      email: userData ? userData.email || '' : '',
      birthday: userData ? userData.birthday || new Date() : new Date(),
      phone: userData ? userData.phone || '' : '',
      skype: userData ? userData.skype || '' : '',
    },
    validationSchema: Yup.object({
      avatar: Yup.mixed()
        .test('isFile', 'Wrong file type', (value) => {
          if (!value) {
            return true;
          }
          return value instanceof File;
        })
        .optional(),
      username: Yup.string()
        .min(2, 'Min 2 symbols')
        .max(16, 'Max 16 symbols')
        .optional(),
      email: Yup.string().email('Wrong email address').optional(),
      birthday: Yup.date('Choose a date').optional(),
      phone: Yup.number().min(7, 'Min 7 symbols').optional(),
      skype: Yup.string().max(16).optional(),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('avatar', values.avatar);
      formData.append('name', values.username);
      formData.append('email', values.email);
      formData.append('birthdate', values.birthday);
      formData.append('phone', values.phone);
      formData.append('skype', values.skype);

      handleSave(values);
    },
  });

  useEffect(() => {
    if (userData) {
      formik.setValues({
        avatar: null,
        username: userData.username || '',
        email: userData.email || '',
        birthday: userData.birthday || new Date(),
        phone: userData.phone || '',
        skype: userData.skype || '',
      });
    }
  }, [userData]);


     const handleAvatarUpload = (event) => {
       const file = event.currentTarget.files[0];
       if (file) {
         formik.setFieldValue('avatar', file);
         formik.setIsFormDirty(true);
       }
     };

  return (
    <Container>
      <Wrapper>
        <StyledForm onSubmit={formik.handleSubmit}>
          <>
            <Section>
              <label htmlFor="avatar">
                <About>
                  <Image
                    src={
                      userData.avatarURL
                        ? userData.avatarURL
                        : formik.values.avatar
                    }
                    alt="nadiia doe"
                  />
                  <PlusContainer>
                    <Icon />
                  </PlusContainer>
                  <Title>
                    {userData.username
                      ? userData.username
                      : 'Enter your username'}
                  </Title>
                  <User>User</User>
                </About>
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept=".jpg, .jpeg, .png, .gif"
                style={{ display: 'none' }}
                onSubmit={handleAvatarUpload}
                // onChange={fileReader}
              />

            </Section>
          </>
          <Fields>
            <div>
              <Section>
                <StyledLabel htmlFor="username">User Name</StyledLabel>
                <StyledInput
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your name"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.username && formik.touched.username ? (
                  <Error>{formik.errors.username}</Error>
                ) : null}
              </Section>
              <Section>
                <StyledLabel htmlFor="birthday">Birthday</StyledLabel>
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
                  onChange={(date) => {
                    setStartDate(date);
                    formik.setFieldValue('birthday', date);
                  }}
                  icon={<TickIcon />}
                />

                {formik.errors.birthday && formik.touched.birthday ? (
                  <Error>{formik.errors.birthday}</Error>
                ) : null}
              </Section>
              <Section>
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
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
                  placeholder="Enter your phone number"
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
                  placeholder="Enter your skype number"
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
          <Button
            type="submit"
            onClick={() => {
              handleSave(formik.values);
            }}
          >
            Save Changes
          </Button>
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default UserForm;
