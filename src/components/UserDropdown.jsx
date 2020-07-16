import React, { useState, useRef, useCallback, useEffect } from "react";
import { createPopper } from "@popperjs/core";
import { useAuth } from '../context/context/loginContext'
import { useApp } from '../context/context/appContext'

const UserDropdown = () => {
    const app = useApp()
    const auth = useAuth()
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef = useRef()
    const popoverDropdownRef = useRef()
    const stableGetCurrent = useCallback(auth.currentUser, [])

    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-end"
        });
        setDropdownPopoverShow(true);
    }

    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    }

    useEffect(() => {
        stableGetCurrent()
    }, [stableGetCurrent])

    return (
        <>
            <div
                className="text-gray-600 block cursor-pointer"
                ref={btnDropdownRef}
                onClick={dropdownPopoverShow ? closeDropdownPopover : openDropdownPopover}
            >
                <div className="items-center flex">
                    <span className="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full">
                        <i className="fas fa-user fa-lg text-black"></i>
                    </span>
                </div>
            </div>
            <div
                ref={popoverDropdownRef}
                className={dropdownPopoverShow
                    ? "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 block"
                    : "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden"
                }
                style={{ minWidth: "12rem" }}
            >
                <div className="font-semibold text-sm py-2 px-4 block w-full whitespace-no-wrap bg-transparent text-gray-800 truncate">
                    {auth.state.user ? auth.state.user.email : 'username'}
                </div>
                {/* <div className="h-0 my-2 border border-solid border-gray-200" /> */}
                {/* <div className="cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800">
                    Another action
                </div> */}
                <div className="h-0 my-2 border border-solid border-gray-200" />
                <div
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-red-600 cursor-pointer"
                    onClick={app.logOut}
                >
                    Log out <i className="fas fa-sign-out-alt ml-1"></i>
                </div>
            </div>
        </>
    );
};

export default UserDropdown;