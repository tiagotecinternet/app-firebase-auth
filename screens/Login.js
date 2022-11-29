import { Button, StyleSheet, TextInput, View } from 'react-native'

const Login = () => {

    return (
        <View style={estilos.container}>
            <View style={estilos.formulario}>
                <TextInput
                    placeholder='E-mail'
                    style={estilos.input}
                />
                <TextInput
                    placeholder='Senha'
                    style={estilos.input}
                />
                <View style={estilos.botoes}>
                    <Button title='Entre' color="green" />
                </View>
            </View>
        </View>
    )
}

export default Login

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formulario: {
        marginBottom: 32,
        width: "80%"
    },
    input: {
        backgroundColor: "white",
        marginVertical: 8,
        padding: 8,
        borderRadius: 4
    },
    botoes: {
        marginVertical: 8,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})