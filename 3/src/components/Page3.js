import React from 'react'
import Image1 from '../assets/pastedGraphic.png'

export default function () {
    return (
        <>
            <div className="container" style={{ textAlign: "center" }}>
                <img src={Image1} alt="Logo" height="600px" width="800px" style={{ marginTop: "50px" }} />
                <h1>Klob</h1>
                <br></br>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </>
    )
}