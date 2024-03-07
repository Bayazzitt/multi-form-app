import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from '@mui/material/Button';
import './forms.css';
import '../i18n'; 
import { useTranslation } from 'react-i18next';

const AllergyForm = () => {
  const { t } = useTranslation();

  const [results, setResults] = useState("");
  const [responses, setResponses] = useState({});

  
  const questions = [
    { id: "cradleCap", text: t("CRADLE_CAP") },
    { id: "eczema", text: t("ECZEMA") },
    { id: "familyHistory", text: t("FAMILY_HISTORY") },
    { id: "redEyes", text: t("RED_EYES") },
    { id: "sneezing", text: t("SNEEZING") },
    { id: "runnyNose", text: t("RUNNY_NOSE") },
    { id: "seasonal", text: t("SEASONAL") },
    { id: "outdoors", text: t("OUTDOORS") },
    { id: "tiredness", text: t("TIREDNESS") },
    { id: "improvement", text: t("IMPROVEMENT") },
  ];

  const labels = {
    yes: t("YES"),
    no: t("NO"),
    unknown: t("UNKNOWN"),
    evaluate: t("EVALUATE"),
    clear: t("CLEAR"),
    resultLow: t("RESULT_LOW"),
    resultHigh: t("RESULT_HIGH"),
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
    const responseCount = Object.keys(responses).length;
    if (responseCount === 0) {
      alert(t("RESPONSE_ALERT"));
      return;
    }

    const result = total < 5 ? labels.resultLow : labels.resultHigh;
    setResults(result);
  };

  const handleClearForm = () => {
    setResponses({});
    setResults("");
  };

  return (
    <div>
      <form onSubmit={evaluateForm}>
        <table>
          <tbody>
            {questions.map((question) => (
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
                        {labels.yes}
                      </label>
                      <label>
                        <Radio
                          value="0"
                          checked={responses[question.id] === "0"}
                        />{" "}
                        {labels.no}
                      </label>
                      <label>
                        <Radio
                          value="1"
                          checked={responses[question.id] === "1"}
                        />{" "}
                        {labels.unknown}
                      </label>
                    </RadioGroup>
                  </FormControl>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Button className='customMargin' type="submit" size="small" variant="Contained">{labels.evaluate}</Button>
        <Button className='customMargin' onClick={handleClearForm} size="small" variant="Contained">{labels.clear}</Button>
      </form>

      <div className='customMargin' style={{ fontWeight: 'bold' }}>{results}</div>
    </div>
  );
};

export default AllergyForm;
