import React, { useState } from 'react'
import { useAuth } from '../context/context/loginContext'
import { LoginValidtors } from '../helpers/validators'
import { DangerAlert } from '../components/Alert'
import { Loader, Loader2 } from '../components/LoaderComponent'

export default () => {
    const auth = useAuth()
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Errors, setErrors] = useState(null)

    if (Errors) {
        setTimeout(() => {
            setErrors(null)
        }, 2500)
    }

    if (auth.state.authChange) {
        return (
            <Loader2 />
        )
    }

    async function send() {
        const res = LoginValidtors(Email, Password)
        if (res.ok) {
            const body = { email: Email, password: Password }
            const res = await auth.login(body)
            if (res === 404) {
                setErrors('wrong email or password')
            } else if (res === 500) {
                setErrors('server error, try again later')
            }
        } else {
            setErrors(res.message)
        }
    }

    function sendKey(e) {
        if (e.key === 'Enter') {
            send()
        }
    }

    return (
        <section className="absolute w-full h-full">
            <div className="absolute top-0 w-full h-full bg-gray-800 bg-login"></div>
            {Errors && <DangerAlert title="Error" message={Errors} />}
            {auth.state.fetching && <Loader />}
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-5">
                                <div className="block uppercase text-gray-700 text-lg font-bold text-center ">
                                    Login
                                    </div>
                                <hr className="mt-6 border-b-1 mb-4 border-gray-400" />

                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                        placeholder="Email"
                                        style={{ transition: "all .15s ease" }}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                        placeholder="Password"
                                        style={{ transition: "all .15s ease" }}
                                        onChange={e => setPassword(e.target.value)}
                                        onKeyDown={sendKey}
                                    />
                                </div>
                                <div className="text-center mt-6">
                                    <button
                                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={send}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
