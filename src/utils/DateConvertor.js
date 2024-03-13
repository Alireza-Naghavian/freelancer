const dataConvertor = (dateValue,convertTo)=>{
    return new Date(dateValue).toLocaleDateString(`${convertTo}`)
}
export default dataConvertor