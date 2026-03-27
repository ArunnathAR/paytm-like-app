function Button ({label,onClick}){
    return(
        <>
        <button onClick={onClick} className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 shadow-sm">{label}</button>
        </>
    )
}
export default Button
