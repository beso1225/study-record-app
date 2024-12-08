import PropTypes from "prop-types";

export const InputRecord = (props) => {
  const {
    recordTitleText,
    recordTime,
    onChangeRecordTitleText,
    onChangeRecordTime,
    onClick,
  } = props;
  return (
    <div>
      <div>
        <span>学習内容</span>
        <input
          type="text"
          placeholder="学習内容"
          value={recordTitleText}
          onChange={onChangeRecordTitleText}
        />
      </div>
      <div>
        <span>学習時間</span>
        <input
          type="text"
          placeholder="0"
          value={recordTime}
          onChange={onChangeRecordTime}
        />
        <span>時間</span>
      </div>
      <button onClick={() => onClick(recordTitleText, recordTime)}>登録</button>
      <p>入力されている学習内容: {recordTitleText}</p>
      <p>入力されている学習時間: {recordTime}時間</p>
    </div>
  );
};

InputRecord.propTypes = {
  recordTitleText: PropTypes.string.isRequired,
  recordTime: PropTypes.string.isRequired,
  onChangeRecordTitleText: PropTypes.func.isRequired,
  onChangeRecordTime: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
