import React from 'react'
import he from 'he'

export const Question = ({ Questions }) => {
    // he is a oddly named library that decodes html into string values
    var decode = he.decode(String(Questions))

    return (
        <div>
            <p>{decode}</p>
        </div>
    )
}
