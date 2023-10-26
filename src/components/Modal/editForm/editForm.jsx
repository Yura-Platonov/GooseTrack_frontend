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

export const EditForm = ({ task }) =>{
  const dispatch = useDispatch();
  const { onCloseModal } = useDeleteOwnReview();

  const [editText, setEditText] = useState('');
  const [start, setStart] = useState('09:30');
  const [end, setEnd] = useState('10:00');
  const [priorities, setPriorities] = useState('low');


  const category = status.toLowerCase().replace(' ', '-');
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
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
  useEffect(() => {
    if (editText.length > 255) {
      toast.error('Title cannot be longer than 255 characters');
    }
    setEditText(editText);
  }, [editText]);

  const timeFormValidation = () => {
    let status = 'valid';
    if (Number(start) >= Number(end)) {
      status = 'invalid';
    }
    return status;
  };

  const updateTaskFu = () => {
    if (timeFormValidation() === 'invalid') {
      toast.error('End Time of your task can not be less then Start Time');
      return;
    }
    if (!start && !end && !editText) {
      toast.error('Fields cannot be empty');
      return;
    }
    onCloseModal('modal2');
    const id = task._id;
    const task = {
      id: task._id,
      task: {
        title: editText,
        start,
        end,
        createdAt: task.createdAt,
        priority: priorities.toLowerCase(),
      },
    };

    dispatch(editTask(taskForUpdate, id));
  };
  //   const handleAdd = (values) => {
  //     if (!editMode) {
  //       dispatch(addTask(...values));
  //       onCloseModal('modal2');
  //     } else {
  //       dispatch(
  //         editTask({
  //           id: task._id,
  //           task: { date: task.date, ...values, category },
  //         }),
  //       );
  //       onCloseModal('modal2');
  //     }
  //   };

    const titleSetter = (event) => {
      const { value } = event.target;
      setEditText((prevState) => (prevState = value));
    };
    const onChangeStart = (startDate) => {
      let startValue = startDate.toLocaleTimeString('en-UK');
      startValue = startValue.substring(0, startValue.lastIndexOf(':'));
      if (startValue >= end) {
        setEnd(startValue);
      }
      setStart(startValue);
    };
    const onChangeEnd = (endDate) => {
      let endValue = endDate.toLocaleTimeString('en-UK');
      endValue = endValue.substring(0, endValue.lastIndexOf(':'));
      if (start >= endValue) {
        toast.error('End Time of your task can not be less then Start Time');
        return;
      }
      setEnd(endValue);
    };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={true}
        validationSchema={validationTaskSchema}
        onSubmit={(values, { setSubmitting }) => {
          updateTaskFu(values);
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
          <Form onSubmit={handleSubmit}
            endSetter={onChangeEnd}>
            
            <Label htmlFor="title">
              <Span>Title</Span>
              <Input
                titleSetter={titleSetter}
                 enterText={editText}
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
                  startTime={start}
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
                   endTime={end}
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
              <Btn type="button" onClick={() => dispatch(updateTaskFu)}>
                <VscEdit />
                Edit
              </Btn>

              <ButtonCancel
                type="button"
                disabled={isSubmitting}
                onClick={() => {
                  onCloseModal('modal2');
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
