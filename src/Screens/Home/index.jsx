import { FlatList, StyleSheet, Text, View, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import FloatActionButton from '../../Components/UI/floatActionButton'
import { ADDTASKS } from '../../Utils/routes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TaskCard from '../../Components/home/taskCard'
import HeaderComponent from '../../Components/home/headerComponent'




const Home = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false)
    const [tasks, setTask] = useState([])


    const onRefresh = () => {
        setRefreshing(true)
        getTask()
        setRefreshing(false)
    }

    const getTask = async () => {
        let myTask = []
        try {
            const task = await AsyncStorage.getItem('task')
            myTask.push(JSON.parse(task));
            setTask(myTask)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTask();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                ListHeaderComponent={<HeaderComponent />}
                renderItem={({ item }) => <TaskCard item={item} />}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
            <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})