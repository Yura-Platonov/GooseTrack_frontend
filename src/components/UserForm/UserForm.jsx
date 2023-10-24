import React, { useState } from 'react';
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

import logo from '../../images/userForm/logo1-min.jpeg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/auth/operations.js';
import Notiflix from 'notiflix';
// import { BsFillPlusCircleFill } from "react-icons/bs";

const UserForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const userData = useSelector((state) => state.auth.user);
  console.log(userData.avatarURL);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      avatarURL: userData ? userData.avatarURL : logo,
      name: userData ? userData.name || '' : 'Nadiia Doe',
      email: userData ? userData.email : 'nadiia@gmail.com',
      birthdate: userData ? userData.birthdate || new Date() : new Date(),
      phone: userData ? userData.phone || '' : '',
      skype: userData ? userData.skype || '' : '',
    },
    validationSchema: Yup.object({
      avatarURL: Yup.string()
        // .test('isFile', 'Wrong file type', (value) => {
        //   if (!value) {
        //     return true;
        //   }
        //   return value instanceof File;
        // })
        .url('Invalid URL'),
      name: Yup.string().min(2, 'Min 2 symbols').max(16, 'Max 16 symbols'),

      email: Yup.string().email('Wrong email address'),

      birthdate: Yup.date('Choose a date'),

      phone: Yup.number().min(7, 'Min 7 symbols'),
      skype: Yup.string().max(16),
    }),
    onSubmit: async (values) => {
      console.log(values);
      await dispatch(updateUser(values));

      // dispatch(updateUser(values)).then((res) => {
      //   if (updateUser.fulfilled.match(res)) {
      //     Notiflix.Notify.success('User data successfully changed and updated');
      //   } else if (updateUser.rejected.match(res)) {
      //     Notiflix.Notify.failure(
      //       'Something went wrong, please try again later...',
      //     );
      //   }
      // });
      // formik.resetForm();
    },
  });

  const onMainPhotoSelected = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue('avatar', file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataURL = e.target.result;

      const imageElement = document.querySelector('#avatar-image');
      if (imageElement) {
        imageElement.src = dataURL;
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <Container>
      <Wrapper>
        <StyledForm onSubmit={formik.handleSubmit}>
          <>
            <Section>
              <label htmlFor="avatar">
                <About>
                  <Image src={formik.values.avatarURL} alt="nadiia doe" />
                  <PlusContainer>
                    <Icon />
                  </PlusContainer>
                  <Title>Nadiia Doe</Title>
                  <User>User</User>
                </About>
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept=".jpg, .jpeg, .png, .gif"
                style={{ display: 'none' }}
                onChange={onMainPhotoSelected}
                // onChange={fileReader}
              />
              {formik.errors.avatarURL && formik.touched.avatarURL ? (
                <Error>{formik.errors.avatarURL}</Error>
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
                  value={formik.values.name || ''}
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
                  // value={formik.values.skype}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.skype && formik.touched.skype ? (
                  <Error>{formik.errors.skype}</Error>
                ) : null}
              </Section>
            </div>
          </Fields>
          <Button type="submit">Save Changes</Button>
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default UserForm;
