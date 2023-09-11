import { StyleSheet } from "react-native";

const ShipmentsStyles = StyleSheet.create({
    envios: {
        backgroundColor: '#07c3d4',
        color: '#fff',
        width: '120%',
        textAlign: "center",
        fontSize: 40,
        marginTop: 20,
    },
   contenido: {
       display: "flex",
       flexDirection: "column",
   },
    fila: {
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
        marginBottom: 10,
        borderStyle: "solid",
        borderColor: "#c3d407",
        borderWidth: 3,
        borderRadius: 20,
    },
    checkbox: {
        margin: 8,
        height: 30,
        width: 30,
        borderStyle: "solid",
        borderColor: "#c3d407",
        borderWidth: 1,
    },
    celda: {
        display: "flex",
        flexDirection: "column",
        paddingEnd: 10,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
        alignItems: "center",
    },
    direccion: {
        backgroundColor: "#c3d407",
        width: "100%",
        height: "auto",
        borderRadius: 10,
        padding: 10,
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
    },
    textoDireccion: {
        textAlign: "center",
        color: '#fff',
        fontSize: 30,
        top:0,
    },
    textoProdcutos: {
        fontSize: 20,
    }
});

export default ShipmentsStyles;