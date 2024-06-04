import "./ItemDate.css";

function ItemDate(props) {
  const date = props.day;
  const month = props.month;
  const year = props.year;
  return (
    <div className="mfg-date">
      {/* <span>20</span>
      <span>June</span>
      <span>2002</span> */}

      <span>{date}</span>
      <span>{month}</span>
      <span>{year}</span>
    </div>
  );
}

export default ItemDate;
