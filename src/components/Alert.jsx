import React from 'react'

export const DangerAlert = ({ title = "", message = "" }) => {
    return (
        <div className="text-white px-6 py-4 border-0 rounded  mb-4 bg-red-500 absolute">
            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-exclamation-triangle" />
            </span>
            <span className="inline-block align-middle mr-8">
                <b className="capitalize">{title}</b> {message}
            </span>
        </div>
    )
}

