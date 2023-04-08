import { ButtonDeletedItems, Footer, Input, ItemList, ItemStatusColor, Modal, NewItemHeader } from "../components";
import { KeyboardAvoidingView, LogBox, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Logo from "../components/Logo/Logo";
import React from 'react'
import colors from '../constants/Colors'
import { signUp } from '../store/actions/LogIn.action'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }
        let formIsValid = true;
        for (const key in inputValidities) {
            formIsValid = formIsValid && inputValidities[key];
        }
        return {
            formIsValid,
            inputValidities,
            inputValues
        }
    }
    return state;
}


const LogInScreen = () => {
    const dispatch = useDispatch();
    const isAuthLoading = useSelector(state => state.logIn.isLoading);

    const [formState, dispatchFormState] = React.useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    });


    const onHandleRegister = () => {
        console.log(formState.inputValues.email)
        console.log(formState.inputValues.password)
        console.log(formState)
        if (!formState.formIsValid) {
            dispatch(signUp(formState.inputValues.email, formState.inputValues.password))
        } else {
            alert('Please, enter a valid email and password')
        }
    }

    const handleChangedText = React.useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        })
    }, [dispatchFormState])

    return (
        <KeyboardAvoidingView style={styles.screen} behavior="padding">
            <Logo/>
            <View style={styles.container}>
                <Text style={styles.title}>Register Account</Text>
                <View style={styles.form}>
                    <Input
                        initialValue={formState.inputValues.email}
                        initiallyValid={formState.inputValidities.email}
                        onInputChange={handleChangedText}
                        id='email'
                        required
                        email
                        minLength={5}
                        label='Email'
                        errorText='Please, enter a valid email'
                        autoCapitalize='none'
                        keyboardType='email-address'
                    />
                    <Input
                        initialValue={formState.inputValues.password}
                        initiallyValid={formState.inputValidities.password}
                        onInputChange={handleChangedText}
                        id='password'
                        required
                        minLength={5}
                        label='Password'
                        errorText='Please, enter a valid password'
                        autoCapitalize='none'
                        keyboardType='default'
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={onHandleRegister}>
                        <Text style={styles.loginButtonText}>{isAuthLoading ? 'Loading...' : 'Sign In'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>
                        ¿Do you have an account?
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.promptButton}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LogInScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 12,
        textAlign: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    label: {
        fontSize: 16,
    },
    textInput: {
        width: '100%',
        height: 40,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 12,
    },
    loginButton: {
        width: '100%',
        justifyContent: 'center',
        height: 40,
        backgroundColor: "#0ac45d",
        marginVertical: 12,
    },
    loginButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
    },
    prompt: {
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 16,
        color: '#333',
    },
    promptButton: {
        fontSize: 16,
        color: colors.primary
    },
    button: {
        backgroundColor: colors.primary,
        marginVertical: 20,
    }
})