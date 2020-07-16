import React from 'react'

export const ModalComponent = (props) => {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-6xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <h3 className="text-3xl font-semibold uppercase">{props.title}</h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={props.closeModal}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {props.children}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                            {props.footer}
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black" ></div>
        </>
    )
}
