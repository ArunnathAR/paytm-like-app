function SubHeading({lebel , subLebel}){
    return(
        <div className="space-y-1">
             <h4 className="text-center text-sm font-medium text-slate-500">{lebel}</h4>
                <h4 className="text-center text-sm font-medium text-slate-500">{subLebel}</h4>
        </div>
    )
}
export default SubHeading;
