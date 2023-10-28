import { Formik } from 'formik';
import {
  RadioButtonInput,
  Wrapper,
  Btn,
  ButtonCancel,
  Span,
  Label,
  Form,
  Errors,
  RadioButtonGroup,
  RadioButtonLabel,
  Input,
} from '../TaskForm/TaskForm.styled';
import { BiPlus } from 'react-icons/bi';
import { VscEdit } from 'react-icons/vsc';
import { validationTaskSchema } from '../../../helpers/validationTaskSchema';
import { addTask, editTask } from '../../../redux/task/operations';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { parse } from 'date-fns';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useDeleteOwnReview from '../../../hooks/useDeleteOwnReview';
import { toast } from 'react-toastify';

export const EditForm = ({ taskId, openMoalId, task, status, ...props }) => {
  const dispatch = useDispatch();
  const { onCloseModal } = useDeleteOwnReview();

  const [editText, setEditText] = useState('');
  const [start, setStart] = useState('09:30');
  const [end, setEnd] = useState('10:00');
  const [priorities, setPriorities] = useState('low');

  const category = status.toLowerCase().replace(' ', '-');
const currentURL = window.location.href;
const timestampMatch = currentURL.match(/\/calendar\/day\/(\d+)/);

const timestamp = timestampMatch[1];

// Now, format the timestamp as mentioned in the previous answer
const dateObj = new Date(parseInt(timestamp, 10));
const year = dateObj.getFullYear();
const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
const day = dateObj.getDate().toString().padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;


  const initialValues = {
    title: editText,
    start: start.slice(0, 5),
    end: end.slice(0, 5),
    priority: priorities.toLowerCase(),
    date: formattedDate,
    category,
  };

  const PRIORITIES = [
    {
      value: 'Low',
      name: 'low',
    },
    {
      value: 'Medium',
      name: 'medium',
    },
    {
      value: 'High',
      name: 'high',
    },
  ];

  const handleEdit = (values) => {
    dispatch(editTask({ id: taskId, dataTask:values }));
    onCloseModal(openMoalId);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={true}
        validationSchema={validationTaskSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleEdit(values);
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
              <Errors>{errors.title && touched.title && errors.title}</Errors>
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
                <Errors>{errors.start && touched.start && errors.start}</Errors>
              </Label>

              <Label htmlFor="end">
                <Span>End</Span>
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
                <Errors>{errors.end && touched.end && errors.end}</Errors>
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
              <Btn type="button" onClick={() => handleEdit(values)}>
                <VscEdit />
                Edit
              </Btn>

              <ButtonCancel
                type="button"
                disabled={isSubmitting}
                onClick={() => {
                  onCloseModal(openMoalId);
                }}
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

EditForm.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    priority: PropTypes.string,
  }),
  status: PropTypes.string,
};
