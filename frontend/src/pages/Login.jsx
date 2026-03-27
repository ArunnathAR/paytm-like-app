import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Input from '../components/Input'
import Button from '../components/Button'
import BottomText from '../components/BottomText'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../config'
const Login = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    return(
        <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#e2e8f0_100%)] px-4 py-10">
            <div className="mx-auto grid min-h-[calc(100vh-5rem)] place-items-center">
            <div className="w-full max-w-md rounded-[32px] border border-white/70 bg-white/90 px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur" >
                <Heading label={'Sign In'}/>
                <SubHeading lebel={'Enter your information to Signin an'} subLebel={"account"}/>
                <div className="mt-8">
                <Input lebel={"Email"} placeholder={"Enter your email"} type={"email"} onChange={(e)=>{
                    setUsername(e.target.value)
                }}/>
                <Input lebel={"Password"} placeholder={"Enter your password"} type={"password"} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
               <Button label ={loading ? "Signing in..." : "Sign In"} onClick={async()=>{
                    if(!username || !password){
                        setError("Email and password are required")
                        return
                    }

                    try {
                        setError('')
                        setLoading(true)
                        const response = await axios.post(`${API_BASE_URL}/api/v1/user/signin`, {
                            username,
                            password
                        })
                        localStorage.setItem('token', response.data.token)
                        navigate('/dashboard')
                    } catch (e) {
                        setError(e.response?.data?.message || "Unable to sign in")
                    } finally {
                        setLoading(false)
                    }
               }}/>
               {error ? (
                    <p className="mt-4 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600">
                        {error}
                    </p>
               ) : null}
                </div>
                <BottomText label ={"Don't have account ? "} path={'/signup' } text={'signup'}/>
            </div>
            </div>
         </div>
    )
}
export default Login
