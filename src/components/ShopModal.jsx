import React, { useState, useEffect } from 'react'
import { FilePicker } from 'react-file-picker'
import { useApp } from '../context/context/appContext'
import { useOrg } from '../context/context/orgContext'
import { ModalComponent } from '../components/ModalComponent'
import { Loader } from './LoaderComponent'
import { orgFormValidation, objectValidator } from '../helpers/validators'

export const ShopModal = () => {
    const app = useApp()
    const org = useOrg()
    const [Name, setName] = useState('')
    const [Description, setDescription] = useState('')
    const [Category, setCategory] = useState('')
    const [Status, setStatus] = useState('ACTIVE')
    const [Errors, setErrors] = useState(null)

    useEffect(() => {
        (() => {
            if (!objectValidator(org.state.current)) {
                setName(org.state.current.name)
                setDescription(org.state.current.description)
                setCategory(org.state.current.category)
            }
        })()
    }, [org.state])


    function send() {
        const res = orgFormValidation(Name, Description, Category, Status)
        if (res.ok === true) {
            const body = { name: Name, description: Description, category: Category, status: Status }
            app.orgSettings(body)
        } else {
            setErrors(res.message)
        }
    }

    async function changeFile(file) {
        const res = await app.fileOrg(file)
        if (res) {
            setErrors(res)
        }
    }

    return (
        <ModalComponent
            title="Shop settings"
            closeModal={app.closeModal}
            footer={
                <>
                    <button
                        className=" background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        onClick={app.closeModal}
                    >
                        cancel
                    </button>
                    <button
                        className=" bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        onClick={send}
                    >
                        Save Changes
                    </button>
                </>
            }
        >
            {org.state.fetching && <Loader />}
            <div className="w-full max-w-lg my-6 mx-8">
                <div className="flex flex-wrap justify-center mb-8">
                    <div className="w-6/12 sm:w-4/12 px-auto mx-auto ">
                        <FilePicker
                            extensions={['jpg', 'jpeg', 'png']}
                            onChange={file => changeFile(file)}
                            onError={error => setErrors(error)}
                        >
                            <img
                                src={org.state.current.logoUrl || 'https://res.cloudinary.com/dqnilvouh/image/upload/v1586642238/placeholder_zhy1ce.png'}
                                alt="..."
                                className="shadow rounded-md max-w-full h-auto align-middle border-none px-auto mx-auto hover:opacity-25 cursor-pointer"
                            />
                        </FilePicker>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Shop name
                        </label>
                        <input onChange={e => setName(e.target.value)} value={Name || ''} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="My shop" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                            Shop description
                        </label>
                        <input onChange={e => setDescription(e.target.value)} value={Description || ''} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" type="text" placeholder="any" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 ">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
                            Category
                        </label>
                        <input onChange={e => setCategory(e.target.value)} value={Category || ''} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="category" type="text" placeholder="Food" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Status
                        </label>
                        <div className="relative">
                            <select onChange={e => setStatus(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option value="">select shop status</option>
                                <option value="ACTIVE">Active</option>
                                <option value="INACTIVE">Inactive</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-red-600">{Errors}</p>
                </div>
            </div>
        </ModalComponent>
    )
}
