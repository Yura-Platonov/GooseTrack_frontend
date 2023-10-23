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
import { validationTaskSchema } from '../../../helpers/validationTaskSchema';
import {
  addTask,
  deleteTask,
  editTask,
  getTasksByMonth,
} from '../../../redux/task/operations';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice.js';
import { useParams } from 'react-router-dom';
import { parse } from 'date-fns';
import PropTypes from 'prop-types';

export const TaskForm = ({ task, status, ...props }) => {
  const dispatch = useDispatch();

  const editMode = props?.editMode || false;
  const category = status || 'to-do';

  const today = new Date();

  // Отримуємо рік, місяць і день
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // +1, тому що місяці в JavaScript починаються з 0
  const day = today.getDate().toString().padStart(2, '0');

  // Формуємо рядок в форматі "YYYY-MM-DD"
  const formattedDate = `${year}-${month} -${day}`;

  const initialValues = {
    title: task?.title || '',
    start: task?.start || '',
    end: task?.end || '',
    priority: task?.priority || 'low',
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
  // dispatch(deleteTask('65330c0f8f2a4831c04e5599'));

  // dispatch(
  //   editTask({
  //     id: '65330c0f8f2a4831c04e5599',
  //     task: {
  //       title: 'tewstun',
  //       start: '13:30',
  //       end: '13:35',
  //       priority: 'medium',
  //       date: '2023-10-15',
  //       category: 'to-do',
  //     },
  //   }),
  // );

  // dispatch(getTasksByMonth({year: 2023, month:10}));

  //   dispatch(addTask({
  //     title: "adsasd",
  //     start: "13:30",
  //     end: "13:35",
  //     priority: "medium",
  //     date: "2023-10-15",
  //     category:"to-do"
  // }));
  const handleAdd = (values) => {
    if (!editMode) {
      dispatch(addTask({ ...values, category, date: formattedDate }));
      dispatch(closeModal());
    } else {
      dispatch(
        editTask({
          id: task._id,
          task: { date: task.date, ...values, category },
        }),
      );
      dispatch(closeModal());
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
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => {
                    dispatch(handleAdd());
                  }}
                >
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
                onClick={() => {
                  dispatch(closeModal());
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
