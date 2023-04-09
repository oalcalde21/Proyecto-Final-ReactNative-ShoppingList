import * as ImagePicker from 'expo-image-picker'

import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import {styles} from './styles'

const ImagePick = ({onImage}) => {
    const [pickedUri, setPickedUri] = useState()

    const VerifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        console.log(status)
        if(status !== 'granted') {
            Alert.alert('Permisos insuficientes')
            return false
        }
        return true

     }

    const handlerTakeImage = async () => {
        const isCameraOk = await VerifyPermissions()
        if (!isCameraOk) return
        
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true, 
            aspect: [16,9],
            quality: 0.8,
        })
        console.log(image.assets)
        setPickedUri(image.assets[0].uri)
        onImage(image.assets[0].uri)
     }

    return (
        <View style={styles.imgContainer}>
            <View style={styles.preview}>
                {!pickedUri
                    ? (<Text>No hay imagen seleccionada...</Text>)
                    : (<Image style={styles.image} source={{ uri: pickedUri }} />)
                }
            </View>
            <Button
                title="Tomar foto"
                color={"#CCC"}
                onPress={handlerTakeImage}
            />
        </View>
    )
}

export default ImagePick

