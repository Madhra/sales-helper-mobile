import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import AddProductForm from "../AddProductForm/AddProductForm";
import AddProductButtom from "../AddProductButtom/AddProductButtom";
import Ionicons from '@expo/vector-icons/Ionicons';
import SalesStyles from "./SalesStyles";
function Sales() {
    const [productos, setProductos] = useState([]);
    const [precio, setPrecio] = useState([]);
    const [vendidos, setVendidos] = useState([]);
    const [form, setForm] = useState(false);

    let subTotal = [];

    useEffect(() => {
        setVendidos(prevVendidos => [...prevVendidos, 0]);
    }, [productos]);

    const handleAddClick = () => {
        setForm(!form)
    };

    const handleNewProduct = (newProduct) => {
        setProductos(prevArray => [...prevArray, newProduct]);
    };

    const handleNewPrecio = (newPrecio) => {
        setPrecio(prevArray => [...prevArray, newPrecio]);
    };

    const handleVendidosClick = ( index ) =>{
        const nextVendidos = vendidos.map((c, i) => {
            if(i === index){
                return c + 1;
            }else {
                return c;
            }
        });
        setVendidos(nextVendidos);
    };

    precio.forEach((element, index) =>{
        subTotal.push(element * vendidos[index]);
    });

    return (
        <>
            <Text style={SalesStyles.ventas}>Ventas</Text>
            <Text style={SalesStyles.subtotal}>Total: ${subTotal.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</Text>
            <View style={SalesStyles.productsContainer}>
                {
                    productos.map((producto, index) =>{
                      return (
                         <TouchableOpacity onPress={() => handleVendidosClick(index)}>
                             <View style={SalesStyles.product}>
                                 <Text style={SalesStyles.texto}>{producto}</Text>
                                 <Text style={SalesStyles.texto}>${precio[index]}</Text>
                                 <Text style={SalesStyles.texto}>Vendidos: {vendidos[index]}</Text>
                             </View>
                         </TouchableOpacity>
                      )
                    })
                }
                <View style={SalesStyles.product}>
                    {form ? (
                        <View>
                            <TouchableOpacity onPress={() => handleAddClick()}>
                                <View>
                                    <Ionicons name="close-circle-outline" size={50} color="red" />
                                </View>
                            </TouchableOpacity>
                            <AddProductForm updateProductos={handleNewProduct} updatePrecios={handleNewPrecio}/>
                        </View>
                    )
                    :
                    (
                       <TouchableOpacity onPress={() => handleAddClick()}>
                           <View>
                               <AddProductButtom />
                           </View>
                       </TouchableOpacity>
                    )
                    }
                </View>
            </View>
        </>
    )
}

export default Sales;