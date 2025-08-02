import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';

export default function ControleScreen() {
  const [minUmidade, setMinUmidade] = useState(35);
  const [maxUmidade, setMaxUmidade] = useState(55);

  const salvar = () => {
    console.log('Salvando:', { minUmidade, maxUmidade });
    Alert.alert('Configurações salvas', `Min: ${minUmidade}% | Max: ${maxUmidade}%`);
  };

  return (
    <LinearGradient colors={["#16a34a", "#15803d"]} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Controle de Irrigação</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Umidade mínima: {minUmidade}%</Text>
          <Slider
            style={styles.slider}
            value={minUmidade}
            onValueChange={setMinUmidade}
            minimumValue={10}
            maximumValue={60}
            step={1}
            minimumTrackTintColor="#16a34a"
            thumbTintColor="#15803d"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Umidade máxima: {maxUmidade}%</Text>
          <Slider
            style={styles.slider}
            value={maxUmidade}
            onValueChange={setMaxUmidade}
            minimumValue={40}
            maximumValue={100}
            step={1}
            minimumTrackTintColor="#16a34a"
            thumbTintColor="#15803d"
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={salvar}>
          <Text style={styles.saveText}>Salvar Configurações</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: { fontSize: 16, fontWeight: "500", color: "#15803d", marginBottom: 10 },
  slider: { width: "100%", height: 40 },
  saveButton: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  saveText: { color: "#15803d", fontWeight: "bold", fontSize: 16 },
});
