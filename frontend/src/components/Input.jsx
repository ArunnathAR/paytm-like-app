function Input({lebel , placeholder,type,onChange}){
    return(
        <>
             <h1 className="mt-4 text-sm font-semibold text-slate-700">{lebel}</h1>
            <input type={type} onChange={onChange} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-normal text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white focus:shadow-sm" />
            </>
    )
}
export default Input
