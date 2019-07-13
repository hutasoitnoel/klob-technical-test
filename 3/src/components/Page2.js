import React from 'react'
import Image1 from '../assets/pastedGraphic_1.png'
import Image2 from '../assets/pastedGraphic_2.png'
import Image3 from '../assets/pastedGraphic_3.png'
import Image4 from '../assets/pastedGraphic_4.png'
import Image5 from '../assets/pastedGraphic_5.png'
import Image6 from '../assets/pastedGraphic_6.png'

export default function () {
    const assets = [Image1, Image2, Image3, Image4, Image5, Image6]

    return (
        <>
            <div className="row" style={{ marginTop: "50px" }}>
                {
                    assets.map((el, index) => {
                        return (
                            <div key={index} className="col-4" style={{ textAlign: "center", marginTop: "25px" }}>
                                <img src={el} alt={el} height="300px" width="500px" />
                                {
                                    index === 0 &&
                                    <h1>Daya Lima</h1>
                                }
                                {
                                    index === 1 &&
                                    <h1>LinkedIn</h1>
                                }
                                {
                                    index === 2 &&
                                    <h1>Facebook</h1>
                                }
                                {
                                    index === 3 &&
                                    <h1>Instagram</h1>
                                }
                                {
                                    index === 4 &&
                                    <h1>Blog</h1>
                                }
                                {
                                    index === 5 &&
                                    <h1>Youtube</h1>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}