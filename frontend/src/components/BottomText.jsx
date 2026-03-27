import {Link} from 'react-router-dom'
function BottomText({label ,path,text}){
    return <>
           <p className="mt-6 text-center text-sm text-slate-500">{label}<Link to={path}className="ml-1 cursor-pointer font-semibold text-slate-800 underline underline-offset-4">{text}</Link></p>
    </>
}
export default BottomText
