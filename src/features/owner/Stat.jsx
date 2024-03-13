function Stat({ icon, value, label,BgColor,textColor }) {
  return (
    <div className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondary-100 p-4 rounded-lg gap-x-4">
      <div className={`row-span-2 flex items-center justify-center p-2 aspect-square rounded-full ${BgColor} ${textColor}`}>
        {icon}
      </div>
      <h5 className="font-VazirBold text-secondary-500 text-lg self-center">
        {label}
      </h5>
      <p className="text-3xl font-VazirBold text-secondary-500">{value}</p>
    </div>
  );
}

export default Stat;
