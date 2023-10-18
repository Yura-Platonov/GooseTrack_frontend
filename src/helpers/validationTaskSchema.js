import { object, string } from 'yup';
import { isAfter, isValid, parse } from 'date-fns';

export const validationTaskSchema = object({
  title: string()
    .required('Title is required')
    .max(250, 'Title should not exceed 250 characters'),
  start: string()
    .test('valid-time', 'Invalid time format', (value) =>
      isValid(parse(value, 'HH:mm', new Date())),
    )
    .required('Start is required'),
  end: string()
    .nullable()
    .test('valid-time', 'Invalid time format', (value) => {
      if (!value) return true; // return true if value is empty
      return isValid(parse(value, 'HH:mm', new Date()));
    })
    .when('start', (start, schema) =>
      schema.test('end-time-greater', 'Less than start', (end) =>
        start && end
          ? isAfter(
              parse(end, 'HH:mm', new Date()),
              parse(start, 'HH:mm', new Date()),
            )
          : true,
      ),
    ),
  priority: string()
    .required('Priority is required')
    .oneOf(['Low', 'Medium', 'High'], 'Invalid priority'),
});
