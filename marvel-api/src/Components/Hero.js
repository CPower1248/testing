import React from "react"

export default function Hero(props) {
const { details } = props

    return (
        <div className="hero-container">
            <h3>Name: {details.name}</h3>
            <p>Description: {details.description}</p>
        </div>
    )
}