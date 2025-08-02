import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function IrrigationScreen() {
  const [bombaLigada, setBombaLigada] = useState(false);
  const [modoAutomatico, setModoAutomatico] = useState(true);

  const toggleBomba = () => {
    if (modoAutomatico) {
      Alert.alert("Irrigação", "No modo automático, o controle manual está desativado.");
      return;
    }
    setBombaLigada(!bombaLigada);
    Alert.alert(
      "Irrigação",
      bombaLigada ? "Bomba desligada" : "Bomba ligada",
      [{ text: "OK" }]
    );
  };

  const toggleModo = () => {
    setModoAutomatico(!modoAutomatico);
    setBombaLigada(false); // ao mudar para automático, bomba manual é desligada
    Alert.alert(
      "Modo de Irrigação",
      !modoAutomatico ? "Modo Automático Ativado" : "Modo Manual Ativado",
      [{ text: "OK" }]
    );
  };

  return (
    <LinearGradient colors={["#16a34a", "#15803d"]} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Controle de Irrigação</Text>

        {/* Card de Status */}
        <View style={styles.statusContainer}>
          <Ionicons
            name={bombaLigada ? "water" : "water-outline"}
            size={100}
            color={bombaLigada ? "#16a34a" : "#9ca3af"}
            style={styles.icon}
          />
          <Text style={[styles.statusText, bombaLigada && { color: "#16a34a" }]}>
            {bombaLigada ? "Bomba Ligada" : "Bomba Desligada"}
          </Text>
          <Text style={styles.modoText}>
            Modo: {modoAutomatico ? "Automático" : "Manual"}
          </Text>
        </View>

        {/* Botão para ligar/desligar irrigação */}
        <TouchableOpacity
          style={[
            styles.button,
            modoAutomatico ? styles.buttonDisabled : bombaLigada ? styles.buttonOff : styles.buttonOn,
          ]}
          onPress={toggleBomba}
          disabled={modoAutomatico}
        >
          <Text style={styles.buttonText}>
            {modoAutomatico
              ? "Controle Manual Desativado"
              : bombaLigada
              ? "Desligar Irrigação"
              : "Ligar Irrigação"}
          </Text>
        </TouchableOpacity>

        {/* Botão para alternar modo */}
        <TouchableOpacity style={styles.modeButton} onPress={toggleModo}>
          <Ionicons
            name={modoAutomatico ? "refresh-circle" : "hand-left-outline"}
            size={22}
            color="#15803d"
          />
          <Text style={styles.modeButtonText}>
            {modoAutomatico ? "Ativar Modo Manual" : "Ativar Modo Automático"}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  statusContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 40,
    width: "90%",
  },
  icon: { marginBottom: 10 },
  statusText: {
    fontSize: 20,
    color: "#6b7280",
    fontWeight: "bold",
    marginBottom: 5,
  },
  modoText: {
    fontSize: 16,
    color: "#15803d",
    fontWeight: "600",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 15,
  },
  buttonOn: {
    backgroundColor: "#16a34a",
  },
  buttonOff: {
    backgroundColor: "#dc2626",
  },
  buttonDisabled: {
    backgroundColor: "#9ca3af",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  modeButtonText: {
    color: "#15803d",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
