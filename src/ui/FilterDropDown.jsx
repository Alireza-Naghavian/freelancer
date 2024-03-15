import { useSearchParams } from "react-router-dom"

function  FilterDropDown({options,filterFiled}) {
    const [searchParams,setSearchParams] = useSearchParams();
    const category = searchParams.get(filterFiled)||"";
    const handleChange =(e)=>{
        searchParams.set(filterFiled,e.target.value)
        setSearchParams(searchParams);
    }
  return (
   <select value={category} onChange={handleChange} className="w-[300px] ml-4 mt-12 py-2 text-xs regular-input">
    {options.map((option)=> <option key={option.value} value={option.value}>{option.label}</option>)}
   </select>
  )
}

export default FilterDropDown