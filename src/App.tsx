import React, { useState } from 'react';
import {
  ShieldCheck, HeartPulse, Car, Mail, X,
  CheckCircle2, ChevronRight, ArrowRight,
  MapPin, Phone, Shield, Send, Check, Menu, ClipboardList,
  Languages
} from 'lucide-react';

const translations = {
  "English": {
    heroSub: "BDRS Associates Insurance Agency",
    explore: "Explore Plans",
    requestQuote: "Request a Quote",
    fullName: "Full Name",
    email: "Email",
    mobile: "Mobile",
    selectPlan: "Select a Protection Plan",
    reqDocs: "View Required Documents",
    motorTitle: "Motorcar Information",
    year: "Year",
    make: "Make",
    model: "Select Model",
    plate: "Plate No. / Conduction Sticker",
    propTitle: "Property Information",
    propAddress: "Property Address",
    bldgValue: "Bldg Value",
    contValue: "Contents Value",
    propType: "Select Property Type",
    agree: "By submitting, you agree to our",
    tnc: "Terms and Conditions",
    tncTitle: "Terms and Conditions",
    tnc1Title: "1. Intermediary Status:",
    tnc1: "You acknowledge that BDRS Associates acts strictly as a licensed insurance intermediary (broker), facilitating negotiations between you and the insurance provider. We are not an insurer and do not directly provide underwriting services or issue policies.",
    tnc2Title: "2. Obligation of True Information:",
    tnc2: "You certify that all details provided in this request are accurate, complete, and correct. You understand that any misrepresentation or omission may invalidate your quote, cause delays, or provide grounds for the insurer to cancel any subsequent policy.",
    tnc3Title: "3. Non-Binding Nature:",
    tnc3: "Submitting this inquiry or receiving an initial quotation does not bind coverage. No insurance policy is in effect until formally approved by the chosen carrier, the premium is paid in full, and the policy document is issued.",
    tnc4Title: "4. Consent to Communicate:",
    tnc4: "You expressly authorize BDRS Associates and its licensed agents to contact you using the provided email address and phone number for purposes related to this quote request and insurance product offerings.",
    tnc5Title: "5. Authorization to Process Data:",
    tnc5: "You grant BDRS Associates consent to collect and process the provided personal data solely for the purpose of generating insurance quotes and facilitating your policy application in compliance with the Data Privacy Act of 2012.",
    submit: "Submit Inquiry",
    sending: "Sending...",
    sentTitle: "Inquiry Sent!",
    sentDesc: "Thank you for reaching out. One of our risk advisors will contact you shortly.",
    sendAnother: "Send another request",
    partners: "Accredited Partners",
    partnerSub: "Tap a partner to reveal their expertise and history",
    ourPlans: "Our Protection Plans",
    viewDetails: "View Details",
    inquireNow: "Inquire Now",
    understand: "I Understand",
    contSite: "Continue to Site",
    lifeTitle: "Life Insurance",
    lifeShort: "Protect your family's future and peace of mind.",
    lifeLong: "Our life insurance plans provide long-term financial protection, including income replacement, education funding, retirement planning, and coverage against critical illness to secure your family's future.",
    lifeBenefit1: "Death Benefit",
    lifeBenefit2: "Critical Illness",
    lifeBenefit3: "Education Fund",
    lifeBenefit4: "Retirement",
    hmoTitle: "HMO / Health Coverage",
    hmoShort: "Comprehensive medical protection for everyone.",
    hmoLong: "Our health maintenance plans provide comprehensive medical coverage including hospitalization, emergency care, preventive services, and access to an extensive network of accredited hospitals and physicians nationwide.",
    hmoBenefit1: "In-patient Care",
    hmoBenefit2: "Emergency",
    hmoBenefit3: "Dental",
    hmoBenefit4: "Annual Physical Exams",
    nonLifeTitle: "Non-Life",
    nonLifeShort: "Protect your vehicles, property, and assets.",
    nonLifeLong: "Our non-life insurance solutions cover motorcar, property, fire, marine, and liability risks. These plans are structured to protect your physical assets and financial interests against accidents, natural disasters, and unforeseen losses.",
    nonLifeBenefit1: "Motorcar (OR/CR)",
    nonLifeBenefit2: "Fire Insurance",
    nonLifeBenefit3: "Marine Cargo",
    nonLifeBenefit4: "Surety Bonds"
  },
  "Filipino / Tagalog": {
    heroSub: "BDRS Associates Insurance Agency",
    explore: "Tingnan ang mga Plano",
    requestQuote: "Humingi ng Quote",
    fullName: "Buong Pangalan",
    email: "Email Address",
    mobile: "Numero ng Telepono",
    selectPlan: "Pumili ng Planong Proteksyon",
    reqDocs: "Tingnan ang mga Kailangang Dokumento",
    motorTitle: "Impormasyon ng Sasakyan",
    year: "Taon",
    make: "Tatak",
    model: "Modelo",
    plate: "Plaka / Conduction Sticker",
    propTitle: "Impormasyon ng Ari-arian",
    propAddress: "Address ng Ari-arian",
    bldgValue: "Halaga ng Gusali",
    contValue: "Halaga ng Laman",
    propType: "Uri ng Ari-arian",
    agree: "Sa pag-sumite, sumasang-ayon ka sa aming",
    tnc: "Mga Tuntunin at Kundisyon",
    tncTitle: "Mga Tuntunin at Kundisyon",
    tnc1Title: "1. Katayuan bilang Tagapamagitan:",
    tnc1: "Kinikilala mo na ang BDRS Associates ay kumikilos lamang bilang lisensyadong insurance intermediary (broker) na tumutulong sa pakikipag-ugnayan sa insurance provider. Hindi kami insurer at hindi kami direktang nagbibigay ng underwriting o policy.",
    tnc2Title: "2. Katumpakan ng Impormasyon:",
    tnc2: "Pinatutunayan mong tama, kumpleto, at totoo ang lahat ng impormasyong ibinigay. Nauunawaan mo na ang maling impormasyon ay maaaring magpawalang-bisa sa iyong quote o policy.",
    tnc3Title: "3. Hindi Agarang Saklaw:",
    tnc3: "Ang pagsusumite ng inquiry o pagtanggap ng quote ay hindi nangangahulugang may insurance coverage na. Magiging epektibo lamang ito kapag naaprubahan, nabayaran, at naibigay ang policy.",
    tnc4Title: "4. Pahintulot sa Pakikipag-ugnayan:",
    tnc4: "Pinapayagan mo ang BDRS Associates na makipag-ugnayan sa iyo gamit ang iyong email at telepono para sa iyong request at mga insurance offer.",
    tnc5Title: "5. Pahintulot sa Data Processing:",
    tnc5: "Pinapayagan mo ang BDRS Associates na iproseso ang iyong personal na datos para sa insurance quotation alinsunod sa Data Privacy Act of 2012.",
    submit: "Ipadala ang Inquiry",
    sending: "Ipinapadala...",
    sentTitle: "Naipadala na!",
    sentDesc: "Salamat sa pag-ugnay. May tatawag sa iyo na risk advisor sa lalong madaling panahon.",
    sendAnother: "Magpadala ng panibagong request",
    partners: "Mga Akreditadong Partner",
    partnerSub: "I-tap ang partner para makita ang kanilang kasaysayan",
    ourPlans: "Ang Aming mga Plano",
    viewDetails: "Tingnan ang Detalye",
    inquireNow: "Mag-inquire Ngayon",
    understand: "Naiintindihan Ko",
    contSite: "Magpatuloy sa Site",
    lifeTitle: "Life Insurance",
    lifeShort: "Protektahan ang kinabukasan at kapakanan ng inyong pamilya.",
    lifeLong: "Ang aming life insurance ay nagbibigay ng pangmatagalang seguridad sa pananalapi kabilang ang income protection, education funding, at proteksyon laban sa critical illness.",
    lifeBenefit1: "Death Benefit",
    lifeBenefit2: "Critical Illness",
    lifeBenefit3: "Pondo para sa Edukasyon",
    lifeBenefit4: "Retirement",
    hmoTitle: "HMO / Health Coverage",
    hmoShort: "Komprehensibong proteksyong medikal para sa lahat.",
    hmoLong: "Nagbibigay ang aming HMO plans ng komprehensibong medical coverage kabilang ang hospitalization, emergency care, at access sa malawak na network ng ospital at doktor.",
    hmoBenefit1: "In-patient Care",
    hmoBenefit2: "Emergency",
    hmoBenefit3: "Dental",
    hmoBenefit4: "Annual Physical Exams",
    nonLifeTitle: "Non-Life",
    nonLifeShort: "Protektahan ang inyong sasakyan, ari-arian, at assets.",
    nonLifeLong: "Ang aming non-life insurance ay sumasaklaw sa motorcar, property, fire, at iba pang panganib upang maprotektahan ang inyong assets laban sa aksidente at sakuna.",
    nonLifeBenefit1: "Motorcar (OR/CR)",
    nonLifeBenefit2: "Fire Insurance",
    nonLifeBenefit3: "Marine Cargo",
    nonLifeBenefit4: "Surety Bonds"
  },
  "中文 (Chinese)": {
    heroSub: "BDRS Associates Insurance Agency",
    explore: "探索计划",
    requestQuote: "请求报价",
    fullName: "全名",
    email: "电子邮件",
    mobile: "手机号码",
    selectPlan: "选择保障计划",
    reqDocs: "查看所需文件",
    motorTitle: "车辆信息",
    year: "年份",
    make: "品牌",
    model: "选择型号",
    plate: "车牌号 / 临时牌照",
    propTitle: "财产信息",
    propAddress: "财产地址",
    bldgValue: "建筑价值",
    contValue: "内部物品价值",
    propType: "选择财产类型",
    agree: "提交即表示您同意我们的",
    tnc: "条款与细则",
    tncTitle: "条款与细则",
    tnc1Title: "1. 中介身份：",
    tnc1: "您确认BDRS Associates仅作为持牌保险中介，协助您与保险公司沟通。我们不是保险公司，不提供承保或签发保单。",
    tnc2Title: "2. 信息真实性：",
    tnc2: "您保证所提供的信息真实、完整。如有虚假可能导致报价或保单失效。",
    tnc3Title: "3. 非约束性：",
    tnc3: "提交咨询或收到报价并不代表已获得保险保障，需经批准并付款后才生效。",
    tnc4Title: "4. 联系授权：",
    tnc4: "您同意BDRS Associates通过您提供的联系方式与您沟通相关保险服务。",
    tnc5Title: "5. 数据处理授权：",
    tnc5: "您同意BDRS Associates根据数据隐私法处理您的个人信息用于保险服务。",
    submit: "提交咨询",
    sending: "发送中...",
    sentTitle: "咨询已发送！",
    sentDesc: "感谢您的联系。我们的风险顾问将很快与您联系。",
    sendAnother: "发送其他请求",
    partners: "认证合作伙伴",
    partnerSub: "点击合作伙伴了解其专业背景",
    ourPlans: "我们的保障计划",
    viewDetails: "查看详情",
    inquireNow: "立即咨询",
    understand: "我明白了",
    contSite: "进入网站",
    lifeTitle: "人寿保险",
    lifeShort: "保护您家人的未来和内心的平静。",
    lifeLong: "我们的人寿保险提供长期财务保障，包括收入替代、教育基金及重大疾病保障。",
    lifeBenefit1: "身故赔偿",
    lifeBenefit2: "重大疾病",
    lifeBenefit3: "教育基金",
    lifeBenefit4: "退休金",
    hmoTitle: "健康保险",
    hmoShort: "为每个人提供全面的医疗保护。",
    hmoLong: "我们的医疗保险涵盖住院、紧急护理及全国医院网络服务。",
    hmoBenefit1: "住院护理",
    hmoBenefit2: "急诊",
    hmoBenefit3: "牙科",
    hmoBenefit4: "年度体检",
    nonLifeTitle: "非人寿保险",
    nonLifeShort: "保护您的车辆、财产和资产。",
    nonLifeLong: "我们的非人寿保险涵盖汽车、财产及火灾等风险，保护您的资产安全。",
    nonLifeBenefit1: "汽车保险 (OR/CR)",
    nonLifeBenefit2: "火灾保险",
    nonLifeBenefit3: "海运货物",
    nonLifeBenefit4: "保证金"
  },
  "日本語 (Japanese)": {
    heroSub: "BDRS Associates Insurance Agency",
    explore: "プランを見る",
    requestQuote: "見積もり依頼",
    fullName: "氏名",
    email: "メールアドレス",
    mobile: "携帯番号",
    selectPlan: "保護プランを選択",
    reqDocs: "必要書類を表示",
    motorTitle: "車両情報",
    year: "年式",
    make: "メーカー",
    model: "モデルを選択",
    plate: "ナンバープレート",
    propTitle: "物件情報",
    propAddress: "物件の住所",
    bldgValue: "建物価値",
    contValue: "動産価値",
    propType: "物件タイプを選択",
    agree: "送信することで、以下に同意したことになります",
    tnc: "利用規約",
    tncTitle: "利用規約",
    tnc1Title: "1. 仲介者としての立場：",
    tnc1: "BDRS Associatesは保険仲介者としてのみ機能し、保険会社との調整を行います。保険の引受や発行は行いません。",
    tnc2Title: "2. 情報の正確性：",
    tnc2: "提供された情報が正確で完全であることを保証します。不正確な情報は無効の原因となります。",
    tnc3Title: "3. 非拘束性：",
    tnc3: "見積もりや問い合わせは保険契約を意味しません。承認と支払い後にのみ有効となります。",
    tnc4Title: "4. 連絡の同意：",
    tnc4: "BDRS Associatesが提供された連絡先を使用して連絡することに同意します。",
    tnc5Title: "5. 個人情報の処理：",
    tnc5: "保険サービス提供のため、個人情報の処理に同意します。",
    submit: "お問い合わせ",
    sending: "送信中...",
    sentTitle: "送信完了！",
    sentDesc: "お問い合わせありがとうございます。担当者より追ってご連絡いたします。",
    sendAnother: "別のリクエストを送信",
    partners: "提携パートナー",
    partnerSub: "タップして詳細を表示",
    ourPlans: "保護プラン一覧",
    viewDetails: "詳細を見る",
    inquireNow: "今すぐ問い合わせる",
    understand: "了解しました",
    contSite: "サイトへ進む",
    lifeTitle: "生命保険",
    lifeShort: "ご家族の未来と安心を守ります。",
    lifeLong: "当社の生命保険は、収入保障、教育資金、重大疾病保障など長期的な経済的保護を提供します。",
    lifeBenefit1: "死亡保険金",
    lifeBenefit2: "重大疾病",
    lifeBenefit3: "教育資金",
    lifeBenefit4: "退職金",
    hmoTitle: "健康保険",
    hmoShort: "すべての人に包括的な医療保護を。",
    hmoLong: "当社の医療保険は、入院、緊急医療、全国の医療ネットワークへのアクセスを含みます。",
    hmoBenefit1: "入院治療",
    hmoBenefit2: "緊急時",
    hmoBenefit3: "歯科",
    hmoBenefit4: "年次健康診断",
    nonLifeTitle: "損害保険",
    nonLifeShort: "車両、財産、資産を保護します。",
    nonLifeLong: "損害保険では、自動車や財産、火災などのリスクから資産を保護します。",
    nonLifeBenefit1: "自動車保険 (OR/CR)",
    nonLifeBenefit2: "火災保険",
    nonLifeBenefit3: "海上貨物",
    nonLifeBenefit4: "保証金"
  }
};

export default function App() {
  const [showLanguageModal, setShowLanguageModal] = useState(true);
  const [errors, setErrors] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const t = translations[selectedLanguage] || translations["English"];
  const [showPlansModal, setShowPlansModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formatNumber = (value) => {
    return value
      .replace(/,/g, '')
      .replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  const [activePartner, setActivePartner] = useState(null);
  
  // Custom Dropdown States
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [selectedMake, setSelectedMake] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [isPropOpen, setIsPropOpen] = useState(false);
  const [selectedProp, setSelectedProp] = useState("");

  // Requirements States
  const [isLifeReqOpen, setIsLifeReqOpen] = useState(false);
  const [isHmoReqOpen, setIsHmoReqOpen] = useState(false);

  // Terms and Conditions State
  const [isTnCOpen, setIsTnCOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const partners = [
  {
    name: "Pacific Cross",
    img: "Pacific-Cross.png",
    desc: {
      English: "Pacific Cross Insurance, formerly known as State Bonding and Insurance Company, has over 70 years of experience in the Philippines. It specializes in medical, travel, and expatriate health insurance, offering comprehensive healthcare coverage with access to an extensive regional and international provider network.",
      "Filipino / Tagalog": "Ang Pacific Cross Insurance, na dating kilala bilang State Bonding and Insurance Company, ay may mahigit 70 taong karanasan sa Pilipinas. Dalubhasa ito sa medical, travel, at expatriate health insurance, na nagbibigay ng malawak na access sa mga ospital at doktor sa loob at labas ng bansa.",
      "中文 (Chinese)": "Pacific Cross保险公司前身为State Bonding and Insurance Company，在菲律宾拥有超过70年的经验。专注于医疗、旅行及外籍人士健康保险，提供覆盖广泛的本地及国际医疗网络服务。",
      "日本語 (Japanese)": "Pacific Crossは旧State Bonding and Insurance Companyとして設立され、フィリピンで70年以上の実績を持ちます。医療保険や旅行保険、海外居住者向け保険を専門とし、国内外の医療ネットワークへのアクセスを提供しています。"
    }
  },
  {
    name: "Paramount",
    img: "Paramount.png",
    desc: {
      English: "Paramount Life & General Insurance Corporation, established in 1950, is one of the Philippines’ most trusted insurers. It provides both life and non-life insurance solutions, focusing on financial protection, estate preservation, and efficient claims service for individuals and businesses.",
      "Filipino / Tagalog": "Ang Paramount Life & General Insurance Corporation ay itinatag noong 1950 at isa sa mga pinakatiwalaang insurer sa Pilipinas. Nag-aalok ito ng life at non-life insurance na nakatuon sa financial protection at mabilis na claims processing.",
      "中文 (Chinese)": "Paramount人寿与综合保险公司成立于1950年，是菲律宾最值得信赖的保险公司之一。提供人寿及非人寿保险，专注于财务保障及高效理赔服务。",
      "日本語 (Japanese)": "Paramount Life & General Insuranceは1950年設立のフィリピン有数の保険会社であり、生命保険および損害保険の両方を提供し、資産保全と迅速な保険金支払いに注力しています。"
    }
  },
  {
    name: "PhilBritish",
    img: "PhilBritish.png",
    desc: {
      English: "Philippine British Assurance Company, Inc. (PhilBritish) has been operating for over 50 years, providing strong non-life insurance solutions. It is recognized for its financial stability and expertise in fire, marine cargo, and property insurance across commercial and industrial sectors.",
      "Filipino / Tagalog": "Ang PhilBritish ay mahigit 50 taon nang nagbibigay ng non-life insurance sa Pilipinas. Kilala ito sa matatag na serbisyo sa fire, marine cargo, at property insurance para sa negosyo at industriya.",
      "中文 (Chinese)": "PhilBritish保险公司拥有超过50年的运营历史，专注于非人寿保险，尤其是在火灾险、海运货物险及财产保险方面具有丰富经验。",
      "日本語 (Japanese)": "PhilBritishは50年以上の歴史を持つ損害保険会社で、火災保険や海上貨物保険、不動産保険において高い専門性と安定性を誇ります。"
    }
  },
  {
    name: "Asia Insurance",
    img: "asia-insurance.png",
    desc: {
      English: "Asia Insurance Corporation, founded in 1957, is one of the leading non-life insurers in the Philippines. It delivers comprehensive risk protection products including motorcar, fire, marine, and casualty insurance, backed by decades of underwriting expertise.",
      "Filipino / Tagalog": "Ang Asia Insurance Corporation ay itinatag noong 1957 at isa sa mga nangungunang non-life insurer sa Pilipinas. Nag-aalok ito ng motorcar, fire, marine, at casualty insurance na may matibay na karanasan sa underwriting.",
      "中文 (Chinese)": "Asia Insurance成立于1957年，是菲律宾领先的非人寿保险公司之一，提供汽车、火灾、海运及责任保险等全面保障。",
      "日本語 (Japanese)": "Asia Insuranceは1957年設立の損害保険会社で、自動車保険、火災保険、海上保険など幅広いリスク保障商品を提供しています。"
    }
  },
  {
    name: "Bethel",
    img: "bethel.png",
    desc: {
      English: "Bethel General Insurance and Surety Corporation is known for its strong presence in surety bonds and non-life insurance. It supports businesses through contract bonds, performance guarantees, and asset protection solutions tailored for enterprise growth.",
      "Filipino / Tagalog": "Ang Bethel General Insurance ay kilala sa surety bonds at non-life insurance. Tumutulong ito sa mga negosyo sa pamamagitan ng contract bonds at financial guarantees.",
      "中文 (Chinese)": "Bethel保险公司在保证金保险及非人寿保险领域具有优势，为企业提供合同保证及风险保障方案。",
      "日本語 (Japanese)": "Bethelは保証保険（Surety Bonds）に強みを持つ保険会社で、企業向けに契約保証やリスク保護サービスを提供しています。"
    }
  },
  {
    name: "Maagap",
    img: "maagap.png",
    desc: {
      English: "Maagap Insurance, Inc. is a dynamic non-life insurance provider in the Philippines, recognized for its innovative and responsive service. It offers comprehensive motorcar, fire, and property insurance solutions designed to deliver fast claims and reliable protection.",
      "Filipino / Tagalog": "Ang Maagap Insurance ay kilala sa mabilis at makabagong serbisyo sa non-life insurance, kabilang ang motorcar at fire insurance.",
      "中文 (Chinese)": "Maagap保险公司以其快速响应和创新服务著称，提供汽车及财产保险等全面保障。",
      "日本語 (Japanese)": "Maagap Insuranceは迅速な対応と革新的なサービスで知られる損害保険会社で、自動車保険や火災保険を提供しています。"
    }
  }
];

  const products = [
    {
      id: 'life',
      icon: <ShieldCheck className="w-10 h-10 text-blue-400" />
    },
    {
      id: 'hmo',
      icon: <HeartPulse className="w-10 h-10 text-emerald-400" />
    },
    {
      id: 'non-life',
      icon: <Car className="w-10 h-10 text-cyan-400" />
    }
  ];

  const lifeRequirements = [
    "Government Issued ID (Voter's, Passport, Driver's, etc.)",
    "Proof of Income (Latest 3 months payslip/ITR)",
    "PSA Birth Certificate",
    "Marriage Contract (if applicable)",
    "Health Statement / Medical Records (if required)"
  ];

  const hmoRequirements = [
    "Accomplished Application Form",
    "1x1 or 2x2 ID Picture",
    "Clear Copy of 1 Valid ID",
    "Birth Certificate (for dependents)",
    "PhilHealth Number / MDR"
  ];

  const planOptions = ["Life Insurance", "HMO / Health Coverage", "Non-Life: Motorcar", "Non-Life: Fire"];
  const propTypes = ["Residential", "Commercial", "Industrial", "Warehouse"];

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 11 }, (_, i) => (currentYear - i).toString());

  const carData = {
    "Toyota": ["Vios", "Wigo", "Innova", "Fortuner", "Hilux", "Rush", "Raize", "Avanza", "Hiace", "Corolla Altis", "Other Toyota"],
    "Mitsubishi": ["Mirage", "Mirage G4", "Xpander", "Montero Sport", "Strada", "L300", "Other Mitsubishi"],
    "Ford": ["Ranger", "Everest", "Territory", "Mustang", "Explorer", "Other Ford"],
    "Nissan": ["Navara", "Terra", "Almera", "Kicks", "Urvan", "Patrol", "Other Nissan"],
    "Suzuki": ["Ertiga", "Swift", "Dzire", "Jimny", "S-Presso", "XL7", "Celerio", "Other Suzuki"],
    "Isuzu": ["D-Max", "mu-X", "Traviz", "Crosswind", "Other Isuzu"],
    "Honda": ["City", "Civic", "BR-V", "CR-V", "HR-V", "Brio", "Other Honda"],
    "Hyundai": ["Tucson", "Santa Fe", "Accent", "Starex", "Staria", "Creta", "Stargazer", "Other Hyundai"],
    "Kia": ["Soluto", "Stonic", "Seltos", "Carnival", "Sorento", "Other Kia"],
    "MG": ["ZS", "5", "HS", "RX5", "Other MG"],
    "Geely": ["Coolray", "Okavango", "Azkarra", "Emgrand", "Other Geely"],
    "Chevrolet": ["Trailblazer", "Tracker", "Colorado", "Suburban", "Camaro", "Other Chevrolet"],
    "Mazda": ["2", "3", "CX-3", "CX-5", "CX-9", "BT-50", "Other Mazda"],
    "Subaru": ["Forester", "XV", "Outback", "WRX", "BRZ", "Other Subaru"],
    "Other": ["Other Type / Model"]
  };
  
  const carBrands = Object.keys(carData);
  const availableModels = selectedMake ? carData[selectedMake] : [];

  const onSubmit = async (event) => {
    event.preventDefault();
    
    setLoading(true);
    const formData = new FormData(event.target);

    // Core identity
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    const newErrors = {};

    if (!name) newErrors.name = "Full name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phone) newErrors.phone = "Mobile number is required";
    if (!selectedPlan) newErrors.plan = "Please select a plan";
    if (!agreed) newErrors.tnc = "Please agree to the Terms and Conditions";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

// Build professional formatted email content
const message = `
📩 NEW INSURANCE INQUIRY – BDRS ASSOCIATES

━━━━━━━━━━━━━━━━━━━━━━
👤 CLIENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━
Full Name: ${name}
Email Address: ${email}
Mobile Number: ${phone}

━━━━━━━━━━━━━━━━━━━━━━
🛡 INSURANCE REQUEST
━━━━━━━━━━━━━━━━━━━━━━
Plan Requested: ${selectedPlan}
Submission Type: Insurance Inquiry

${
selectedPlan === "Non-Life: Motorcar" ? `
━━━━━━━━━━━━━━━━━━━━━━
🚗 VEHICLE DETAILS
━━━━━━━━━━━━━━━━━━━━━━
Year: ${selectedYear || ""}
Make: ${selectedMake || ""}
Model: ${selectedModel || ""}
` : ""
}

${
selectedPlan === "Non-Life: Fire" ? `
━━━━━━━━━━━━━━━━━━━━━━
🏠 PROPERTY DETAILS
━━━━━━━━━━━━━━━━━━━━━━
Property Type: ${selectedProp || ""}
${formData.get("fire_address") ? `Address: ${formData.get("fire_address")}` : ""}
${formData.get("building_value") ? `Building Value: ${formData.get("building_value")}` : ""}
${formData.get("contents_value") ? `Contents Value: ${formData.get("contents_value")}` : ""}
` : ""
}

━━━━━━━━━━━━━━━━━━━━━━
📜 CONSENT
━━━━━━━━━━━━━━━━━━━━━━
Terms & Conditions Accepted: ${agreed ? "YES" : "NO"}

━━━━━━━━━━━━━━━━━━━━━━
🧾 SYSTEM INFO
━━━━━━━━━━━━━━━━━━━━━━
Source: BDRS Website
Date Submitted: ${new Date().toLocaleString()}
`;
formData.append("access_key", "d8e1068a-a04e-4d7d-90e5-633799a5a0bd");

// ✅ ADD THESE LINES HERE
formData.append("subject", "New Insurance Inquiry");
formData.append("name", name);
formData.append("message", message);

// ✅ REMOVE DUPLICATES (VERY IMPORTANT)
formData.delete("name");
formData.delete("email");
formData.delete("phone");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden overflow-y-visible">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
          <div className="flex flex-col cursor-pointer" onClick={() => typeof window !== "undefined" && window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-lg md:text-xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase">BDRS</span>
            <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-slate-400 font-bold">Dependable Risk Solutions</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowLanguageModal(true)} className="p-2 text-slate-400 hover:text-white transition-colors">
              <Languages className="w-5 h-5" />
            </button>
            <a href="mailto:bdrsassociates@gmail.com" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase hover:bg-blue-500 transition active:scale-95">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-28 md:pt-48 pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Shield className="w-3 h-3" /> Licensed Insurance Agency
            </div>
            
            {/* THIS REMAINS ENGLISH ONLY AS REQUESTED */}
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Building <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Dependable Risk Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold text-slate-300 mb-10">BDRS Associates Insurance Agency</p>
            <button onClick={() => setShowPlansModal(true)} className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition shadow-lg shadow-blue-600/25 items-center gap-2">
              {t.explore} <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* FORM */}
          <div id="quote" className="w-full lg:w-[450px] bg-slate-900/40 border border-white/10 p-5 sm:p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-2xl shadow-2xl shrink-0 min-h-[520px] flex flex-col justify-center z-10">
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold mb-6 text-white text-left">{t.requestQuote}</h3>
                <form onSubmit={onSubmit} noValidate className="space-y-4 text-left">
                  <input name="name" type="text" placeholder={t.fullName} required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                    <div>
                      <input
                        name="email"
                        type="email"
                        placeholder={t.email}
                        required
                        className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                   <div>
                    <input
                      name="phone"
                      type="tel"
                      placeholder={t.mobile}
                      required
                      className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                </div>
                  
                  {/* PROTECTION PLAN DROPDOWN */}
                  <div className="relative z-50">
                    {errors.plan && (
                      <p className="text-red-400 text-xs mt-1">{errors.plan}</p>
                    )}
                    <div onClick={() => setIsPlanOpen(!isPlanOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-4 flex justify-between items-center cursor-pointer transition-all duration-300 ${isPlanOpen ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-white/5'}`}>
                      <span className={selectedPlan ? "text-white font-medium" : "text-slate-500"}>{selectedPlan || t.selectPlan}</span>
                      <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isPlanOpen ? 'rotate-90' : ''}`} />
                    </div>
                    {isPlanOpen && (
                      <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {planOptions.map((plan) => (
                          <div key={plan} onClick={() => { setSelectedPlan(plan); setIsPlanOpen(false); }} className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-blue-600/20 hover:text-blue-400 text-slate-300 transition-all cursor-pointer mb-1 last:mb-0">
                            <span className="text-sm font-semibold">{plan}</span>
                            {selectedPlan === plan && <Check className="w-4 h-4 text-blue-400" />}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* LIFE INSURANCE REQUIREMENTS */}
                  {selectedPlan === "Life Insurance" && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-300 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/20">
                      <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                        <ClipboardList className="w-3 h-3" /> Application Requirements
                      </p>
                      <div className="relative z-40">
                        <div onClick={() => setIsLifeReqOpen(!isLifeReqOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${isLifeReqOpen ? 'border-blue-500' : 'border-white/5'}`}>
                          <span className="text-xs text-white">{t.reqDocs}</span>
                          <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isLifeReqOpen ? 'rotate-90 text-blue-400' : ''}`} />
                        </div>
                        {isLifeReqOpen && (
                          <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-xl p-3 shadow-2xl z-50">
                            <ul className="space-y-2">
                              {lifeRequirements.map((req, i) => (
                                <li key={i} className="flex gap-2 items-start text-[10px] text-slate-300">
                                  <Check className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* HMO REQUIREMENTS */}
                  {selectedPlan === "HMO / Health Coverage" && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-300 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/20">
                      <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                        <ClipboardList className="w-3 h-3" /> Enrollment Requirements
                      </p>
                      <div className="relative z-40">
                        <div onClick={() => setIsHmoReqOpen(!isHmoReqOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${isHmoReqOpen ? 'border-emerald-500' : 'border-white/5'}`}>
                          <span className="text-xs text-white">{t.reqDocs}</span>
                          <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isHmoReqOpen ? 'rotate-90 text-emerald-400' : ''}`} />
                        </div>
                        {isHmoReqOpen && (
                          <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-xl p-3 shadow-2xl z-50">
                            <ul className="space-y-2">
                              {hmoRequirements.map((req, i) => (
                                <li key={i} className="flex gap-2 items-start text-[10px] text-slate-300">
                                  <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* MOTORCAR CONDITIONAL FIELDS */}
                  {selectedPlan === "Non-Life: Motorcar" && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-300 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/20">
                      <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{t.motorTitle}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-40">
                        {/* CUSTOM YEAR DROPDOWN */}
                        <div className="relative">
                          <div onClick={() => setIsYearOpen(!isYearOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${isYearOpen ? 'border-blue-500' : 'border-white/5'}`}>
                            <span className={`text-xs ${selectedYear ? "text-white" : "text-slate-500"}`}>{selectedYear || t.year}</span>
                            <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isYearOpen ? 'rotate-90' : ''}`} />
                          </div>
                          {isYearOpen && (
                            <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-xl p-1 shadow-2xl z-50 max-h-40 overflow-y-auto">
                              {yearOptions.map(y => (
                                <div key={y} onClick={() => { setSelectedYear(y); setIsYearOpen(false); }} className="px-4 py-2 rounded-lg hover:bg-blue-600/20 text-xs text-slate-300 cursor-pointer">{y}</div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* CUSTOM MAKE DROPDOWN */}
                        <div className="relative">
                          <div onClick={() => setIsMakeOpen(!isMakeOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${isMakeOpen ? 'border-blue-500' : 'border-white/5'}`}>
                            <span className={`text-xs ${selectedMake ? "text-white" : "text-slate-500"}`}>{selectedMake || t.make}</span>
                            <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isMakeOpen ? 'rotate-90' : ''}`} />
                          </div>
                          {isMakeOpen && (
                            <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-xl p-1 shadow-2xl z-50 max-h-40 overflow-y-auto">
                              {carBrands.map(b => (
                                <div key={b} onClick={() => {
                                  setSelectedMake(b);
                                  setSelectedModel(""); // Reset model when make changes
                                  setIsMakeOpen(false);
                                }} className="px-4 py-2 rounded-lg hover:bg-blue-600/20 text-xs text-slate-300 cursor-pointer">{b}</div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* DEPENDENT MODEL DROPDOWN */}
                      <div className="relative z-30">
                        <div
                          onClick={() => selectedMake ? setIsModelOpen(!isModelOpen) : null}
                          className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center transition-all duration-300 ${!selectedMake ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${isModelOpen ? 'border-blue-500' : 'border-white/5'}`}
                        >
                          <span className={`text-sm ${selectedModel ? "text-white" : "text-slate-500"}`}>
                            {!selectedMake ? t.model : (selectedModel || t.model)}
                          </span>
                          <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isModelOpen ? 'rotate-90' : ''}`} />
                        </div>
                        {isModelOpen && selectedMake && (
                          <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-xl p-1 shadow-2xl z-50 max-h-40 overflow-y-auto">
                            {availableModels.map(m => (
                              <div key={m} onClick={() => { setSelectedModel(m); setIsModelOpen(false); }} className="px-4 py-2 rounded-lg hover:bg-blue-600/20 text-sm text-slate-300 cursor-pointer">{m}</div>
                            ))}
                          </div>
                        )}
                      </div>

                      <input name="plate_no" type="text" placeholder={t.plate} required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                    </div>
                  )}

                  {/* FIRE CONDITIONAL FIELDS */}
                  {selectedPlan === "Non-Life: Fire" && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-300 p-4 bg-orange-500/5 rounded-2xl border border-orange-500/20 relative z-40">
                      <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">{t.propTitle}</p>
                      <input name="fire_address" type="text" placeholder={t.propAddress} required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                       <input
                         name="building_value"
                         type="text"
                         onChange={(e) => {
                           const formatted = formatNumber(e.target.value);
                           e.target.value = formatted;
                         }}
                         placeholder={t.bldgValue}
                         required
                         className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500"
                       /> 
                        <input
                          name="contents_value"
                          type="text"
                          onChange={(e) => {
                            const formatted = formatNumber(e.target.value);
                            e.target.value = formatted;
                          }}
                          placeholder={t.contValue}
                          className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500"
                        />
                      </div>
                      
                      {/* CUSTOM PROPERTY TYPE DROPDOWN */}
                      <div className="relative">
                        <div onClick={() => setIsPropOpen(!isPropOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${isPropOpen ? 'border-orange-500' : 'border-white/5'}`}>
                          <span className={`text-xs ${selectedProp ? "text-white" : "text-slate-500"}`}>{selectedProp || t.propType}</span>
                          <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isPropOpen ? 'rotate-90' : ''}`} />
                        </div>
                        {isPropOpen && (
                          <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-xl p-1 shadow-2xl z-50">
                            {propTypes.map(p => (
                              <div key={p} onClick={() => { setSelectedProp(p); setIsPropOpen(false); }} className="px-4 py-2 rounded-lg hover:bg-orange-600/20 text-xs text-slate-300 cursor-pointer">{p}</div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* TERMS AND CONDITIONS LINK */}
                  <div className={`pt-2 text-left relative z-20 space-y-2 ${errors.tnc ? "border border-red-500/40 p-2 rounded-lg" : ""}`}>
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => {
                          setAgreed(e.target.checked);
                          if (e.target.checked) {
                            setErrors(prev => {
                              const copy = { ...prev };
                              delete copy.tnc;
                              return copy;
                            });
                          }
                        }}
                         className="mt-1 accent-blue-500 cursor-pointer"
                      />

                      <p className="text-[10px] text-slate-500">
                        {t.agree}{' '}
                        <span
                          onClick={() => setIsTnCOpen(true)}
                          className="font-bold text-blue-400 hover:text-blue-300 cursor-pointer underline underline-offset-2 transition-colors"
                        >
                         {t.tnc}
                       </span>
                     </p>
                   </div>

                  {/* 🔥 ADD THIS RIGHT BELOW */}
                  {errors.tnc && (
                    <p className="text-red-400 text-xs mt-1 ml-5">
                      {errors.tnc}
                     </p>
                    )}
                  </div>
                  <button
                    disabled={loading}
                    type="submit"
                    className={`w-full font-black py-4 rounded-xl transition-all mt-2 relative z-10
                      ${loading || !agreed
                        ? "bg-slate-600 text-slate-300 cursor-not-allowed"
                        : "bg-emerald-500 hover:bg-emerald-400 text-slate-950 active:scale-[0.98]"
                      }`}
                  >
                    {loading ? t.sending : t.submit}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-emerald-400 w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{t.sentTitle}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{t.sentDesc}</p>
                <button onClick={() => setSubmitted(false)} className="text-blue-400 font-bold text-sm uppercase tracking-widest hover:text-blue-300 transition">{t.sendAnother}</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ACCREDITED PARTNERS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">{t.partners}</h2>
          <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 italic mb-16">{t.partnerSub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 text-left">
          {partners.map((p, i) => (
            <div key={i} onClick={() => setActivePartner(activePartner === i ? null : i)} className={`group p-8 rounded-[2.5rem] border transition-all duration-300 cursor-pointer ${activePartner === i ? 'bg-slate-900 border-blue-500/50 shadow-2xl shadow-blue-500/10' : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'}`}>
              <div className="bg-white p-6 rounded-3xl h-28 flex items-center justify-center mb-8 shadow-inner overflow-hidden">
                <img src={`/agency/${p.img}`} alt={p.name} className="max-h-full object-contain group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-xl font-bold mb-2 flex justify-between items-center text-white">
                {p.name} <ChevronRight className={`w-5 h-5 transition-transform ${activePartner === i ? 'rotate-90 text-blue-500' : ''}`} />
              </h4>
              <div className={`overflow-hidden transition-all duration-500 ${activePartner === i ? 'max-h-96 opacity-100 overflow-y-auto pr-2' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm text-slate-400 mt-4 leading-relaxed border-t border-white/10 pt-4">
  {p.desc[selectedLanguage] || p.desc["English"]}
</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LANGUAGE MODAL */}
      {showLanguageModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-sm rounded-[3rem] p-10 shadow-2xl animate-in zoom-in duration-500">
            <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Languages className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-8 text-white text-center">Language / 言語 / 语言</h3>
            
            <div className="space-y-3 mb-8">
              {Object.keys(translations).map((lang) => (
                <div
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`w-full py-4 rounded-2xl border flex items-center justify-between px-6 cursor-pointer transition-all ${selectedLanguage === lang ? 'bg-blue-600/10 border-blue-500 text-white shadow-lg' : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'}`}
                >
                  <span className="font-bold text-sm">{lang}</span>
                  {selectedLanguage === lang && <Check className="w-4 h-4 text-blue-400" />}
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowLanguageModal(false)}
              className="w-full py-4 bg-blue-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition text-white shadow-lg shadow-blue-600/20"
            >
              {t.contSite}
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">© 2026 BDRS Associates Insurance Agency. All Rights Reserved.</p>
      </footer>

      {/* PLANS MODAL */}
      {showPlansModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setShowPlansModal(false)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-5xl rounded-[2rem] md:rounded-[3rem] p-5 sm:p-6 md:p-10 shadow-2xl animate-in zoom-in duration-300 text-left max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowPlansModal(false)} className="absolute top-8 right-8 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition text-white z-10"><X className="w-5 h-5" /></button>
            
            <h2 className="text-4xl font-bold text-center mb-12 text-white">{t.ourPlans}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Life Insurance */}
              <div className="bg-slate-800/50 border border-white/10 p-5 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:border-blue-500/30 transition-all">
                <div className="mb-6">{products[0].icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-white">{t.lifeTitle}</h4>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">{t.lifeLong}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6">
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.lifeBenefit1}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.lifeBenefit2}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.lifeBenefit3}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.lifeBenefit4}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => { 
                    setShowPlansModal(false); 
                    window.scrollTo({top: 0, behavior: 'smooth'}); 
                  }} 
                  className="w-full py-3 mt-2 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition text-white text-sm"
                >
                  {t.inquireNow}
                </button>
              </div>

              {/* HMO / Health */}
              <div className="bg-slate-800/50 border border-white/10 p-5 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:border-blue-500/30 transition-all">
                <div className="mb-6">{products[1].icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-white">{t.hmoTitle}</h4>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">{t.hmoLong}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6">
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.hmoBenefit1}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.hmoBenefit2}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.hmoBenefit3}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.hmoBenefit4}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => { 
                    setShowPlansModal(false); 
                    window.scrollTo({top: 0, behavior: 'smooth'}); 
                  }} 
                  className="w-full py-3 mt-2 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition text-white text-sm"
                >
                  {t.inquireNow}
                </button>
              </div>

              {/* Non-Life */}
              <div className="bg-slate-800/50 border border-white/10 p-5 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:border-blue-500/30 transition-all">
                <div className="mb-6">{products[2].icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-white">{t.nonLifeTitle}</h4>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">{t.nonLifeLong}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6">
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.nonLifeBenefit1}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.nonLifeBenefit2}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.nonLifeBenefit3}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.nonLifeBenefit4}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => { 
                    setShowPlansModal(false); 
                    window.scrollTo({top: 0, behavior: 'smooth'}); 
                  }} 
                  className="w-full py-3 mt-2 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition text-white text-sm"
                >
                  {t.inquireNow}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    
      {/* TERMS AND CONDITIONS MODAL */}
      {isTnCOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setIsTnCOpen(false)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-lg rounded-[3rem] p-10 shadow-2xl animate-in zoom-in duration-300 text-left">
            <button onClick={() => setIsTnCOpen(false)} className="absolute top-8 right-8 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition text-white"><X className="w-5 h-5" /></button>
            <h3 className="text-3xl font-bold mb-6 text-white">{t.tncTitle}</h3>
            <div className="text-sm text-slate-400 space-y-4 leading-relaxed overflow-y-auto max-h-96 pr-2">
              <p><strong>{t.tnc1Title}</strong> {t.tnc1}</p>
              <p><strong>{t.tnc2Title}</strong> {t.tnc2}</p>
              <p><strong>{t.tnc3Title}</strong> {t.tnc3}</p>
              <p><strong>{t.tnc4Title}</strong> {t.tnc4}</p>
              <p><strong>{t.tnc5Title}</strong> {t.tnc5}</p>
            </div>
            <button onClick={() => { setAgreed(true); setIsTnCOpen(false); }} className="w-full mt-8 py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-500 transition text-white">{t.understand}</button>
          </div>
        </div>
      )}
    </div>
  );
}
