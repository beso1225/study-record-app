import { Helmet } from "react-helmet-async";
import "./App.css";
import { useState } from "react";
import { InputRecord } from "./components/InputRecord";
import { ShowRecords } from "./components/ShowRecords";

export const App = () => {
  const [recordTitleText, setRecordTitleText] = useState("");
  const [recordTime, setRecordTime] = useState("0");
  const [records, setRecords] = useState([
    { title: "勉強の記録1", time: 1 },
    { title: "勉強の記録2", time: 3 },
    { title: "勉強の記録3", time: 5 },
  ]);

  const sum = records.reduce((sum, record) => sum + record.time, 0);

  const onChangeRecordTitleText = (event) => {
    setRecordTitleText(event.target.value);
  };

  const onChangeRecordTime = (event) => {
    setRecordTime(event.target.value);
  };

  const onClick = (title, time) => {
    if (title === "" || time === "0" || isNaN(time)) {
      setRecordTitleText("");
      setRecordTime("0");
      return;
    }
    const newRecords = [...records, { title, time: Number(time) }];
    setRecords(newRecords);
    setRecordTitleText("");
    setRecordTime("0");
  };

  return (
    <>
      <Helmet>
        <title>学習記録一覧</title>
      </Helmet>
      <div>
        <InputRecord
          recordTitleText={recordTitleText}
          recordTime={recordTime}
          onChangeRecordTitleText={onChangeRecordTitleText}
          onChangeRecordTime={onChangeRecordTime}
          onClick={onClick}
        />
        <div>
          {(recordTitleText === "" || recordTime === "0") && (
            <p>入力されていない項目があります．</p>
          )}
          {recordTime !== 0 && isNaN(recordTime) && (
            <p>数値を入力してください．</p>
          )}
        </div>
        <ShowRecords sum={sum} records={records} />
      </div>
    </>
  );
};
