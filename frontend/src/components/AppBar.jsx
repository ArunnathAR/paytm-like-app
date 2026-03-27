import Heading from "./Heading"
function AppBar(){
    return (
        <div className="rounded-[28px] border border-slate-200 bg-white/90 px-6 py-4 shadow-sm backdrop-blur">
        <div className="flex items-center justify-between gap-4">
        <Heading label={"PaytmApp"}/>
        <h1 className="text-sm font-semibold text-slate-600">Hello, user</h1>
        </div>
        </div>
    )
}
export default AppBar
