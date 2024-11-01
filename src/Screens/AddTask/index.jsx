import { Formik } from 'formik';
import { StyleSheet, Text, View, Alert } from 'react-native'
import { Input, Button, RadioGroup, Radio } from '@ui-kitten/components'
import CustomDatePicker from '../../Components/UI/customDatePicker';
import taskSchema from '../../Utils/validations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { status } from '../../Utils/constant';
import uuid from 'react-native-uuid'




const AddTask = () => {

    const saveTask = async (values) => {
        try {
            const savedTasks = await AsyncStorage.getItem('tasks');
            let myTask = savedTasks ? JSON.parse(saveTask) : []
            myTask.push(values)
            await AsyncStorage.setItem('tasks', JSON.stringify(myTask))
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <View style={styles.container}>

            <Formik initialValues={{
                id: uuid.v4(),
                title: 'Yazılım',
                descriptions: 'React Nativeee!!!',
                startDate: null,
                endDate: null,
                category: null,
                status: status.onGoing,
            }}
                validationSchema={taskSchema}

                onSubmit={values => saveTask(values)}>

                {({ handleChange, handleSubmit, values, setFieldValue, errors }) => (
                    <View>
                        <Input
                            size='large'
                            style={{ marginVertical: 10 }}
                            value={values.title}
                            label={'Title'}
                            placeholder=''
                            onChangeText={handleChange('title')}
                            status={errors.title ? 'danger' : 'basic'}
                            caption={errors.title}
                        />



                        <Input
                            size='large'
                            multiline
                            style={{ marginVertical: 10 }}
                            value={values.descriptions}
                            label={'Descriptions'}
                            placeholder=''
                            onChangeText={handleChange('descriptions')}
                            status={errors.title ? 'danger' : 'basic'}

                        />

                        <CustomDatePicker
                            size='large'
                            style={{ marginVertical: 10 }}
                            date={values.startDate}
                            label='Start Date'
                            onSelectDate={date => setFieldValue('startDate', date)}
                        />

                        <CustomDatePicker
                            size='large'
                            style={{ marginVertical: 10 }}
                            date={values.endDate}
                            label='End Date'
                            onSelectDate={date => setFieldValue('endDate', date)}
                        />


                        {/* Radio Group */}
                        <RadioGroup
                            selectedIndex={values.category}
                            onChange={index => setFieldValue('category', index)}
                        >
                            <Radio status='success'>Software</Radio>
                            <Radio status='success'>Design</Radio>
                            <Radio status='success'>Operations</Radio>
                        </RadioGroup>



                        <Button
                            status='success'
                            style={{ marginTop: 30 }}
                            onPress={handleSubmit}
                        > Create </Button>

                    </View>
                )}
            </Formik>


        </View>
    )
}

export default AddTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    }
})