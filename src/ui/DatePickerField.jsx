import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
function DatePickerField({ date, setDate, label }) {
  return (
    <div className="flex flex-col items-start">
      <span className="mb-2 block text-secondary-700 ">{label}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="regular-input"
        calendarPosition="bottom-center"
        onChange={(date) => setDate(date)}
        value={date}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}

export default DatePickerField;
