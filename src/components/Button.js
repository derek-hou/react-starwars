import React from 'react'

export default function Button({name, url}) {
    const urlStr = url == null ? '#' : url;

    return (
        <div>
            <a href={urlStr}>{name}</a>
        </div>
    )
}
