(function () {
  "use strict";

  const STORAGE_KEY = "candlestickpe.language";

  const pageDefaults = {
    index: "en",
    about: "en",
    portfolio: "ko",
    "project-pyler": "ko",
    team: "ko",
    esg: "ko",
  };

  const common = {
    en: {
      menu: "Menu",
      nav: {
        about: "About",
        portfolio: "Portfolio",
        team: "Team",
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
        about: "회사소개",
        portfolio: "포트폴리오",
        team: "팀",
        esg: "ESG / 스튜어드십 코드",
      },
      close: "닫기",
      toggle: "언어 전환",
      hamburger: "메뉴 열기",
      home: "홈으로 이동",
    },
  };

  const pylerPortfolioRows = {
    en: {
      logoText: "PYLER",
      alt: "PYLER",
      title: "Project Vision AI (PYLER)",
      link: "project-pyler.html",
      desc: [
        "Equity investment in PYLER, a Vision AI-based Ad-tech company providing brand safety and contextual video advertising solutions",
        "PYLER provides AiD and AiM solutions based on video, image, audio, and text analysis",
        "Fund formation and investment execution completed in April 2026",
        "Growth capital investment deal targeting exit at unicorn valuation by 2028",
      ],
      role: [
        "Established investment strategy and exit strategy based on industry and company analysis",
        "Candlestick PE acted as the sole GP, establishing an institutional private equity fund and executing the investment in PYLER through the fund.",
      ],
    },
    ko: {
      logoText: "PYLER",
      alt: "PYLER",
      title: "Project Vision AI (파일러)",
      link: "project-pyler.html",
      desc: [
        "Vision AI 기반 브랜드 세이프티 및 맞춤형 동영상 광고 솔루션을 제공하는 Ad-tech 기업 파일러에 대한 지분 투자",
        "파일러는 영상·이미지·음성·텍스트 분석 기반의 AiD 및 AiM 솔루션을 제공",
        "2026년 4월 펀드 결성 및 투자 집행 완료",
        "2028년까지 유니콘 Value 청산 목표 Growth capital 투자 딜",
      ],
      role: [
        "산업/기업 분석 기반 투자전략 및 Exit 전략 수립",
        "캔들스틱 PE는 단독 GP로서 기관전용 PEF를 설립하고, 해당 PEF를 통해 PYLER에 대한 투자를 집행함.",
      ],
    },
  };

  const pylerDetailPages = {
    en: {
      title: "Project Vision AI (PYLER) | CANDLESTICK PE",
      heroTitle: "Project Vision AI (PYLER)",
      heroSub: "Vision AI-based Ad-tech investment through an institutional private equity fund",
      backLabel: "Back to Portfolio",
      eyebrow: "Portfolio Detail",
      heading: "Project Vision AI (PYLER)",
      lead:
        "Project Vision AI is an equity investment in PYLER, a Vision AI company that provides B2B solutions for brand safety and contextual video advertising.",
      fields: [
        ["Project Name", "Project Vision AI (PYLER)"],
        ["Company / Target", "PYLER CO., LTD. / 주식회사 파일러"],
        ["Sector", "Application software development and supply business (J58222); Ad-tech"],
        ["Investment Type", "Investment through an institutional private equity fund"],
        [
          "Role",
          "Candlestick PE acted as the sole GP, establishing an institutional private equity fund and executing the investment in PYLER through the fund.",
        ],
        ["Status", "Investment executed through an institutional private equity fund"],
      ],
      sections: [
        {
          title: "Project Overview",
          paragraphs: [
            "PYLER provides video analysis solutions based on multimodal AI that understands and reasons across video, audio, image, and text. The company focuses on helping advertisers avoid harmful or unsuitable content exposure and match advertising with content that fits brand context.",
            "According to the provided materials, PYLER was established on November 10, 2021 and operates as an Ad-tech company providing harmful-content blocking and customized video advertising connection services.",
          ],
        },
        {
          title: "Investment Highlights",
          items: [
            "Provides AiD (Ads in Defense), a brand safety solution that blocks advertising exposure next to risky or unsuitable content.",
            "Provides AiM (Ads in Match), a contextual advertising matching solution designed to connect ads with content situations likely to support advertising performance.",
            "The materials state that PYLER won first place in the NVIDIA Inception Startup Grand Challenge 2025.",
            "The materials state that PYLER secured official Google API access for YouTube video data and is working with Google on an AI-based automatic filtering system.",
          ],
        },
        {
          title: "Business / Technology Summary",
          items: [
            "Video, image, audio, and text analysis AI for brand safety and contextual advertising.",
            "Core service areas include AiD for harmful-content ad blocking and AiM for brand-fit ad matching.",
            "The investment review materials describe PYLER's video understanding approach using evidence reasoning, commonsense reasoning, and video summarization.",
            "The company uses NVIDIA GPU and CUDA infrastructure in its Vision AI implementation, according to the provided materials.",
          ],
        },
      ],
    },
    ko: {
      title: "Project Vision AI (파일러) | CANDLESTICK PE",
      heroTitle: "Project Vision AI (파일러)",
      heroSub: "기관전용 PEF를 통한 Vision AI 기반 Ad-tech 투자",
      backLabel: "포트폴리오로 돌아가기",
      eyebrow: "포트폴리오 상세",
      heading: "Project Vision AI (파일러)",
      lead:
        "Project Vision AI는 브랜드 세이프티와 맞춤형 동영상 광고 솔루션을 제공하는 Vision AI 기업 파일러에 대한 지분 투자 프로젝트입니다.",
      fields: [
        ["프로젝트명", "Project Vision AI (파일러)"],
        ["회사 / 투자대상", "주식회사 파일러 / PYLER CO., LTD."],
        ["섹터", "응용 소프트웨어 개발 및 공급업(J58222); Ad-tech"],
        ["투자 유형", "기관전용 PEF를 통한 투자"],
        [
          "담당 역할",
          "캔들스틱 PE는 단독 GP로서 기관전용 PEF를 설립하고, 해당 PEF를 통해 PYLER에 대한 투자를 집행함.",
        ],
        ["현황", "기관전용 PEF를 통한 투자 집행"],
      ],
      sections: [
        {
          title: "프로젝트 개요",
          paragraphs: [
            "파일러는 동영상·음성·이미지·텍스트를 통합적으로 이해하고 추론하는 멀티모달 AI를 기반으로 영상 분석 솔루션을 제공하는 기업입니다. 유해하거나 부적합한 콘텐츠 옆 광고 노출을 차단하고, 브랜드 맥락에 맞는 콘텐츠에 광고를 연결하는 사업을 영위합니다.",
            "제공 자료 기준 파일러는 2021년 11월 10일 설립되었으며, 유해 콘텐츠 차단 및 맞춤형 동영상 광고 연결 서비스를 제공하는 Ad-tech 기업입니다.",
          ],
        },
        {
          title: "투자 포인트",
          items: [
            "AiD(Ads in Defense)를 통해 위험·부적절 콘텐츠 옆 광고 노출을 자동 차단하는 브랜드 세이프티 솔루션을 제공.",
            "AiM(Ads in Match)을 통해 광고 성과가 날 만한 콘텐츠 맥락에 광고를 정교하게 매칭.",
            "제공 자료상 파일러는 NVIDIA Inception Startup Grand Challenge 2025에서 1위를 수상.",
            "제공 자료상 유튜브 영상 데이터 접근을 위한 Google API를 공식 확보하고, Google과 AI 기반 자동 필터링 시스템을 공동 개발 중.",
          ],
        },
        {
          title: "사업 / 기술 요약",
          items: [
            "영상·이미지·음성·텍스트 분석 AI를 활용한 브랜드 세이프티 및 맞춤형 광고 매칭.",
            "주요 서비스는 유해 콘텐츠 광고 차단을 위한 AiD와 브랜드 적합 콘텐츠 매칭을 위한 AiM.",
            "투자 검토 자료는 파일러의 영상 이해 접근 방식을 Evidence Reasoning, Commonsense Reasoning, Video Summarization으로 설명.",
            "제공 자료 기준 NVIDIA GPU 및 CUDA 인프라를 활용한 Vision AI 구현 역량을 보유.",
          ],
        },
      ],
    },
  };

  const pages = {
    index: {
      en: {
        title: "CANDLESTICK PE | 캔들스틱 PE",
        headline: "CANDLESTICK PRIVATE EQUITY",
        cardTitle: "CANDLESTICK PE",
        cardText:
          "CANDLESTICK PE is a prominent investment firm in Korea, focusing on private equity and venture capital. With a strategic presence in the region, we drive innovation, foster growth, and create lasting value for our partners.",
        footer:
          'CANDLESTICK PE<div class="hero-sub">E-mail: <a href="mailto:jcjang@candlestickpe.com">jcjang@candlestickpe.com</a> / Address: Unit Ga-115, 3rd Floor, 39, Gangnam-daero 118-gil, Gangnam-gu, Seoul, Republic of Korea</div>',
      },
      ko: {
        title: "CANDLESTICK PE | 캔들스틱 PE",
        headline: "캔들스틱 프라이빗 에쿼티",
        cardTitle: "캔들스틱 PE",
        cardText:
          "캔들스틱 PE는 대한민국의 사모투자 및 벤처투자 분야에 집중하는 투자회사입니다. 축적된 투자 경험과 지역 시장에 대한 이해를 바탕으로 혁신과 성장을 지원하고, 파트너에게 지속적인 가치를 제공합니다.",
        footer:
          '캔들스틱 PE<div class="hero-sub">이메일: <a href="mailto:jcjang@candlestickpe.com">jcjang@candlestickpe.com</a> / 주소: 서울특별시 강남구 강남대로118길 39, 3층 가-115호</div>',
      },
    },

    about: {
      en: {
        title: "About | CANDLESTICK PE",
        heroTitle: "About Company",
        heroSub:
          "We make trust our highest value, leveraging seasoned expertise and rigorous, data-driven analysis to maximize client returns.",
        dealTitle: "■ Deal Sourcing Strategy",
        partnersTitle: "Key Partners",
        partners: ["Accounting Firms", "Private Equity", "Asset Management Company"],
        strategyItems: [
          "Proactively screen M&A opportunities with accounting firms' FAS teams and originate opportunities to engage strategic investors.",
          "We tap into key industry players and our sector networks to source investment and M&A opportunities, primarily in the private company space.",
          "Maintain origination channels with commercial banks to identify high-quality investment opportunities in blue-chip companies.",
          "Expand relationships with private equity firms, asset managers, and investment banks to establish co-GP and co-investment partnerships.",
          "Leverage our extended network, including portfolio companies, affiliates, and key partners, to broaden deal flow and investment opportunities.",
        ],
        investmentTitle: "■ Investment Strategy",
        process: [
          {
            title: "Deal Sourcing",
            items: [
              "Identification of investment targets through networks with securities firms, banks, and accounting firms",
              "Investment checklist review",
              "Assessment of growth potential, stability, and recoverability",
            ],
          },
          {
            title: "Due Diligence",
            items: [
              "Due diligence checklist review",
              "Management interviews, LDD / FDD / CDD",
              "Valuation adjustment",
              "Negotiation of investment terms",
            ],
          },
          {
            title: "Execution",
            items: ["Review of contract documents", "Capital deployment"],
          },
          {
            title: "Monitoring",
            items: [
              "Attendance at board meetings and shareholders' meetings",
              "Performance monitoring",
              "Preparation of fund operation reports",
            ],
          },
          {
            title: "Exit",
            items: [
              "Review of valuation appropriateness",
              "Assessment of various exit strategies",
              "Consideration of timing and schedule",
            ],
          },
        ],
      },
      ko: {
        title: "회사소개 | CANDLESTICK PE",
        heroTitle: "회사소개",
        heroSub:
          "캔들스틱 PE는 신뢰를 최우선 가치로 삼고, 축적된 전문성과 엄정한 데이터 기반 분석을 통해 고객 수익 극대화를 추구합니다.",
        dealTitle: "■ 딜 소싱 전략",
        partnersTitle: "주요 파트너",
        partners: ["회계법인", "사모투자회사", "자산운용사"],
        strategyItems: [
          "회계법인 FAS 팀과의 네트워크를 통해 M&A 기회를 선제적으로 검토하고 전략적 투자자 참여 기회를 발굴합니다.",
          "핵심 산업 참여자 및 섹터 네트워크를 활용해 비상장 기업 중심의 투자 및 M&A 기회를 발굴합니다.",
          "시중은행과의 소싱 채널을 유지하여 우량 기업 투자 기회를 지속적으로 확인합니다.",
          "사모투자회사, 자산운용사, 투자은행과의 관계를 확대하여 공동 GP 및 공동투자 파트너십을 구축합니다.",
          "포트폴리오 회사, 계열사, 주요 파트너 등 확장된 네트워크를 활용해 딜 플로우와 투자 기회를 넓힙니다.",
        ],
        investmentTitle: "■ 투자 전략",
        process: [
          {
            title: "딜 소싱",
            items: [
              "증권사, 은행, 회계법인 네트워크를 통한 투자대상 발굴",
              "투자 체크리스트 검토",
              "성장성, 안정성, 회수 가능성 검토",
            ],
          },
          {
            title: "실사",
            items: [
              "실사 체크리스트 검토",
              "경영진 인터뷰 및 LDD / FDD / CDD",
              "가치평가 조정",
              "투자 조건 협상",
            ],
          },
          {
            title: "투자 집행",
            items: ["계약서 검토", "투자금 집행"],
          },
          {
            title: "사후관리",
            items: ["이사회 및 주주총회 참석", "성과 모니터링", "펀드 운용보고서 작성"],
          },
          {
            title: "회수",
            items: ["가치평가 적정성 검토", "다양한 회수 전략 검토", "시점 및 일정 검토"],
          },
        ],
      },
    },

    portfolio: {
      en: {
        title: "Portfolio | CANDLESTICK PE",
        heroTitle: "Portfolio",
        heroSub: "Selected transactions and advisory mandates led by Candlestick PE",
        sectionTitle: "■ Portfolio",
        headers: ["Project", "Project Description", "Role"],
        rowLabels: ["Project", "Project Description", "Role"],
        rows: [
          {
            image: "Optomind.png",
            alt: "OPTOMIND",
            title: "Project Optical (Optomind)",
            desc: [
              "Investment in new convertible bonds issued by Optomind, a supplier of optical transceivers for U.S. data centers",
              "Fund formation and investment execution completed in April 2025",
              "Structured investment deal based on a planned IPO in the first half of 2027",
            ],
            role: [
              {
                text: "Established an investment strategy based on industry and company analysis, and designed investor-favorable structure and terms",
                keep: "(including tag-along rights, key CB terms, and investor protections)",
              },
              "Supported LP sales and decision-making for fundraising",
              "Led co-investor attraction and investor collaboration, including IMM Investment",
            ],
          },
          {
            image: "PP.png",
            alt: "PeopleBio",
            title: "PeopleBio M&A",
            desc: [
              "Led Eastern Networks' acquisition of an equity stake in PeopleBio",
              "Designed the transaction structure and funding execution roadmap aligned with the acquisition purpose",
            ],
            role: [
              "Managed structure, terms, timeline, and risk in an integrated manner and drove decision-making",
              "Designed and managed the in-kind contribution of KRW 35.6 billion and paid-in capital increase structure as PM",
              "Aligned process, documentation, approval framework, and milestones",
              "Negotiated key issuance and closing terms and resolved execution issues",
            ],
          },
          {
            image: "EN.png",
            alt: "Eastern Networks Advisory",
            title: "Daechi-dong Edge Data Center Development",
            desc: [
              "Led the transaction structure design and execution roadmap for data center development based on real estate held by Eastern Networks",
            ],
            role: [
              "Designed the SPC, equity, and debt structure framework",
              "Built staged funding estimates and operating scenarios for equity, mezzanine, and debt, with risk management",
              "Managed schedule and closing based on permitting, design, construction, and funding milestones",
              "Structured the investment for investors and lenders",
            ],
          },
        ],
      },
      ko: {
        title: "포트폴리오 | CANDLESTICK PE",
        heroTitle: "포트폴리오",
        heroSub: "캔들스틱 PE가 주도한 주요 투자 및 자문 사례",
        sectionTitle: "■ 포트폴리오",
        headers: ["프로젝트명", "프로젝트 내용", "담당 역할"],
        rowLabels: ["프로젝트명", "프로젝트 내용", "담당 역할"],
        rows: [
          {
            image: "Optomind.png",
            alt: "OPTOMIND",
            title: "Project Optical (옵토마인드)",
            desc: [
              "미국 데이터센터向 광트랜시버 공급업체 옵토마인드 대상 신규 전환사채(CB) 투자",
              "2025년 4월 펀드 결성 및 투자 집행 완료",
              "2027년 상반기 IPO를 전제로 한 구조화 투자 딜",
            ],
            role: [
              {
                text: "산업/기업 분석 기반 투자전략 수립 및 투자자 우위의 구조·조건 설계",
                keep: "(Tag-along 포함, CB 핵심 조항·보호장치 협의)",
              },
              "자금조달을 위한 LP 세일즈, 의사결정 지원",
              "IMM인베스트먼트 등 공동투자자 유치 및 투자자 협업 주도",
            ],
          },
          {
            image: "PP.png",
            alt: "PeopleBio",
            title: "피플바이오 M&A",
            desc: [
              "이스턴네트웍스의 피플바이오 지분 인수 딜 리드",
              "인수 목적에 맞춘 구조 설계 및 자금집행 로드맵 수립·실행",
            ],
            role: [
              "구조·조건·일정·리스크 통합 관리 및 의사결정 드라이브",
              "현물출자(356억원), 유상증자 구조 설계 및 실행 PM",
              "절차/문서/승인체계 정렬 및 마일스톤 관리",
              "발행·클로징 조건 등 핵심 조건 협의 및 실행 이슈 해소",
            ],
          },
          {
            image: "EN.png",
            alt: "Eastern Networks Advisory",
            title: "대치동 Edge 데이터센터 개발",
            desc: [
              "이스턴네트웍스 보유 부동산 기반 데이터센터 개발의 거래구조 설계 및 실행 로드맵 리드",
            ],
            role: [
              "SPC·지분/차입 구조 프레임 설계",
              "단계별 소요자금 산정·자금운영 시나리오(Equity/Mezz/Debt) 구성 및 리스크 관리",
              "인허가·설계·시공·자금집행 마일스톤 기반 일정 및 클로징 관리",
              "투자자·대주단 대상 투자 구조화",
            ],
          },
        ],
      },
    },

    team: {
      en: {
        title: "Team | CANDLESTICK PE",
        heroTitle: "About Our Team",
        heroSub:
          "Candlestick PE is composed of seasoned professionals with extensive experience and a proven track record in the Korean investment market.\nLeveraging our accumulated expertise and deep market insight, we pursue proactive and strategic investment activities.",
        sectionTitle: "■ Key Personnel",
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
              "2023 acquisition advisory for Quro CC by Daekwang E&C",
              "Managed Pre-IPO funds from 2016 to 2024, completing investments in eight companies including APR",
              "Managed futures/options CTA strategy funds including Bountiful, PSY, and Hana in 2017, with additional track records",
            ],
          },
          {
            name: "Min Byung-Sun",
            title: "Director",
            alt: "Min Byung-Sun, Director",
            experience: [
              "Head of Investment Division, Candlestick PE Co., Ltd.",
              "Head of Investment Division, Mobidick Asset Management",
              "Investment Finance Department, DGB Capital, Hyosung Capital, and M Capital",
              "Deal Division, PwC Samil Accounting Corp.",
            ],
            trackRecord: [
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
        title: "팀 | CANDLESTICK PE",
        heroTitle: "팀 소개",
        heroSub:
          "캔들스틱 PE는 한국 투자시장에서 폭넓은 경험과 검증된 실적을 보유한 전문 인력으로 구성되어 있습니다.\n축적된 전문성과 깊이 있는 시장 이해를 바탕으로 선제적이고 전략적인 투자 활동을 수행합니다.",
        sectionTitle: "■ 핵심 인력",
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
              "2023년 대광건영의 큐로CC 인수자문",
              "2016~2024년 Pre-IPO 펀드운용(에이피알 등 8개사 투자완료)",
              "2017년 선물/옵션 CTA 전략 펀드(바운티풀, PSY, 하나) 운용 등 추가 실적 다수",
            ],
          },
          {
            name: "민병선",
            title: "이사",
            alt: "민병선 이사 증명사진",
            experience: [
              "(주)캔들스틱 PE 투자본부장",
              "모비딕자산운용 투자본부장",
              "DGB캐피탈, 효성캐피탈, 엠캐피탈 투자금융부",
              "PwC 삼일회계법인 Deal 본부",
            ],
            trackRecord: [
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
        heroSub: "Responsible investment principles for sustainable value creation",
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
        heroSub: "지속가능한 가치 창출을 위한 책임투자 원칙",
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
        display:inline-flex !important;
        align-items:center !important;
        gap:8px !important;
      }
      .language-toggle{
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
      @media (max-width:480px){
        .navbar--floating{ right:10px !important; gap:6px !important; }
        .language-toggle{ height:32px; padding:0 8px; font-size:.74rem; }
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
      brand.setAttribute("aria-label", c.home);
    });
    document.querySelectorAll(".offcanvas .nav-link").forEach(function (link) {
      const href = link.getAttribute("href") || "";
      if (href.includes("about.html")) link.textContent = c.nav.about;
      if (href.includes("portfolio.html")) link.textContent = c.nav.portfolio;
      if (href.includes("team.html")) link.textContent = c.nav.team;
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
    text(".topbar h1", data.headline);
    text(".hero-card h2", data.cardTitle);
    text(".hero-card p", data.cardText);
    html(".hero-footer .footer-left", data.footer);
  }

  function applyAbout(data) {
    setTitle(data.title);
    text(".hero-title", data.heroTitle);
    text(".hero-subtext", data.heroSub);
    text("#deal-sourcing .section-title", data.dealTitle);
    text("#partners-title", data.partnersTitle);
    document.querySelectorAll(".partner-card p").forEach(function (node, index) {
      node.textContent = data.partners[index] || node.textContent;
    });
    list(".strategy-list", data.strategyItems);
    text("#investment-strategy .section-title", data.investmentTitle);
    renderProcess(data.process);
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

    rows.forEach(function (row) {
      const tr = document.createElement("tr");
      tr.className = "portfolio-row";

      const nameTd = document.createElement("td");
      nameTd.className = "col-name";
      nameTd.dataset.label = data.rowLabels[0];

      const nameWrap = document.createElement("div");
      nameWrap.className = "p-name";
      const thumbWrap = document.createElement("div");
      thumbWrap.className = "p-thumb-wrap";
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
      const title = document.createElement(row.link ? "a" : "span");
      title.className = row.link ? "p-title p-title-link" : "p-title";
      title.textContent = row.title;
      if (row.link) title.href = row.link;
      nameWrap.append(thumbWrap, title);
      nameTd.appendChild(nameWrap);

      const descTd = document.createElement("td");
      descTd.className = "col-desc";
      descTd.dataset.label = data.rowLabels[1];
      const descList = document.createElement("ul");
      row.desc.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        descList.appendChild(li);
      });
      descTd.appendChild(descList);

      const roleTd = document.createElement("td");
      roleTd.className = "col-role";
      roleTd.dataset.label = data.rowLabels[2];
      const roleList = document.createElement("ul");
      row.role.forEach(function (item) {
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
        roleList.appendChild(li);
      });
      roleTd.appendChild(roleList);

      tr.append(nameTd, descTd, roleTd);
      tbody.appendChild(tr);
    });
  }

  function applyProjectDetail(data) {
    setTitle(data.title);
    text(".hero-title", data.heroTitle);
    text(".hero-subtext", data.heroSub);
    text(".back-link", data.backLabel);
    text(".project-eyebrow", data.eyebrow);
    text(".project-heading-title", data.heading);
    text(".project-heading-lead", data.lead);

    document.querySelectorAll("[data-project-field]").forEach(function (row, index) {
      const item = data.fields[index];
      if (!item) return;
      text(".field-label", item[0], row);
      text(".field-value", item[1], row);
    });

    document.querySelectorAll("[data-project-section]").forEach(function (section, index) {
      const item = data.sections[index];
      if (!item) return;
      text(".detail-block-title", item.title, section);

      const paragraphsNode = section.querySelector(".detail-paragraphs");
      if (paragraphsNode && Array.isArray(item.paragraphs)) {
        paragraphsNode.replaceChildren();
        item.paragraphs.forEach(function (paragraph) {
          const p = document.createElement("p");
          p.textContent = paragraph;
          paragraphsNode.appendChild(p);
        });
      }

      const listNode = section.querySelector(".detail-list");
      if (listNode && Array.isArray(item.items)) {
        list(".detail-list", item.items, section);
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
      text(".left-meta .name", person.name, card);
      text(".left-meta .title", person.title, card);

      const image = card.querySelector(".profile-photo");
      if (image) image.alt = person.alt;

      const blocks = card.querySelectorAll(".profile-block");
      if (blocks[0]) {
        text(".profile-heading", data.experience, blocks[0]);
        list(".profile-list", person.experience, blocks[0]);
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
    if (pageName === "portfolio") renderPortfolio(pageData);
    if (pageName === "project-pyler") applyProjectDetail(pageData);
    if (pageName === "team") applyTeam(pageData);
    if (pageName === "esg") applyEsg(pageData);
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectLanguageStyles();
    const pageName = getPageName();
    applyLanguage(getInitialLanguage(pageName));
  });
})();
