import React, { useState } from 'react';
import './forms.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const WaistHipRatioCalculator = () => {
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [gender, setGender] = useState('');
  const [result, setResult] = useState('');
  const [language, setLanguage] = useState('tr');

  const whrLabels = {
    tr: {
      waist: 'Bel Çevresi (Cm)',
      hip: 'Kalça Çevresi (Cm)',
      gender: 'Cinsiyetinizi seçin:',
      calculate: 'Hesapla',
      clear: 'Temizle',
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
          label={whrLabels[language].waist}
          variant="outlined"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
        />
      </div>

      <div>
        <TextField className='customMargin'
          size='small'
          label={whrLabels[language].hip}
          variant="outlined"
          value={hip}
          onChange={(e) => setHip(e.target.value)}
        />
      </div>

      <div className='customMargin'>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel
              value="m"
              control={<Radio />}
              label={whrLabels[language].male}
            />
            <FormControlLabel
              value="w"
              control={<Radio />}
              label={whrLabels[language].female}
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className='customMargin'>
        <Button variant="Contained" onClick={calculateWHR}>
          {whrLabels[language].calculate}
        </Button>
        <Button variant="Contained" onClick={clearForm} style={{ marginLeft: '10px' }}>
          {whrLabels[language].clear}
        </Button>
      </div>

      <div className='customMargin'>
         <td style={{ fontWeight: 'bold' }}>{result}</td>
      </div>
    </div>
  );
};

export default WaistHipRatioCalculator;
