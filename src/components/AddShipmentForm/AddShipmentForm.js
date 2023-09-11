import React, { useState } from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import AddShipmentFormStyles from "./AddShipmentFormStyles";
import Toast from "react-native-toast-message";

function AddShipmentForm( { addShipment } ) {

    const [nombreValue, setNombreValue] = useState('');
    const [direccionValue, setDireccionValue] = useState('');
    const [id, setID] = useState(0);
    const updateID = () =>{
        setID(id + 1);
    }
    const handleSubmit = () =>{
        updateID();
        addShipment( { id: id,
            name: nombreValue,
            address: direccionValue,
            productos: [],
            precios: [],
            cantidades: [],
            total: 0,
        } );
    }

    return(
        <View>
            <Text style={AddShipmentFormStyles.texto}>Nombre:</Text>
            <TextInput
                onChangeText={text => setNombreValue(text)}
                style={AddShipmentFormStyles.campo}
            />
            <Text style={AddShipmentFormStyles.texto}>Direccion:</Text>
            <TextInput
                onChangeText={text => setDireccionValue(text)}
                style={AddShipmentFormStyles.campo}
            />
            <TouchableOpacity
                onPress={handleSubmit}
            >
                <Text style={AddShipmentFormStyles.boton}>Agregar Pedido</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddShipmentForm;