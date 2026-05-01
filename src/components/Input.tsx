
type InputProps = {
    placeholder?:string,
    children?:string,
    value?:string | ''
    onChange?:any
    className?:any
    
}

function Input({placeholder,onChange,value, className}:InputProps) {
  return (
    <div>
        <input type="text" onChange={onChange} placeholder={placeholder} value={value} className={className}/>
    </div>
  )
}

export default Input