import { Text } from 'react-native';
import AddProductButtomStyles from "./AddProductButtomStyles";
import { AntDesign } from '@expo/vector-icons';
function AddProductButtom() {
    return(
        <>
            <AntDesign name="pluscircleo" size={35} color="green" style={AddProductButtomStyles.icon}/>
            <Text style={AddProductButtomStyles.text}>Agregar Prodcuto</Text>
        </>
    )
}

export default AddProductButtom;