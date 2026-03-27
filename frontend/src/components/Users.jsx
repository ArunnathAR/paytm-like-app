import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { API_BASE_URL } from "../config"

function Users() {
    const [User, setUser] = useState([])
    const [filter, setFilter] = useState('')
    const navigate = useNavigate() // Corrected use of useNavigate

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/v1/user/bulk?filter=${filter}`)
        .then((res) => {
            setUser(res.data.user)
        })
    }, [filter])

    return (
        <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-6 shadow-sm">
            <div className="mb-6 flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-slate-900">People</h1>
            <p className="text-sm text-slate-500">Search for a user and send money in one tap.</p>
            </div>
            <input
                type="text"
                placeholder="Search user"
                className="mb-5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul className="space-y-3 text-black">
                {User.map((u) => { // Assuming each user has a unique `_id`
                    return (
                        <div key={u._id} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 transition hover:bg-white hover:shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white">
                                    <span className="text-base font-semibold">{u.firstName[0].toUpperCase()}</span>
                                </div>
                                <li className="text-base font-semibold text-slate-800">{u.firstName}</li>
                            </div>
                            <button
                                onClick={() => {
                                    navigate(`/send?id=${u._id}`, {
                                        state: { name: u.firstName }
                                    })
                                }}
                                className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                            >
                                Send money
                            </button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Users
