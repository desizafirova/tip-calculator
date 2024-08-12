export default function Output({ bill, tip }) {
  return (
    <p className="output flex">
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </p>
  );
}
