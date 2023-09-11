import React, { useState, useEffect } from "react";
import {Text, View} from 'react-native';
import AddShipmentProductForm from "../AddShipmentProductForm/AddShipmentProductForm";
import AddShipmentForm from "../AddShipmentForm/AddShipmentForm";
import Checkbox from 'expo-checkbox';
import shipmentsStyles from "./shipmentsStyles";
import Toast from "react-native-toast-message";

function Shipments(){
    const [shipments, setShipments] = useState([]);
    const [checkbox, setCheckbox] = useState([]);

    useEffect(() => {
        setCheckbox(prevCheck => [...prevCheck, false]);
        showToast();
    }, [shipments]);

    const addShipment = (newShipment) => {
        setShipments(prevShipment => [...prevShipment, newShipment]);
    }
    const removeShipment = () => {
        setShipments(shipments.filter(item => Object.keys(item).length !== 0));
    };
    const updateShipment = (product) => {
        for(let i = 0; i < shipments.length; i++){
            if (product.id === shipments[i].id){
                shipments[i].productos.push(product.producto);
                shipments[i].precios.push(product.precio);
                shipments[i].cantidades.push(product.cantidad);
            }
        }
    }
    const getTotal = (objeto) => {
        let total = 0
        for(let i = 0; i < objeto.cantidades.length; i++){
            total += objeto.precios[i] * objeto.cantidades[i];
        }
        return total
    }

    const check = (id) =>{
        const newArray = [...checkbox];
        newArray[id] = !newArray[id];
        setCheckbox(newArray);
    }

    const showToast = () => {
        Toast.show({
            type: 'success',
                text1: 'Pedido agregado correctamente',
            text2: 'This is some something 👋'
        });
    }

    return(
        <>
            <Text style={shipmentsStyles.envios}>Pedidos</Text>
                <View style={shipmentsStyles.contenido}>
                    {shipments ? shipments.map((element, index) => {
                        return (
                            <View style={shipmentsStyles.fila}>
                                <View style={shipmentsStyles.celda}>
                                    <View style={shipmentsStyles.direccion}>
                                        <Text style={shipmentsStyles.textoDireccion}>{element.name}</Text>
                                        <Text style={shipmentsStyles.textoDireccion}>{element.address}</Text>
                                    </View>
                                </View>

                                <View style={shipmentsStyles.celda}>
                                    <Text style={shipmentsStyles.texto}>Productos</Text>
                                    {element.productos ? element.productos.map((producto, i) => {
                                        return <Text style={shipmentsStyles.textoProdcutos}>{element.cantidades[i]} {producto} ${element.precios[i] * element.cantidades[i]}</Text>
                                    }) : null}
                                </View>

                                <View style={shipmentsStyles.celda}>
                                    <Text style={shipmentsStyles.texto}>Total: ${element.total = getTotal(element)}</Text>
                                </View>

                                <View style={shipmentsStyles.celda}>
                                    <Text style={shipmentsStyles.texto}>Entregado</Text>
                                    <Checkbox
                                        style={shipmentsStyles.checkbox}
                                        value={checkbox[index]}
                                        onValueChange={() => check(index)} />
                                </View>

                                <View style={shipmentsStyles.celda}>
                                    <AddShipmentProductForm
                                        id={index}
                                        updateShipment={updateShipment}
                                        removeShipment={removeShipment}
                                    />
                                </View>
                            </View>
                        )
                    }): null}
                </View>
            <AddShipmentForm addShipment={addShipment}/>
            <Toast
                position={"bottom"}
                bottomOffset={950}
            />
        </>
    )
}

export default Shipments;