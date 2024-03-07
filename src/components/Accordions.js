import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from '@mui/material/Button';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import './Accordions.css';
import { useTranslation } from 'react-i18next';

export default function AccordionExpandIcon() {
  const { t, i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language); // İlk başlangıç dilini i18n'nin mevcut dilinden al

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang); // Seçili dili güncelle
  };

  // Seçili dil butonunu görsel olarak farklı göstermek için stil
  const selectedStyle = {
    backgroundColor: '#1976d2', // Seçili butonun arka plan rengi
    color: 'white', // Seçili butonun yazı rengi
  };

  return (
    <div>
      <div style={{ textAlign: 'center'}}>
        <Button 
          size="small" 
          variant="Contained" 
          style={selectedLang === 'tr' ? selectedStyle : {}} // Seçili dil 'tr' ise özel stil uygula
          onClick={() => handleChangeLanguage('tr')}
        >
          TR
        </Button>
        <Button 
          style={{ marginLeft: '10px', ...(selectedLang === 'en' ? selectedStyle : {}) }} 
          size="small" 
          variant="Contained" 
          onClick={() => handleChangeLanguage('en')}
        >
          EN
        </Button>
        <Button 
          style={{ marginLeft: '10px', ...(selectedLang === 'de' ? selectedStyle : {}) }} 
          size="small" 
          variant="Contained" 
          onClick={() => handleChangeLanguage('de')}
        >
          DE
        </Button>
      </div>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="typographyTitle">{t('KALORI_HESAPLAMA')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Form1 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="typographyTitle">{t('ALERJI_HESAPLAMA')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Form2 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography className="typographyTitle">{t('BMI_HESAPLAMA')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Form3 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography className="typographyTitle">{t('ANTREMAN_NABZI_HESAPLAMA')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Form4 />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography className="typographyTitle">{t('BEL_KALÇA_ORANI_HESAPLAMA')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Form5 />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
