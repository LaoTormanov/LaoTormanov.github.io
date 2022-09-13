import React from 'react'
import cl from './MySelect.module.css'

const MySelect = ({options, defaultOption, value, onChange}) => {

    return(
        <select
            className={cl.mySelect}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value={''}>{defaultOption}</option>
            {options.map(option =>
                <option value={option.value} key={option.value}>{option.name}</option>
            )}
        </select>
    )
}

export default MySelect