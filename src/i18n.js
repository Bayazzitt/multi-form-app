import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "KALORI_HESAPLAMA": "CALORIE CALCULATION",
      "ALERJI_HESAPLAMA": "ALLERGY CALCULATION",
      "BMI_HESAPLAMA": "BMI CALCULATION",
      "ANTREMAN_NABZI_HESAPLAMA": "TRAINING PULSE CALCULATION",
      "BEL_KALÇA_ORANI_HESAPLAMA": "WAIST HIP RATIO CALCULATION",
        "gewicht": "Weight (in Kg):",
        "groesse": "Height (in Centimeters):",
        "alter": "Age (in Years):",
        "geschlecht": "Choose Your Gender:",
        "maennlich": "Male",
        "weiblich": "Female",
        "kalorienbedarf": "Your Daily Calorie Requirement:",
        "berechnen": "Calculate",
        "temizle": "Clear",
        "geschlechtWarnung": "Please Choose Your Gender",
        "einheitKg": "Weight (Kg)",
        "einheitCm": "Height (Cm)",
        "einheitJahre": "Age",
        "bosAlanUyarisi": "Please Fill In All Fields",
        "CRADLE_CAP": "Did you have cradle cap as a baby?",
        "ECZEMA": "Did you have eczema as a child?",
        "FAMILY_HISTORY": "Is there a history of allergies, asthma, eczema, or hay fever in your family?",
        "RED_EYES": "Do you frequently suffer from red, itchy or watery eyes?",
        "SNEEZING": "Do you sneeze a lot?",
        "RUNNY_NOSE": "Do you frequently suffer from a blocked nose and clear, fluid discharge?",
        "SEASONAL": "Do your symptoms worsen during specific seasons?",
        "OUTDOORS": "Do your symptoms worsen when you go outside?",
        "TIREDNESS": "Do you feel particularly tired when you have symptoms?",
        "IMPROVEMENT": "Do your symptoms improve when you go to the mountains or the sea?",
        "YES": "Yes",
        "NO": "No",
        "UNKNOWN": "I don't know",
        "EVALUATE": "Evaluate",
        "CLEAR": "Clear",
        "RESPONSE_ALERT": "Please answer at least one question.",
        "RESULT_LOW": "Your result: You are unlikely to have an allergy. However, if your symptoms persist, you should consult an allergy specialist for a definitive diagnosis.",
        "RESULT_HIGH": "Your result: You are likely to have an allergy. You should see an allergy specialist for a definitive diagnosis. This test can only provide initial guidance and is not a substitute for a visit to the doctor.",
        "severeUnderweight": "Severely Underweight",
        "moderateUnderweight": "Moderately Underweight",
        "mildUnderweight": "Mildly Underweight",
        "normal": "Normal",
        "overweight": "Overweight",
        "obesity": "Obese",
        "calculateBMI": "Calculate BMI",
        "clearFields": "Clear Fields",
        "AGE": "Age",
        "RESTING_PULSE": "Resting Pulse",
        "ACTIVITY_LEVEL": "Which best describes you?",
        "ACTIVITY_OPTIONS": [
        "Very inactive for years",
        "Average, untrained",
        "Fitness-oriented elders",
        "Occasional, unstructured physical activity",
        "Active at least 2 times a week",
        "Active at least 4 times a week (athletes)",
        "High-performance, professional athletes",
      ],
      "CALCULATE": "Calculate",
      "CLEAR": "Clear",
      "OPTIMAL_TRAINING_PULSE": "Your optimal training pulse is approximately:",
      "waist": "Waist Circumference (Cm)",
      "hip": "Hip Circumference (Cm)",
      "gender": "Select Your Gender:",
      "calculate": "Calculate",
      "clear": "Clear",
      "result": "Your Waist-Hip Ratio:",
      "male": "Male",
      "female": "Female",
      "normal": "Normal weight",
      "overweight": "Overweight",
      "obesity": "Obesity",
    }
  },
  tr: {
    translation: {
      "KALORI_HESAPLAMA": "KALORİ HESAPLAMA",
      "ALERJI_HESAPLAMA": "ALERJİ HESAPLAMA",
      "BMI_HESAPLAMA": "VKI HESAPLAMA",
      "ANTREMAN_NABZI_HESAPLAMA": "ANTREMAN NABZI HESAPLAMA",
      "BEL_KALÇA_ORANI_HESAPLAMA": "BEL KALÇA ORANI HESAPLAMA",
      "gewicht": "Ağırlık (Kg olarak):",
      "groesse": "Boy (Santimetre olarak):",
      "alter": "Yaş (Yıl olarak):",
      "geschlecht": "Cinsiyetinizi Seçin:",
      "maennlich": "Erkek",
      "weiblich": "Kadın",
      "kalorienbedarf": "Günlük Kalori İhtiyacınız:",
      "berechnen": "Hesapla",
      "temizle": "Temizle", 
      "geschlechtWarnung": "Lütfen cinsiyetinizi seçin",
      "einheitKg": "Ağırlık (Kg)",
      "einheitCm": "Boy (Cm)",
      "einheitJahre": "Yaş",
      "bosAlanUyarisi": "Lütfen tüm alanları doldurunuz",
      "CRADLE_CAP": "Bebekken süt kabuğu (kepçe kabuğu) oldu mu?",
      "ECZEMA": "Çocukken egzama geçirdiniz mi?",
      "FAMILY_HISTORY": "Ailenizde alerji, astım, egzama veya saman nezlesi var mı?",
      "RED_EYES": "Sık sık kızarmış, kaşıntılı veya yaşaran gözlerden muzdarip misiniz?",
      "SNEEZING": "Sık sık hapşırıyor musunuz?",
      "RUNNY_NOSE": "Sık sık tıkanmış burun ve berrak, sıvı akıntıdan muzdarip misiniz?",
      "SEASONAL": "Belirli mevsimlerde semptomlarınız kötüleşiyor mu?",
      "OUTDOORS": "Dışarı çıktığınızda semptomlarınız kötüleşiyor mu?",
      "TIREDNESS": "Semptomlarınız olduğunda özellikle yorgun hissediyor musunuz?",
      "IMPROVEMENT": "Dağlara veya denize gittiğinizde semptomlarınızda iyileşme oluyor mu?",
      "YES": "Evet",
      "NO": "Hayır",
      "UNKNOWN": "Bilmiyorum",
      "EVALUATE": "Değerlendir",
      "CLEAR": "Temizle",
      "RESPONSE_ALERT": "Lütfen en az bir soruya yanıt veriniz.",
      "RESULT_LOW": "Sonucunuz: Muhtemelen alerjiniz yok. Ancak, semptomlarınız devam ederse, kesin bir sonuç ve tıbbi teşhis için bir alerji uzmanına danışmalısınız.",
      "RESULT_HIGH": "Sonucunuz: Muhtemelen bir alerjiniz var. Kesin bir sonuç ve tıbbi teşhis için bir alerji uzmanına görünmelisiniz. Bu test yalnızca ilk yönlendirme sağlayabilir ve bir doktor ziyaretinin yerini alamaz.",
      "severeUnderweight": "Ciddi Düşük Kilolu",
      "moderateUnderweight": "Orta Düşük Kilolu",
      "mildUnderweight": "Hafif Düşük Kilolu",
      "normal": "Normal",
      "overweight": "Fazla Kilolu",
      "obesity": "Obez",
      "calculateBMI": "VKI Hesapla",
      "clearFields": "Alanları Temizle",
      "AGE": "Yaş",
      "RESTING_PULSE": "Dinlenme Nabzı",
      "ACTIVITY_LEVEL": "Sizi en iyi hangisi tanımlar?",
      "ACTIVITY_OPTIONS": [
        "Yıllardır çok hareketsiz",
        "Ortalama, eğitimsiz",
        "Fitness odaklı yaşlılar",
        "Ara sıra, yapılandırılmamış fiziksel aktivite",
        "Haftada en az 2 kez aktif",
        "Haftada en az 4 kez aktif (sporcular)",
        "Yüksek performanslı, profesyonel sporcular",
      ],
      "CALCULATE": "Hesapla",
      "CLEAR": "Temizle",
      "OPTIMAL_TRAINING_PULSE": "Optimal antrenman nabzınız yaklaşık:",
      "waist": "Bel Çevresi (Cm)",
      "hip": "Kalça Çevresi (Cm)",
      "gender": "Cinsiyetinizi seçin:",
      "calculate": "Hesapla",
      "clear": "Temizle",
      "result": "Bel-Kalça Oranınız:",
      "male": "Erkek",
      "female": "Kadın",
      "normal": "Normal ağırlık",
      "overweight": "Fazla Kilolu",
      "obesity": "Obez",
    }
  },
  de: {
    translation: {
        "KALORI_HESAPLAMA": "KALORIENBERECHNUNG",
        "ALERJI_HESAPLAMA": "ALLERGIEBERECHNUNG",
        "BMI_HESAPLAMA": "BMI-BERECHNUNG",
        "ANTREMAN_NABZI_HESAPLAMA": "TRAININGSPULSBERECHNUNG",
        "BEL_KALÇA_ORANI_HESAPLAMA": "BERECHNUNG DES HÜFT-TAILLE-VERHÄLTNISSES",
        "gewicht": "Gewicht (in Kg):",
        "groesse": "Größe (in Zentimeter):",
        "alter": "Alter (in Jahren):",
        "geschlecht": "Wählen Sie Ihr Geschlecht:",
        "maennlich": "Männlich",
        "weiblich": "Weiblich",
        "kalorienbedarf": "Ihr täglicher Kalorienbedarf:",
        "berechnen": "Berechnen",
        "temizle": "Löschen",
        "geschlechtWarnung": "Bitte wählen Sie Ihr Geschlecht",
        "einheitKg": "Gewicht (Kg)",
        "einheitCm": "Größe (Cm)",
        "einheitJahre": "Alter",
        "bosAlanUyarisi": "Bitte füllen Sie alle Felder aus",
        "CRADLE_CAP": "Hatten Sie als Baby eine Milchschorf?",
        "ECZEMA": "Hatten Sie als Kind Ekzeme?",
        "FAMILY_HISTORY": "Gibt es in Ihrer Familie eine Vorgeschichte von Allergien, Asthma, Ekzemen oder Heuschnupfen?",
        "RED_EYES": "Leiden Sie häufig an roten, juckenden oder tränenden Augen?",
        "SNEEZING": "Niesen Sie oft?",
        "RUNNY_NOSE": "Leiden Sie häufig an einer verstopften Nase und klarem, flüssigem Ausfluss?",
        "SEASONAL": "Verschlimmern sich Ihre Symptome in bestimmten Jahreszeiten?",
        "OUTDOORS": "Verschlimmern sich Ihre Symptome, wenn Sie nach draußen gehen?",
        "TIREDNESS": "Fühlen Sie sich besonders müde, wenn Sie Symptome haben?",
        "IMPROVEMENT": "Verbessern sich Ihre Symptome, wenn Sie in die Berge oder ans Meer gehen?",
        "YES": "Ja",
        "NO": "Nein",
        "UNKNOWN": "Ich weiß nicht",
        "EVALUATE": "Auswerten",
        "CLEAR": "Löschen",
        "RESPONSE_ALERT": "Bitte beantworten Sie mindestens eine Frage.",
        "RESULT_LOW": "Ihr Ergebnis: Es ist unwahrscheinlich, dass Sie eine Allergie haben. Wenn Ihre Symptome jedoch anhalten, sollten Sie einen Allergologen für eine endgültige Diagnose konsultieren.",
        "RESULT_HIGH": "Ihr Ergebnis: Es ist wahrscheinlich, dass Sie eine Allergie haben. Sie sollten einen Allergologen für eine endgültige Diagnose aufsuchen. Dieser Test kann nur eine erste Orientierung bieten und ersetzt keinen Arztbesuch.",
        "severeUnderweight": "Stark Untergewichtig",
        "moderateUnderweight": "Mäßig Untergewichtig",
        "mildUnderweight": "Leicht Untergewichtig",
        "normal": "Normal",
        "overweight": "Übergewichtig",
        "obesity": "Fettleibig",
        "calculateBMI": "BMI Berechnen",
        "clearFields": "Felder Leeren",
        "AGE": "Alter",
        "RESTING_PULSE": "Ruhepuls",
        "ACTIVITY_LEVEL": "Was beschreibt Sie am besten?",
        "ACTIVITY_OPTIONS": [
        "Seit Jahren sehr inaktiv",
        "Durchschnittlich, untrainiert",
        "Fitnessorientierte Ältere",
        "Gelegentliche, unstrukturierte körperliche Aktivität",
        "Mindestens 2 Mal pro Woche aktiv",
        "Mindestens 4 Mal pro Woche aktiv (Sportler)",
        "Hochleistungs-, Profisportler",
      ],
        "CALCULATE": "Berechnen",
        "CLEAR": "Löschen",
        "OPTIMAL_TRAINING_PULSE": "Ihr optimaler Trainingspuls liegt ungefähr bei:",
        "waist": "Taillenumfang (Cm)",
        "hip": "Hüftumfang (Cm)",
        "gender": "Wählen Sie Ihr Geschlecht:",
        "calculate": "Berechnen",
        "clear": "Löschen",
        "result": "Ihr Taille-Hüfte-Verhältnis:",
        "male": "Männlich",
        "female": "Weiblich",
        "normal": "Normalgewicht",
        "overweight": "Übergewicht",
        "obesity": "Fettleibigkeit",
    }
  }
};

i18n
  .use(initReactI18next) 
  .use(LanguageDetector) 
  .init({
    resources,
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
