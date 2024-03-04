import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './forms.css';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Form4 = () => {
  const [formData, setFormData] = useState({
    alter: '',
    ruhepuls: '',
    sportlich: '',
    trainingspulsergebnis: '',
  });

  const formTexts = {
    tr: {
      age: "Yaş",
      restingPulse: "Dinlenme Nabzı",
      activityLevel: "Sizi en iyi hangisi tanımlar?",
      activityOptions: [
        "Yıllardır çok hareketsiz",
        "Ortalama, eğitimsiz",
        "Fitness odaklı yaşlılar",
        "Ara sıra, yapılandırılmamış fiziksel aktivite",
        "Haftada en az 2 kez aktif",
        "Haftada en az 4 kez aktif (sporcular)",
        "Yüksek performanslı, profesyonel sporcular",
      ],
      calculate: "Hesapla",
      optimalPulse: "Optimal antrenman nabzınız yaklaşık:",
    },
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (event) => {
    setFormData({ ...formData, sportlich: event.target.value });
  };

  const doSomething = (event) => {
    event.preventDefault();
    const { alter, ruhepuls, sportlich } = formData;

    if (!isNumber(alter) || !isNumber(ruhepuls) || !isNumber(sportlich)) {
      alert("Lütfen Girdiğiniz Değerleri Kontrol Edin.");
      return;
    }

    const ergebnis = berechnung(alter, ruhepuls, sportlich);
    setFormData({ ...formData, trainingspulsergebnis: ergebnis });
  };

  const berechnung = (alter, ruhepuls, sportlich) => {
    const result =
      parseInt(ruhepuls) +
      (220 - (2 / 3) * parseInt(alter) - parseInt(ruhepuls)) *
        parseFloat(sportlich);
    return Math.floor(result);
  };

  const isNumber = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };

  const texts = formTexts['tr'];

  return (
    <div>
      <form name="trainingspulsberechnen" className="csc-mailform">
        <Stack spacing={2}>
          <TextField size='small' name="alter" value={formData.alter} onChange={handleChange} label={texts.age} variant="outlined" />
          <TextField size='small' name="ruhepuls" value={formData.ruhepuls} onChange={handleChange} label={texts.restingPulse} variant="outlined" />
          <FormControl component="fieldset">
            <FormLabel component="legend">{texts.activityLevel}</FormLabel>
            <RadioGroup row name="sportlich" value={formData.sportlich} onChange={handleRadioChange}>
              {texts.activityOptions.map((option, index) => (
                <FormControlLabel key={index} value={(index + 1) * 0.1} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
          <Button type="submit" variant="Contained" onClick={doSomething}>{texts.calculate}</Button>
          {formData.trainingspulsergebnis && (
            <div style={{ fontWeight: 'bold' }}>
              {texts.optimalPulse} {formData.trainingspulsergebnis}<br />&nbsp;
            </div>
          )}
        </Stack>
      </form>
    </div>
  );
};

export default Form4;
