import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColors from '../../Theme/color';
import { Button, Divider } from '@ui-kitten/components';
import moment from 'moment'
import { setCategory } from '../../Utils/function';
import { status, tasksValues } from '../../Utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskDetails = ({ route }) => {
    const { item } = route?.params;

    const deleteTask = async () => {
        try {
            const savedTasks = await AsyncStorage.getItem('tasks');
            if (savedTasks === null) {
                return;
            }
            const tasks = JSON.parse(savedTasks);
            const filteredTasks = tasks.filter(task => task.id !== item.id);
            await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
            console.log('Görev Silindi');
        } catch (error) {
            console.log('Görev silinirken hata oluştu:', error);
        }
    };

    const updateTask = async newStatus => {
        try {
            const savedTasks = await AsyncStorage.getItem('tasks');

            if (savedTasks === null) {
                return;
            }

            const tasks = JSON.parse(savedTasks);
            const updatedTask = tasks.map(task => {
                if (task.id === item.id) {
                    return {
                        ...task,
                        status: newStatus,
                    };
                }
                return task;
            });
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTask));
            console.log('Görev Güncellendi', updateTask);
        } catch (error) {
            console.log('Görev güncellenirken hata oluştu:', error);
        }
    };


    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 15,
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '500'
                    }}>Title:</Text>
                    <Text>{item.title}</Text>
                </View>
                <Divider style={{ backgroundColor: "#8f8f8f" }} />


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 15,
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '500'
                    }}>Descriptions:</Text>
                    <Text>{item.descriptions}</Text>
                </View>
                <Divider style={{ backgroundColor: "#8f8f8f" }} />


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 15,
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '500'
                    }}>Start Date:</Text>
                    <Text>{moment(item.startDate).format('DD/MM/YYYY')}</Text>
                </View>
                <Divider style={{ backgroundColor: "#8f8f8f" }} />


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 15,
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '500'
                    }}>End Date:</Text>
                    <Text>{moment(item.endDate).format('DD/MM/YYYY')}</Text>
                </View>
                <Divider style={{ backgroundColor: "#8f8f8f" }} />


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 15,
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '500'
                    }}>Category:</Text>
                    <Text>{setCategory(item.category)}</Text>
                </View>
                <Divider style={{ backgroundColor: "#8f8f8f" }} />


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 15,
                }}>
                    <Text style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '500'
                    }}>Status:</Text>
                    <Text>{tasksValues.find(task => task.status === item?.status).title}</Text>
                </View>
                <Divider style={{ backgroundColor: "#8f8f8f" }} />
            </ScrollView>
            <View>
                <Button
                    onPress={() => updateTask(status.pending)}
                    style={styles.button} status='primary'>Start</Button>

                <Button
                    onPress={() => updateTask(status.coplated)}
                    style={styles.button} status='success'>Completed</Button>

                <Button
                    onPress={() => updateTask(status.cancel)}
                    style={styles.button} status='danger'>Cancel</Button>

                <Button
                    onPress={deleteTask}
                    style={styles.button} status='warning'>Delete</Button>
            </View>
        </View>
    )
}

export default TaskDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        padding: 10
    },

    button: {
        marginVertical: 5,
    }
})