import { NavLink, useSearchParams } from "react-router-dom";

function Filter({ filterFiled, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const currentFilter = searchParams.get(filterFiled || options.at(0).value);
  const statusChangeHandler = (value) => {
    searchParams.set(filterFiled, value);
    setSearchParams(searchParams);
  };
  return (
    <div className="flex items-center ml-4 mt-12 py-2 ">
      <span className="text-sm ml-3">وضعیت :</span>
      <div className="flex items-center gap-x-4 border-secondary-500 text-primary-900 bg-slate-300 p-2 rounded-md">
        {options.map((item) => {
            const isActive = item.value === currentFilter;
          return (
            <button
            disabled={isActive}
              className={`px-2 py-px rounded-lg text-sm tr-300  ${isActive? "bg-primary-900 text-white": "bg-secondary-50 text-secondary-800"}`}
              key={item.value}
              onClick={() => statusChangeHandler(item.value)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
