import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TASKS, ADDTASKS, TASKDETAILS } from "../Utils/routes";
import Home from "../Screens/Home";
import AddTask from "../Screens/AddTask";
import TaskDetails from "../Screens/TaskDetails";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={TASKS} component={Home} />
            <Stack.Screen name={ADDTASKS} component={AddTask} />
            <Stack.Screen name={TASKDETAILS} component={TaskDetails} />
        </Stack.Navigator>
    )
}

export default Navigation