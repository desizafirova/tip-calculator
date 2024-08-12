export default function Bill({ bill, onSetBill }) {
  return (
    <div className="flex">
      <p>How much was the bill?</p>
      <input
        type="number"
        placeholder="Bill value"
        className="inputField"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
