import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { useApp } from "./context";
import { NewsCard, getNewsByCategory, convertToNewsCard } from "./newsContent";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.75;
const CARD_MARGIN = 10;

const NewsCardComponent: React.FC<{
  item: NewsCard;
  onPress: (item: NewsCard) => void;
}> = ({ item, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
    <Text style={styles.category}>{item.category}</Text>

    <View style={styles.divider} />

    <Text style={styles.title}>{item.title}</Text>

    <View style={styles.divider} />

    <View style={styles.footer}>
      <View style={styles.infoItem}>
        <Text style={styles.label}>난이도</Text>
        <Text style={styles.value}>{item.difficulty}</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.label}>소요시간</Text>
        <Text style={styles.value}>{item.duration}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const SectionList: React.FC<{
  title: string;
  data: NewsCard[];
  onCardPress: (item: NewsCard) => void;
}> = ({ title, data, onCardPress }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <FlatList
      horizontal
      data={data}
      renderItem={({ item }) => (
        <NewsCardComponent item={item} onPress={onCardPress} />
      )}
      keyExtractor={(item) => item.id}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContent}
    />
  </View>
);

const NewsModal: React.FC<{
  visible: boolean;
  item: NewsCard | null;
  onClose: () => void;
  onStartPress: (item: NewsCard) => void;
}> = ({ visible, item, onClose, onStartPress }) => (
  <Modal
    visible={visible}
    transparent
    animationType="fade"
    onRequestClose={onClose}
  >
    <Pressable style={styles.modalOverlay} onPress={onClose}>
      <View style={styles.modalContainer}>
        <Pressable
          style={styles.modalContent}
          onPress={(e) => e.stopPropagation()}
        >
          <Text style={styles.modalTitle}>{item?.title}</Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => {
              if (item) {
                onStartPress(item);
              }
              onClose();
            }}
          >
            <Text style={styles.startButtonText}>시작하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>닫기</Text>
          </TouchableOpacity>
        </Pressable>
      </View>
    </Pressable>
  </Modal>
);

export default function Main() {
  const { goToDetail } = useApp();
  const [selectedCard, setSelectedCard] = useState<NewsCard | null>(null);

  // newsContent.ts에서 데이터 가져오기
  const hotTopicData = useMemo(() => {
    return getNewsByCategory("Hot Topic").map(convertToNewsCard);
  }, []);

  const itData = useMemo(() => {
    return getNewsByCategory("IT").map(convertToNewsCard);
  }, []);

  const economyData = useMemo(() => {
    return getNewsByCategory("Economy").map(convertToNewsCard);
  }, []);

  const handleCardPress = (item: NewsCard) => {
    setSelectedCard(item);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleStartPress = (item: NewsCard) => {
    goToDetail(item);
  };

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.mainTitle}>뉴스</Text>
          <TouchableOpacity style={styles.mypageButton}>
            <Text style={styles.mypageIcon}>👤</Text>
          </TouchableOpacity>
        </View>

        <SectionList
          title="🔥 오늘의 Hot Topic"
          data={hotTopicData}
          onCardPress={handleCardPress}
        />
        <SectionList
          title="💻 IT"
          data={itData}
          onCardPress={handleCardPress}
        />
        <SectionList
          title="💰 경제"
          data={economyData}
          onCardPress={handleCardPress}
        />

        <View style={styles.pageFooter} />
      </ScrollView>

      <NewsModal
        visible={selectedCard !== null}
        item={selectedCard}
        onClose={handleCloseModal}
        onStartPress={handleStartPress}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
  mypageButton: {
    padding: 8,
  },
  mypageIcon: {
    fontSize: 24,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    marginLeft: 20,
    marginBottom: 15,
  },
  flatListContent: {
    paddingHorizontal: 15,
  },
  card: {
    width: CARD_WIDTH,
    marginHorizontal: CARD_MARGIN,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  category: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4CAF50",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    lineHeight: 26,
  },
  footer: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  infoItem: {
    flex: 1,
    marginBottom: 8,
  },
  label: {
    fontSize: 11,
    fontWeight: "600",
    color: "#999",
    marginBottom: 4,
    textTransform: "uppercase",
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
    textAlign: "center",
    lineHeight: 32,
  },
  startButton: {
    width: "100%",
    paddingVertical: 14,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  closeButton: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  pageFooter: {
    height: 20,
  },
});
