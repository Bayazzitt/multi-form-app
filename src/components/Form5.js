import React, { useState } from 'react';
import './forms.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useTranslation } from 'react-i18next'; 

const WaistHipRatioCalculator = () => {
  const { t } = useTranslation(); 
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState('');

  const calculateWHR = () => {
    const waistValue = parseFloat(waist);
    const hipValue = parseFloat(hip);

    if (!waistValue || !hipValue || !gender) {
      alert(t('bosAlanUyarisi')); 
      return;
    }

    const ratio = Math.round((waistValue / hipValue) * 1000) / 1000;
    let category = '';

    if (gender === 'm') {
      if (ratio < 0.9) category = t('normal');
      else if (ratio < 1) category = t('overweight');
      else category = t('obesity');
    } else if (gender === 'w') {
      if (ratio < 0.8) category = t('normal');
      else if (ratio < 0.85) category = t('overweight');
      else category = t('obesity');
    }

    setResult(`${t('result')} ${ratio} (${category})`);
  };

  const clearForm = () => {
    setWaist('');
    setHip('');
    setGender('');
    setResult('');
  };

  return (
    <div>
      <div>
        <TextField
          size='small' 
          label={t('waist')}
          variant="outlined"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
        />
      </div>

      <div>
        <TextField
          className='customMargin'
          size='small'
          label={t('hip')}
          variant="outlined"
          value={hip}
          onChange={(e) => setHip(e.target.value)}
        />
      </div>

      <div className='customMargin'>
        <FormControl component="fieldset">
          <RadioGroup
            row
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel
              value="m"
              control={<Radio />}
              label={t('male')}
            />
            <FormControlLabel
              value="w"
              control={<Radio />}
              label={t('female')}
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className='customMargin'>
        <Button variant="Contained" onClick={calculateWHR}>
          {t('calculate')}
        </Button>
        <Button variant="Contained" onClick={clearForm} style={{ marginLeft: '10px' }}>
          {t('clear')}
        </Button>
      </div>

      <div className='customMargin'>
         <td style={{ fontWeight: 'bold' }}>{result}</td>
      </div>
    </div>
  );
};

export default WaistHipRatioCalculator;
