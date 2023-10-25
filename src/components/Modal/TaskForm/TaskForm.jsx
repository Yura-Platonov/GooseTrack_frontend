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
} from './TaskForm.styled';
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
import { isOpenSelector } from '../../../redux/modal/selectors';

export const TaskForm = ({ openMoalId, task, status, ...props }) => {
  const dispatch = useDispatch();
  const { onCloseModal, getModalId } = useDeleteOwnReview();
  const closeModalId = getModalId(isOpenSelector.lastResult(), true)[0];

  const [enterText, setEnterText] = useState('');
  const [start, setStart] = useState('09:30');
  const [end, setEnd] = useState('10:00');
  const [priorities, setPriorities] = useState('low');

  const editMode = props?.editMode || false;
  const category = status.toLowerCase().replace(' ', '-');
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  const initialValues = {
    title: enterText,
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
  const handleAdd = (values) => {
    if (!editMode) {
      dispatch(addTask(...values));

      onCloseModal(openMoalId);

    } else {
      dispatch(
        editTask({
          id: task._id,
          task: { date: task.date, ...values, category },
        }),
      );

      onCloseModal(openMoalId);

    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={true}
        validationSchema={validationTaskSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleAdd(values);
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
              {!editMode ? (
                <Btn
                  type="button"
                  onClick={() => {
                    dispatch(addTask(values));
                  }}
                >
                  <BiPlus />
                  Add
                </Btn>
              ) : (
                <Btn type="button" disabled={isSubmitting}>
                  <VscEdit />
                  Edit
                </Btn>
              )}
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

TaskForm.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    priority: PropTypes.string,
  }),
  status: PropTypes.string,
};
