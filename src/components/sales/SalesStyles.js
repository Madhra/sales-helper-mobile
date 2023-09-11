import { StyleSheet } from 'react-native';

const SalesStyles = StyleSheet.create({
    ventas: {
        backgroundColor: '#07c3d4',
        color: '#fff',
        width: '120%',
        textAlign: "center",
        fontSize: 40,
        marginTop: 20,
    },
    subtotal: {
        fontSize: 35,
        marginTop: 20,
    },
    productsContainer: {
        flex: 1,
        flexDirection: "column",
        marginTop: 30,
    },
    product: {
        borderStyle: 'solid',
        borderColor: '#d407c3',
        borderWidth: 5,
        padding: 60,
        borderRadius: 20,
        fontSize: 30,
        marginTop: 20,
    },
    texto: {
        fontSize: 25
    }
});

export default SalesStyles;