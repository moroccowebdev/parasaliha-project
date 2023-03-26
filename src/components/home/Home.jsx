import React from 'react'
import ProductList from '../products/ProductList'
import Hero from './Hero'
function Home() {
    return (
        <div className='parasaliha__home'>
            <Hero />
            <ProductList />
        </div>
    )
}

export default Home