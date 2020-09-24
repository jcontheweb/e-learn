import React from 'react'

const ButtonPrimary = ({ children }) => {
    return (
        <button className="bg-brand uppercase focus:outline-none font-poppins px-12 py-4 leading-none shadow-brandLg text-white rounded-full">
            {children}
        </button>
    )
}

export default ButtonPrimary
