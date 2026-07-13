export const images = {
  logo: "/images/logo.png",
  logoSquare: "/images/logo.jpeg",
  heroBg: "/images/hero-bg.png",
  problem1: "/images/problem-1.png",
  problem2: "/images/problem-2.png",
  problem3: "/images/problem-3.png",
  croco1: "/images/croco-1.jpeg",
  croco2: "/images/croco-2.jpeg",
  croco3: "/images/croco-3.jpeg",
  leo1: "/images/croco-3.jpeg",
  leo2: "/images/leo-2.jpeg",
  caseStudy: "/images/case-study.jpeg",
  stats: "/images/stats.jpeg",
  beforeAfter: "/images/before-after.jpeg",
  audienceNew: "/images/audience-new.png",
  audienceTrain: "/images/audience-train.png",
  audienceOld: "/images/audience-old.png",
  audienceFat: "/images/audience-fat.png",
} as const;

// Kong's Fitness WhatsApp number (country code + number, no + or spaces)
export const whatsappBusinessNumber = "85297878666";

export const problems = [
  {
    title: "缺乏明確方向與計劃",
    description:
      "剛開始健身時，往往缺乏系統性的訓練安排，不知道甚麼動作適合自己，甚至不懂如何使用，結果盲目跟隨網上資訊。",
    image: images.problem1,
  },
  {
    title: "資訊混亂",
    description:
      "現時健身資訊來源繁多 (Youtube, IG)，一般人難以分辨正確方法，容易受到片面或錯誤資訊影響，導致訓練方向偏差。",
    image: images.problem2,
  },
  {
    title: "難以維持",
    description:
      "健身初期動力通常較高，但隨時間推移，若未見明顯成果，容易出現倦怠或中斷訓練的情況。",
    image: images.problem3,
  },
];

export const coaches = [
  {
    name: "Croco Lee 李沛剛",
    role: "@總教練",
    bio: [
      "擁有超過 25 年健身教學經驗，專注於體態管理與系統化訓練。至今已協助超過 600 位學員完成減脂、增肌與體能提升，多數人在首月內已明顯改善體能與體脂。",
      "我所建立的，是一套經過長期驗證、可穩定複製的訓練系統，讓體態改變不再依賴運氣，而是有跡可循的結果。",
    ],
    images: [images.croco1, images.croco2],
  },
  {
    name: "Leo Lee",
    role: "健身教練",
    bio: [
      "擁有 5 年健身教練經驗，2024 年健美比賽冠軍，過去體型偏瘦，透過系統化訓練成功改變體態，因此我很了解客人「變身」的過程及心理。我的強項是專注增肌減脂，提供個人化訓練計劃，幫助你有效提升體能、打造理想身形。",
      "由基礎到進階，我會以專業方法帶你穩定進步，突破瓶頸。",
    ],
    images: [images.leo1, images.leo2],
  },
];

export const caseStudy = {
  title: "馬 sir 的轉變故事",
  paragraphs: [
    "我今年 52 歲，自己健身已經有 10 年，之後亦請過教練跟咗 3 年。但無論點樣努力，個身形始終唔理想，只係變得「肥大同腫脹」，一直都達唔到自己想要嘅狀態。加上踏入中年之後，身體開始出現三高問題——血糖、血脂、血壓都偏高，其實內心都開始擔心健康。我曾經試過用大量帶氧去減肥，以為越做得多就會越瘦，但結果證明，方向錯咗，再努力都冇用。",
    "直到我加入 Kong's Fitness，跟住 Croco 訓練之後，我先真正明白問題所在。原來由動作選擇、發力技巧，到飲食安排，每一個細節都非常關鍵，而且需要一套真正適合自己嘅系統。最令我震撼嘅係——幾十年嚟，我從未見過自己有腹肌，但今次不單止成功減脂見到腹肌，而更重要嘅係，我嘅三高指數全部明顯改善，甚至去到一個非常理想嘅水平。呢個轉變，唔單止係外形，更係健康上真正嘅逆轉。",
    "非常感謝 Croco，佢唔單止專業，更加好了解中年人士嘅身體狀況，能夠用最有效嘅方法，幫我哋減脂，同時建立一個健康而強壯嘅身體。",
    "如果你同我一樣，努力咗好多年但仍然冇結果，可能問題唔係你唔夠努力，而係你未遇到真正啱你嘅方法。",
  ],
  stats: [
    { label: "體重由 73.2KG 減至", value: "68.9KG" },
    { label: "肌肉量由 25.6KG 升至", value: "27.4KG" },
    { label: "體脂量由 25.9KG 減至", value: "18.5KG" },
  ],
};

export const testimonials = [
  {
    name: "Fanny Chan",
    role: "Personal Assistant",
    quote:
      "10 個月前，40 多歲零運動的我，為咗減肥，決定開始健身。我的教練係 Leo，他除了教我重訓的技巧外，還指導我做帶氧運動及督促我日常的正確飲食。開始健身時真的很辛苦，很累，好想放棄！幸好有教練的支持和鼓勵，我順利健康地減了 10 多磅，身形改善了，力量也提升了，開始感受到健身帶來的各種好處和樂趣，就是 No Pain No Gain! 我現在已經是一個每週做 4-5 天運動的開心健身人了！",
    image: "/images/testimonial-fanny.jpeg",
  },
  {
    name: "Katie Kwan",
    role: "Retired civil servant",
    quote:
      "經過 3 年持續在 Kong's Fitness 接受 Croco 教練為我度身訂做的肌力訓練，老化骨骼與新增肌肉已能互相扶持，令我行動自如，享受有質素的退休生活！故極力推介大家盡早參與這增肌行動，建議每周投入鍛鍊，由專業教練從旁指導，避免力量錯配，影響肌肉紅利。肌肉是寶，早練早享受，遲練肯定少幾嚿「肌肉」。",
    image: "/images/testimonial-katie.jpeg",
  },
  {
    name: "Enid Chen",
    role: "Retired civil servant",
    quote:
      "寧願做健身房最年長的成員，也不要做養老院最年青的住客。健身不單為了擁有緊致的身材，更為了保護自己老去後的尊嚴。保存足夠肌肉量是延緩（如非逆轉）衰老的不二法門，只有力量訓練才可達到增肌減脂的目標，沒有之一。這世上珍貴的東西，從來都不是垂手可得，除了認知，毅力，更需要一個真正懂得為你度身訂造並執行訓練的專業教練。請私人教練並不便宜，然而，將你一生辛苦賺來的金錢去聘請餵養的護工，或換來餘生坐輪椅，每天張眼就望着天花板到天黑的日子，不是更不值嗎？",
    image: "/images/testimonial-enid.jpeg",
  },
  {
    name: "Janice Chan",
    role: "Director",
    quote:
      "回想步入 50 歲時，身邊朋友都開始出現，發胖、少肌、五十肩、脂肪肝、骨質疏鬆等不同的問題。怎樣能延緩老化？我選擇了找個專業教練做重力訓練。重訓能增加肌肉，避免骨質疏鬆及改善體態。10 年後人老了，機能理應衰退，但我的力量大大提升了，人也挺直了，整個人比以前都 fit 咗。這是否人所講嘅逆齡呢？這當然要歸功 Croco Sir 喇！",
    image: "/images/testimonial-janice.jpeg",
  },
  {
    name: "Alan Lee",
    role: "Entrepreneur",
    quote:
      "不知不覺，健身將近 22 年嘞。記得 2004 年回流香港的時候，係 44 歲，開始中年發福，自己接受唔到，所以開始去做 gym。開始嘅時候喺 California 打拳、做重量訓練，跟過幾個教練。好似過咗一兩年，開始認識 Croco，佢係參加過健美比賽同埋攞過獎嘅，對做重量訓練好有經驗。從此就一直跟住佢，從 California 到而家，到今日都冇停過，除非要出差或者有嘢做，否則禮拜一至禮拜五每日都做訓練。重量訓練真係好好，可以刺激肌肉生長，同埋又刺激骨骼，唔會有骨質疏鬆。兩隻腳有肌肉，都唔會咁容易跌倒；有肌肉，可以幫助消脂，keep 住好嘅身形。以前著幾千蚊嘅衣服，而家著兩三百蚊嘅衫就已經好好睇嘞。身形好，自然自信心都大啲。到而家，我都冇諗過會停，會繼續操落去。",
    image: "/images/testimonial-alan.jpeg",
  },
  {
    name: "Anna Ngai",
    role: "Teacher",
    quote:
      "健身不只是練肌肉，更是學會不放棄。每當我想退縮，教練的目光總比我更堅定。他糾正我的動作，更撐起我的意志。這份專業與陪伴，讓我明白：跟對的人，流的每一滴汗，都是為了遇見那個更強大、更自信的自己。",
    image: "/images/testimonial-anna.jpeg",
  },
  {
    name: "Jada Wong",
    role: "Civil servant",
    quote:
      "跟 Kong's Fitness 做咗一年多嘅負重和帶氧運動訓練，手瓜紮實咗，臀、腿嘅橙皮紋都俾肌肉填補番。朋友都話我變得實淨咗好多。多得教練，除咗運動上嘅指導，更喺飲食習慣上俾意見，務求兩者配合，為身體帶來更多明顯嘅改變。",
    image: "/images/testimonial-jada.jpeg",
  },
  {
    name: "Arnold Ho",
    role: "Accountant",
    quote:
      "上年開始跟教練 Leo 做個人訓練，感覺十分有用！每次運動都更有目的、更有動力，身體明顯強壯咗，精神都好咗。教練專業指導令我享受過程，又安全有效，超值得！",
    image: "/images/testimonial-arnold.jpeg",
  },
  {
    name: "Edward Lee",
    role: "Retired civil servant",
    quote:
      "55 歲先開始跟教練操咗 6 年，依家仲後生過 55 歲嗰陣！有人帶住練，先可以安全咁逆齡成長。",
    image: "/images/testimonial-edward.jpeg",
  },
];

export const targetAudience = [
  {
    title: "對減肥無從入手",
    description: "渴望減肥，會嘗試很多方法卻沒有進度",
    image: images.audienceNew,
  },
  {
    title: "健身遇上平台期",
    description: "希望在運動表現及身體肌肉量上尋求突破",
    image: images.audienceTrain,
  },
  {
    title: "中年及長者",
    description: "隨著年齡漸大，開始感覺到身體機能下降，如：行動緩慢、精神不振",
    image: images.audienceOld,
  },
  {
    title: "面臨健康問題",
    description: "身體響起警號，因肥胖問題引起的「三高」：高血糖、高血脂、高血壓",
    image: images.audienceFat,
  },
];

export const faqItems = [
  {
    question: "應該先做重訓還是有氧？",
    answer:
      "一般而言，新手較適合先建立基本力量與動作模式，再按目標加入適量有氧。單靠大量有氧，未必能達到理想效果。",
  },
  {
    question: "重量應該如何選擇？",
    answer:
      "應以能夠穩定完成動作的重量為主，不宜急於追求太重的負荷，否則容易影響動作質素，甚至增加受傷風險。",
  },
  {
    question: "每次訓練應該做多久才有效？",
    answer:
      "時間長短並非關鍵，訓練品質才是重點。有效的訓練來自正確動作及發力、適當強度與清晰規劃。",
  },
  {
    question: "一定要飲食控制嗎？",
    answer:
      "飲食會影響結果，但不需要極端，重點在於建立可長期維持的習慣，而不是短期限制。",
  },
  {
    question: "年紀比較大，還能開始嗎？",
    answer:
      "可以。任何年齡都可以透過系統化訓練改善體能與體態，而且我們擁有大量訓練長者的經驗。",
  },
  {
    question: "做肌肉訓練會不會令女人變大隻？",
    answer:
      "一般不會。女性因為荷爾蒙關係，不會好容易練到像健美選手一樣健碩，反而多數會變得更緊實、有線條。",
  },
  {
    question: "阻力訓練除了令身形好看，還可以幫助到甚麼健康問題？",
    answer:
      "可以幫助提升骨骼健康、改善血糖控制、增加力量、減少跌倒風險，還可以令日常生活更輕鬆。",
  },
  {
    question: "為何每日運動，身形仍無改變？",
    answer:
      "因為你只消耗熱量，卻未有刺激肌肉生長，因此代謝率無法提升。",
  },
  {
    question: "為何你進食減少仍不消瘦，反而愈來愈疲倦？",
    answer: "因為肌肉流失，代謝變緩，進食再少也無法燃燒足夠熱量。",
  },
  {
    question: "三高、肚腩、肌肉流失，真是年紀大了就註定？",
    answer: "並非如此！阻力訓練可改善胰島素敏感度、減少內臟脂肪、增加肌肉。",
  },
];
