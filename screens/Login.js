import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

/* Importamos os recursos de autenticação através das configurações Firebase */
import { auth } from "../firebaseConfig";

/* Importamos as funções de autenticação diretamente da lib */
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = () => {
    if (!email || !senha) {
      Alert.alert("Atenção!", "Você deve preencher todos os campos");
      return; // parar o processo
    }

    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        navigation.navigate("AreaLogada");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.formulario}>
        <TextInput
          onChangeText={(valor) => setEmail(valor)}
          placeholder="E-mail"
          style={estilos.input}
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={(valor) => setSenha(valor)}
          placeholder="Senha"
          style={estilos.input}
          secureTextEntry
        />

        <View style={estilos.botoes}>
          <Button title="Entre" color="green" onPress={login} />
        </View>
      </View>
    </View>
  );
};

export default Login;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  formulario: {
    marginBottom: 32,
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
  },
  botoes: {
    marginVertical: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
