import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TaskCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>{item.title}</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', color: 'black', marginTop: 10 }}>{item.descriptions}</Text>

            <View style={{ flexDirection: 'row' }} >
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: 'black', marginTop: 10 }}>Start Date</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'black' }}>{item.startDate}</Text>
                </View>


                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: 'black', marginTop: 10 }}>End Date</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'black' }}>{item.endDate}</Text>
                </View>
            </View>
        </View>
    )
}

export default TaskCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 20,
        borderRadius: 5,
    }
})