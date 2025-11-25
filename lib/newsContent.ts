export interface NewsContent {
  id: string;
  title: string;
  paragraphs: string[];
  description: string;
  image: string;
  category: string;
  difficulty: string;
  duration: string;
}

export const newsArticles: { [key: string]: NewsContent } = {
  "1": {
    id: "1",
    title: "고용 부진 악재에 환호한 월가",
    description: "월스트리트 증시가 상승하며 경제 지표에 주목하고 있습니다.",
    image: "https://via.placeholder.com/300x200?text=Wall+Street",
    category: "Economy",
    difficulty: "상",
    duration: "8분",
    paragraphs: [
      "수요일 월스트리트 증시가 상승 마감했습니다. 더 많은 미국 기업들이 최신 분기별 실적을 발표하고 여러 경제 지표가 미국 경제 상황에 대한 단서를 제공한 영향입니다.",
      "S&P 500 지수는 0.5% 상승했습니다. 다우존스 산업평균지수는 동부 시간 오전 11시 35분 기준 62포인트(0.1%) 올랐습니다. 나스닥 종합지수는 0.8% 상승했습니다.",
      "이러한 상승세는 전날의 하락을 되돌린 것으로, 대형 기술주(빅테크)가 다시 한번 전체 시장을 주도했습니다. 엔비디아는 1.6% 올랐고, 구글의 모회사인 알파벳은 2.4% 급등했습니다. 이들 기업의 막대한 시가총액은 시장에 큰 영향력을 행사합니다.",
      "몇몇 대형 산업재 기업들도 시장 상승에 기여했습니다. 다양한 산업 분야의 기업들이 최신 재무 실적을 보고하고 향후 전망을 업데이트했습니다.",
      "맥도날드는 3분기에 인기 메뉴인 '스낵랩'의 재출시 덕분에 매출이 호조를 보였다고 발표한 후 2% 상승했습니다. 인터내셔널 플레이버 & 프래그런시스(IFF)는 월가의 최근 분기 순익 전망치를 상회하자 4.7% 급등했습니다.",
      "반면 하락한 종목으로는, 테이저건 제조업체 액손 엔터프라이즈가 분석가들의 예상보다 부진한 순익을 전망하면서 11.9% 급락했습니다. 라이브 네이션 엔터테인먼트는 최근 실적이 분석가들의 전망치를 하회하면서 7.8% 하락했습니다.",
      "최근 이어지는 기업 실적 발표는 정부 셧다운(일시적 업무 정지)으로 인해 정보가 부족했던 월가에 소비자, 기업, 경제에 대한 정보원을 제공하고 있습니다. 인플레이션과 고용에 대한 중요한 월간 데이터 업데이트가 중단되면서, 투자자, 경제학자, 그리고 연방준비제도(Fed)는 경제의 전체적인 그림을 파악하는 데 어려움을 겪어왔습니다.",
      "월가가 검토할 수 있는 유익한 민간 경제 지표는 여전히 몇 가지 남아있습니다.",
      "ADP 월간 보고서에 따르면, 10월 민간 부문 고용은 예상보다 더 많이 증가했습니다. 이 보고서는 고용 시장의 부분적인 단면을 제공하는데, 고용 시장은 전반적으로 약화되면서 경제 성장에 대한 광범위한 우려를 불러일으키고 있었습니다.",
      "공급관리협회(ISM)에 따르면, 미국 경제의 가장 큰 비중을 차지하는 서비스 부문은 10월에 월가 예상치를 상회하는 확장세를 보였습니다. 이 보고서는 전반적인 기업 활동은 성장했지만, 고용은 여전히 위축되고 있음을 보여주었습니다.",
      '코메리카 뱅크의 빌 애덤스 수석 이코노미스트는 투자자 노트에서 "이번 조사는 정부 셧다운에도 불구하고 10월 경제 성장이 지속되었다는 안심할 수 있는 신호를 제공한다"고 썼습니다.',
      "고용 시장 둔화는 연준의 큰 우려 사항으로 남아있습니다. 연준은 최근 회의에서 고용 시장이 약화되는 가운데 경제를 부양하기 위한 조치의 일환으로 올해 두 번째 기준금리 인하를 단행했습니다. 그러나 제롬 파월 연준 의장을 비롯한 여러 연준 위원들은 인플레이션이 여전히 고질적으로 높은 수준이며 금리 인하로 인해 (인플레이션이) 더욱 자극받을 수 있다며 추가 금리 인하에 대한 우려를 표명해 왔습니다.",
      "고용 시장 둔화와 높은 인플레이션이 혼재된 상황은 연준을 난처한 입장에 처하게 합니다.",
      '해리스 파이낸셜 그룹의 제이미 콕스 매니징 파트너는 투자자 노트에서 "연준의 행보를 주시하는 사람들에게 이번 ADP 보고서는 12월 금리 인하 가능성이 이제 열려있다는 것을 분명히 보여줄 것"이라고 말했습니다. "우리는 노동 시장에서 임계점에 가까운 둔화세(stall speed)에 근접하고 있으며, 이는 연준의 주목을 끌 것입니다."',
      "월가는 12월 추가 금리 인하에 대한 기대치를 낮춰왔습니다. CME 페드워치에 따르면, 투자자들은 이제 연준이 12월에 금리를 인하할 가능성을 65%로 점치고 있습니다. 이는 직전 금리 인하 직전의 90%에서 하락한 수치입니다.",
      "채권 시장에서는 국채 금리가 상승했습니다. 10년 만기 미 국채 금리는 전날(화요일) 늦은 시간 4.09%에서 4.15%로 올랐습니다. 2년 만기 국채 금리는 3.58%에서 3.62%로 상승했습니다.",
      "유럽 증시는 상승했으며 아시아 증시는 대부분 하락 마감했습니다.",
    ],
  },
  "2": {
    id: "2",
    title: "우주 탐사 성공",
    description: "새로운 우주 탐사 프로젝트가 시작되었습니다.",
    image: "https://via.placeholder.com/300x200?text=Space+Exploration",
    category: "Hot Topic",
    difficulty: "중",
    duration: "4분",
    paragraphs: [
      "최근 우주 탐사 프로젝트들이 새로운 이정표를 달성하고 있습니다. 화성 탐사, 달 기지 건설, 그리고 심우주 탐사 프로젝트들이 진행되고 있으며, 이는 인류의 우주 진출 계획에 한 발 다가가는 것입니다.",
      "우주 탐사 기술의 발전은 새로운 과학적 발견과 기술 혁신을 가져오고 있습니다. 또한 우주 자원의 활용과 우주 관광 산업의 성장도 주목할 만한 분야입니다.",
    ],
  },
  "3": {
    id: "3",
    title: "기후 변화 대응",
    description: "전 세계가 함께 기후 변화에 대응합니다.",
    image: "https://via.placeholder.com/300x200?text=Climate+Change",
    category: "Hot Topic",
    difficulty: "하",
    duration: "3분",
    paragraphs: [
      "기후 변화에 대응하기 위해 전 세계가 함께 노력하고 있습니다. 탄소 중립 목표 달성, 재생 에너지의 확대, 그리고 지속 가능한 개발이 주요 과제입니다.",
      "각 국가와 기업들이 환경 보호에 대한 책임감을 가지고 적극적으로 행동하고 있으며, 개인의 선택과 행동도 중요한 역할을 하고 있습니다. 이러한 노력들이 모여 더 나은 미래를 만들 수 있을 것입니다.",
    ],
  },
  "4": {
    id: "4",
    title: "스포츠 챔피언십",
    description: "올해 최고의 스포츠 이벤트가 열렸습니다.",
    image: "https://via.placeholder.com/300x200?text=Sports+Championship",
    category: "Hot Topic",
    difficulty: "하",
    duration: "3분",
    paragraphs: [
      "올해 최고의 스포츠 이벤트들이 열리고 있습니다. 다양한 종목에서 세계 최고의 선수들이 모여 경쟁하고 있으며, 이는 스포츠 팬들에게 감동과 흥분을 선사하고 있습니다.",
      "스포츠는 단순한 경기를 넘어 문화적 가치와 국가 간의 우호를 증진하는 역할을 하고 있습니다. 각 선수들의 노력과 헌신이 만드는 드라마틱한 순간들은 많은 사람들에게 영감을 주고 있습니다.",
    ],
  },
  "5": {
    id: "5",
    title: "Python 3.13 출시",
    description: "새로운 버전의 Python이 출시되었습니다.",
    image: "https://via.placeholder.com/300x200?text=Python+3.13",
    category: "IT",
    difficulty: "중상",
    duration: "6분",
    paragraphs: [
      "Python 3.13은 성능 개선과 새로운 기능들을 가지고 출시되었습니다. 더 빠른 실행 속도, 개선된 메모리 관리, 그리고 새로운 라이브러리들이 추가되었습니다.",
      "Python은 여전히 데이터 과학, 웹 개발, 자동화 등 다양한 분야에서 가장 인기 있는 프로그래밍 언어로 자리잡고 있으며, 새 버전의 출시는 개발자 커뮤니티에 긍정적인 영향을 미치고 있습니다.",
    ],
  },
  "6": {
    id: "6",
    title: "React 최신 업데이트",
    description: "React의 새로운 기능들을 소개합니다.",
    image: "https://via.placeholder.com/300x200?text=React+Update",
    category: "IT",
    difficulty: "중",
    duration: "5분",
    paragraphs: [
      "React의 최신 업데이트는 개발자 경험을 더욱 향상시켰습니다. 성능 최적화, 새로운 hooks, 그리고 개선된 개발 도구들이 포함되어 있습니다.",
      "React는 현대적인 웹 애플리케이션 개발의 기준이 되고 있으며, 지속적인 업데이트와 개선으로 개발자들의 생산성을 높이고 있습니다. 커뮤니티의 피드백을 반영한 이번 업데이트는 더욱 다양한 프로젝트에서 활용될 것으로 예상됩니다.",
    ],
  },
  "7": {
    id: "7",
    title: "AWS 클라우드 서비스",
    description: "클라우드 컴퓨팅의 미래를 봅니다.",
    image: "https://via.placeholder.com/300x200?text=AWS+Cloud",
    category: "IT",
    difficulty: "상",
    duration: "7분",
    paragraphs: [
      "AWS 클라우드 서비스는 기업들의 디지털 트랜스포메이션을 주도하고 있습니다. 확장 가능한 인프라, 다양한 서비스, 그리고 높은 보안성이 특징입니다.",
      "클라우드 컴퓨팅은 더 이상 선택이 아닌 필수가 되었으며, AWS는 시장에서 선도적 역할을 하고 있습니다. 앞으로 AI와 머신러닝의 통합으로 더욱 강력한 서비스를 제공할 것으로 기대됩니다.",
    ],
  },
  "8": {
    id: "8",
    title: "DevOps 실무 가이드",
    description: "효과적인 DevOps 구축 방법입니다.",
    image: "https://via.placeholder.com/300x200?text=DevOps+Guide",
    category: "IT",
    difficulty: "상",
    duration: "8분",
    paragraphs: [
      "DevOps 문화는 현대 소프트웨어 개발의 핵심입니다. 지속적인 통합, 배포, 모니터링을 통해 개발 속도와 품질을 동시에 달성할 수 있습니다.",
      "효과적인 DevOps 구축을 위해서는 적절한 도구 선택, 팀의 협력, 그리고 자동화가 중요합니다. 이러한 실무 경험들은 프로젝트의 성공률을 크게 높일 수 있습니다.",
    ],
  },
  "9": {
    id: "9",
    title: "주식시장 분석",
    description: "최근 주식시장의 동향을 분석합니다.",
    image: "https://via.placeholder.com/300x200?text=Stock+Market",
    category: "Economy",
    difficulty: "중",
    duration: "5분",
    paragraphs: [
      "최근 주식시장은 다양한 변수들의 영향을 받고 있습니다. 금리, 인플레이션, 기업 실적 등이 시장 변동성에 큰 영향을 미치고 있습니다.",
      "투자자들은 시장의 변화를 면밀히 관찰하고 포트폴리오를 조정해야 합니다. 장기적인 관점에서의 투자 전략이 중요하며, 시장 분석과 리스크 관리가 필수적입니다.",
    ],
  },
  "10": {
    id: "10",
    title: "비트코인 가격 급등",
    description: "암호화폐 시장의 변화를 살펴봅니다.",
    image: "https://via.placeholder.com/300x200?text=Bitcoin+Rally",
    category: "Economy",
    difficulty: "중상",
    duration: "6분",
    paragraphs: [
      "비트코인과 암호화폐 시장이 급등세를 보이고 있습니다. 기관 투자자들의 참여 증가와 긍정적인 규제 환경이 주요 요인입니다.",
      "암호화폐 시장은 여전히 변동성이 크지만, 블록체인 기술의 응용 가능성으로 인해 장기적 가치를 가진다고 평가받고 있습니다. 투자 시 충분한 공부와 리스크 관리가 필요합니다.",
    ],
  },
  "11": {
    id: "11",
    title: "금리 인상의 영향",
    description: "중앙은행의 금리 인상이 미치는 영향입니다.",
    image: "https://via.placeholder.com/300x200?text=Interest+Rate",
    category: "Economy",
    difficulty: "중",
    duration: "4분",
    paragraphs: [
      "중앙은행의 금리 인상이 경제 전체에 미치는 영향은 매우 광범위합니다. 대출 비용 증가, 저축 수익률 향상, 주식시장 조정 등이 발생할 수 있습니다.",
      "금리 인상은 인플레이션을 억제하는 효과가 있지만, 경제 성장을 둔화시킬 수 있다는 우려도 있습니다. 적절한 금리 정책이 중요합니다.",
    ],
  },
  "12": {
    id: "12",
    title: "부동산 시장 전망",
    description: "2024년 부동산 시장 전망을 분석합니다.",
    image: "https://via.placeholder.com/300x200?text=Real+Estate",
    category: "Economy",
    difficulty: "중",
    duration: "5분",
    paragraphs: [
      "부동산 시장은 금리, 수급, 정책 등 여러 요소의 영향을 받고 있습니다. 2024년 부동산 시장은 변화의 시기를 맞고 있습니다.",
      "주택 가격의 안정화, 전세 시장의 변동, 그리고 정부 정책의 변화가 주목할 점입니다. 부동산 투자 시에는 신중한 분석과 장기적 관점이 필요합니다.",
    ],
  },
};

// 편의 함수: id로 기사 본문 문자열 가져오기
export const getFullContent = (id: string): string => {
  const article = newsArticles[id];
  if (!article) {
    return "이 기사에 대한 상세한 내용을 볼 수 있습니다. 관련 정보를 더 알아보세요.";
  }
  return article.paragraphs.join("\n\n");
};

// 카테고리별로 뉴스 가져오기
export const getNewsByCategory = (category: string): NewsContent[] => {
  return Object.values(newsArticles).filter(
    (article) => article.category === category
  );
};

// 모든 카테고리 목록 가져오기
export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  Object.values(newsArticles).forEach((article) => {
    categories.add(article.category);
  });
  return Array.from(categories);
};

// NewsContent를 NewsCard 형식으로 변환
export interface NewsCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  difficulty: string;
  duration: string;
}

export const convertToNewsCard = (content: NewsContent): NewsCard => {
  return {
    id: content.id,
    title: content.title,
    description: content.description,
    image: content.image,
    category: content.category,
    difficulty: content.difficulty,
    duration: content.duration,
  };
};

// 모든 뉴스를 NewsCard 배열로 가져오기
export const getAllNewsCards = (): NewsCard[] => {
  return Object.values(newsArticles).map(convertToNewsCard);
};



