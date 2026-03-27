import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { API_BASE_URL } from '../config';

export const SendMoney = () => {
    const [searchParams] = useSearchParams() 
    const location = useLocation();
    const navigate = useNavigate();
    const id = searchParams.get("id");
    const name = location.state?.name || "User";
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#dcfce7_100%)] px-4 py-10">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md flex-col justify-center">
                <div className="w-full rounded-[32px] border border-white/70 bg-white/95 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur">
                    <div className="flex flex-col space-y-1.5">
                        <h2 className="text-3xl font-bold text-center text-slate-900">Send Money</h2>
                        <p className="text-center text-sm text-slate-500">Confirm the receiver and enter the amount below.</p>
                    </div>
                    <div className="mt-8">
                        <div className="flex items-center space-x-4 rounded-2xl bg-emerald-50 px-4 py-4">
                            <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                                <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                            </div>
                            <h3 className="text-2xl font-semibold text-slate-800">{name}</h3>
                        </div>
                        <div className="mt-6 space-y-5">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-semibold text-slate-700"
                                    htmlFor="amount"
                                >
                                    Amount (in Rs)
                                </label>
                                <input
                                    onChange={(e) => setAmount(e.target.value)}
                                    type="number"
                                    value={amount}
                                    className="flex h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-800 outline-none transition focus:border-slate-300 focus:bg-white"
                                    id="amount"
                                    placeholder="Enter amount"
                                />
                            </div>
                            <button 
                                onClick={async() => {
                                    const token = localStorage.getItem('token')

                                    if (!token) {
                                        navigate('/login')
                                        return
                                    }

                                    if (!id) {
                                        setError("We could not find the user you want to pay.")
                                        return
                                    }

                                    if (!amount || Number(amount) <= 0) {
                                        setError("Please enter a valid amount.")
                                        return
                                    }

                                    try {
                                        setError("")
                                        setMessage("")
                                        setLoading(true)

                                        const response = await axios.post(`${API_BASE_URL}/api/v1/account/transfer`, {
                                            to: id,
                                            amount: Number(amount)
                                        }, {
                                            headers: {
                                                Authorization: `Bearer ${token}`
                                            }
                                        })

                                        setMessage(response.data.message || "Money sent successfully.")
                                        setAmount(0)
                                    } catch (error) {
                                        setError(error.response?.data?.message || error.response?.data?.Error || "Unable to send money right now.")
                                    } finally {
                                        setLoading(false)
                                    }
                                }} 
                                className="h-12 w-full rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                            >
                                {loading ? "Sending..." : "Initiate Transfer"}
                            </button>
                            {error ? (
                                <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600">
                                    {error}
                                </p>
                            ) : null}
                            {message ? (
                                <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                                    {message}
                                </p>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
