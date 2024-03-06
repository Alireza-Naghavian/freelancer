function TextField({ onChange,placeholder, value,label, name,mt,spaceY }) {
  return (
    <div className={`${mt} ${spaceY}`}>
      <label className="pr-2 text-xl" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        type="text"
        placeholder={placeholder}
        className="tr-300 regular-input"
      />
    </div>
  );
}

export default TextField;
