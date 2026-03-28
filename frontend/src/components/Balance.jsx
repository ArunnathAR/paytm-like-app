function Balance({amount}){
    const roundedAmount = Math.round(Number(amount) || 0)

    return (
        <div className="rounded-[28px] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white px-6 py-5 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-600">Available balance</p>
            <div className="mt-3 flex items-end gap-3">
            <h1 className="text-3xl font-bold text-slate-900" >Rs {roundedAmount}</h1>
            <h5 className="pb-1 text-sm font-medium text-slate-500">ready to send</h5>
            </div>
        </div>
    )
}
export default Balance
