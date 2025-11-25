'use client';

import React, { createContext, useState, useContext, ReactNode } from "react";
import { NewsCard } from "./newsContent";

interface AppContextType {
  selectedCard: NewsCard | null;
  setSelectedCard: (card: NewsCard | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedCard, setSelectedCard] = useState<NewsCard | null>(null);

  const value: AppContextType = {
    selectedCard,
    setSelectedCard,
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



