import React from 'react'

export default function Button({name, page, url}) { // the properties in the button
    const urlStr = url == null ? '#' : url;

    return (
        <>
            <a className="btn" href={urlStr}>{name}</a>
        </>
    )
}