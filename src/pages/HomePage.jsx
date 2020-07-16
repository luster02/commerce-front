import React, { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Nabvar'
import { Card } from '../components/Card'
import { useOrg } from '../context/context/orgContext'
import { useHistory } from '../context/context/histoyContext'
import { Loader2 } from '../components/LoaderComponent'
import { Empity } from '../components/Empity'

export default () => {
    const org = useOrg()
    const history = useHistory()
    const stableGetHistory = useCallback(history.getHistoryByOrg, [])
    const id = org.state.current._id
    const prods = org.state.current.products ? org.state.current.products.length : 0

    useEffect(() => {
        setTimeout(() => {
            stableGetHistory(id)
        }, 250)
    }, [stableGetHistory, id])

    const tableComp = () => (
        <table className="items-center w-full bg-transparent border-collapse">
            <thead>
                <tr>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                        Page name
                        </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                        Visitors
                        </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                        Unique users
                        </th>
                    <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                        Bounce rate
                        </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                        /argon/
                        </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        4,569
                        </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        340
                        </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <i className="fas fa-arrow-up text-green-500 mr-4"></i>
                          46,53%
                        </td>
                </tr>
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                        /argon/index.html
                        </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        3,985
                        </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        319
                        </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                          46,53%
                        </td>
                </tr>
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                        /argon/charts.html
                        </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        3,513
                        </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        294
                        </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                          36,49%
                        </td>
                </tr>
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                        /argon/tables.html
                        </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        2,050
                        </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        147
                        </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <i className="fas fa-arrow-up text-green-500 mr-4"></i>
                          50,87%
                        </td>
                </tr>
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                        /argon/profile.html
                        </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        1,795
                        </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        190
                        </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                        <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                          46,53%
                        </td>
                </tr>
            </tbody>
        </table>
    )


    const comp1 = () => (
        <div className="w-full xl:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h2 className="text-gray-800 text-xl font-semibold">
                                Orders
                            </h2>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <Link
                                to="/products"
                                className="bg-gray-900 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 hover:bg-gray-500 rounded outline-none focus:outline-none mr-1 mb-1"
                            >
                                See all
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="block w-full h-64 overflow-x-auto overflow-y-auto" >
                    <Empity />
                </div>
            </div>
        </div>
    )

    const ProductsComponent = () => (
        <div className="w-full xl:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h2 className="text-gray-800 text-xl font-semibold">
                                Orders
                            </h2>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <Link
                                to="/products"
                                className="bg-gray-900 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 hover:bg-gray-500 rounded outline-none focus:outline-none mr-1 mb-1"
                            >
                                See all
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="block w-full h-64 overflow-x-auto overflow-y-auto" >
                    {prods === 0
                        ? <Empity />
                        : <table className="items-center w-full bg-transparent border-collapse">
                            <thead className="thead-light">
                                <tr>
                                    {['Name', 'Description', 'Price'].map((item, index) => (
                                        <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    org.state.current.products.map((item, index) => (
                                        <tr key={index} >
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left truncate">
                                                {item.name}
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 truncate">
                                                {item.description}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 truncate">
                                                $ {item.price}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    )

    const SalesComponent = () => (
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-gray-800">
                                Sales | History
                            </h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <button
                                className="bg-gray-900 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                See all
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block h-64 w-full overflow-x-auto overflow-y-auto">
                    {history.state.array.length === 0
                        ? <Empity />
                        : <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    {['Products', 'Total', 'Customer', 'Completed'].map((item, index) => (
                                        <th key={index} className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {history.state.array.map((item, index) => (
                                    <tr key={index}>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                                            {item.products.length}
                                        </th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                            $ {item.totalPrice ? item.totalPrice : 0}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                            {item.customer.email}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                            {item.completed ? 'completed' : 'incompleted'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    )

    const comp3 = () => (
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-gray-800">
                                Page visits
                            </h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <button
                                className="bg-gray-900 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                            >
                                See all
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block h-64 w-full overflow-x-auto overflow-y-auto">
                    {tableComp()}
                </div>
            </div>
        </div>
    )

    if (org.state.fetching) {
        return <Loader2 />
    }

    return (
        <>
            <div className="bg-gray-200">
                <Navbar />
                <div className="relative bg-gray-800 md:pt-32 pb-32 pt-12">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        <div>
                            <div className="flex flex-wrap">
                                <Card title="Products" stats={prods} icon={<i className="fas fa-store-alt"></i>} />
                                <Card title="Customers" icon={<i className="fas fa-users"></i>} />
                                <Card title="Sales" stats={history.state.array.length} icon={<i className="far fa-handshake"></i>} />
                                <Card title="Balance" icon={<i className="fas fa-dollar-sign"></i>} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <div className="flex flex-wrap">
                        {ProductsComponent()}
                        {SalesComponent()}
                    </div>
                    <div className="flex flex-wrap mt-4">
                        {comp3()}
                        {comp1()}
                    </div>
                </div>
            </div>
        </>
    )
}
