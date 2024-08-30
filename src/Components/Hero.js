import React from 'react'

const Hero = () => {
    return (
        <>
            <section id="hero" className="hero section dark-background">
                <img src="assets/img/cocktail-green.jpg" alt="" data-aos="fade-in" className="aos-init aos-animate" />
                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <h2>Have a drink!</h2>
                    <p>I'm <span className="typed" data-typed-items="Spicy, Sweet, Sour, Delicious">Spicy</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
                </div>

            </section>
        </>
    )
}

export default Hero
