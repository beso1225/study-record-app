import PropTypes from "prop-types";

export const ShowRecords = (props) => {
  const { sum, records } = props;
  return (
    <div>
      <p>合計時間 {sum}/1000時間</p>
      <ul>
        {records.map((record, index) => {
          return (
            <li key={index}>
              <span>{record.title}</span>
              <span> {record.time}時間</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ShowRecords.propTypes = {
  sum: PropTypes.number.isRequired,
  records: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
    })
  ).isRequired,
};
