function TextField({ onChange,placeholder, value,label, name }) {
  return (
    <div className="space-y-8 mt-20">
      <label className="pr-2 text-2xl" htmlFor={name}>
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
