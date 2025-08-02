// screens/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    navigation.navigate("Dashboard"); // redireciona para o dashboard
  };

  return (
    <LinearGradient
      colors={["#16a34a", "#15803d"]}
      style={styles.gradient}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Logo ou imagem */}
        <Image
          source={require("../assets/smartagro.jpg")} // coloque a imagem em /assets
          style={styles.logo}
        />

        <Text style={styles.title}>SmartAgro Irrigação</Text>
        <Text style={styles.subtitle}>Acesse sua conta</Text>

        {/* Campo de email */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#15803d" style={styles.icon} />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Campo de senha */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#15803d" style={styles.icon} />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        {/* Botão de login */}
        <TouchableOpacity onPress={handleLogin} style={{ width: "100%" }}>
          <LinearGradient colors={["#22c55e", "#16a34a"]} style={styles.button}>
            <Ionicons name="log-in-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>Entrar</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Link para cadastro */}
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.registerText}>
            Não tem conta? <Text style={{ fontWeight: "bold" }}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 180,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#f0fdf4",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#d1d5db",
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    padding: 12,
    color: "#333",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  registerText: {
    color: "#fff",
    marginTop: 10,
  },
});


