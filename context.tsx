import React, { createContext, useState, useContext, ReactNode } from "react";
import { NewsCard } from "./newsContent";

interface AppContextType {
  selectedCard: NewsCard | null;
  currentScreen: "main" | "detail";
  setSelectedCard: (card: NewsCard | null) => void;
  setCurrentScreen: (screen: "main" | "detail") => void;
  goToDetail: (card: NewsCard) => void;
  goToMain: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedCard, setSelectedCard] = useState<NewsCard | null>(null);
  const [currentScreen, setCurrentScreen] = useState<"main" | "detail">("main");

  const goToDetail = (card: NewsCard) => {
    setSelectedCard(card);
    setCurrentScreen("detail");
  };

  const goToMain = () => {
    setSelectedCard(null);
    setCurrentScreen("main");
  };

  const value: AppContextType = {
    selectedCard,
    currentScreen,
    setSelectedCard,
    setCurrentScreen,
    goToDetail,
    goToMain,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
