import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'OpenSans_700Bold',
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    errorContainer: {
        marginVertical: 5
    },
    errorText: {
        fontFamily: 'OpenSans_700Bold',
        color: 'red',
    }
})