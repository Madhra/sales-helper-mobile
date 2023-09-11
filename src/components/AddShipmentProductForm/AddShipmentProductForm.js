import React, { useState } from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import AddShipmentProductFormStyles from "./AddShipmentProductFormStyles";
function AddShipmentProductForm( { id, updateShipment, removeShipment } ) {
    const [productoValue, setProductoValue] = useState('');
    const [precioValue, setPrecioValue] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const handleSubmit = () => {
        updateShipment({ id: id, producto: productoValue, precio: precioValue, cantidad: cantidad});
        removeShipment();
    }

    return(
        <View>
            <Text style={AddShipmentProductFormStyles.texto}>Producto:</Text>
            <TextInput
                onChangeText={text => setProductoValue(text)}
                style={AddShipmentProductFormStyles.campo}
            />
            <Text style={AddShipmentProductFormStyles.texto}>Precio:</Text>
            <TextInput
                onChangeText={text => setPrecioValue(text)}
                style={AddShipmentProductFormStyles.campo}
            />
            <Text style={AddShipmentProductFormStyles.texto}>Cantidad:</Text>
            <TextInput
                onChangeText={text => setCantidad(text)}
                style={AddShipmentProductFormStyles.campo}
            />
            <TouchableOpacity
                onPress={handleSubmit}
            >
                <Text style={AddShipmentProductFormStyles.boton}>Agregar Producto</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddShipmentProductForm;