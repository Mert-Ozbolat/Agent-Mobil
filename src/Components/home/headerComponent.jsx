import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColors from '../../Theme/color'
import { Chart1, Clock, ClipboardTick, ClipboardClose, ArrowRight2 } from 'iconsax-react-native'




const HeaderComponent = ({ onGoing, pending, coplated, cancel }) => {

    const tasks = [
        {
            id: 1,
            title: "Ongoing",
            color: AppColors.onGoing,
            icon: <Chart1 size="32" color={AppColors.white} />,
            count: onGoing,
        },
        {
            id: 2,
            title: "Pending",
            color: AppColors.pending,
            icon: <Clock size="32" color={AppColors.white} />,
            count: pending,
        },
        {
            id: 3,
            title: "Complated",
            color: AppColors.coplated,
            icon: <ClipboardTick size="32" color={AppColors.white} />,
            count: coplated,
        },
        {
            id: 4,
            title: "Cancel",
            color: AppColors.cancel,
            icon: <ClipboardClose size="32" color={AppColors.white} />,
            count: cancel,
        },
    ]

    const Cards = ({ item }) => {
        return (
            <Pressable
                style={{
                    width: '45%',
                    backgroundColor: item.color,
                    padding: 10,
                    margin: 10,
                    borderRadius: 7
                }}>
                {item.icon}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 30,
                    }}>

                    <View>
                        <Text
                            style={{
                                color: AppColors.white,
                                fontSize: 14,
                                fontWeight: '600',
                            }}>{item.title}</Text>


                        <Text style={{
                            color: AppColors.white,
                            fontSize: 16,
                            fontWeight: '600',
                            marginTop: 5
                        }}>{item.count} Task</Text>
                    </View>

                    <View>
                        <ArrowRight2 size="25" color={AppColors.white} />
                    </View>
                </View>
            </Pressable>
        )
    }


    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                numColumns={2}
                renderItem={({ item }) => <Cards item={item} />}
            />

            <View>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '500',
                        margin: 10,
                        marginHorizontal: 20
                    }}>All Tasks</Text>
            </View>
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})