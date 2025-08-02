import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Configuracoes() {
  const [notificacoes, setNotificacoes] = React.useState(true);
  const [modoEconomia, setModoEconomia] = React.useState(false);

  return (
    <LinearGradient colors={["#16a34a", "#15803d"]} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Configurações</Text>

        <View style={styles.itemCard}>
          <Text style={styles.itemText}>Notificações</Text>
          <Switch 
            value={notificacoes} 
            onValueChange={setNotificacoes} 
            thumbColor={notificacoes ? "#16a34a" : "#f4f3f4"}
            trackColor={{ false: "#767577", true: "#a7f3d0" }}
          />
        </View>

        <View style={styles.itemCard}>
          <Text style={styles.itemText}>Modo Economia de Água</Text>
          <Switch 
            value={modoEconomia} 
            onValueChange={setModoEconomia} 
            thumbColor={modoEconomia ? "#16a34a" : "#f4f3f4"}
            trackColor={{ false: "#767577", true: "#a7f3d0" }}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#f0fdf4",
  },
  itemCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  itemText: {
    fontSize: 16,
    color: "#15803d",
  },
});
