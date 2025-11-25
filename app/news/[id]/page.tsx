'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { newsArticles } from "@/lib/newsContent";
import styles from "./page.module.css";

const getArticleParagraphs = (id: string): string[] => {
  const article = newsArticles[id];
  if (!article) {
    return [
      "이 기사에 대한 상세한 내용을 볼 수 있습니다. 관련 정보를 더 알아보세요.",
    ];
  }
  return article.paragraphs;
};

export default function NewsDetail() {
  const params = useParams();
  const id = params.id as string;
  const [timeElapsed, setTimeElapsed] = useState(0);

  const selectedCard = newsArticles[id];

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
      <div className={styles.container}>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  const paragraphs = getArticleParagraphs(selectedCard.id);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.backButton}>
          ← 뒤로
        </Link>
        <div className={styles.titleContainer}>
          <h1 className={styles.headerTitle}>{selectedCard.title}</h1>
          <div className={styles.timerContainer}>
            <span className={styles.timerLabel}>⏱️</span>
            <span className={styles.timerText}>{formatTime(timeElapsed)}</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentWrapper}>
          <p className={styles.category}>{selectedCard.category}</p>
          <p className={styles.description}>{selectedCard.description}</p>

          <div className={styles.divider} />

          {paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}

          <div className={styles.footer} />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/" className={styles.exitButton}>
          종료하기
        </Link>
      </div>
    </div>
  );
}



