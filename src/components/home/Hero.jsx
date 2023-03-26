import React from 'react'

const Hero = () => {
    return (
        <section className='parasaliha__home__hero'>
            <h1 className="parasaliha__home__hero__title">
                Bienvenue sur Parasaliha, Que cherchez-vous ?
            </h1>
            <p className="parasaliha__home__hero__text">
                La parapharmacie qui tient ses promesses
            </p>
            <div className="parasaliha__home__hero__search">
                <select name="category">
                    <option value="x" disabled>Category</option>
                    <option value="1" >Category</option>
                    <option value="2" >Category</option>
                    <option value="3" >Category</option>
                </select>
                <input type="search" name="search" className='search' placeholder='chercher quelque chose ...'/>
                <ion-icon name="search-outline"></ion-icon>
            </div>
            
        </section>
    )
}

export default Hero
