import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <>
            <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#E53840" }}>
                <img src={require('../assets/pastedGraphic.png')} alt="Logo" />
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/page1'><p style={styles}>Page 1</p></Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/page2'><p style={styles}>Page 2</p></Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/page3'><p style={styles}>Page 3</p></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

const styles = {
    color: "black"
}