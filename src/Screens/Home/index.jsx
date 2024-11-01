import { FlatList, StyleSheet, Text, View, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import FloatActionButton from '../../Components/UI/floatActionButton'
import { ADDTASKS } from '../../Utils/routes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import TaskCard from '../../Components/home/taskCard'
import HeaderComponent from '../../Components/home/headerComponent'




const Home = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false)
    const [tasks, setTasks] = useState([])
    const [onGoing, setOngoing] = useState(0);
    const [pending, setPending] = useState(0);
    const [complated, setComplated] = useState(0);
    const [cancel, setCancel] = useState(0);


    const getTask = async () => {
        try {
            const savedTask = await AsyncStorage.getItem('tasks')
            setTasks(JSON.parse(savedTask));

            let complatedCount = 0;
            let pendingCount = 0;
            let onGoingCount = 0;
            let cancelCount = 0;

            for (const task of JSON.parse(savedTask)) {
                if (task.status === 1) {
                    onGoingCount++
                }
                if (task.status === 2) {
                    pendingCount++
                }
                if (task.status === 3) {
                    complatedCount++
                }
                if (task.status === 4) {
                    cancelCount++
                }
                setOngoing(onGoingCount);
                setPending(pendingCount);
                setComplated(complatedCount);
                setCancel(cancelCount);
            }



        } catch (error) {
            console.log(error)
        }
    }

    const onRefresh = () => {
        setRefreshing(true)
        getTask()
        setRefreshing(false)
    }

    useEffect(() => {
        getTask();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                ListHeaderComponent={
                    <HeaderComponent
                        onGoing={onGoing}
                        pending={pending}
                        coplated={complated}
                        cancel={cancel} />}
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