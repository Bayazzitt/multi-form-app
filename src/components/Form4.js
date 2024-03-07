import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTranslation } from 'react-i18next'; // i18next'ten useTranslation hook'unu import edin

const Form4 = () => {
  const { t } = useTranslation(); // useTranslation hook'unu kullanarak çeviri fonksiyonunu alın
  const [formData, setFormData] = useState({
    alter: '',
    ruhepuls: '',
    sportlich: '',
    trainingspulsergebnis: '',
  });

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
      alert(t("bosAlanUyarisi")); // Çeviri anahtarını kullanın
      return;
    }

    const ergebnis = berechnung(alter, ruhepuls, sportlich);
    setFormData({ ...formData, trainingspulsergebnis: ergebnis });
  };

  const handleReset = () => {
    setFormData({
      alter: '',
      ruhepuls: '',
      sportlich: '',
      trainingspulsergebnis: '',
    });
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

  return (
    <div>
      <form name="trainingspulsberechnen">
        <Stack spacing={2}>
          <TextField size='small' name="alter" value={formData.alter} onChange={handleChange} label={t("AGE")} variant="outlined" />
          <TextField size='small' name="ruhepuls" value={formData.ruhepuls} onChange={handleChange} label={t("RESTING_PULSE")} variant="outlined" />
          <FormControl component="fieldset">
            <FormLabel component="legend">{t("ACTIVITY_LEVEL")}</FormLabel>
            <RadioGroup row name="sportlich" value={formData.sportlich} onChange={handleRadioChange}>
              {t("ACTIVITY_OPTIONS", { returnObjects: true }).map((option, index) => (
                <FormControlLabel key={index} value={(index + 1) * 0.1} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
          <Button type="submit" variant="Contained" onClick={doSomething}>{t("CALCULATE")}</Button>
          <Button variant="Contained" onClick={handleReset}>{t("CLEAR")}</Button>
          {formData.trainingspulsergebnis && (
            <div style={{ fontWeight: 'bold' }}>
              {t("OPTIMAL_TRAINING_PULSE")} {formData.trainingspulsergebnis}
            </div>
          )}
        </Stack>
      </form>
    </div>
  );
};

export default Form4;
