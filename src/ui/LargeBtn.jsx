/* eslint-disable react/prop-types */
function LargeBtn({ children,type }) {
  return <button type={type} className="largeBtn--primary mt-8 tr-300">{children}</button>;
}

export default LargeBtn;
