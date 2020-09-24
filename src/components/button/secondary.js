import React from 'react'

const ButtonSecondary = ({ children }) => {
    return (
        <button className="bg-white font-semibold font-poppins px-10 py-4 leading-none shadow-brandLg text-brand rounded-full">
            {children}
        </button>
    )
}

export default ButtonSecondary
