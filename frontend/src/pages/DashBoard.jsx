import Heading from "../components/Heading";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

function Dashboard(){
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) {
            return
        }

        axios.get(`${API_BASE_URL}/api/v1/account/balance`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            setBalance(response.data.balance)
        }).catch((error) => {
            console.error("Unable to load balance", error)
        })
    }, [])

    return(
        <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] px-4 py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <AppBar/>
        <Balance amount={balance}/>
        <Users />
        </div>
        </div>
    )
}
export default Dashboard;
