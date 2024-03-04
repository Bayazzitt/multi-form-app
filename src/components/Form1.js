import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './forms.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const Form1 = () => {
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
        geschlechtWarnung: "Lütfen cinsiyetinizi seçin",
        einheitKg: "Ağırlık (Kg)",
        einheitCm: "Boy (Cm)",
        einheitJahre: "Yaş",
    };

    const calculateCaloricNeed = () => {
        if (!gender) {
            alert(texts["geschlechtWarnung"]);
            return;
        }

        let result = 0;
        if (gender === "m") {
            result = 66.47 + 13.7 * weight + 5 * height - 6.5 * age;
        } else if (gender === "w") {
            result = 665 + 9.6 * weight + 1.8 * height - 4.7 * age;
        }
        
        setCaloricNeed(result.toFixed(2));
    };

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <TextField className='customMargin' size="small" variant="outlined"  label={texts.einheitKg} id="outlined-basic" type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TextField className='customMargin' size="small" variant="outlined"  label={texts.einheitCm} id="outlined-basic" type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TextField className='customMargin' size="small" variant="outlined"  label={texts.einheitJahre} id="outlined-basic" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="gender-radio-group-label"
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <FormControlLabel value="m" control={<Radio />} label={texts.maennlich} />
                                    <FormControlLabel value="w" control={<Radio />} label={texts.weiblich} />
                                </RadioGroup>
                            </FormControl>
                        </td>
                    </tr>
                    <tr>
                        <td>{texts.kalorienbedarf}</td>
                        <td style={{ fontWeight: 'bold' }}>{caloricNeed}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{ textAlign: 'left' }}>
                            <Button className='customMargin' size="small" variant="Contained" onClick={calculateCaloricNeed}>{texts.berechnen}</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Form1;
