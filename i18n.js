(function () {
  "use strict";

  const STORAGE_KEY = "candlestickpe.language";
  const BRAND_LABEL = "CANDLESTICK PE";

  const pageDefaults = {
    index: "ko",
    about: "ko",
    portfolio: "ko",
    "project-pyler": "ko",
    "project-optical": "ko",
    "project-peoplebio-ma": "ko",
    "project-edge-data-center": "ko",
    team: "ko",
    philosophy: "ko",
    esg: "ko",
  };

  const common = {
    en: {
      menu: "Menu",
      nav: {
        about: "About Candlestick",
        portfolio: "Portfolio",
        team: "Key Personnel",
        philosophy: "Philosophy",
        esg: "ESG / Stewardship Code",
      },
      close: "Close",
      toggle: "Switch language",
      hamburger: "Toggle navigation",
      home: "Go to Home",
    },
    ko: {
      menu: "메뉴",
      nav: {
        about: "About Candlestick",
        portfolio: "포트폴리오",
        team: "핵심운용인력",
        philosophy: "투자철학",
        esg: "ESG / 스튜어드십 코드",
      },
      close: "닫기",
      toggle: "언어 전환",
      hamburger: "메뉴 열기",
      home: "홈으로 이동",
    },
  };

  const pylerBusiness = {
    en: [
      "Vision AI-based AdTech company providing brand safety and advertising optimization solutions, including AiD and AiM.",
      "Implements multimodal AI technology that analyzes video, image, audio, text, and contextual information using NVIDIA AI infrastructure.",
      "Demonstrated Vision AI capabilities by winning first place in the 2025 NVIDIA Inception competition, building collaboration foundations within the NVIDIA ecosystem.",
      "Expanding collaboration with the NVIDIA ecosystem alongside planned U.S. market entry in 2026, while reviewing global expansion and strategic investment opportunities.",
    ],
    ko: [
      "Vision AI 기반의 Ad-Tech 기업으로, 브랜드 세이프티 및 광고 효율화 솔루션인 AiD와 AiM을 제공함.",
      "NVIDIA AI 인프라를 기반으로 영상·이미지·음성·텍스트 및 콘텐츠 맥락 정보를 통합 분석하는 멀티모달 AI 기술을 구현하고 있음.",
      "2025년 NVIDIA Inception 대회 1위 수상을 통해 Vision AI 기술력을 입증하며 NVIDIA 생태계 내 협력 기반을 확보함.",
      "2026년 미국 시장 진출을 기점으로 NVIDIA 생태계와의 협력을 확대하고 있으며, 글로벌 사업 확장 및 전략적 투자 유치 가능성을 검토 중임.",
    ],
  };

  const pylerOverview = {
    en: [
      "Acquisition of common shares and RCPS.",
      "Investment execution completed in April 2026.",
      "Led the deal and completed investment execution as GP of the PEF.",
      "Reviewed investment strategy and exit alternatives including strategic sale, follow-on financing, and IPO.",
    ],
    ko: [
      "보통주 및 RCPS 지분 인수 건.",
      "2026년 4월 투자 집행 완료.",
      "PEF의 GP로서 딜 리드 및 투자 집행을 완료.",
      "전략적 매각, 후속 투자 유치, IPO 등 다양한 Exit 가능성을 검토.",
    ],
  };

  const opticalBusiness = {
    en: [
      "Optical communications component company developing and manufacturing optical transceivers and AOC products for U.S. data centers.",
      "Supplies customized optical transceivers and AOC products, with technology positioned for high-speed, low-latency AI data center network infrastructure.",
      "Expanding North American business based on collaboration and sales references within the global optical communications and data center ecosystem.",
      "Completed development of 1.6T and DR products, with commercialization and supply discussions underway with multiple customers.",
    ],
    ko: [
      "미국 데이터센터향 광트랜시버 및 AOC를 개발·제조하는 광통신 핵심부품 기업.",
      "고객 맞춤형 광트랜시버와 AOC 제품을 공급하며, AI 데이터센터의 고속·저지연 네트워크 인프라 확대에 대응하는 기술력 보유.",
      "글로벌 광통신·데이터센터 생태계 내 협력 및 판매 레퍼런스를 기반으로 북미 시장 사업 기반 확대.",
      "차세대 광통신 수요에 대응하기 위해 1.6T 및 DR 제품 개발을 완료하고, 다수 고객사와 상용화 및 공급 협의 진행 중.",
    ],
  };

  const opticalOverview = {
    en: [
      "New CB issuance and subscription.",
      "Investment execution completed in April 2025.",
      "Participated in investment structure design and execution as co-GP of a New Technology Business Investment Association.",
      "Supported investment execution and investor collaboration process.",
      "Structured investment reflecting AI data center growth, global references, next-generation product competitiveness, and IPO potential.",
      "Reviewed exit alternatives including strategic investor sale, follow-on investment rounds, and IPO.",
    ],
    ko: [
      "신규 CB 발행 및 인수 건.",
      "2025년 4월 투자 집행 완료.",
      "신기술사업투자조합의 공동 GP로서 투자 구조 설계 및 집행 참여.",
      "투자 집행 및 투자자 협업 절차를 지원.",
      "AI 데이터센터 성장성, 글로벌 레퍼런스, 차세대 제품 경쟁력 및 IPO 가능성을 반영한 구조화 투자.",
      "전략적 투자자 대상 매각, 후속 투자 라운드, IPO 등 Exit 가능성을 검토.",
    ],
  };

  const ecoworldBusiness = {
    en: [
      "Bio healthcare company developing sulforaphane-based slow-aging and antioxidant solutions, while expanding into cancer-related solutions.",
      "Based on the antioxidant and anti-inflammatory properties of sulforaphane, the company is conducting cancer-related clinical trials in collaboration with Seoul National University and Seoul National University Hospital, and plans to expand its Medicare product lineup based on the results.",
      "Through cooperation with Damyang-gun and local agricultural corporations, the company has secured a sulforaphane mass-production base in the Damyang Eco Industrial Complex in Jeonnam and established a stable production foundation.",
    ],
    ko: [
      "설포라판 기반의 저속노화·항산화 솔루션을 넘어, 항암 관련 솔루션까지 개발하고 있는 바이오 헬스케어 기업.",
      "현재 설포라판의 항산화·항염 특성을 기반으로 서울대학교 및 서울대병원과 협업하는 항암 관련 임상시험을 진행 중이며, 향후 해당 결과를 바탕으로 메디케어 제품군 확대 계획.",
      "담양군 및 지역 농업법인과의 협력을 통해 전남 담양 에코산단 내 설포라판 양산 거점을 확보하고, 안정적인 생산 기반 구축.",
    ],
  };

  const ecoworldOverview = {
    en: [
      "Completed a preliminary proprietary-capital investment in December 2025, and completed the acquisition of existing shares and newly issued convertible bonds (CBs) through a fund in 2026.",
      "Investment proceeds are being used for sulforaphane-based cancer-related clinical research in collaboration with Seoul National University Hospital and for expanding medical and wellness channels.",
      "Alongside expansion of the sulforaphane-based biomaterials business, the company is pursuing entry into overseas capital markets over the medium to long term, including a potential Nasdaq IPO.",
    ],
    ko: [
      "2025년 12월 고유자금을 통한 선행 투자 집행을 완료하였으며, 2026년 펀드를 통해 구주 및 신규 전환사채(CB) 인수를 완료.",
      "투자금은 서울대병원과 협업 중인 설포라판 기반 항암 관련 임상연구 및 의료·웰니스 채널 확대에 활용.",
      "설포라판 기반 바이오 소재 사업 확대와 함께, 중장기적으로 나스닥 IPO를 포함한 해외 자본시장 진출 진행 중.",
    ],
  };

  const nplBusiness = {
    en: [
      "Real estate NPL investment project backed by an officetel and neighborhood commercial facility in Yeoksam-dong, Gangnam-gu.",
      "Seeking investment recovery stability based on first-priority beneficiary rights under a collateral trust, rental income, and collateral value.",
      "Reviewing a structured real estate investment model combining senior debt and beneficiary certificates.",
    ],
    ko: [
      "강남구 역삼동 소재 오피스텔 및 근린생활시설을 기초자산으로 한 부동산 NPL 투자 프로젝트",
      "담보신탁 1순위 우선수익권, 임대수입 및 담보가치를 기반으로 투자금 회수 안정성 확보 추진",
      "선순위 차입금과 수익증권을 결합한 구조화 부동산 투자 모델 검토",
    ],
  };

  const nplOverview = {
    en: [
      "Acquisition of first-priority beneficiary rights under collateral trust for Yeoksam-dong 706-12.",
      "Reviewed a structured investment approach using senior financing and beneficiary certificates.",
      "Designed rental income control and creditor protection structure through a monetary claim trust.",
      "Exit expected through borrower call option or sale of collateral assets.",
    ],
    ko: [
      "역삼동 706-12 담보신탁 1순위 우선수익권 인수 건",
      "선순위 금융 및 수익증권을 활용한 구조화 투자 방식을 검토",
      "금전채권신탁을 통한 임대수입 통제 및 채권보전 구조 설계",
      "차주 콜옵션 또는 담보자산 매각을 통한 Exit 추진 예정",
    ],
  };

  const portfolioDetailFields = {
    pyler: {
      en: [
        ["Project Name", "Project Vision AI — PYLER"],
        ["Company / Target", "PYLER CO., LTD."],
        ["Sector", "AI-based AdTech"],
        ["Company Website", "https://pyler.tech/"],
      ],
      ko: [
        ["프로젝트명", "Project Vision AI — PYLER"],
        ["회사 / 투자대상", "주식회사 파일러 / PYLER CO., LTD."],
        ["섹터", "AI기반 AdTech"],
        ["회사 홈페이지", "https://pyler.tech/"],
      ],
    },
    optical: {
      en: [
        ["Project Name", "Project Optical — Optomind"],
        ["Company / Target", "OPTO MIND CO., LTD."],
        ["Sector", "Optical communication and optical communication device manufacturing"],
        ["Company Website", "https://www.optomindinc.com/"],
      ],
      ko: [
        ["프로젝트명", "Project Optical — Optomind"],
        ["회사 / 투자대상", "주식회사 옵토마인드 / OPTO MIND CO.,LTD."],
        ["섹터", "광통신 및 광통신장치 제조"],
        ["회사 홈페이지", "https://www.optomindinc.com/"],
      ],
    },
    ecoworld: {
      en: [
        ["Project Name", "Ecoworld Pharm"],
        ["Company / Target", "Ecoworld Pharm Co., Ltd. / ECO WORLD PHARM"],
        ["Sector", "Pharmaceuticals / Bio"],
        ["Company Website", "https://www.ecoworldpharm.com/kr/intro.asp"],
      ],
      ko: [
        ["프로젝트명", "에코월드팜"],
        ["회사 / 투자대상", "주식회사 에코월드팜 / ECO WORLD PHARM"],
        ["섹터", "제약/바이오"],
        ["회사 홈페이지", "https://www.ecoworldpharm.com/kr/intro.asp"],
      ],
    },
    peoplebio: {
      en: [
        ["Project Name", "PeopleBio M&A"],
        ["Company / Target", "PeopleBio Co., Ltd."],
        ["Sector", "Pharmaceuticals / Bio"],
        ["Company Website", "http://peoplebio.net"],
      ],
      ko: [
        ["프로젝트명", "피플바이오 M&A"],
        ["회사 / 투자대상", "주식회사 피플바이오 / PeopleBio Co., Ltd."],
        ["섹터", "제약/바이오"],
        ["회사 홈페이지", "http://peoplebio.net"],
      ],
    },
    edge: {
      en: [
        ["Project Name", "Daechi-dong Edge Data Center Development"],
        ["Company / Target", "Eastern Networks Co., Ltd."],
        ["Sector", "Wholesale of computers, peripherals, and software"],
        ["Company Website", "https://www.east21.co.kr/main/"],
      ],
      ko: [
        ["프로젝트명", "대치동 Edge 데이터센터개발"],
        ["회사 / 투자대상", "주식회사 이스턴네트웍스 / Eastern Networks Co., Ltd."],
        ["섹터", "컴퓨터 및 주변장치, 소프트웨어 도매업"],
        ["회사 홈페이지", "https://www.east21.co.kr/main/"],
      ],
    },
  };

  const pylerArticles = {
    en: [
      {
        source: "DealSite",
        date: "2026.04.07",
        title: "NVIDIA-backed AI company PYLER expands overseas growth strategy",
        summary:
          "Discusses PYLER's NVIDIA collaboration, overseas partnership activity, and new investment round discussions.",
        url: "https://dealsite.co.kr/articles/159629",
      },
      {
        source: "HelloT",
        date: "2025.11.18",
        title: "PYLER wins NVIDIA Inception Challenge with multimodal AI for T&S",
        summary:
          "Covers PYLER's first-place result at NVIDIA Inception Startup Grand Challenge 2025 and its multimodal AI-based T&S capabilities.",
        url: "https://www.hellot.net/news/article.html?no=107265",
      },
      {
        source: "Edaily",
        date: "2026.04.29",
        title: "PYLER wins NVIDIA Nemotron hackathon, demonstrating video safety technology",
        summary:
          "Highlights PYLER's win at NVIDIA Nemotron Developer Day Seoul 2026 and its video safety analysis technology.",
        url: "https://www.edaily.co.kr/News/Read?newsId=03476806645421040&mediaCodeNo=257",
      },
    ],
    ko: [
      {
        source: "딜사이트",
        date: "2026.04.07",
        title: "엔비디아의 AI '파일러'…해외서 몸값 높인다",
        summary:
          "파일러의 NVIDIA 협력, 해외 파트너십 강화 및 신규 투자 라운드 논의를 다룬 기사입니다.",
        url: "https://dealsite.co.kr/articles/159629",
      },
      {
        source: "헬로티",
        date: "2025.11.18",
        title: "파일러, 엔비디아 인셉션 챌린지 1위...멀티모달AI로 T&S 혁신 제시",
        summary:
          "NVIDIA Inception Startup Grand Challenge 2025 1위 수상과 멀티모달 AI 기반 T&S 경쟁력을 다룬 기사입니다.",
        url: "https://www.hellot.net/news/article.html?no=107265",
      },
      {
        source: "이데일리",
        date: "2026.04.29",
        title: "파일러, 엔비디아 네모트론 해커톤 '우승'…비디오 안전 기술력 입증",
        summary:
          "NVIDIA Nemotron Developer Day Seoul 2026 해커톤 우승과 비디오 안전 분석 기술을 다룬 기사입니다.",
        url: "https://www.edaily.co.kr/News/Read?newsId=03476806645421040&mediaCodeNo=257",
      },
    ],
  };

  const portfolioArticles = {
    optical: {
      en: [
        {
          source: "TechWorld",
          date: "2025.02.13",
          title:
            "Optomind gains attention in high-speed optical transceivers, supplying large U.S. data centers",
          summary:
            "Covers Optomind's high-speed optical transceiver supply, domestic and overseas data center references, and positioning for AI network demand.",
          url: "https://www.epnc.co.kr/news/articleView.html?idxno=312572",
        },
        {
          source: "Optomind",
          date: "2026.03.10",
          title: "Visit Optomind at OFC 2026",
          summary:
            "Announces Optomind's OFC 2026 exhibition and live demonstrations of high-speed optical interconnect solutions for AI and data center networks.",
          url: "https://optomindinc.com/news_detail.php?idx=140",
        },
      ],
      ko: [
        {
          source: "테크월드",
          date: "2025.02.13",
          title: "옵토마인드, 초고속 광트랜시버 시장서 주목…美 대형 데이터센터에 공급",
          summary:
            "옵토마인드의 초고속 광트랜시버 공급, 국내외 데이터센터 레퍼런스 및 AI 네트워크 수요 대응을 다룬 기사입니다.",
          url: "https://www.epnc.co.kr/news/articleView.html?idxno=312572",
        },
        {
          source: "옵토마인드",
          date: "2026.03.10",
          title: "Visit Optomind at OFC 2026",
          summary:
            "OFC 2026 참가와 AI·데이터센터 네트워크용 고속 광 인터커넥트 솔루션 전시 계획을 다룬 회사 소식입니다.",
          url: "https://optomindinc.com/news_detail.php?idx=140",
        },
      ],
    },
    ecoworld: {
      en: [
        {
          source: "Finance Today",
          date: "2024.01.31",
          title: "Damyang-gun signs MOU with Ecoworld Pharm and BJ for sulforaphane production business",
          summary:
            "Covers the MOU among Damyang-gun, Ecoworld Pharm, and BJ for a sulforaphane production business.",
          url: "https://www.fntoday.co.kr/news/articleView.html?idxno=313259",
        },
        {
          source: "Economy Science",
          date: "2025.04.11",
          title: "Ecoworld Pharm launches 'Dr. Lee Si-hyung's Sulforaphane'",
          summary:
            "Covers Ecoworld Pharm's launch of a premium sulforaphane health food product.",
          url: "https://www.e-science.co.kr/news/articleView.html?idxno=104125",
        },
        {
          source: "Dong-A Ilbo",
          date: "2025.03.25",
          title: "Ecoworld Pharm signs lead manager agreement for KOSDAQ listing",
          summary:
            "Covers Ecoworld Pharm's listing preparation through a lead manager agreement with BNK Investment & Securities.",
          url: "https://www.donga.com/news/Economy/article/all/20250325/131277008/1",
        },
      ],
      ko: [
        {
          source: "파이낸스투데이",
          date: "2024.01.31",
          title: "담양군, ㈜에코월드팜·㈜비제이와 ‘설포라판’ 생산 사업 업무협약",
          summary:
            "담양군, 에코월드팜, 비제이의 설포라판 생산 사업 업무협약을 다룬 기사입니다.",
          url: "https://www.fntoday.co.kr/news/articleView.html?idxno=313259",
        },
        {
          source: "이코노미사이언스",
          date: "2025.04.11",
          title: "에코월드팜, '이시형 박사의 설포라판' 출시",
          summary:
            "에코월드팜의 설포라판 기반 프리미엄 건강식품 출시를 다룬 기사입니다.",
          url: "https://www.e-science.co.kr/news/articleView.html?idxno=104125",
        },
        {
          source: "동아일보",
          date: "2025.03.25",
          title: "에코월드팜, 코스닥 상장 대표주관계약 체결",
          summary:
            "에코월드팜의 BNK투자증권 대표주관계약 체결 및 상장 준비를 다룬 기사입니다.",
          url: "https://www.donga.com/news/Economy/article/all/20250325/131277008/1",
        },
      ],
    },
    peoplebio: {
      en: [
        {
          source: "Edaily",
          date: "2025.11.13",
          title: "PeopleBio changes largest shareholder and secures strategic investment",
          summary:
            "Covers PeopleBio's strategic investment, largest shareholder change, and business expansion direction with Eastern Networks.",
          url: "https://www.edaily.co.kr/News/Read?newsId=04172166642365392&mediaCodeNo=257&OutLnkChk=Y",
        },
        {
          source: "Edaily",
          date: "2026.05.21",
          title: "PeopleBio rises on plans to pursue U.S. FDA Breakthrough Device designation",
          summary:
            "Covers market reaction to PeopleBio's plan to pursue U.S. FDA Breakthrough Device designation.",
          url: "https://n.news.naver.com/mnews/article/018/0006286607",
        },
      ],
      ko: [
        {
          source: "이데일리",
          date: "2025.11.13",
          title: "피플바이오, 최대주주 변경… “360억원 전략투자 유치”",
          summary:
            "피플바이오의 전략적 투자 유치, 최대주주 변경 및 이스턴네트웍스와의 사업 확장 방향을 다룬 기사입니다.",
          url: "https://www.edaily.co.kr/News/Read?newsId=04172166642365392&mediaCodeNo=257&OutLnkChk=Y",
        },
        {
          source: "이데일리",
          date: "2026.05.21",
          title: "美 FDA 혁신의료기기 지정 추진…피플바이오 9%↑[특징주]",
          summary:
            "피플바이오의 미국 FDA 혁신의료기기 지정 추진 계획과 시장 반응을 다룬 기사입니다.",
          url: "https://n.news.naver.com/mnews/article/018/0006286607",
        },
      ],
    },
    edge: {
      en: [
        {
          source: "Edaily",
          date: "2025.11.20",
          title:
            "Eastern Networks moves to build an AI-dedicated edge data center in Seoul",
          summary:
            "Discusses Eastern Networks' AI edge data center project, development scale, and planned operating direction.",
          url: "https://n.news.naver.com/mnews/article/018/0006268017",
        },
      ],
      ko: [
        {
          source: "이데일리",
          date: "2025.11.20",
          title: "이스턴네트웍스, 삼성동 국제업무지구에 국내 최초 ‘AI 전용 엣지 데이터센터’ 건립 나서",
          summary:
            "이스턴네트웍스의 AI 전용 엣지 데이터센터 사업 추진, 개발 규모 및 운영 방향을 다룬 기사입니다.",
          url: "https://n.news.naver.com/mnews/article/018/0006268017",
        },
      ],
    },
  };

  const pylerPortfolioRows = {
    en: {
      image: "pyler-logo.svg",
      alt: "PYLER",
      title: "Project Vision AI — PYLER",
      logoWide: true,
      business: pylerBusiness.en,
      overview: pylerOverview.en,
      detail: portfolioDetailFields.pyler.en,
      articles: pylerArticles.en,
    },
    ko: {
      image: "pyler-logo.svg",
      alt: "PYLER",
      title: "Project Vision AI — PYLER",
      logoWide: true,
      business: pylerBusiness.ko,
      overview: pylerOverview.ko,
      detail: portfolioDetailFields.pyler.ko,
      articles: pylerArticles.ko,
    },
  };

  const pylerDetailPages = {
    en: {
      title: "Project Vision AI — PYLER | CANDLESTICK PE",
      heroTitle: "Project Vision AI — PYLER",
      heroSub: "",
      backLabel: "Back to Portfolio",
      eyebrow: "Portfolio Detail",
      heading: "Project Vision AI — PYLER",
      lead: "",
      fields: [
        ["Project Name", "Project Vision AI — PYLER"],
        ["Company / Target", "PYLER CO., LTD."],
        ["Sector", "AI-based AdTech"],
        ["Company Website", "https://pyler.tech/"],
      ],
      sections: [
        {
          title: "Business",
          items: pylerBusiness.en,
        },
        {
          title: "Project Overview",
          items: pylerOverview.en,
        },
      ],
    },
    ko: {
      title: "Project Vision AI — PYLER | CANDLESTICK PE",
      heroTitle: "Project Vision AI — PYLER",
      heroSub: "",
      backLabel: "포트폴리오로 돌아가기",
      eyebrow: "포트폴리오 상세",
      heading: "Project Vision AI — PYLER",
      lead: "",
      fields: [
        ["프로젝트명", "Project Vision AI — PYLER"],
        ["회사 / 투자대상", "주식회사 파일러 / PYLER CO., LTD."],
        ["섹터", "AI기반 AdTech"],
        ["회사 홈페이지", "https://pyler.tech/"],
      ],
      sections: [
        {
          title: "Business",
          items: pylerBusiness.ko,
        },
        {
          title: "Project Overview",
          items: pylerOverview.ko,
        },
      ],
    },
  };

  const blankProjectSections = {
    en: [
      { title: "Project Overview", paragraphs: [] },
      { title: "Investment Highlights", items: [] },
      { title: "Business / Technology Summary", items: [] },
    ],
    ko: [
      { title: "프로젝트 개요", paragraphs: [] },
      { title: "투자포인트", items: [] },
      { title: "사업/기술 요약", items: [] },
    ],
  };

  const additionalProjectDetailPages = {
    "project-optical": {
      en: {
        title: "Project Optical — Optomind | CANDLESTICK PE",
        heroTitle: "Project Optical — Optomind",
        heroSub: "",
        backLabel: "Back to Portfolio",
        eyebrow: "Portfolio Detail",
        heading: "Project Optical — Optomind",
        lead: "",
        fields: [
          ["Project Name", "Project Optical — Optomind"],
          ["Company / Target", "OPTO MIND CO., LTD."],
          ["Sector", "Optical communication and optical communication device manufacturing"],
          ["Company Website", "https://www.optomindinc.com/"],
        ],
        sections: [
          {
            title: "Business",
            items: opticalBusiness.en,
          },
          {
            title: "Project Overview",
            items: opticalOverview.en,
          },
        ],
      },
      ko: {
        title: "Project Optical — Optomind | CANDLESTICK PE",
        heroTitle: "Project Optical — Optomind",
        heroSub: "",
        backLabel: "포트폴리오로 돌아가기",
        eyebrow: "포트폴리오 상세",
        heading: "Project Optical — Optomind",
        lead: "",
        fields: [
          ["프로젝트명", "Project Optical — Optomind"],
          ["회사 / 투자대상", "주식회사 옵토마인드 / OPTO MIND CO.,LTD."],
          ["섹터", "광통신 및 광통신장치 제조"],
          ["회사 홈페이지", "https://www.optomindinc.com/"],
        ],
        sections: [
          {
            title: "Business",
            items: opticalBusiness.ko,
          },
          {
            title: "Project Overview",
            items: opticalOverview.ko,
          },
        ],
      },
    },
    "project-peoplebio-ma": {
      en: {
        title: "PeopleBio M&A | CANDLESTICK PE",
        heroTitle: "PeopleBio M&A",
        heroSub: "",
        backLabel: "Back to Portfolio",
        eyebrow: "Portfolio Detail",
        heading: "PeopleBio M&A",
        lead: "",
        fields: [
          ["Project Name", "PeopleBio M&A"],
          ["Company / Target", "PeopleBio Co., Ltd."],
          ["Sector", "Pharmaceuticals / Bio"],
          ["Company Website", "http://peoplebio.net"],
        ],
        sections: blankProjectSections.en,
      },
      ko: {
        title: "피플바이오 M&A | CANDLESTICK PE",
        heroTitle: "피플바이오 M&A",
        heroSub: "",
        backLabel: "포트폴리오로 돌아가기",
        eyebrow: "포트폴리오 상세",
        heading: "피플바이오 M&A",
        lead: "",
        fields: [
          ["프로젝트명", "피플바이오 M&A"],
          ["회사 / 투자대상", "주식회사 피플바이오 / PeopleBio Co., Ltd."],
          ["섹터", "제약/바이오"],
          ["회사 홈페이지", "http://peoplebio.net"],
        ],
        sections: blankProjectSections.ko,
      },
    },
    "project-edge-data-center": {
      en: {
        title: "Daechi-dong Edge Data Center Development | CANDLESTICK PE",
        heroTitle: "Daechi-dong Edge Data Center Development",
        heroSub: "",
        backLabel: "Back to Portfolio",
        eyebrow: "Portfolio Detail",
        heading: "Daechi-dong Edge Data Center Development",
        lead: "",
        fields: [
          ["Project Name", "Daechi-dong Edge Data Center Development"],
          ["Company / Target", "Eastern Networks Co., Ltd."],
          ["Sector", "Wholesale of computers, peripherals, and software"],
          ["Company Website", "https://www.east21.co.kr/main/"],
        ],
        sections: blankProjectSections.en,
      },
      ko: {
        title: "대치동 Edge 데이터센터개발 | CANDLESTICK PE",
        heroTitle: "대치동 Edge 데이터센터개발",
        heroSub: "",
        backLabel: "포트폴리오로 돌아가기",
        eyebrow: "포트폴리오 상세",
        heading: "대치동 Edge 데이터센터개발",
        lead: "",
        fields: [
          ["프로젝트명", "대치동 Edge 데이터센터개발"],
          ["회사 / 투자대상", "주식회사 이스턴네트웍스 / Eastern Networks Co., Ltd."],
          ["섹터", "컴퓨터 및 주변장치, 소프트웨어 도매업"],
          ["회사 홈페이지", "https://www.east21.co.kr/main/"],
        ],
        sections: blankProjectSections.ko,
      },
    },
  };

  const pages = {
    index: {
      en: {
        title: "CANDLESTICK PE | 캔들스틱 PE",
        headline: "CANDLESTICK PRIVATE EQUITY",
        cardKicker: "CANDLESTICK PE",
        cardTitle:
          'A Korea-focused<br><span class="hero-card-emphasis">Private Equity Partner</span><br>for promising growth companies',
        cardText:
          "With accumulated investment experience and deep sector insight,<br>we support corporate growth strategies<br>and create sustainable value together.",
        footer:
          'CANDLESTICK PE<div class="hero-sub"><span class="footer-email">E-mail: <a href="mailto:jcjang@candlestickpe.com">jcjang@candlestickpe.com</a></span><span class="footer-divider"> / </span><span class="footer-address">Address: 3rd Floor, 39, Gangnam-daero 118-gil, Gangnam-gu, Seoul, Republic of Korea</span></div>',
      },
      ko: {
        title: "CANDLESTICK PE | 캔들스틱 PE",
        headline: "CANDLESTICK PRIVATE EQUITY",
        cardKicker: "CANDLESTICK PE",
        cardTitle:
          '대한민국의 유망 기업과<br>성장 산업에 투자하는<br><span class="hero-card-emphasis">Private Equity Partner</span>',
        cardText:
          "축적된 투자 경험과 산업에 대한 깊은 이해를 바탕으로,<br>기업의 성장 전략을 지원하며<br>지속가능한 가치를 함께 만들어갑니다.",
        footer:
          'CANDLESTICK PE<div class="hero-sub"><span class="footer-email">이메일: <a href="mailto:jcjang@candlestickpe.com">jcjang@candlestickpe.com</a></span><span class="footer-divider"> / </span><span class="footer-address">주소: 서울특별시 강남구 강남대로118길 39, 3층</span></div>',
      },
    },

    about: {
      en: {
        title: "About Candlestick | CANDLESTICK PE",
        heroTitle: "About Candlestick",
        heroSub:
          "Candlestick PE structures and manages institutional private equity funds, executing investments tailored to the strategic and financial needs of each company.",
        introEyebrow: "Institutional PEF Manager",
        introTitle: "Private equity solutions built around each company's needs",
        introLead:
          "As the general partner of institutional private equity funds, Candlestick PE reviews each transaction from the perspective of fund formation, investment execution, post-investment value creation, and exit. We focus on building practical investment structures that reflect the company's capital needs, shareholder objectives, growth strategy, and recoverability.",
        roleCards: [
          {
            title: "Investment Vehicle",
            body:
              "Candlestick establishes and manages institutional PEFs as the investment vehicle for corporate investments.",
            items: [
              "Institutional private equity fund formation and management",
              "Investment structure design aligned with investor and company needs",
              "Fund-level governance, reporting, and compliance management",
            ],
          },
          {
            title: "Deal Coverage",
            body:
              "We review control investments, M&A transactions, growth capital, and financial restructuring opportunities with a PEF-oriented approach.",
            items: [
              "Control investment and M&A opportunities",
              "Growth capital for companies requiring expansion capital",
              "Capital structure improvement and shareholder restructuring cases",
            ],
          },
          {
            title: "Value-add Role",
            body:
              "After investment, Candlestick works with management teams and stakeholders to support practical value creation initiatives.",
            items: [
              "Business strategy, financial planning, and governance improvement",
              "Support for internal control, reporting, and risk management",
              "Exit strategy review and execution support",
            ],
          },
        ],
        flowTitle: "How Candlestick Executes PEF Investments",
        flowSteps: [
          {
            title: "Capital Formation",
            body:
              "Form an institutional PEF based on the investment thesis, transaction structure, and target investor profile.",
          },
          {
            title: "Deal Structuring",
            body:
              "Design transaction terms that reflect the company's funding purpose, shareholder needs, and investor protection requirements.",
          },
          {
            title: "Investment Execution",
            body:
              "Complete diligence, investment committee review, fund documentation, and capital deployment through the PEF.",
          },
          {
            title: "Value Creation",
            body:
              "Support management on strategy, finance, governance, organization, and risk-management priorities after investment.",
          },
          {
            title: "Exit",
            body:
              "Review exit alternatives and timing based on company performance, market conditions, and fund objectives.",
          },
        ],
        solutionsTitle: "Solutions We Provide",
        solutions: [
          "Control investment",
          "M&A investment",
          "Growth capital",
          "Financial restructuring",
          "Business portfolio realignment",
          "Governance improvement",
        ],
        closingTitle: "Our Role",
        closingText:
          "Candlestick PE acts as a GP and investment partner that connects institutional capital with corporate needs. We aim to execute investments through disciplined PEF structures and help portfolio companies build sustainable enterprise value.",
      },
      ko: {
        title: "About Candlestick | CANDLESTICK PE",
        heroTitle: "About Candlestick",
        heroSub:
          "캔들스틱 PE는 기관전용 PEF를 설립·운용하며, 기업의 성장 니즈와 투자자의 장기적 가치를 함께 고려한 전략적 투자를 실행하는 사모펀드 운용사입니다.",
        introEyebrow: "기관전용 PEF 운용사",
        introTitle: "기업의 성장과 투자자의 가치를 함께 설계하는 PEF 파트너",
        introLead:
          "캔들스틱 PE는 기관전용 PEF의 업무집행사원(GP)으로서 펀드 결성, 투자 구조 설계, 투자 집행, 사후관리 및 회수까지의 전 과정을 검토합니다.<br>각 기업의 자금 수요, 주주 구성, 성장 전략, 회수 가능성을 종합적으로 고려하여 실질적인 투자 구조를 설계합니다.",
        roleCards: [
          {
            title: "Investment Vehicle",
            body:
              "캔들스틱은 기관전용 PEF를 기업투자를 위한 핵심 투자기구로 설립하고 운용합니다.",
            items: [
              "기관전용 사모집합투자기구 설립 및 운용",
              "투자자와 기업의 목적에 맞춘 투자 구조 설계",
              "펀드 거버넌스, 보고, 컴플라이언스 관리",
            ],
          },
          {
            title: "Deal Coverage",
            body:
              "경영권 인수, M&A, Growth Capital, 재무구조 개선 등 기업의 주요 현안에 맞는 투자 기회를 검토합니다.",
            items: [
              "경영권 인수 및 M&A 투자",
              "자금이 필요한 기업에 Growth Capital 투자",
              "재무구조 개선 및 주주구조 재편 거래",
            ],
          },
          {
            title: "Value-add Role",
            body:
              "투자 이후에는 경영진 및 이해관계자와 협력하여 기업가치 제고를 위한 실행 과제를 지원합니다.",
            items: [
              "사업전략, 재무계획, 지배구조 개선 지원",
              "내부통제, 보고체계, 리스크 관리 강화",
              "회수 전략 검토 및 실행 지원",
            ],
          },
        ],
        flowTitle: "캔들스틱의 PEF 투자 실행 흐름",
        flowSteps: [
          {
            title: "펀드 결성",
            body:
              "투자 논리, 거래 구조, 투자자 구성에 맞춰 기관전용 PEF 결성 방향을 수립합니다.",
          },
          {
            title: "거래 구조 설계",
            body:
              "기업의 자금 목적, 주주 니즈, 투자자 보호 장치를 반영한 투자 조건을 설계합니다.",
          },
          {
            title: "투자 집행",
            body:
              "실사, 투자심의, 펀드 문서화, 자금 납입 절차를 거쳐 PEF를 통해 투자를 집행합니다.",
          },
          {
            title: "가치제고",
            body:
              "이후 기업가치 제고를 위한<br>전략·재무·지배구조 등의<br>개선을 지원합니다.",
          },
          {
            title: "회수",
            body:
              "기업 성과, 시장 상황, 펀드 목적을 바탕으로 회수 방식과 시점을 검토합니다.",
          },
        ],
        solutionsTitle: "주요 솔루션",
        solutions: [
          "경영권 인수",
          "M&A 투자",
          "Growth Capital",
          "재무구조 개선",
          "사업 포트폴리오 재편",
          "지배구조 개선",
        ],
        closingTitle: "캔들스틱의 역할",
        closingText:
          "캔들스틱 PE는 기관투자자의 자본과 기업의 니즈를 연결하는 GP이자 투자 파트너입니다. 신의성실의 원칙과 책임 있는 투자 철학을 바탕으로 원칙 있는 PEF 구조를 설계·실행하며, 투자대상회사의 지속가능한 기업가치 제고와 장기적 성장 기반 마련을 지원합니다.",
      },
    },

    philosophy: {
      en: {
        title: "Philosophy | CANDLESTICK PE",
        heroTitle: "Philosophy",
        heroSub: "A Light for Trusted Partnership",
        sectionTitle: "Philosophy",
        english: "Candlestick PE seeks to be a trusted light for long-term partnership.",
        headline: "A Light for Trusted Partnership",
        body: [
          "Candlestick PE believes that investment is not merely the deployment and recovery of capital, but a journey of trust: managing entrusted capital responsibly and helping companies and investors grow together.",
          "We believe in the power of trust before the power of capital.",
          "Honest and transparent decision-making, disciplined investment judgment, responsible management, and long-term partnership are the core principles Candlestick PE seeks to uphold throughout every investment process.",
          "The name Candlestick reflects our intention to act like a quiet light on a dark path: discovering the potential of companies and helping investors and partners move in the right direction.",
          "We view capital entrusted by investors not simply as a financial asset, but as a mandate of trust that must be managed responsibly.",
          "Our investment approach is to help good companies become healthier businesses and to create a virtuous cycle in which the outcomes of growth are shared by investors, companies, employees, and stakeholders.",
          "Under the principles of integrity, responsibility, discipline, and long-term value creation, Candlestick PE will continue to be a trusted investment partner that lights the direction for investors and companies.",
        ],
      },
      ko: {
        title: "투자철학 | CANDLESTICK PE",
        heroTitle: "투자철학",
        heroSub: "A Light for Trusted Partnership",
        sectionTitle: "투자철학 (Philosophy)",
        english: "Candlestick PE seeks to be a trusted light for long-term partnership.",
        headline: "A Light for Trusted Partnership",
        body: [
          "캔들스틱PE는 투자란 단순한 자본의 투입과 회수가 아니라,\n맡겨진 자본을 책임 있게 관리하고 기업과 투자자가 함께 성장하도록 돕는 신뢰의 여정이라고 생각합니다.",
          "우리는 자본의 힘보다 먼저 신뢰의 힘을 믿습니다.",
          "정직하고 투명한 의사결정, 절제된 투자 판단, 책임 있는 운용, 그리고 장기적인 파트너십은\n캔들스틱PE가 모든 투자 과정에서 지키고자 하는 기본 원칙입니다.",
          "캔들스틱이라는 이름에는\n어두운 길 위에서 조용히 방향을 비추는 작은 빛처럼,\n기업의 가능성을 발견하고 투자자와 파트너들이 올바른 방향으로 나아갈 수 있도록 돕겠다는 뜻이 담겨 있습니다.",
          "우리는 투자자로부터 맡겨진 자본을 단순한 금융자산이 아니라\n책임 있게 관리해야 할 신뢰의 위임으로 바라봅니다.",
          "좋은 기업이 더 건강한 기업으로 성장하도록 돕고,\n그 성장의 결실이 투자자, 기업, 임직원과 이해관계자 모두에게 돌아가는 선순환을 만드는 것이\n캔들스틱PE가 추구하는 투자입니다.",
          "캔들스틱PE는 앞으로도\n정직, 책임, 절제, 장기적 가치 창출이라는 원칙 아래\n투자자와 기업이 함께 나아갈 방향을 비추는\n신뢰받는 투자 파트너가 되겠습니다.",
        ],
      },
    },

    portfolio: {
          "en": {
                "title": "Portfolio | CANDLESTICK PE",
                "heroTitle": "Designing and executing investment structures\nto create enterprise growth and value.",
                "heroSub": "Candlestick PE designs and executes tailored investment structures across growth-company investments, structured investments, and real asset or special situation projects.",
                "sectionTitle": "Portfolio",
                "headers": [
                      "Project",
                      "Business / Project Overview"
                ],
                "rowLabels": [
                      "Project",
                      "Business / Project Overview"
                ],
                "rows": [
                      {
                            "image": "Optomind.png",
                            "alt": "OPTOMIND",
                            "title": "Project Optical — Optomind",
                            "business": opticalBusiness.en,
                            "overview": opticalOverview.en,
                            "detail": portfolioDetailFields.optical.en,
                            "articles": portfolioArticles.optical.en
                      },
                      {
                            "image": "ecoworldpharm-logo.svg",
                            "alt": "ECO WORLD PHARM",
                            "title": "Ecoworld Pharm",
                            "logoWide": true,
                            "business": ecoworldBusiness.en,
                            "overview": ecoworldOverview.en,
                            "detail": portfolioDetailFields.ecoworld.en,
                            "articles": portfolioArticles.ecoworld.en
                      },
                      {
                            "alt": "Project NPL",
                            "logoText": "NPL",
                            "title": "Project NPL",
                            "business": nplBusiness.en,
                            "overview": nplOverview.en
                      },
                      {
                            "image": "PP.png",
                            "alt": "PeopleBio",
                            "title": "PeopleBio M&A",
                            "detail": portfolioDetailFields.peoplebio.en,
                            "articles": portfolioArticles.peoplebio.en,
                            "business": [
                                  "Equity acquisition transaction in PeopleBio by Eastern Networks, a Dell top-tier partner",
                                  "Supported transaction structure design, funding roadmap planning, and execution aligned with the acquisition objective",
                                  "Executed M&A using a combined structure including equity acquisition, paid-in capital increase, and in-kind contribution"
                            ],
                            "overview": [
                                  "Designed and managed transaction structure, execution strategy, timeline, and key risks in an integrated manner",
                                  "Designed real estate in-kind contribution and paid-in capital increase structure",
                                  "Performed PM role for transaction execution",
                                  "Supported design and execution of core transaction terms including issuance terms and closing conditions"
                            ]
                      },
                      {
                            "image": "EN.png",
                            "alt": "Eastern Networks Advisory",
                            "title": "Daechi-dong Edge Data Center Development",
                            "detail": portfolioDetailFields.edge.en,
                            "articles": portfolioArticles.edge.en,
                            "business": [
                                  "Edge data center development project based on real estate held by an Eastern Networks affiliate",
                                  "Designed transaction and financing structures for data center development",
                                  "Established phase-by-phase execution roadmap and funding strategy"
                            ],
                            "overview": [
                                  "Designed SPC formation, equity, and debt structures",
                                  "Estimated phase-by-phase capital requirements and built cash management scenarios",
                                  "Reviewed development risk, funding execution risk, and investment recovery structure",
                                  "Supported investment structuring and key term discussions with investors and lenders"
                            ]
                      }
                ]
          },
          "ko": {
                "title": "Portfolio | CANDLESTICK PE",
                "heroTitle": "투자 구조 설계와 실행으로\n기업의 성장과 가치를 만들어갑니다.",
                "heroSub": "캔들스틱 PE는 성장기업 투자, 구조화 투자, 부동산·특수상황 프로젝트 등\n다양한 거래에서 맞춤형 투자 구조를 설계하고 실행합니다.",
                "sectionTitle": "포트폴리오",
                "headers": [
                      "Project",
                      "Business / Project Overview"
                ],
                "rowLabels": [
                      "Project",
                      "Business / Project Overview"
                ],
                "rows": [
                      {
                            "image": "Optomind.png",
                            "alt": "OPTOMIND",
                            "title": "Project Optical — Optomind",
                            "business": opticalBusiness.ko,
                            "overview": opticalOverview.ko,
                            "detail": portfolioDetailFields.optical.ko,
                            "articles": portfolioArticles.optical.ko
                      },
                      {
                            "image": "ecoworldpharm-logo.svg",
                            "alt": "ECO WORLD PHARM",
                            "title": "에코월드팜",
                            "logoWide": true,
                            "business": ecoworldBusiness.ko,
                            "overview": ecoworldOverview.ko,
                            "detail": portfolioDetailFields.ecoworld.ko,
                            "articles": portfolioArticles.ecoworld.ko
                      },
                      {
                            "alt": "Project NPL",
                            "logoText": "NPL",
                            "title": "Project NPL",
                            "business": nplBusiness.ko,
                            "overview": nplOverview.ko
                      },
                      {
                            "image": "PP.png",
                            "alt": "PeopleBio",
                            "title": "피플바이오 M&A",
                            "detail": portfolioDetailFields.peoplebio.ko,
                            "articles": portfolioArticles.peoplebio.ko,
                            "business": [
                                  "Dell 최상위 파트너인 이스턴네트웍스의 피플바이오 지분 인수 거래",
                                  "인수 목적에 맞춘 거래 구조 설계, 자금집행 로드맵 수립 및 실행 지원",
                                  "지분 인수, 유상증자, 현물출자 등 복합 구조를 활용한 M&A 실행"
                            ],
                            "overview": [
                                  "거래 구조, 실행 전략, 일정, 리스크를 통합적으로 설계 및 관리",
                                  "부동산 현물출자 및 유상증자 구조 설계",
                                  "거래 실행을 위한 PM 역할 수행",
                                  "발행 조건, 클로징 조건 등 핵심 거래 조건 설계 및 실행 지원"
                            ]
                      },
                      {
                            "image": "EN.png",
                            "alt": "Eastern Networks Advisory",
                            "title": "대치동 Edge 데이터센터 개발",
                            "detail": portfolioDetailFields.edge.ko,
                            "articles": portfolioArticles.edge.ko,
                            "business": [
                                  "이스턴네트웍스 계열사 보유 부동산을 기반으로 한 Edge 데이터센터 개발 프로젝트",
                                  "데이터센터 개발 거래 구조 및 금융 구조 설계",
                                  "개발 단계별 실행 로드맵 및 자금 조달 전략 수립"
                            ],
                            "overview": [
                                  "SPC 설립 구조 및 지분·차입 구조 설계",
                                  "단계별 소요자금 산정 및 자금운영 시나리오 구성",
                                  "개발 리스크, 자금집행 리스크 및 투자 회수 구조 검토",
                                  "투자자 및 대주단 대상 투자 구조화와 주요 조건 협의 지원"
                            ]
                      }
                ]
          }
    },

    team: {
      en: {
        title: "Key Personnel | CANDLESTICK PE",
        heroTitle: "Key Personnel",
        heroSub:
          "Candlestick PE is composed of seasoned professionals with extensive experience and a proven track record in the Korean investment market.\nLeveraging our accumulated expertise and deep market insight, we pursue proactive and strategic investment activities.",
        sectionTitle: "Key Personnel",
        experience: "Experience",
        trackRecord: "Investment Track Record",
        people: [
          {
            name: "Hong Gap-Pyo",
            title: "CEO",
            alt: "Hong Gap-Pyo, CEO",
            experience: [
              "CEO, Candlestick PE Co., Ltd.",
              "CEO, Mobidick Asset Management",
              "CEO and Head of Management Division, KPH Asset Management",
              "Head of East Asia Asset Management, LDS Presiding Bishopric Office",
              "Ensign Peak Advisors, SLC office",
            ],
            trackRecord: [
              "2026 investment in PYLER, a Vision AI company",
              "2025 investment in Optomind, an optical communications company for U.S. data centers",
              "2023 acquisition advisory for Quro CC by Daekwang E&C",
              "Managed Pre-IPO funds from 2016 to 2024, completing investments in eight companies including APR",
              "Managed futures/options CTA strategy funds including Bountiful, PSY, and Hana in 2017, with additional track records",
            ],
          },
          {
            name: "Min Byung-Sun",
            title: "Director, KICPA",
            alt: "Min Byung-Sun, Director",
            experience: [
              "Head of Investment Division, Candlestick PE Co., Ltd.",
              "Head of Investment Division, Mobidick Asset Management",
              "Head of Investment Finance Department, DGB Capital, Hyosung Capital, and M Capital",
              "Deal Division, PwC Samil Accounting Corp.",
            ],
            trackRecord: [
              "2026 investment in PYLER, a Vision AI company",
              "2025 investment in Optomind, an optical communications company for U.S. data centers",
              "2023 acquisition advisory for Quro CC by Daekwang E&C",
              "2022 Co-GP for acquisition of Doosan Machine Tools management rights with Korea Investment PE; 2021 Co-GP for acquisition of ISC management rights with Helios PE",
              "Multiple LP investments from 2021 to 2022, including EcoPro, Chunbo, Samsung Heavy Industries, and Payletter",
              "Multiple LP investments from 2017 to 2020, including Cell Bio Human Tech, Pungwon Precision, RIDI, V-OL, and HD Hyundai Heavy Industries",
              "2016 sale advisory for Cheongwoo GC in Wonju, Gangwon-do and Maestro CC in Anseong, Gyeonggi-do",
              "2010 sale advisory for Hyeonyang, an auto parts company, and 2013 sale advisory for Korea Line Corporation",
            ],
          },
        ],
      },
      ko: {
        title: "핵심운용인력 | CANDLESTICK PE",
        heroTitle: "핵심운용인력",
        heroSub:
          "캔들스틱 PE는 한국 투자시장에서 폭넓은 경험과 검증된 실적을 보유한 전문 인력으로 구성되어 있습니다.\n축적된 전문성과 깊이 있는 시장 이해를 바탕으로 선제적이고 전략적인 투자 활동을 수행합니다.",
        sectionTitle: "핵심운용인력",
        experience: "주요경력",
        trackRecord: "주요 투자실적",
        people: [
          {
            name: "홍갑표",
            title: "대표이사",
            alt: "홍갑표 대표이사 증명사진",
            experience: [
              "(주)캔들스틱 PE 대표",
              "모비딕 자산운용 대표",
              "KPH자산운용 대표, 운용본부장",
              "LDS Presiding Bishopric Office 동아시아 자산관리 본부장",
              "Ensign Peak Advisors, SLC office",
            ],
            trackRecord: [
              "2026년 비전 AI 업체 파일러 투자",
              "2025년 미국 데이터센터향 광통신 업체 옵토마인드 투자",
              "2023년 대광건영의 큐로CC 인수자문",
              "2016~2024년 Pre-IPO 펀드운용(에이피알 등 8개사 투자완료)",
              "2017년 선물/옵션 CTA 전략 펀드(바운티풀, PSY, 하나) 운용 등 추가 실적 다수",
            ],
          },
          {
            name: "민병선",
            title: "이사, KICPA",
            alt: "민병선 이사 증명사진",
            experience: [
              "(주)캔들스틱 PE 투자본부장",
              "모비딕자산운용 투자본부장",
              "DGB캐피탈, 효성캐피탈, 엠캐피탈 투자금융부 부서장",
              "PwC 삼일회계법인 Deal 본부",
            ],
            trackRecord: [
              "2026년 비전 AI 업체 파일러 투자",
              "2025년 미국 데이터센터향 광통신 업체 옵토마인드 투자",
              "2023년 대광건영의 큐로CC 인수자문",
              "2022년 두산공작기계 경영권 인수 Co-GP (한투 PE)/ 2021년 코스닥상장사 ISC 경영권 인수 Co-GP (헬리오스 PE)",
              "2021년~2022년 에코프로, 천보, 삼성중공업, 페이레터 등 다수 LP 투자",
              "2017년~2020년 셀바이오휴먼텍, 풍원정밀, 리디, 비올, 현대힘스 등 다수 LP 투자",
              "2016년 강원도 원주 청우 GC, 경기도 안성 마에스트로CC 매각 자문",
              "2010년 신일정공 현양(자동차 부품) 매각 자문 / 2013년 대한해운(해운업) 매각 자문",
            ],
          },
        ],
      },
    },

    esg: {
      en: {
        title: "ESG / Stewardship Code | CANDLESTICK PE",
        heroTitle: "ESG / Stewardship Code",
        heroSub: "",
        esgTitle: "Candlestick's ESG",
        esgLead: [
          "Candlestick Co., Ltd. recognizes that the sustainable growth and long-term corporate value enhancement of portfolio companies are directly connected to investors' interests. Accordingly, the Company seeks to consider environmental, social, and governance factors across investment review, decision-making, post-investment management, and exit processes.",
          "Candlestick evaluates not only financial performance but also management transparency, internal control standards, stakeholder relationships, legal compliance, and environmental and social risks of portfolio companies. After investment, the Company discusses improvement priorities appropriate to each company's growth stage and business characteristics, and may work with external experts to identify practical value enhancement measures.",
          "Candlestick will refer to the core purposes of global ESG initiatives such as TCFD, UN PRI, and UN SDGs, while gradually internalizing ESG factors in a manner suitable for its investment strategy and operating scale.",
        ],
        investmentPrinciplesTitle: "Investment Principles",
        principles: [
          {
            title: "Environment",
            body: "Candlestick considers key environmental factors relevant to each business, including compliance with environmental laws, environmental risks, energy use, and waste management during investment review and post-investment management.",
          },
          {
            title: "Social",
            body: "Candlestick considers relationships with key stakeholders including employees, customers, and partners, as well as occupational safety, human rights, personal information protection, fair trade, and social responsibility factors.",
          },
          {
            title: "Governance",
            body: "Candlestick reviews board and decision-making structures, internal controls, accounting transparency, conflict-of-interest prevention, and protections for shareholders and investors.",
          },
        ],
        actionTitle: "Detailed Implementation",
        actionHeaders: ["Category", "Direction"],
        actionRows: [
          ["Investment Review", "Review material ESG risks alongside financial factors during due diligence and identify whether significant environmental, social, or governance issues exist in light of the target company's business characteristics."],
          ["Investment Decision", "Review key ESG risks and potential improvement measures together with growth potential, profitability, and exit feasibility during investment committee deliberation."],
          ["Post-Investment Management", "Communicate regularly and as needed with portfolio company management and discuss improvement priorities such as internal controls, financial management, governance, compliance, and human resources and organization management."],
          ["Value Enhancement", "Support practical improvements in management strategy, capital structure, sales management, organization, and risk management to enhance long-term corporate value."],
          ["External Experts", "Work with law firms, accounting firms, tax advisors, and industry experts to diagnose risks and review improvement measures for portfolio companies."],
        ],
        stewardshipTitle: "Candlestick's Stewardship Code",
        stewardshipLead: [
          "Candlestick recognizes its fiduciary responsibility as an institutional investor to manage and operate investors' assets faithfully and prudently. The Company supports the core purpose of the Korea Stewardship Code, including the long-term value enhancement of portfolio companies, pursuit of investors' long-term interests, and sound development of capital markets, and establishes the following principles suited to its investment strategy and operating characteristics.",
          "This Stewardship Code applies to institutional private collective investment vehicles and related investment assets managed or operated by Candlestick as a general partner or manager. The specific method of implementation may vary depending on each fund's articles, investment agreements, applicable laws, portfolio company characteristics, and investment structure.",
        ],
        stewardshipPrinciples: [
          {
            title: "Principle 1. Fiduciary Responsibility Policy",
            paragraphs: [
              "Candlestick prioritizes investors' interests over the interests of the Company, shareholders, and employees. In fund formation, investment, operation, post-investment management, and exit, the Company treats all investors reasonably and fairly and does not unfairly favor or discriminate against specific investors without reasonable grounds.",
              "As a prudent manager, Candlestick faithfully performs its duties in accordance with applicable laws, fund articles, investment agreements, and internal regulations and procedures. The Company recognizes that maximizing investors' interests through the long-term growth and value enhancement of portfolio companies is the core of its fiduciary responsibility.",
            ],
          },
          {
            title: "Principle 2. Prevention and Management of Conflicts of Interest",
            paragraphs: [
              "Candlestick recognizes that conflicts of interest may arise between the Company and investors, among investors, among multiple funds, and between employees and funds during fund operations.",
              "The Company reviews transactions or decisions that may involve conflicts of interest in advance and, where necessary, notifies or obtains consent from investors in accordance with applicable laws, fund articles, and internal procedures to protect investors.",
              "Candlestick uses internal control standards, investment committee procedures, compliance systems, and external expert reviews where needed to prevent conflicts of interest. The Company also continuously manages employees to prevent conduct that may harm the interests of the Company or investors.",
            ],
          },
          {
            title: "Principle 3. Periodic Monitoring of Portfolio Companies",
            paragraphs: [
              "Candlestick determines whether to invest after sufficient due diligence and internal review before execution. After investment, it periodically reviews portfolio companies' management status, financial condition, operating performance, cash management, major contracts, internal controls, and key ESG issues.",
              "The Company communicates regularly and as needed with management and key employees of portfolio companies and discusses long-term growth strategies and key execution priorities. Where necessary, it reviews management status through board participation, shareholder voting, consultation on major management matters, information requests, and external advice.",
              "Candlestick considers not only financial performance but also non-financial factors such as management strategy, product and service competitiveness, internal controls, legal compliance, governance, and sustainability as important elements affecting corporate value.",
            ],
          },
          {
            title: "Principle 4. Constructive Engagement with Portfolio Companies",
            paragraphs: [
              "Candlestick values trust and shared understanding with portfolio companies. The Company continuously discusses growth direction, key priorities, financial strategy, organization management, and risk management with portfolio company management and conducts constructive engagement to enhance long-term corporate value.",
              "Depending on the importance of the matter and the investment structure, the Company may conduct stewardship activities through the following methods.",
              "Candlestick prioritizes consultation and voluntary improvement with portfolio companies, but may review more active measures within the scope permitted by relevant contracts and laws when deemed necessary to protect investors.",
            ],
          },
          {
            title: "Principle 5. Voting Policy",
            paragraphs: [
              "Candlestick exercises voting rights at shareholder meetings and boards of portfolio companies with priority on the interests of funds and investors. Voting decisions are made by comprehensively considering sustainable growth, long-term corporate value enhancement, investor protection, and conflicts of interest.",
              "The Company reviews the content and impact of each agenda item and clearly determines whether to vote for, against, or abstain. For important agenda items, it may use opinions from the investment committee, compliance function, or external experts in addition to review by responsible investment professionals.",
              "Due to the nature of institutional private fund management, Candlestick may not disclose voting records to the general public. However, where required by applicable laws, fund articles, or agreements with investors, the Company reports voting records and key reasons to investors.",
            ],
          },
          {
            title: "Principle 6. Investor Reporting",
            paragraphs: [
              "Candlestick reports fund operation status, portfolio company status, major management matters, voting activities, and stewardship activities to investors in accordance with applicable laws, fund articles, and agreements with investors.",
              "The Company communicates with investors through regular operation reports, member meetings, investor materials, and individual consultations. If matters that may materially affect investors' interests arise, the Company may provide ad hoc reports or conduct consultations in accordance with relevant procedures.",
            ],
          },
          {
            title: "Principle 7. Capability and Professional Expertise",
            paragraphs: [
              "Candlestick continuously strengthens capabilities in investment, M&A, corporate analysis, finance, accounting, law, tax, industry research, and post-investment management to effectively fulfill fiduciary responsibilities.",
              "To understand portfolio companies sufficiently and identify practical value enhancement measures, the Company enhances the expertise of internal investment professionals and actively collaborates with law firms, accounting firms, tax advisors, industry experts, and financial institutions.",
              "Candlestick recognizes that securing excellent investment professionals and developing their capabilities are core foundations for investment performance and investor protection, and will continue to improve necessary training and internal management systems to enhance employee expertise and ethical awareness.",
            ],
          },
        ],
        engagementHeaders: ["Category", "Key Activities"],
        engagementRows: [
          ["General Monitoring", "Management meetings, financial data review, business plan review, key KPI monitoring"],
          ["Management Engagement", "Participation in board or shareholder meetings, consultation on major decisions, proposals for management improvement"],
          ["Risk Management", "Review of legal, accounting, tax, labor, and regulatory risks; recommendations for internal control improvements"],
          ["Contractual Rights", "Exercise of consent rights, consultation rights, information request rights, protective provisions, and other contractual rights"],
          ["Material Issue Response", "Step-by-step response to illegal acts, material contract breaches, accounting or financial red flags, and conflicts of interest"],
        ],
      },
      ko: {
        title: "ESG / 스튜어드십 코드 | CANDLESTICK PE",
        heroTitle: "ESG / 스튜어드십 코드",
        heroSub: "",
        esgTitle: "주식회사 캔들스틱의 ESG",
        esgLead: [
          "주식회사 캔들스틱(이하 “캔들스틱” 또는 “회사”)은 투자대상회사의 지속가능한 성장과 중장기적 기업가치 제고가 투자자의 이익과 직결된다는 점을 인식하고 있습니다. 이에 따라 회사는 투자 검토, 투자 의사결정, 사후관리 및 회수 과정 전반에서 환경(Environment), 사회(Social), 지배구조(Governance) 요소를 고려하고자 노력합니다.",
          "캔들스틱은 단순한 재무적 성과뿐만 아니라, 투자대상회사의 경영 투명성, 내부통제 수준, 이해관계자와의 관계, 법규 준수, 환경·사회적 리스크 등을 종합적으로 검토합니다. 또한 투자 이후에는 투자대상회사의 성장 단계와 사업 특성에 맞는 개선 과제를 함께 논의하고, 필요한 경우 외부 전문가와의 협업을 통해 실질적인 가치 제고 방안을 모색합니다.",
          "캔들스틱은 TCFD, UN PRI, UN SDGs 등 글로벌 ESG 이니셔티브의 기본 취지를 참고하되, 회사의 투자전략과 운용 규모에 적합한 방식으로 ESG 요소를 점진적으로 내재화해 나가겠습니다.",
        ],
        investmentPrinciplesTitle: "투자원칙",
        principles: [
          { title: "환경", body: "캔들스틱은 투자 검토 및 사후관리 과정에서 투자대상회사의 환경 관련 법규 준수 여부, 환경 리스크, 에너지 사용, 폐기물 관리 등 사업 특성에 따른 주요 환경 요소를 고려합니다." },
          { title: "사회", body: "캔들스틱은 투자대상회사의 임직원, 고객, 협력사 등 주요 이해관계자와의 관계, 산업안전, 인권, 개인정보보호, 공정거래 및 사회적 책임 요소를 고려합니다." },
          { title: "지배구조", body: "캔들스틱은 투자대상회사의 이사회 및 주요 의사결정 구조, 내부통제, 회계 투명성, 이해상충 방지, 주주 및 투자자 보호 장치 등을 검토합니다." },
        ],
        actionTitle: "세부 실행 방안",
        actionHeaders: ["구분", "실행 방향"],
        actionRows: [
          ["투자 검토", "실사 과정에서 재무적 요소와 함께 주요 ESG 리스크를 점검하고, 투자대상회사의 사업 특성상 중대한 환경·사회·지배구조 이슈가 있는지 확인합니다."],
          ["투자 의사결정", "투자심의 과정에서 대상 회사의 성장성, 수익성, 회수 가능성뿐만 아니라 ESG 관련 주요 리스크와 개선 가능성을 함께 검토합니다."],
          ["투자 이후 관리", "투자대상회사의 경영진과 정기·비정기적으로 소통하며, 필요시 내부통제, 재무관리, 지배구조, 컴플라이언스, 인력·조직 운영 등 개선 과제를 논의합니다."],
          ["가치 제고", "투자대상회사의 중장기 기업가치 제고를 위해 경영전략, 재무구조, 영업관리, 조직체계, 리스크 관리 등 실질적인 개선 활동을 지원합니다."],
          ["외부 전문가 활용", "법무법인, 회계법인, 세무법인, 산업 전문가 등 외부 전문가와 협업하여 투자대상회사의 리스크 진단 및 개선 방안을 검토할 수 있습니다."],
        ],
        stewardshipTitle: "주식회사 캔들스틱의 스튜어드십 코드",
        stewardshipLead: [
          "주식회사 캔들스틱은 기관투자자로서 투자자의 자산을 성실하고 신중하게 관리·운용해야 할 수탁자 책임을 인식하고 있습니다. 회사는 한국 스튜어드십 코드의 기본 취지인 투자대상회사의 중장기 가치 향상, 투자자의 중장기 이익 도모, 자본시장의 건전한 발전에 공감하며, 회사의 투자전략과 운용 특성에 맞는 수탁자 책임 이행 원칙을 다음과 같이 수립합니다.",
          "본 스튜어드십 코드는 캔들스틱이 업무집행사원 또는 운용사로서 관리·운용하는 기관전용 사모집합투자기구 및 관련 투자자산에 적용됩니다. 다만, 각 펀드의 정관, 투자계약, 관련 법령, 투자대상회사의 특성 및 투자 구조에 따라 구체적인 이행 방식은 달라질 수 있습니다.",
        ],
        stewardshipPrinciples: [
          {
            title: "원칙 1. 수탁자 책임 이행 정책",
            paragraphs: [
              "캔들스틱은 투자자의 이익을 회사, 주주 및 임직원의 이익보다 우선하여 고려합니다. 회사는 펀드의 결성, 투자, 운용, 사후관리 및 회수 과정에서 모든 투자자를 합리적이고 공정하게 대우하며, 합리적 사유 없이 특정 투자자를 부당하게 우대하거나 차별하지 않습니다.",
              "캔들스틱은 선량한 관리자로서 관련 법령, 펀드 정관, 투자계약, 내부 규정 및 절차에 따라 직무를 성실히 수행합니다. 회사는 투자대상회사의 장기적 성장과 기업가치 제고를 통해 투자자의 이익을 극대화하는 것을 수탁자 책임의 핵심으로 인식합니다.",
            ],
          },
          {
            title: "원칙 2. 이해상충 방지 및 관리",
            paragraphs: [
              "캔들스틱은 펀드 운용 과정에서 회사와 투자자, 특정 투자자와 다른 투자자, 복수의 펀드, 회사 임직원과 펀드 사이에 이해상충이 발생할 수 있음을 인식하고 있습니다.",
              "회사는 이해상충 가능성이 있는 거래나 의사결정에 대해 사전에 검토하고, 필요한 경우 관련 법령, 펀드 정관 및 내부 절차에 따라 투자자에게 고지하거나 동의를 받는 등 투자자 보호에 필요한 조치를 취합니다.",
              "캔들스틱은 이해상충을 예방하기 위해 내부통제기준, 투자심의 절차, 준법감시 체계 및 필요시 외부 전문가 검토를 활용합니다. 또한 임직원이 회사 또는 투자자의 이익을 해할 우려가 있는 행위를 하지 않도록 지속적으로 관리합니다.",
            ],
          },
          {
            title: "원칙 3. 투자대상회사에 대한 주기적 점검",
            paragraphs: [
              "캔들스틱은 투자 집행 전 충분한 실사와 내부 심의 절차를 거쳐 투자 여부를 결정합니다. 투자 이후에는 투자대상회사의 경영현황, 재무상태, 영업성과, 자금운용, 주요 계약, 내부통제 및 ESG 관련 주요 이슈를 주기적으로 점검합니다.",
              "회사는 투자대상회사의 경영진 및 주요 임직원과 정기·비정기적으로 소통하며, 회사의 중장기 성장 전략과 주요 실행 과제를 함께 논의합니다. 필요한 경우 이사회 참여, 주주총회 의결권 행사, 주요 경영사항 협의, 자료 요청, 외부 자문 등을 통해 투자대상회사의 경영 현황을 점검합니다.",
              "캔들스틱은 투자대상회사의 재무적 성과뿐만 아니라 경영전략, 제품·서비스 경쟁력, 내부통제, 법규 준수, 지배구조 및 지속가능성 등 비재무적 요소도 기업가치에 영향을 미치는 중요한 요소로 고려합니다.",
            ],
          },
          {
            title: "원칙 4. 투자대상회사와의 건설적 관여활동",
            paragraphs: [
              "캔들스틱은 투자대상회사와의 신뢰관계와 공감대 형성을 중시합니다. 회사는 투자대상회사의 경영진과 성장 방향, 핵심 과제, 재무전략, 조직 운영, 리스크 관리 등에 대해 지속적으로 논의하며, 투자대상회사의 중장기 기업가치 제고를 위한 건설적 관여활동을 수행합니다.",
              "회사는 사안의 중요도와 투자 구조에 따라 다음과 같은 방법으로 수탁자 책임 활동을 전개할 수 있습니다.",
              "캔들스틱은 투자대상회사와의 협의와 자율적 개선을 우선하되, 투자자 보호를 위해 필요하다고 판단되는 경우 관련 계약 및 법령이 허용하는 범위 내에서 보다 적극적인 조치를 검토할 수 있습니다.",
            ],
          },
          {
            title: "원칙 5. 의결권 행사 정책",
            paragraphs: [
              "캔들스틱은 투자대상회사의 주주총회 및 이사회에서 펀드와 투자자의 이익을 우선하여 의결권을 행사합니다. 의결권 행사는 투자대상회사의 지속가능한 성장, 중장기 기업가치 제고, 투자자의 이익 보호, 이해상충 여부 등을 종합적으로 고려하여 결정합니다.",
              "회사는 각 안건의 내용과 영향을 검토한 후 찬성, 반대 또는 기권 여부를 명확히 판단합니다. 중요한 안건의 경우 담당 운용인력의 검토뿐만 아니라 투자심의위원회, 준법감시 또는 외부 전문가의 의견을 활용할 수 있습니다.",
              "캔들스틱은 기관전용 사모집합투자기구 운용의 특성상 의결권 행사 내역을 일반 대중에게 공개하지 않을 수 있습니다. 다만, 관련 법령, 펀드 정관 및 투자자와의 약정에 따라 필요한 경우 의결권 행사 내역과 주요 사유를 투자자에게 보고합니다.",
            ],
          },
          {
            title: "원칙 6. 투자자 보고",
            paragraphs: [
              "캔들스틱은 관련 법령, 펀드 정관 및 투자자와의 약정에 따라 투자자에게 펀드 운용 현황, 투자대상회사 현황, 주요 경영사항, 의결권 행사 및 수탁자 책임 이행 활동을 보고합니다.",
              "회사는 정기 운용보고, 사원총회, 투자자 보고자료, 개별 협의 등을 통해 투자자와 소통합니다. 또한 투자자의 이익에 중대한 영향을 미칠 수 있는 사항이 발생하는 경우, 관련 절차에 따라 수시 보고 또는 협의를 진행할 수 있습니다.",
            ],
          },
          {
            title: "원칙 7. 역량 및 전문성 확보",
            paragraphs: [
              "캔들스틱은 수탁자 책임을 효과적으로 이행하기 위해 투자, M&A, 기업분석, 재무, 회계, 법무, 세무, 산업 리서치 및 사후관리 역량을 지속적으로 강화합니다.",
              "회사는 투자대상회사를 충분히 이해하고 실질적인 가치 제고 방안을 도출하기 위해 내부 운용인력의 전문성을 높이는 한편, 법무법인, 회계법인, 세무법인, 산업 전문가, 금융기관 등 외부 전문가와의 협업을 적극 활용합니다.",
              "캔들스틱은 우수한 운용인력의 확보와 역량 개발이 투자성과와 투자자 보호의 핵심 기반이라는 점을 인식하고, 임직원의 전문성 향상과 윤리의식 제고를 위해 필요한 교육과 내부 관리체계를 지속적으로 보완해 나가겠습니다.",
            ],
          },
        ],
        engagementHeaders: ["구분", "주요 활동"],
        engagementRows: [
          ["일반 점검", "경영진 미팅, 재무자료 검토, 사업계획 점검, 주요 KPI 모니터링"],
          ["경영 관여", "이사회 또는 주주총회 참여, 주요 의사결정 협의, 경영개선 과제 제안"],
          ["리스크 관리", "법무·회계·세무·노무·규제 리스크 점검, 내부통제 개선 권고"],
          ["계약상 권리 행사", "투자계약상 동의권, 협의권, 자료요청권, 보호조항 등 행사"],
          ["중대 이슈 대응", "위법행위, 중대한 계약 위반, 회계·재무상 이상징후, 이해상충 발생 시 단계적 대응"],
        ],
      },
    },
  };

  pages["project-pyler"] = pylerDetailPages;
  Object.keys(additionalProjectDetailPages).forEach(function (pageName) {
    pages[pageName] = additionalProjectDetailPages[pageName];
  });

  function getPageName() {
    const file = window.location.pathname.split("/").pop() || "index.html";
    return file.replace(/\.html$/i, "") || "index";
  }

  function getInitialLanguage(pageName) {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "ko" || stored === "en" ? stored : pageDefaults[pageName] || "en";
  }

  function injectLanguageStyles() {
    if (document.getElementById("i18n-language-styles")) return;
    const style = document.createElement("style");
    style.id = "i18n-language-styles";
    style.textContent = `
      .navbar--floating{
        position:fixed !important;
        top:14px !important;
        right:16px !important;
        z-index:1050 !important;
        display:inline-flex !important;
        align-items:center !important;
        justify-content:flex-end !important;
        flex-wrap:nowrap !important;
        gap:8px !important;
        width:max-content !important;
        min-width:max-content !important;
        max-width:calc(100vw - 20px) !important;
      }
      .language-toggle{
        flex:0 0 auto;
        height:34px;
        border:1px solid rgba(255,255,255,.58);
        border-radius:999px;
        background:rgba(0,0,0,.32);
        color:#d1d5db;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:5px;
        padding:0 11px;
        font-size:.8rem;
        font-weight:800;
        line-height:1;
        white-space:nowrap;
        letter-spacing:0;
        backdrop-filter:blur(4px);
        box-shadow:0 2px 8px rgba(0,0,0,.18);
      }
      .language-toggle:focus-visible{
        outline:2px solid rgba(255,255,255,.9);
        outline-offset:3px;
      }
      body[data-lang="en"] .language-toggle__en,
      body[data-lang="ko"] .language-toggle__ko{
        color:#fff;
        opacity:1;
      }
      body[data-lang="en"] .language-toggle__ko,
      body[data-lang="ko"] .language-toggle__en{
        opacity:.58;
      }
      .language-toggle__divider{ opacity:.7; }
      .navbar--floating .navbar-toggler{
        flex:0 0 auto !important;
      }
      .hero .hero-subtext{
        font-size:.9rem !important;
        line-height:1.58 !important;
        max-width:min(920px, calc(100vw - 32px)) !important;
        word-break:keep-all !important;
      }
      @media (max-width:576px){
        .navbar--floating{
          top:10px !important;
          right:max(10px, env(safe-area-inset-right)) !important;
          left:auto !important;
          gap:6px !important;
          width:max-content !important;
          min-width:max-content !important;
          max-width:calc(100vw - 20px) !important;
          transform:none !important;
        }
        .language-toggle{ height:30px; padding:0 8px; font-size:.72rem; }
        .navbar--floating .navbar-toggler{
          width:36px !important;
          height:36px !important;
        }
        .hero .hero-subtext{
          margin-top:14px !important;
          font-size:.78rem !important;
          line-height:1.55 !important;
          max-width:calc(100vw - 36px) !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function ensureLanguageToggle(lang) {
    const nav = document.querySelector(".navbar--floating");
    if (!nav) return;

    let button = nav.querySelector(".language-toggle");
    if (!button) {
      button = document.createElement("button");
      button.type = "button";
      button.className = "language-toggle";
      button.innerHTML =
        '<span class="language-toggle__en">ENG</span><span class="language-toggle__divider">/</span><span class="language-toggle__ko">한글</span>';
      nav.insertBefore(button, nav.firstElementChild);
      button.addEventListener("click", function () {
        const next = document.body.dataset.lang === "en" ? "ko" : "en";
        localStorage.setItem(STORAGE_KEY, next);
        applyLanguage(next);
      });
    }

    button.setAttribute("aria-label", common[lang].toggle);
    button.setAttribute("title", common[lang].toggle);
    button.setAttribute("aria-pressed", lang === "ko" ? "true" : "false");
  }

  function text(selector, value, root) {
    const node = (root || document).querySelector(selector);
    if (node && value !== undefined) node.textContent = value;
  }

  function html(selector, value, root) {
    const node = (root || document).querySelector(selector);
    if (node && value !== undefined) node.innerHTML = value;
  }

  function list(selector, items, root) {
    const node = (root || document).querySelector(selector);
    if (!node || !Array.isArray(items)) return;
    node.replaceChildren();
    items.forEach(function (item) {
      const li = document.createElement("li");
      if (typeof item === "string") {
        li.textContent = item;
      } else {
        li.textContent = item.text;
        if (item.keep) {
          li.appendChild(document.createTextNode(" "));
          const span = document.createElement("span");
          span.className = "keep-together";
          span.textContent = item.keep;
          li.appendChild(span);
        }
      }
      node.appendChild(li);
    });
  }

  function paragraphs(selector, items) {
    const node = document.querySelector(selector);
    if (!node || !Array.isArray(items)) return;
    node.replaceChildren();
    items.forEach(function (item) {
      const p = document.createElement("p");
      p.textContent = item;
      node.appendChild(p);
    });
  }

  function setCommon(lang) {
    const c = common[lang];
    text("#offcanvasMenuLabel", c.menu);
    document.querySelectorAll(".btn-close").forEach(function (button) {
      button.setAttribute("aria-label", c.close);
    });
    document.querySelectorAll(".navbar-toggler").forEach(function (button) {
      button.setAttribute("aria-label", c.hamburger);
    });
    document.querySelectorAll(".brand").forEach(function (brand) {
      brand.textContent = BRAND_LABEL;
      brand.setAttribute("aria-label", c.home);
    });
    document.querySelectorAll(".offcanvas .nav-link").forEach(function (link) {
      const href = link.getAttribute("href") || "";
      if (href.includes("about.html")) link.textContent = c.nav.about;
      if (href.includes("portfolio.html")) link.textContent = c.nav.portfolio;
      if (href.includes("team.html")) link.textContent = c.nav.team;
      if (href.includes("philosophy.html")) link.textContent = c.nav.philosophy;
      if (href.includes("esg.html")) link.textContent = c.nav.esg;
    });
  }

  function setTitle(value) {
    if (value) document.title = value;
    const title = document.querySelector("title");
    if (title && value) title.textContent = value;
  }

  function renderProcess(processItems) {
    document.querySelectorAll(".process-item").forEach(function (item, index) {
      const process = processItems[index];
      if (!process) return;
      text(".step-badge__inner", process.title, item);
      text(".note-title", process.title, item);

      const noteBody = item.querySelector(".note-body");
      if (!noteBody) return;
      const ul = document.createElement("ul");
      ul.className = "note-list";
      process.items.forEach(function (entry) {
        const li = document.createElement("li");
        li.textContent = entry;
        ul.appendChild(li);
      });
      noteBody.replaceChildren(ul);
    });
  }

  function applyIndex(data) {
    setTitle(data.title);
    const logoLabel = document.querySelector(".site-logo-heading .visually-hidden");
    if (logoLabel) {
      logoLabel.textContent = data.headline + " 캔들스틱 PE";
    } else {
      text(".topbar h1", data.headline);
    }
    text(".hero-card-kicker", data.cardKicker || BRAND_LABEL);
    html(".hero-card-title", data.cardTitle);
    html(".hero-card-copy", data.cardText);
    html(".hero-footer .footer-left", data.footer);
  }

  function renderAboutCards(cards) {
    document.querySelectorAll("[data-about-card]").forEach(function (card, index) {
      const item = cards[index];
      if (!item) return;
      text(".role-card-title", item.title, card);
      text(".role-card-body", item.body, card);
      list(".role-card-list", item.items, card);
    });
  }

  function renderFlowSteps(steps) {
    document.querySelectorAll("[data-flow-step]").forEach(function (step, index) {
      const item = steps[index];
      if (!item) return;
      text(".flow-step-title", item.title, step);
      html(".flow-step-body", item.body, step);
    });
  }

  function renderSolutionChips(items) {
    const node = document.querySelector(".solution-list");
    if (!node || !Array.isArray(items)) return;
    node.replaceChildren();
    items.forEach(function (item) {
      const li = document.createElement("li");
      li.className = "solution-chip";
      li.textContent = item;
      node.appendChild(li);
    });
  }

  function applyAbout(data) {
    setTitle(data.title);
    text(".hero-title", data.heroTitle);
    text(".hero-subtext", data.heroSub);
    text(".section-eyebrow", data.introEyebrow);
    text(".about-intro-title", data.introTitle);
    html(".about-intro-lead", data.introLead);
    text(".about-flow-title", data.flowTitle);
    text(".about-solutions-title", data.solutionsTitle);
    text(".about-closing-title", data.closingTitle);
    html(".about-closing-text", data.closingText);
    renderAboutCards(data.roleCards);
    renderFlowSteps(data.flowSteps);
    renderSolutionChips(data.solutions);
  }

  function applyPhilosophy(data) {
    setTitle(data.title);
    text(".hero-title", data.heroTitle);
    text(".hero-subtext", data.heroSub);
    text(".philosophy-title", data.sectionTitle);
    text(".philosophy-english", data.english);
    text(".philosophy-headline", data.headline);
    paragraphs(".philosophy-body", data.body);
  }

  function appendBullets(root, items) {
    const ul = document.createElement("ul");
    items.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    root.appendChild(ul);
  }

  function createPortfolioDetail(row) {
    const wrapper = document.createElement("div");
    wrapper.className = "portfolio-detail";

    [
      ["Business", row.business],
      ["Project Overview", row.overview],
    ].forEach(function (section) {
      const items = section[1];
      if (!Array.isArray(items) || !items.length) return;
      const block = document.createElement("section");
      block.className = "portfolio-subsection";
      const heading = document.createElement("h3");
      heading.className = "portfolio-subheading";
      heading.textContent = section[0];
      block.appendChild(heading);
      appendBullets(block, items);
      wrapper.appendChild(block);
    });

    return wrapper;
  }

  function createInlineProjectFields(fields) {
    const grid = document.createElement("div");
    grid.className = "project-fields project-fields--inline";

    fields.forEach(function (item) {
      const row = document.createElement("div");
      row.className = "field-row";

      const label = document.createElement("div");
      label.className = "field-label";
      label.textContent = item[0];

      const value = document.createElement("div");
      value.className = "field-value";
      if (/^https?:\/\//.test(item[1])) {
        const link = document.createElement("a");
        link.href = item[1];
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = item[1];
        value.appendChild(link);
      } else {
        value.textContent = item[1];
      }

      row.append(label, value);
      grid.appendChild(row);
    });

    return grid;
  }

  function createRelatedArticles(row, lang) {
    const section = document.createElement("section");
    section.className = "related-articles";

    const title = document.createElement("h3");
    title.className = "related-title";
    title.textContent = lang === "ko" ? "관련기사" : "Related Articles";

    const articles = Array.isArray(row.articles) ? row.articles : [];
    const list = document.createElement("div");
    list.className = "article-list";

    if (!articles.length) {
      const article = document.createElement("article");
      article.className = "article-card article-card--empty";

      const imageSlot = document.createElement("div");
      imageSlot.className = "article-image-slot";

      const copySlot = document.createElement("div");
      copySlot.className = "article-copy-slot";

      const linkSlot = document.createElement("div");
      linkSlot.className = "article-link-slot";

      article.append(imageSlot, copySlot, linkSlot);
      list.appendChild(article);
    } else {
      articles.forEach(function (item) {
        const article = document.createElement("article");
        article.className = "article-card article-card--link";

        const imageSlot = document.createElement("div");
        imageSlot.className = "article-image-slot article-image-slot--source";

        const source = document.createElement("span");
        source.className = "article-source";
        source.textContent = item.source;

        const mediaLabel = document.createElement("span");
        mediaLabel.className = "article-media-label";
        mediaLabel.textContent = "Article";

        imageSlot.append(source, mediaLabel);

        const copySlot = document.createElement("div");
        copySlot.className = "article-copy-slot";

        const meta = document.createElement("div");
        meta.className = "article-meta";
        meta.textContent = item.date;

        const articleTitle = document.createElement("h4");
        articleTitle.className = "article-card-title";
        articleTitle.textContent = item.title;

        const summary = document.createElement("p");
        summary.className = "article-summary";
        summary.textContent = item.summary;

        copySlot.append(meta, articleTitle, summary);

        const linkSlot = document.createElement("div");
        linkSlot.className = "article-link-slot";

        const link = document.createElement("a");
        link.className = "article-link";
        link.href = item.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", item.title + " - " + (lang === "ko" ? "기사 보기" : "View Article"));
        link.textContent = lang === "ko" ? "기사 보기" : "View Article";

        linkSlot.appendChild(link);
        article.append(imageSlot, copySlot, linkSlot);
        list.appendChild(article);
      });
    }

    section.append(title, list);

    return section;
  }

  function createPortfolioExpandedRow(row, index, lang) {
    const tr = document.createElement("tr");
    tr.className = "portfolio-expand-row";
    tr.id = "portfolio-detail-" + index;
    tr.setAttribute("aria-hidden", "true");

    const td = document.createElement("td");
    td.className = "portfolio-expand-cell";
    td.colSpan = 2;

    const panel = document.createElement("div");
    panel.className = "portfolio-expand-panel";

    const detail = document.createElement("div");
    detail.className = "portfolio-inline-detail";
    detail.append(createInlineProjectFields(row.detail), createRelatedArticles(row, lang));

    panel.appendChild(detail);
    td.appendChild(panel);
    tr.appendChild(td);

    return tr;
  }

  function renderPortfolio(data) {
    setTitle(data.title);
    text(".hero-title", data.heroTitle);
    text(".hero-subtext", data.heroSub);
    text(".section-title", data.sectionTitle);

    document.querySelectorAll(".portfolio-table thead th").forEach(function (th, index) {
      th.textContent = data.headers[index] || th.textContent;
    });

    const tbody = document.querySelector(".portfolio-table tbody");
    if (!tbody) return;
    tbody.replaceChildren();

    const lang = document.documentElement.lang === "ko" ? "ko" : "en";
    const rows = pylerPortfolioRows[lang] ? [pylerPortfolioRows[lang]].concat(data.rows) : data.rows;

    rows.forEach(function (row, index) {
      const tr = document.createElement("tr");
      tr.className = "portfolio-row";

      const nameTd = document.createElement("td");
      nameTd.className = "col-name";
      nameTd.dataset.label = data.rowLabels[0];

      const nameWrap = document.createElement("div");
      nameWrap.className = "p-name";
      const thumbWrap = document.createElement("div");
      thumbWrap.className = row.logoWide ? "p-thumb-wrap p-thumb-wrap--wide" : "p-thumb-wrap";
      if (row.image) {
        const img = document.createElement("img");
        img.className = "p-thumb";
        img.src = row.image;
        img.alt = row.alt;
        thumbWrap.appendChild(img);
      } else {
        const logo = document.createElement("span");
        logo.className = "p-logo-text";
        logo.textContent = row.logoText || row.alt || row.title;
        thumbWrap.appendChild(logo);
      }
      const title = document.createElement("span");
      title.className = "p-title";
      title.textContent = row.title;
      nameWrap.append(thumbWrap, title);

      let expandedRow = null;
      if (Array.isArray(row.detail) && row.detail.length) {
        expandedRow = createPortfolioExpandedRow(row, index, lang);

        const toggle = document.createElement("button");
        toggle.className = "p-toggle";
        toggle.type = "button";
        toggle.setAttribute("aria-label", row.title + " detail");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-controls", expandedRow.id);

        const icon = document.createElement("span");
        icon.className = "p-toggle-icon";
        icon.setAttribute("aria-hidden", "true");
        const label = document.createElement("span");
        label.className = "p-toggle-label";
        label.textContent = "Read More";
        toggle.append(label, icon);

        toggle.addEventListener("click", function () {
          const isOpen = toggle.getAttribute("aria-expanded") === "true";
          toggle.setAttribute("aria-expanded", String(!isOpen));
          expandedRow.classList.toggle("is-open", !isOpen);
          expandedRow.setAttribute("aria-hidden", String(isOpen));
        });

        nameWrap.appendChild(toggle);
      }
      nameTd.appendChild(nameWrap);

      const detailTd = document.createElement("td");
      detailTd.className = "col-overview";
      detailTd.dataset.label = data.rowLabels[1];
      detailTd.appendChild(createPortfolioDetail(row));

      tr.append(nameTd, detailTd);
      tbody.appendChild(tr);
      if (expandedRow) tbody.appendChild(expandedRow);
    });
  }

  function applyProjectDetail(data) {
    setTitle(data.title);
    text(".hero-title", data.heroTitle);
    text(".hero-subtext", data.heroSub);
    text(".back-link", data.backLabel);
    text(".project-eyebrow", data.eyebrow);
    text(".project-heading-title", data.heading);
    const leadNode = document.querySelector(".project-heading-lead");
    if (leadNode) {
      leadNode.textContent = data.lead || "";
      leadNode.hidden = !data.lead;
    }

    const fields = document.querySelector(".project-fields");
    if (fields) {
      fields.replaceChildren();
      data.fields.forEach(function (item) {
        const row = document.createElement("div");
        row.className = "field-row";
        row.dataset.projectField = "";

        const label = document.createElement("div");
        label.className = "field-label";
        label.textContent = item[0];

        const value = document.createElement("div");
        value.className = "field-value";
        if (/^https?:\/\//.test(item[1])) {
          const link = document.createElement("a");
          link.href = item[1];
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.textContent = item[1];
          value.appendChild(link);
        } else {
          value.textContent = item[1];
        }

        row.append(label, value);
        fields.appendChild(row);
      });
    }

    document.querySelectorAll("[data-project-section]").forEach(function (section, index) {
      const item = data.sections[index];
      if (!item) {
        section.hidden = true;
        return;
      }

      section.hidden = false;
      section.replaceChildren();

      const heading = document.createElement("h3");
      heading.className = "detail-block-title";
      heading.textContent = item.title;
      section.appendChild(heading);

      if (Array.isArray(item.paragraphs)) {
        const paragraphsNode = document.createElement("div");
        paragraphsNode.className = "detail-paragraphs";
        item.paragraphs.forEach(function (paragraph) {
          const p = document.createElement("p");
          p.textContent = paragraph;
          paragraphsNode.appendChild(p);
        });
        section.appendChild(paragraphsNode);
      }

      if (Array.isArray(item.items)) {
        const listNode = document.createElement("ul");
        listNode.className = "detail-list";
        item.items.forEach(function (entry) {
          const li = document.createElement("li");
          li.textContent = entry;
          listNode.appendChild(li);
        });
        section.appendChild(listNode);
      }
    });
  }

  function applyTeam(data) {
    setTitle(data.title);
    text(".hero-title", data.heroTitle);
    text(".hero-subtext", data.heroSub);
    text(".section-title", data.sectionTitle);

    document.querySelectorAll(".profile-card").forEach(function (card, index) {
      const person = data.people[index];
      if (!person) return;
      const hasExperience = Array.isArray(person.experience) && person.experience.length > 0;
      card.classList.toggle("profile-card--no-exp", !hasExperience);
      text(".left-meta .name", person.name, card);
      const titleNode = card.querySelector(".left-meta .title");
      if (titleNode) {
        titleNode.textContent = person.title || "";
        titleNode.hidden = !person.title;
      }

      const image = card.querySelector(".profile-photo");
      if (image) image.alt = person.alt;

      const blocks = card.querySelectorAll(".profile-block");
      if (blocks[0]) {
        blocks[0].hidden = !hasExperience;
        if (hasExperience) {
          text(".profile-heading", data.experience, blocks[0]);
          list(".profile-list", person.experience, blocks[0]);
        }
      }
      if (blocks[1]) {
        text(".profile-heading", data.trackRecord, blocks[1]);
        list(".profile-list", person.trackRecord, blocks[1]);
      }
    });
  }

  function renderInfoTable(selector, headers, rows) {
    const table = document.querySelector(selector);
    if (!table) return;
    table.querySelectorAll("thead th").forEach(function (th, index) {
      th.textContent = headers[index] || th.textContent;
    });
    const tbody = table.querySelector("tbody");
    if (!tbody) return;
    tbody.replaceChildren();
    rows.forEach(function (row) {
      const tr = document.createElement("tr");
      const label = document.createElement("td");
      label.className = "label-cell";
      label.textContent = row[0];
      const body = document.createElement("td");
      body.dataset.label = headers[1];
      body.textContent = row[1];
      tr.append(label, body);
      tbody.appendChild(tr);
    });
  }

  function applyEsg(data) {
    setTitle(data.title);
    text(".hero-title", data.heroTitle);
    text(".hero-subtext", data.heroSub);

    text("#esg .section-title", data.esgTitle);
    paragraphs("#esg .section-lead", data.esgLead);
    text("#esg .subsection-title", data.investmentPrinciplesTitle);
    document.querySelectorAll("#esg .principle-card").forEach(function (card, index) {
      const principle = data.principles[index];
      if (!principle) return;
      text("h4", principle.title, card);
      text("p", principle.body, card);
    });
    const esgSubtitles = document.querySelectorAll("#esg .subsection-title");
    if (esgSubtitles[1]) esgSubtitles[1].textContent = data.actionTitle;
    renderInfoTable("#esg .info-table", data.actionHeaders, data.actionRows);

    text("#stewardship-code .section-title", data.stewardshipTitle);
    paragraphs("#stewardship-code .section-lead", data.stewardshipLead);

    document.querySelectorAll("#stewardship-code .stewardship-principle").forEach(function (article, index) {
      const principle = data.stewardshipPrinciples[index];
      if (!principle) return;
      text("h4", principle.title, article);
      Array.from(article.children)
        .filter(function (child) {
          return child.tagName === "P";
        })
        .forEach(function (p, pIndex) {
          p.textContent = principle.paragraphs[pIndex] || p.textContent;
        });
    });
    renderInfoTable("#stewardship-code .info-table", data.engagementHeaders, data.engagementRows);
  }

  function applyLanguage(lang) {
    const pageName = getPageName();
    const pageData = pages[pageName] && pages[pageName][lang];
    if (!pageData) return;

    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;
    setCommon(lang);
    ensureLanguageToggle(lang);

    if (pageName === "index") applyIndex(pageData);
    if (pageName === "about") applyAbout(pageData);
    if (pageName === "philosophy") applyPhilosophy(pageData);
    if (pageName === "portfolio") renderPortfolio(pageData);
    if (document.querySelector("#project-detail")) applyProjectDetail(pageData);
    if (pageName === "team") applyTeam(pageData);
    if (pageName === "esg") applyEsg(pageData);
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectLanguageStyles();
    const pageName = getPageName();
    applyLanguage(getInitialLanguage(pageName));
  });
})();
