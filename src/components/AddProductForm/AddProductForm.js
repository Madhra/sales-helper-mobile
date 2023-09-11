import React, {useState} from "react";
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import AddProductFormStyles from "./AddProductFormStyles";
function AddProductForm( { updateProductos, updatePrecios } ){

    const [productoValue, setProductoValue] = useState('');
    const [precioValue, setPrecioValue] = useState(0);
    const handleSubmit = () => {
        updateProductos(productoValue);
        updatePrecios(precioValue);
    }

    return(
        <View>
            <Text style={AddProductFormStyles.texto}>Producto:</Text>
            <TextInput
                onChangeText={text => setProductoValue(text)}
                style={AddProductFormStyles.campo}
            />
            <Text style={AddProductFormStyles.texto}>Precio:</Text>
            <TextInput
                keyboardType="numeric"
                onChangeText={value => setPrecioValue(parseInt(value))}
                style={AddProductFormStyles.campo}
            />
            <TouchableOpacity
                onPress={handleSubmit}
            >
               <Text style={AddProductFormStyles.boton}>Agregar producto</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddProductForm;