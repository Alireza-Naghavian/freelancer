function ValidTextField({
  type = "text",
  register,
  placeholder,
  label,
  name,
  mt,
  spaceY,
  required,
  validationSchema,
  errors,
}) {
  return (
    <div className={`${mt} ${spaceY}`}>
      <label className="pr-2 text-xl" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        placeholder={placeholder}
        className="tr-300 regular-input"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-5">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default ValidTextField;
