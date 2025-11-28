import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "forextrade": "ForexTrade",
      "features": "Features",
      "price": "Price",
      "testimonial": "Testimonial",
      "start_trading_now": "Start Trading Now",
      "view_markets": "View Markets",
      "next_gen_platform": "Next-gen forex trading platform",
      "trade_with_confidence": "Trade forex with",
      "confidence_and_security": "confidence & security",
      "hero_description": "Experience seamless forex trading with advanced features, real-time analytics, and institutional-grade security. Start trading in minutes.",
      "advanced_trading": "Advanced Trading",
      "features_and_tools": "Features & Tools",
      "features_description": "Experience professional-grade trading tools and features designed for both novice and experienced crypto traders.",
      "ready_to_start": "Ready to start trading?",
      "cta_description": "Join thousands of traders who have already discovered the power of our platform.",
      "create_account": "Create Account",
      "choose_your_plan": "Choose Your",
      "trading_plan": "Trading Plan",
      "pricing_description": "Select the perfect trading plan with advanced features and competitive fees",
      "trusted_by_traders": "Trusted by Traders",
      "join_thousands": "Join thousands of satisfied traders on ForexTrade",
      "empowering_traders": "Empowering traders with advanced forex trading solutions.",
      "all_rights_reserved": "© {{year}} Footprint Arts. All rights reserved.",
      "most_popular": "Most Popular"
    }
  },
  ar: {
    translation: {
      "forextrade": "ForexTrade",
      "features": "الميزات",
      "price": "الأسعار",
      "testimonial": "الشهادات",
      "start_trading_now": "ابدأ التداول الآن",
      "view_markets": "عرض الأسواق",
      "next_gen_platform": "منصة تداول الجيل القادم للفوركس",
      "trade_with_confidence": "تداول العملات الأجنبية بثقة",
      "confidence_and_security": "وأمان",
      "hero_description": "جرّب تداولاً سلساً للفوركس مع ميزات متقدمة وتحليلات في الوقت الفعلي وأمان على مستوى المؤسسات. ابدأ التداول في دقائق.",
      "advanced_trading": "التداول المتقدم",
      "features_and_tools": "الميزات والأدوات",
      "features_description": "جرّب أدوات وميزات التداول الاحترافية المصممة للمتداولين المبتدئين وذوي الخبرة في العملات الرقمية.",
      "ready_to_start": "هل أنت مستعد لبدء التداول؟",
      "cta_description": "انضم إلى الآلاف من المتداولين الذين اكتشفوا بالفعل قوة منصتنا.",
      "create_account": "إنشاء حساب",
      "choose_your_plan": "اختر",
      "trading_plan": "خطة التداول",
      "pricing_description": "اختر خطة التداول المثالية مع الميزات المتقدمة والرسوم التنافسية",
      "trusted_by_traders": "موثوق به من قبل المتداولين",
      "join_thousands": "انضم إلى الآلاف من المتداولين الراضين على ForexTrade",
      "empowering_traders": "تمكين المتداولين من خلال حلول تداول فوركس متقدمة.",
      "all_rights_reserved": "© {{year}} Footprint Arts. جميع الحقوق محفوظة.",
      "most_popular": "الأكثر شهرة"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;