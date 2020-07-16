import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useOrg } from '../context/context/orgContext'
import { useApp } from '../context/context/appContext'
import UserDropdown from "./UserDropdown";

export const SideBar = () => {
    const org = useOrg()
    const app = useApp()
    const location = useLocation()
    const [collapseShow, setCollapseShow] = useState(false)

    const items = [
        { path: '/', name: 'dashboard', icon: <i className="fas fa-tv opacity-75 mr-2 text-sm"></i> },
        { path: '/products', name: 'products', icon: <i className="fas fa-store-alt mr-2 text-sm"></i> },
        { path: '/orders', name: 'orders', icon: <i className="fas fa-clipboard-list mr-3 text-sm"></i> },
        { path: '/customers', name: 'customers', icon: <i className="fas fa-users mr-2 text-sm"></i> }
    ]

    const settings = [
        { name: 'Shop settings', icon: <i className="fas fa-cogs mr-2 text-base"></i>, fn: app.openModal },
        { name: 'General settings', icon: <i className="fas fa-tools mr-2 text-base"></i>, fn: () => console.log('pressed') }
    ]

    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    <button
                        className="cursor-pointer opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow(true)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <Link
                        className="md:block text-left md:pb-2 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                        to="/"
                    >
                        {org.state.current.name ? org.state.current.name : 'name shop'}
                    </Link>
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            {/* <NotificationDropdown /> */}
                        </li>
                        <li className="inline-block relative">
                            <UserDropdown />
                        </li>
                    </ul>
                    <div
                        className={collapseShow
                            ? "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow-2xl absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded bg-white m-2 py-3 px-6 "
                            : "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden"
                        }
                    >
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-left md:pb-2 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                                        to="/"
                                    >
                                        {org.state.current.name ? org.state.current.name : 'name shop'}
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow(false)}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            {items.map((item, index) => (
                                <li className="items-center" key={index}>
                                    <Link
                                        className={location.pathname === item.path ? "active-text" : "inactive-text hover:text-gray-500"}
                                        to={item.path}
                                    >
                                        {item.icon} {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <hr className="my-4 md:min-w-full" />
                        <h6 className="md:min-w-full text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            options
                        </h6>
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                            {settings.map((item, index) => (
                                <li className="inline-flex" key={index}>
                                    <div
                                        className="text-sm block mb-4 no-underline font-semibold cursor-pointer hover:text-gray-500"
                                        onClick={item.fn}
                                    >
                                        {item.icon} {item.name}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
