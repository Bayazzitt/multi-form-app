import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './forms.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import '../i18n';
import { useTranslation } from 'react-i18next';

const Form1 = () => {
    const { t } = useTranslation();

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [caloricNeed, setCaloricNeed] = useState('');

    const texts = {
        gewicht: "Ağırlık (Kg olarak):",
        groesse: "Boy (Santimetre olarak):",
        alter: "Yaş (Yıl olarak):",
        geschlecht: "Cinsiyetinizi Seçin:",
        maennlich: "Erkek",
        weiblich: "Kadın",
        kalorienbedarf: "Günlük Kalori İhtiyacınız:",
        berechnen: "Hesapla",
        temizle: "Temizle", 
        geschlechtWarnung: "Lütfen cinsiyetinizi seçin",
        einheitKg: "Ağırlık (Kg)",
        einheitCm: "Boy (Cm)",
        einheitJahre: "Yaş",
        bosAlanUyarisi: "Lütfen tüm alanları doldurunuz",
    };

    const calculateCaloricNeed = () => {
        if (!weight || !height || !age) {
            alert(texts["bosAlanUyarisi"]);
            return;
        }
    
        let result = 0;
        if (gender === "m") {
            result = 66.47 + 13.7 * weight + 5 * height - 6.5 * age;
        } else if (gender === "w") {
            result = 665 + 9.6 * weight + 1.8 * height - 4.7 * age;
        }
        
        setCaloricNeed(`${texts.kalorienbedarf} ${result.toFixed(2)}`);
    };

    const clearForm = () => {
        setWeight('');
        setHeight('');
        setAge('');
        setGender('');
        setCaloricNeed('');
    };

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <TextField  size="small" variant="outlined"  label={t('einheitKg')}  id="outlined-basic" type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TextField className='customMargin' size="small" variant="outlined"  label={t('einheitCm')} id="outlined-basic" type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TextField className='customMargin' size="small" variant="outlined"  label={t('einheitJahre')} id="outlined-basic" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FormControl className='customMargin'>
                                <RadioGroup
                                    aria-labelledby="gender-radio-group-label"
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <FormControlLabel value="m" control={<Radio />} label={t('maennlich')} />
                                    <FormControlLabel value="w" control={<Radio />} label={t('weiblich')} />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontWeight: 'bold' }}>{caloricNeed}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{ textAlign: 'left' }}>
                            <Button className='customMargin' size="small" variant="Contained" onClick={calculateCaloricNeed}>{t('berechnen')}</Button>
                            <Button className='customMargin' size="small" variant="Contained" color="secondary" onClick={clearForm}>{t('temizle')}</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Form1;
