import * as Yup from 'yup';

const taskSchema = Yup.object().shape({
    title: Yup.string().required('Required!'),
    descriptions: Yup.string().required('Required!'),
    startDate: Yup.string().required('Required!'),
    endDate: Yup.string().required('Required!')
});

export default taskSchema;
