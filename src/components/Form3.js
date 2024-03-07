import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './forms.css';
import { useTranslation } from 'react-i18next';

const Form3 = () => {
  const { t } = useTranslation();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');

  const calculateBMI = (weight, height) => {
    const result = Math.round((weight / ((height / 100) ** 2)) * 1000) / 1000;
    let category = "";
    if (result < 16) {
      category = t("severeUnderweight");
    } else if (result <= 17) {
      category = t("moderateUnderweight");
    } else if (result <= 18.5) {
      category = t("mildUnderweight");
    } else if (result <= 25) {
      category = t("normal");
    } else if (result <= 30) {
      category = t("overweight");
    } else if (result > 30) {
      category = t("obesity");
    } else {
      alert(t("bosAlanUyarisi"));
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
          <TextField label={t("einheitKg")} size="small" variant="outlined" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div>
          <TextField className='customMargin' label={t("einheitCm")} size="small" variant="outlined" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div style={{ textAlign: 'left' }}>
          <Button style={{ marginTop: '25px', marginRight: '10px' }} size="small" variant="Contained" onClick={handleCalculateClick}>{t("berechnen")}</Button>
          <Button style={{ marginTop: '25px', marginRight: '10px' }} size="small" variant="Contained" onClick={handleClearClick}>{t("temizle")}</Button>
        </div>
        <div style={{ fontWeight: 'bold' }} className='customMargin'>
          {bmiResult}
        </div>
      </div>
    </div>
  );
};

export default Form3;
