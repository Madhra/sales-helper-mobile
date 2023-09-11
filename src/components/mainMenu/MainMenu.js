import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import Sales from "../sales/Sales";
import Shipments from "../shipments/Shipments";
import { FontAwesome5 } from '@expo/vector-icons';

function MainMenu() {
    const [id, setID] = useState('');

    function handleClick(newId){
        setID(newId);
    }

    return(
        <>
            <Text style={MainMenuStyles.seleccionar}>Selecciona una opcion: </Text>

            <View style={MainMenuStyles.contenedorBotones}>
                <TouchableOpacity onPress={() => handleClick('Ventas')}>
                    <View style={MainMenuStyles.boton}>
                        <Text style={MainMenuStyles.h3}>Ventas</Text>
                        <FontAwesome5 name="store-alt" size={40} color="black" />
                        <Text style={MainMenuStyles.h3}>Administra tus Ventas en tiempo real</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleClick('Entregas')}>
                    <View style={MainMenuStyles.boton2}>
                        <Text style={MainMenuStyles.h3}>Envios</Text>
                        <FontAwesome5 name="shipping-fast" size={40} color="black" />
                        <Text style={MainMenuStyles.h3}>Administra tus envios</Text>
                    </View>
                </TouchableOpacity>
                {id === 'Ventas' ? <Sales /> : <Shipments />}
            </View>
        </>
    )
}

const MainMenuStyles = StyleSheet.create({
    seleccionar: {
        fontSize: 30,
        marginTop: 20,
        textAlign: 'center',
    },
    contenedorBotones: {
        flex: 1,
        margin: 40,
        alignItems: 'center',
    },
    boton: {
        borderColor: '#d407c3',
        borderWidth: 5,
        marginTop: 20,
        padding: 30,
        borderRadius: 20,
        width: "100%",
        alignItems: "center",
    },
    h3: {
        fontSize: 20,
        textAlign: 'center',
    },
    boton2: {
        borderColor: '#c3d407',
        borderWidth: 5,
        marginTop: 20,
        padding: 30,
        borderRadius: 20,
        width: "100%",
        alignItems: "center",
    },
})

export default MainMenu;