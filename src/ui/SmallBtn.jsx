function SmallBtn({ children, mt, mrn, color, hover }) {
  return (
    <button
      className={`${mt} ${mrn} -mr-10 flex
      ${color} w-fit 
     px-4 py-2 rounded-xl gap-x-1 tr-300 hover:${hover}`}
    >
      {children}
    </button>
  );
}

export default SmallBtn;
