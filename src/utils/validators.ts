import * as Yup from 'yup';

export const validationTodoForm = Yup.object().shape({
  task: Yup.string()
    .min(2, 'At least 2 characters')
    .required('Task is required'),
});
