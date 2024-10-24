import { Add } from 'iconsax-react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';

const FloatActionButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Add size="33" color='#fff' />
        </TouchableOpacity>
    );
};

export default FloatActionButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A02334',
        justifyContent: 'center',
        alignItems: 'center',
        width: 65,
        height: 65,
        borderRadius: 50,
        position: 'absolute',
        bottom: 30,
        right: 30,
    }
});
