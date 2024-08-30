import React from 'react'

const Header = () => {
    return (
        <>
            <header id="header" className="header dark-background d-flex flex-column">
                <i className="header-toggle d-xl-none bi bi-list"></i>

                <div className="profile-img">
                    <img src="assets/img/neon-cocktail.jpg" alt="" className="img-fluid rounded-circle" />
                </div>

                <a href="index.html" className="logo d-flex align-items-center justify-content-center">
                    {/* Uncomment the line below if you also wish to use an image logo */}
                    {/* <img src="assets/img/logo.png" alt=""> */}
                    <h1 className="sitename">Cocktail.io</h1>
                </a>


                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
                        <li><a href="#about"><i className="bi bi-person navicon"></i>Drink of the Day</a></li>
                        <li><a href="#search"><i className="bi bi-hdd-stack navicon"></i>Search Recipes</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
