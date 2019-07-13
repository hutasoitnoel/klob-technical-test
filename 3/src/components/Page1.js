import React from 'react'
import Image1 from '../assets/pastedGraphic_1.png'
import Image2 from '../assets/pastedGraphic_2.png'
import Image3 from '../assets/pastedGraphic_3.png'

export default function () {
    const assets = [Image1, Image2, Image3]

    return (
        <>
            <div className="row" style={{ marginTop: "200px" }}>
                {
                    assets.map((el, index) => {
                        return (
                            <div key={index} className="col-4" style={{ textAlign: "center" }}>
                                <img src={el} alt={el} height="300px" width="500px" />
                                {
                                    index === 0 &&
                                    <h1>Company</h1>
                                }
                                {
                                    index === 1 &&
                                    <h1>Community</h1>
                                }
                                {
                                    index === 2 &&
                                    <h1>Education</h1>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}