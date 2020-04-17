import React, { Component }  from 'react'
import { reander } from 'react-dom'

function Clock (props) {
    return (
        <div>
            <h1>Hello React!</h1>
            <h3>It's {props.date.toLocaleTimeString()}.</h3>
        </div>
    )
}

function tick () {
    ReactDOM.render(
        <Clock date = {new Date()} />,
        document.getElementById('root')
    )
}

setInterval(tick, 1000);

