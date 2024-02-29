import React, { useState } from 'react';
import './forms.css';

const WaistHipRatioCalculator = () => {
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState('');
  const [language, setLanguage] = useState('en');

  const whrLabels = {
    en: {
      waist: 'Waist circumference (in cm):',
      hip: 'Hip circumference (in cm):',
      gender: 'Select your gender:',
      calculate: 'Calculate',
      result: 'Your Waist-Hip Ratio is:',
      male: 'Male',
      female: 'Female',
      normal: 'Normal weight',
      overweight: 'Overweight',
      obesity: 'Obesity',
    },
    de: {
      waist: 'Bauchumfang (in cm):',
      hip: 'Hüftumfang (in cm):',
      gender: 'Wählen Sie Ihr Geschlecht:',
      calculate: 'Berechnen',
      result: 'Ihr Taille-Hüfte-Verhältnis beträgt:',
      male: 'männlich',
      female: 'weiblich',
      normal: 'Normalgewicht',
      overweight: 'Übergewicht',
      obesity: 'Adipositas',
    },
    tr: {
      waist: 'Bel çevresi (cm cinsinden):',
      hip: 'Kalça çevresi (cm cinsinden):',
      gender: 'Cinsiyetinizi seçin:',
      calculate: 'Hesapla',
      result: 'Bel-Kalça Oranınız:',
      male: 'Erkek',
      female: 'Kadın',
      normal: 'Normal ağırlık',
      overweight: 'Fazla Kilolu',
      obesity: 'Obez',
    },
  };

  const calculateWHR = () => {
    const waistValue = parseFloat(waist);
    const hipValue = parseFloat(hip);

    if (!waistValue || !hipValue || !gender) {
      alert('Please enter your details.');
      return;
    }

    const ratio = Math.round((waistValue / hipValue) * 1000) / 1000;
    let category = '';

    if (gender === 'm') {
      if (ratio < 0.9) category = whrLabels[language].normal;
      else if (ratio < 1) category = whrLabels[language].overweight;
      else category = whrLabels[language].obesity;
    } else if (gender === 'w') {
      if (ratio < 0.8) category = whrLabels[language].normal;
      else if (ratio < 0.85) category = whrLabels[language].overweight;
      else category = whrLabels[language].obesity;
    }

    setResult(`${ratio} ${category}`);
  };

  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="tr">Türkçe</option>
      </select>

      <div>
        <label>{whrLabels[language].waist}</label>
        <input
          type="text"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
        /> cm
      </div>

      <div>
        <label>{whrLabels[language].hip}</label>
        <input
          type="text"
          value={hip}
          onChange={(e) => setHip(e.target.value)}
        /> cm
      </div>

      <div>
        <label>{whrLabels[language].gender}</label>
        <input
          type="radio"
          name="gender"
          value="m"
          onChange={(e) => setGender(e.target.value)}
        />{' '}
        {whrLabels[language].male}
        <input
          type="radio"
          name="gender"
          value="w"
          onChange={(e) => setGender(e.target.value)}
        />{' '}
        {whrLabels[language].female}
      </div>

      <div>
        <button onClick={calculateWHR}>{whrLabels[language].calculate}</button>
      </div>

      <div>
        {whrLabels[language].result} <input type="text" value={result} readOnly />
      </div>
    </div>
  );
};

export default WaistHipRatioCalculator;
