import React from "react"

const CNInput = ({
    name,
    label,
    type,
    value,
    handleChange
}: {
    name: string,
    label: string,
    type: string,
    value: string,
    handleChange: Function
}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            required
        />
    </div>
)

export default CNInput;