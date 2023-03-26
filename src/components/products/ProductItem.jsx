import React from 'react'

const ProductItem = () => {
    return (
        <section className='parasaliha__productItem'>
            <div className="parasaliha__productItem__card">
                <img src="./img/home_page_bg_1.jpg" alt="..." className="parasaliha__productItem__card__left" />
                <div className="parasaliha__productItem__card__right">
                    <h1 className="parasaliha__productItem__card__right__title">Lorem ipsum</h1>
                    <div className="parasaliha__productItem__card__right__category">
                        <p>Category: </p>
                        <p>Hello World</p>
                    </div>
                    <div className="parasaliha__productItem__card__right__description">
                        <p>Description: </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam 
                            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius 
                            modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima 
                            veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
                            commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.
                        </p>
                    </div>

                </div>
            </div>
            <h1 className="parasaliha__home__products__title">
                Related Product
            </h1>
            <div className="parasaliha__home__products__cards">
                <div className="parasaliha__home__products__cards__card">
                    <img src="./img/product-test.jpg" alt="..." className="parasaliha__home__products__cards__card__top" />
                    <div className="parasaliha__home__products__cards__card__content">
                        <h1 className='parasaliha__home__products__cards__card__content__title'>
                            Tincid accumsan facilisis
                        </h1>
                        <a href="/productItem" className="parasaliha__home__products__cards__card__content__link">
                            plus d'info &rarr;
                        </a>
                    </div>
                </div>
                <div className="parasaliha__home__products__cards__card">
                    <img src="./img/product-test.jpg" alt="..." className="parasaliha__home__products__cards__card__top" />
                    <div className="parasaliha__home__products__cards__card__content">
                        <h1 className='parasaliha__home__products__cards__card__content__title'>
                            Tincid accumsan facilisis
                        </h1>
                        <a href="/productItem" className="parasaliha__home__products__cards__card__content__link">
                            plus d'info &rarr;
                        </a>
                    </div>
                </div>
                <div className="parasaliha__home__products__cards__card">
                    <img src="./img/product-test.jpg" alt="..." className="parasaliha__home__products__cards__card__top" />
                    <div className="parasaliha__home__products__cards__card__content">
                        <h1 className='parasaliha__home__products__cards__card__content__title'>
                            Tincid accumsan facilisis
                        </h1>
                        <a href="/productItem" className="parasaliha__home__products__cards__card__content__link">
                            plus d'info &rarr;
                        </a>
                    </div>
                </div>
                <div className="parasaliha__home__products__cards__card">
                    <img src="./img/product-test.jpg" alt="..." className="parasaliha__home__products__cards__card__top" />
                    <div className="parasaliha__home__products__cards__card__content">
                        <h1 className='parasaliha__home__products__cards__card__content__title'>
                            Tincid accumsan facilisis
                        </h1>
                        <a href="/productItem" className="parasaliha__home__products__cards__card__content__link">
                            plus d'info &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductItem
