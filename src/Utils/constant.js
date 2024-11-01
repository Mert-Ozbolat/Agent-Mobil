import { Chart1, Clock, ClipboardTick, ClipboardClose, ArrowRight2 } from 'iconsax-react-native'
import AppColors from '../Theme/color'



const status = {
    cancel: 4,
    pending: 2,
    coplated: 3,
    onGoing: 1,
}





const tasksValues = [
    {
        status: 1,
        title: "Ongoing",
        color: AppColors.onGoing,
        icon: <Chart1 size="32" color={AppColors.white} />,
    },
    {
        status: 2,
        title: "Pending",
        color: AppColors.pending,
        icon: <Clock size="32" color={AppColors.white} />,
    },
    {
        status: 3,
        title: "Complated",
        color: AppColors.coplated,
        icon: <ClipboardTick size="32" color={AppColors.white} />,
    },
    {
        status: 4,
        title: "Cancel",
        color: AppColors.cancel,
        icon: <ClipboardClose size="32" color={AppColors.white} />,
    },
]











export { status, tasksValues }