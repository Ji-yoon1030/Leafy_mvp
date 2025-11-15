import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Main from "./Main";
import Detail from "./Detail";
import { AppProvider, useApp } from "./context";

function AppContent() {
  const { currentScreen } = useApp();

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === "main" ? <Main /> : <Detail />}
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
