import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTranslation } from 'react-i18next'; 

const Form4 = () => {
  const { t } = useTranslation();
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
      alert(t("bosAlanUyarisi")); 
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
        <div>
          <TextField size='small' name="alter" value={formData.alter} onChange={handleChange} label={t("AGE")} variant="outlined" />
        </div>
        <div>
          <TextField className='customMargin' size='small' name="ruhepuls" value={formData.ruhepuls} onChange={handleChange} label={t("RESTING_PULSE")} variant="outlined" />
        </div>
          <FormControl className='customMargin' component="fieldset">
            <FormLabel component="legend">{t("ACTIVITY_LEVEL")}</FormLabel>
            <RadioGroup className='customMargin' row name="sportlich" value={formData.sportlich} onChange={handleRadioChange}>
              {t("ACTIVITY_OPTIONS", { returnObjects: true }).map((option, index) => (
                <FormControlLabel key={index} value={(index + 1) * 0.1} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
          <Button className='customMargin' type="submit" variant="Contained" onClick={doSomething}>{t("CALCULATE")}</Button>
          <Button className='customMargin' variant="Contained" onClick={handleReset}>{t("CLEAR")}</Button>
          {formData.trainingspulsergebnis && (
            <div className='customMargin' style={{ fontWeight: 'bold' }}>
              {t("OPTIMAL_TRAINING_PULSE")} {formData.trainingspulsergebnis}
            </div>
          )}
      </form>
    </div>
  );
};

export default Form4;
