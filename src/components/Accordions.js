import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Form5 from './Form5';
import './Accordions.css';

export default function AccordionExpandIcon() {
  return (
    <div>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="typographyTitle">KALORİ HESAPLAMA</Typography>
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
          <Typography className="typographyTitle">ALERJİ HESAPLAMA</Typography>
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
          <Typography className="typographyTitle">BMI HESAPLAMA</Typography>
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
          <Typography className="typographyTitle">ANTREMAN NABZI HESAPLAMA</Typography>
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
          <Typography className="typographyTitle">BEL KALÇA ORANI HESAPLAMA</Typography>
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
