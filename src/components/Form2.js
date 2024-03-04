import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from '@mui/material/Button';
import './forms.css';
const AllergyForm = () => {
  const [language] = useState("tr"); 
  const [results, setResults] = useState("");
  const [responses, setResponses] = useState({});

  const questions = {
    tr: [
      { id: "cradleCap", text: "Bebekken süt kabuğu (kepçe kabuğu) oldu mu?" },
      { id: "eczema", text: "Çocukken egzama geçirdiniz mi?" },
      {
        id: "familyHistory",
        text: "Ailenizde alerji, astım, egzama veya saman nezlesi var mı?",
      },
      {
        id: "redEyes",
        text: "Sık sık kızarmış, kaşıntılı veya yaşaran gözlerden muzdarip misiniz?",
      },
      { id: "sneezing", text: "Sık sık hapşırıyor musunuz?" },
      {
        id: "runnyNose",
        text: "Sık sık tıkanmış burun ve berrak, sıvı akıntıdan muzdarip misiniz?",
      },
      {
        id: "seasonal",
        text: "Belirli mevsimlerde semptomlarınız kötüleşiyor mu?",
      },
      {
        id: "outdoors",
        text: "Dışarı çıktığınızda semptomlarınız kötüleşiyor mu?",
      },
      {
        id: "tiredness",
        text: "Semptomlarınız olduğunda özellikle yorgun hissediyor musunuz?",
      },
      {
        id: "improvement",
        text: "Dağlara veya denize gittiğinizde semptomlarınızda iyileşme oluyor mu?",
      },
    ],
  };

  const labels = {
    tr: {
      yes: "Evet",
      no: "Hayır",
      unknown: "Bilmiyorum",
      evaluate: "Değerlendir",
      resultLow:
        "Sonucunuz: Muhtemelen alerjiniz yok. Ancak, semptomlarınız devam ederse, kesin bir sonuç ve tıbbi teşhis için bir alerji uzmanına danışmalısınız.",
      resultHigh:
        "Sonucunuz: Muhtemelen bir alerjiniz var. Kesin bir sonuç ve tıbbi teşhis için bir alerji uzmanına görünmelisiniz. Bu test yalnızca ilk yönlendirme sağlayabilir ve bir doktor ziyaretinin yerini alamaz.",
    },
  };

  const handleResponseChange = (questionId, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: value,
    }));
  };

  const evaluateForm = (e) => {
    e.preventDefault();
    const scores = Object.values(responses);
    const total = scores.reduce((acc, score) => acc + parseInt(score, 10), 0);

    const result = total < 10 ? labels.tr.resultLow : labels.tr.resultHigh;
    setResults(result);
  };

  return (
    <div>
      <form onSubmit={evaluateForm}>
        <table>
          <tbody>
            {questions.tr.map((question) => (
              <tr key={question.id}>
                <td>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">{question.text}</FormLabel>
                    <RadioGroup
                      aria-label={question.text}
                      name={String(question.id)}
                      value={responses[question.id]}
                      onChange={(event) =>
                        handleResponseChange(question.id, event.target.value)
                      }>
                      <label>
                        <Radio
                          value="2"
                          checked={responses[question.id] === "2"}
                        />{" "}
                        {labels.tr.yes}
                      </label>
                      <label>
                        <Radio
                          value="0"
                          checked={responses[question.id] === "0"}
                        />{" "}
                        {labels.tr.no}
                      </label>
                      <label>
                        <Radio
                          value="1"
                          checked={responses[question.id] === "1"}
                        />{" "}
                        {labels.tr.unknown}
                      </label>
                    </RadioGroup>
                  </FormControl>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        
        <Button className='customMargin' type="submit" size="small" variant="Contained">{labels.tr.evaluate}</Button>
      </form>

      <div className='customMargin' style={{ fontWeight: 'bold' }}>{results}</div>
    </div>
  );
};

export default AllergyForm;
