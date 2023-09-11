import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainMenu from "./src/components/mainMenu/MainMenu";

export default function App() {
  return (
    <>
      <SafeAreaProvider style={AppStyles.container}>
        <ScrollView>
          <View style={AppStyles.contenedorTitulo}>
            <Text style={AppStyles.tituloPrincipal}>Asistente de ventas</Text>
          </View>
          <MainMenu />
        </ScrollView>
      </SafeAreaProvider>
    </>
  );
}

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  contenedorTitulo: {
    flex: 1,
    backgroundColor: '#07c3d4',
    alignItems: 'center',
    maxHeight: 100,
  },
  tituloPrincipal: {
    color: '#fff',
    fontSize: 44,
  },
});
