function TwoColsFileInput({ children }) {
  return <div className="grid sm:grid-cols-2 sm:gap-16">{children}</div>;
}

function Col({ children }) {
  return <div>{children}</div>;
}

TwoColsFileInput.Col = Col;

export default TwoColsFileInput;
