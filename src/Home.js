import React from 'react';
import './Home.css';
import Product from './Product';
import Slide from './Slide';
import Trailer from './Trailer';


function Home() {

    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro_Max/New_Creative/Desktop_TallHero_3000x1200._CB405044906_.jpg"
                    alt=""
                />

                {/* Product id, title, price, rating, image */}
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={1170.62}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="12321348"
                        title="HP Pavilion Gaming DK0268TX 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics), Shadow Black"
                        price={67490.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/41Hxk3Dl5RL.__AC_SY200_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={23443.94}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                    <Product
                        id="49538097"
                        title="Apple iPhone 11 (64GB)-(Product) RED"
                        price={61900.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/41c2gS6Z+LL.__AC_SY200_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Fitbit Charge 3 Fitness Activity Tracker Special Edition"
                        price={19618.36}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61RJmfJ%2Bc0L._SX679_.jpg"
                    />
                    <Product
                        id="4903852"
                        title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate), Primary Source Isolate"
                        price={2773.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51B1HVTHWcL.__AC_SY200_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black) "
                        price={9710.11}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/7128HRanJgL._SX425_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Silver (2nd Generation) "
                        price={58756.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/815a%2BXjrgvL._SX466_.jpg"
                    />
                </div>


                <Trailer />

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV 55Q1IN Pro (Black)"
                        price={107408.55}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71D89swgrvL._SX355_.jpg"
                    />
                    <Product
                        id="75666462"
                        title="Sennheiser Momentum True Wireless 2 - Bluetooth Earbuds with Active Noise Cancellation, Smart Pause, Customizable Touch Control and 28-Hour Battery Life - White"
                        price={24990.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71wwV3yyq3L._AC_UY218_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90827332"
                        title="Home Centre Silas Lounge Chair with Footrest Black"
                        price={35400}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81GRpFfD2GL._AC_UL320_.jpg"
                    />
                    <Product
                        id="75466462"
                        title="MISURAA Imported Shadow Grey Ergonomic Chair with Mesh Back and Foam Seat for Office "
                        price={11999}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61XEeDats+L._AC_UL320_.jpg"
                    />
                    <Product
                        id="75466464"
                        title="Apple MacBook Pro "
                        price={199900}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg"
                    />
                    <Product
                        id="75466463"
                        title="Canon EOS 1500D 24.1 Digital SLR Camera (Black)"
                        price={31490}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/914hFeTU2-L._AC_UY218_.jpg"
                    />
                    <Product
                        id="75466467"
                        title="Blue Yeti USB Mic"
                        price={12499}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81Ac7KMx7RL._AC_UL320_.jpg"
                    />

                </div>
                <Slide />
                <div className="home__row">
                    <Product
                        id="90829232"
                        title="Samsung 138 cm (55 Inches) Wondertainment Series Ultra HD LED Smart TV UA55TUE60AKXXL (Titan Gray) (2020 model)"
                        price={51990.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81a5%2BITwX4L._SL1500_.jpg"
                    />
                    <Product
                        id="75066462"
                        title="Samsung Galaxy Watch (Bluetooth, 42 mm) - Black"
                        price={15990.0}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/61ErvNimpvL._SL1500_.jpg"
                    />
                    <Product
                        id="22414114"
                        title="Samsung Galaxy Note 20 (Mystic Bronze, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
                        price={77999.0}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71HQNbn0LFL._SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903852"
                        title="Legend of Suheldev: The King Who Saved India Paperback – 20 June 2020"
                        price={291.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/91HT7rB8tfL.jpg"
                    />
                    <Product
                        id="12444141"
                        title="Samsung Galaxy Buds Live (SM-R180NZKAINU) Mystic Black"
                        price={14990.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71cSYFuuCGL._SL1500_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
