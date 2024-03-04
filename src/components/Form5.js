import React, { useState } from 'react';
import './forms.css';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const WaistHipRatioCalculator = () => {
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState('');
  const [language, setLanguage] = useState('tr'); // Varsayılan dil olarak Türkçe ayarlandı

  const whrLabels = {
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
      alert('Lütfen detaylarınızı girin.');
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
      <div>
        <label>{whrLabels[language].waist}</label>
        <input
          type="text"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
        /> 
      </div>

      <div>
        <label>{whrLabels[language].hip}</label>
        <input
          type="text"
          value={hip}
          onChange={(e) => setHip(e.target.value)}
        /> 
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
