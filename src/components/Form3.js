import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import './forms.css';

const Form3 = () => {
  const [language, setLanguage] = useState('tr');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');

  const bmiLabels = {
    tr: {
      weight: "Ağırlık (Kg)",
      height: "Boy (Cm)",
      yourBmi: "BMI'nız:",
      calculate: "Hesapla",
      clear: "Temizle",
      categories: {
        severeUnderweight: "Ciddi Düşük Kilolu",
        moderateUnderweight: "Orta Düşük Kilolu",
        mildUnderweight: "Hafif Düşük Kilolu",
        normal: "Normal",
        overweight: "Fazla Kilolu",
        obesity: "Obez",
      },
    },
  };

  const calculateBMI = (weight, height) => {
    const result = Math.round((weight / ((height / 100) ** 2)) * 1000) / 1000;
    let category = "";
    if (result < 16) {
      category = bmiLabels[language].categories.severeUnderweight;
    } else if (result <= 17) {
      category = bmiLabels[language].categories.moderateUnderweight;
    } else if (result <= 18.5) {
      category = bmiLabels[language].categories.mildUnderweight;
    } else if (result <= 25) {
      category = bmiLabels[language].categories.normal;
    } else if (result <= 30) {
      category = bmiLabels[language].categories.overweight;
    } else if (result > 30) {
      category = bmiLabels[language].categories.obesity;
    } else {
      alert("Lütfen bilgilerinizi girin.");
      return null;
    }
    setBmiResult(`${result} ${category}`);
  };

  const handleCalculateClick = () => {
    calculateBMI(weight, height);
  };

  const handleClearClick = () => {
    setWeight('');
    setHeight('');
    setBmiResult('');
  };

  return (
    <div>
      <div className="form-container">
        <div>
          <TextField label={bmiLabels[language].weight} size="small" variant="outlined" value={weight} type="text" onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div>
          <TextField className='customMargin' label={bmiLabels[language].height} size="small" variant="outlined" value={height} type="text" onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div style={{ textAlign: 'left' }}>
          <Button  style={{ marginTop: '25px', marginRight: '10px' }}  size="small" variant="Contained" onClick={handleCalculateClick}>{bmiLabels[language].calculate}</Button>
          <Button  style={{ marginTop: '25px', marginRight: '10px' }}  size="small" variant="Contained" onClick={handleClearClick}>{bmiLabels[language].clear}</Button>
        </div>
        <div style={{ fontWeight: 'bold' }} className='customMargin'>
          {bmiResult}
        </div>
      </div>
    </div>
  );
};

export default Form3;
