import React from 'react'

const Heading = ({ className, heading, subheading, description }) => {
    return (
        <div className={className}>
            {subheading && <p className="uppercase text-brand font-poppins font-semibold">{subheading}</p>}
            {heading && <h2 className="font-semibold text-3xl text-black">{heading}</h2>}
            {description && <p className="text-body text-lg mt-4">{description}</p>}
        </div>
    )
}

export default Heading
