import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import { TASKDETAILS } from '../../Utils/routes'
import { tasksValues } from '../../Utils/constant'



const TaskCard = ({ item }) => {

    const navigation = useNavigation()

    return (
        <Pressable onPress={() => navigation.navigate(TASKDETAILS, { item: item })}
            style={styles.container}
        >



            <View style={{
                backgroundColor: tasksValues.find(task => task.status === item.status)?.color,
                padding: 3,
                borderRadius: 5,
            }}>
                {tasksValues.find(task => task.status === item?.status)?.icon}
            </View>




            <View style={{ flex: 1, marginLeft: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: "black" }}>{item.title}</Text>
                <Text style={{ fontSize: 14, fontWeight: '500', color: '#4f4f4f' }}>{item.descriptions}</Text>

                <View>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: "#6f6f6f" }}>
                        {moment(item.startDate).format('DD/MM/YYYY')} - {moment(item.endDate).format('DD/MM/YYYY')}
                    </Text>
                </View>
            </View>


        </Pressable>
    )
}

export default TaskCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        margin: 20,
        borderRadius: 5,
    }
})