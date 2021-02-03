import React from "react";

export const required = value => {
    if (value) return undefined
    return "Field is required"
}

export const maxLength = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbol`
    return undefined
}
