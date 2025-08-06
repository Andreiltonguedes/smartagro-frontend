import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Configuracoes from "../screens/Configuracoes"; // ajuste o caminho se necessário
import { Alert } from "react-native";

// Mock do LinearGradient e outros
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("expo-linear-gradient", () => ({
  LinearGradient: ({ children }) => children,
}));

// Mocks
global.fetch = jest.fn();
jest.spyOn(Alert, "alert");

describe("Configuracoes", () => {
  beforeEach(() => {
    fetch.mockReset();
    Alert.alert.mockClear();
  });

  it("deve renderizar corretamente e carregar configurações", async () => {
    // Simula resposta da API
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        notificacoes: 1,
        modo_economia: 0,
      }),
    });

    const { getByText, getAllByRole } = render(<Configuracoes />);

    // Aguarda efeito do useEffect
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("http://192.168.0.X:3001/api/configuracoes/1");
    });

    // Verifica se os elementos estão visíveis
    expect(getByText("Configurações")).toBeTruthy();
    expect(getByText("Notificações")).toBeTruthy();
    expect(getByText("Modo Economia de Água")).toBeTruthy();

    // Verifica se os switches estão renderizados
    const switches = getAllByRole("switch");
    expect(switches.length).toBe(2);
  });

  it("deve alternar notificações e chamar salvarConfiguracoes", async () => {
    // Resposta inicial do GET
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        notificacoes: 1,
        modo_economia: 0,
      }),
    });

    // Mock da PUT
    fetch.mockResolvedValueOnce({ ok: true });

    const { getAllByRole } = render(<Configuracoes />);

    // Aguarda carregar
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    const switches = getAllByRole("switch");
    const notificacoesSwitch = switches[0];

    // Altera o switch
    fireEvent(notificacoesSwitch, "valueChange", false);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        "http://192.168.0.X:3001/api/configuracoes/1",
        expect.objectContaining({
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ notificacoes: false, modo_economia: false }),
        })
      );
    });
  });

  it("deve alternar modo economia e chamar salvarConfiguracoes", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        notificacoes: 1,
        modo_economia: 0,
      }),
    });

    // Mock da PUT
    fetch.mockResolvedValueOnce({ ok: true });

    const { getAllByRole } = render(<Configuracoes />);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    const switches = getAllByRole("switch");
    const economiaSwitch = switches[1];

    fireEvent(economiaSwitch, "valueChange", true);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        "http://192.168.0.X:3001/api/configuracoes/1",
        expect.objectContaining({
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ notificacoes: true, modo_economia: true }),
        })
      );
    });
  });
});
