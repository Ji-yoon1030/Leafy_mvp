'use client';

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { getNewsByCategory, convertToNewsCard, NewsCard } from "@/lib/newsContent";
import styles from "./page.module.css";

const NewsCardComponent: React.FC<{
  item: NewsCard;
  onPress: (item: NewsCard) => void;
}> = ({ item, onPress }) => (
  <div className={styles.card} onClick={() => onPress(item)}>
    <p className={styles.category}>{item.category}</p>
    <div className={styles.divider} />
    <h3 className={styles.title}>{item.title}</h3>
    <div className={styles.divider} />
    <div className={styles.footer}>
      <div className={styles.infoItem}>
        <p className={styles.label}>난이도</p>
        <p className={styles.value}>{item.difficulty}</p>
      </div>
      <div className={styles.infoItem}>
        <p className={styles.label}>소요시간</p>
        <p className={styles.value}>{item.duration}</p>
      </div>
    </div>
  </div>
);

const SectionList: React.FC<{
  title: string;
  data: NewsCard[];
  onCardPress: (item: NewsCard) => void;
}> = ({ title, data, onCardPress }) => (
  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.scrollContainer}>
      {data.map((item) => (
        <NewsCardComponent key={item.id} item={item} onPress={onCardPress} />
      ))}
    </div>
  </div>
);

const NewsModal: React.FC<{
  visible: boolean;
  item: NewsCard | null;
  onClose: () => void;
}> = ({ visible, item, onClose }) => {
  if (!visible || !item) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>{item.title}</h2>
        <Link href={`/news/${item.id}`} className={styles.startButton}>
          시작하기
        </Link>
        <button className={styles.closeButton} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const [selectedCard, setSelectedCard] = useState<NewsCard | null>(null);

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

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>뉴스</h1>
          <button className={styles.mypageButton}>
            <span className={styles.mypageIcon}>👤</span>
          </button>
        </div>

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

        <div className={styles.pageFooter} />
      </div>

      <NewsModal
        visible={selectedCard !== null}
        item={selectedCard}
        onClose={handleCloseModal}
      />
    </>
  );
}



