import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useApp } from "./context";
import { newsArticles } from "./newsContent";

const getArticleParagraphs = (id: string): string[] => {
  const article = newsArticles[id];
  if (!article) {
    return [
      "이 기사에 대한 상세한 내용을 볼 수 있습니다. 관련 정보를 더 알아보세요.",
    ];
  }
  return article.paragraphs;
};

export default function Detail() {
  const { selectedCard, goToMain } = useApp();
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(secs).padStart(2, "0")}`;
    }
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  if (!selectedCard) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const paragraphs = getArticleParagraphs(selectedCard.id);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goToMain}>
          <Text style={styles.backButtonText}>← 뒤로</Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>{selectedCard.title}</Text>
          <View style={styles.timerContainer}>
            <Text style={styles.timerLabel}>⏱️</Text>
            <Text style={styles.timerText}>{formatTime(timeElapsed)}</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          <Text style={styles.category}>{selectedCard.category}</Text>
          <Text style={styles.description}>{selectedCard.description}</Text>

          <View style={styles.divider} />

          {paragraphs.map((paragraph, index) => (
            <Text key={index} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}

          <View style={styles.footer} />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.exitButton} onPress={goToMain}>
          <Text style={styles.exitButtonText}>종료하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 0,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4CAF50",
  },
  titleContainer: {
    marginTop: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
    lineHeight: 28,
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timerLabel: {
    fontSize: 18,
    marginRight: 8,
  },
  timerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4CAF50",
  },
  headerImage: {
    width: "100%",
    height: 250,
    backgroundColor: "#e0e0e0",
  },
  contentWrapper: {
    padding: 20,
  },
  category: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4CAF50",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    lineHeight: 24,
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 16,
  },
  paragraph: {
    fontSize: 15,
    color: "#333",
    lineHeight: 26,
    marginBottom: 16,
  },
  footer: {
    height: 40,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
  },
  exitButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
  },
  exitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
