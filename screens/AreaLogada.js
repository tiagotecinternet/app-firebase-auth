import { Button, StyleSheet, Text, View } from 'react-native'

const AreaLogada = () => {

    return (
        <View style={estilos.container}>
            <View style={estilos.topo}>
                <Text style={estilos.bemVindo}>Bem-vindo(a)</Text>
                <Button title='Logout' color="#D35400" />
            </View>
            <View style={estilos.geral}>
                <Text>Você está na área logada.</Text>
            </View>
        </View>
    )
}

export default AreaLogada

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF3CF',
        padding: 16
    },
    topo: {
        marginVertical: 32
    },
    bemVindo: {
        fontSize: 24,
        marginVertical: 16
    }

})