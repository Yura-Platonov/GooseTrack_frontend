import { Formik } from 'formik';
import {
  RadioButtonInput,
  Wrapper,
  Button,
  ButtonCancel,
  Span,
  Label,
  Form,
  Errors,
  RadioButtonGroup,
  RadioButtonLabel,
  Input,
} from './TaskForm.styled';
import { BiPlus } from 'react-icons/bi';
import { VscEdit } from 'react-icons/vsc';

import PropTypes from 'prop-types';

export const TaskForm = ({ onClose, task, status, ...props }) => {
  const editMode = props?.editMode || false;

  const initialValues = {
    title: task?.title || '',
    start: task?.start || '',
    end: task?.end || '',
    priority: task?.priority || 'Low',
  };

  const PRIORITIES = [
    {
      value: 'Low',
      name: 'Low',
    },
    {
      value: 'Medium',
      name: 'Medium',
    },
    {
      value: 'High',
      name: 'High',
    },
  ];

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="title">
              <Span>Title</Span>
              <Input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder="Enter text"
              />
              <Errors>
                {errors.title && touched.title && t(errors.title)}
              </Errors>
            </Label>

            <Wrapper>
              <Label htmlFor="start">
                <Span>Start</Span>
                <Input
                  type="time"
                  step="60"
                  name="start"
                  id="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.start}
                  placeholder="Select time"
                />
                <Errors>
                  {errors.start && touched.start && t(errors.start)}
                </Errors>
              </Label>

              <Label htmlFor="end">
                <Span></Span>
                <Input
                  type="time"
                  step="60"
                  name="end"
                  id="end"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.end}
                  placeholder="Select time"
                />
                <Errors>{errors.end && touched.end && t(errors.end)}</Errors>
              </Label>
            </Wrapper>

            <RadioButtonGroup>
              {PRIORITIES.map((priority) => (
                <RadioButtonLabel key={priority.value}>
                  <RadioButtonInput
                    type="radio"
                    value={priority.name}
                    name="priority"
                    priority={priority.name}
                    checked={values.priority === priority.name}
                    onChange={() => {
                      setFieldValue('priority', priority.name);
                    }}
                  />
                  {priority.value}
                </RadioButtonLabel>
              ))}
            </RadioButtonGroup>

            <Wrapper>
              {!editMode ? (
                <Button type="submit">
                  <BiPlus />
                  Add
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting}>
                  <VscEdit />
                  Edit
                </Button>
              )}
              <ButtonCancel
                type="button"
                disabled={isSubmitting}
                onClick={onClose}
              >
                Cancel
              </ButtonCancel>
            </Wrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};

TaskForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  task: PropTypes.shape({
    title: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    priority: PropTypes.string,
  }),
  status: PropTypes.string,
};
