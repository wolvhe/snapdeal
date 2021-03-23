import React from 'react'
import "./body.css";
import "./test.css";
import { Button, Card, Carousel } from "react-bootstrap";
import BodyProducts from "./BodyProducts";
function Body() {
    return (
    <div className="mainn">
        <div className="main_bodyA">
            {/* left menu */}
          <Card className="card_menu">
            <Card.Body className="card_menu_body">
            <Card.Text>
                TOP CATEGORIES
            </Card.Text>
            <div class="dropdown">
            <p class="dropbtn">All Offers</p>
            <div class="dropdown-content">
                <a href="#">Air Purifiers</a>
                <a href="#">Socks</a>
                <a href="#">Blankets & Comforters</a>
                <a href="#">Coffee & Tea Makers</a>
            </div>
            </div>
            <div class="dropdown">
            <p class="dropbtn">Mobiles & Tablets</p>
            <div class="dropdown-content">
                <a href="#">Smart Phones</a>
                <a href="#">Featured Phones</a>
                <a href="#">Oneplus</a>
                <a href="#">Samsung</a>
                <a href="#">Oppo</a>
                <a href="#">iPhone</a>
                <a href="#">Karbon</a>
            </div>
            </div>
            <div class="dropdown">
            <p class="dropbtn">Electronics</p>
            <div class="dropdown-content">
                <a href="#">Ceiling Fan</a>
                <a href="#">Tube Lights</a>
                <a href="#">Refrigerator</a>
                <a href="#">Room Heaters</a>
                <a href="#">Vaccum Machine</a>
                <a href="#">Trimmers</a>
                <a href="#">Shavers</a>
                <a href="#">Hair Dryers</a>
            </div>
            </div>
            <div class="dropdown">
            <p class="dropbtn">Computers & Gaming</p>
            <div class="dropdown-content">
                <a href="#">Nvidea Geforce GTX 1080ti</a>
                <a href="#">GTX 1650</a>
                <a href="#">GTX 1050ti</a>
                <a href="#">intel i5 10th gen</a>
                <a href="#">Motherboards</a>
                <a href="#">Graphics Cards</a>
                <a href="#">SMPS Power Supply</a>
                <a href="#">RAM</a>
            </div>
            </div>
            <div class="dropdown">
            <p class="dropbtn">Home & Kitchen</p>
            <div class="dropdown-content">
                <a href="#">Knives</a>
                <a href="#">Dishes</a>
                <a href="#">Spoons</a>
                <a href="#">Forks</a>
                <a href="#">Stove</a>
            </div>
            </div>

            <div class="dropdown">
            <p>MORE CATEGORIES</p>
            </div>

            <div class="dropdown">
            <p class="dropbtn">Mens Fashion</p>
            <div class="dropdown-content">
                <a href="#">Shirts</a>
                <a href="#">Formal Shirts</a>
                <a href="#">T Shirts</a>
                <a href="#">Pants</a>
                <a href="#">Shorts</a>
                <a href="#">Boxers</a>
            </div>
            </div>
            <div class="dropdown">
            <p class="dropbtn">Womens Fashion</p>
            <div class="dropdown-content">
                <a href="#">Sarees</a>
                <a href="#">Kurtas & Kurtis</a>
                <a href="#">Salwar Suits</a>
                <a href="#">Lehengas</a>
                <a href="#">Saree Combo</a>
            </div>
            </div>
            <div class="dropdown">
            <p class="dropbtn">Toys, Kids Fashion & more</p>
            <div class="dropdown-content">
                <a href="#">Toy Cars</a>
                <a href="#">Electronic Toys</a>
                <a href="#">Action Toys & Figures</a>
                <a href="#">Ride On & Scooters</a>
                <a href="#">Outdoor Toys</a>
                <a href="#">Soft Toys</a>
                <a href="#">Educational Toys</a>
                <a href="#">Toddler Toys</a>
            </div>
            </div>
            <div class="dropdown">
            <p class="dropbtn">Beauty, Health & Daily Needs</p>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
            </div>
            <div class="dropdown">
            <p class="dropbtn">Sports, Fitness & Outdoor</p>
            <div class="dropdown-content">
                <a href="#">Face, Eyes</a>
                <a href="#">Makeup Palettes</a>
                <a href="#">Brushes & Applicators</a>
                <a href="#">PERSONAL CARE & GROOMING</a>
                <a href="#">Skin Care</a>
                <a href="#">Hair Care</a>
                <a href="#">Bath & Shower</a>
            </div>
            </div>
            <div class="dropdown">
            <p class="dropbtn">Car & Motorbike</p>
            <div class="dropdown-content">
                <a href="#">Audi</a>
                <a href="#">BMW</a>
                <a href="#">Renault</a>
            </div>
            </div>
            <div class="dropdown">
            <p class="dropbtn">Hobbies</p>
            <div class="dropdown-content">
                <a href="#">Reading</a>
                <a href="#">Gaming</a>
                <a href="#">Cooking</a>
            </div>
            </div>
            <div class="dropdown">
            <p class="dropbtn">Books, Media & Music</p>
            <div class="dropdown-content">
                <a href="#">School Texts</a>
                <a href="#">Competitive Exams</a>
                <a href="#">Academic & Professional</a>
                <a href="#">Children & Young Adults</a>
                <a href="#">Non-Fiction</a>
                <a href="#">Literature & Fiction</a>
                <a href="#">Reference</a>
            </div>
            </div>

            <div class="dropdown">
            <p class="dropbtn">See All Categories</p>
            </div>

            <div class="dropdown">
            <p class="dropbtn">TRENDING SEARCHES</p>
            </div>         
            <div class="dropdown">
            <p class="dropbtn">Golden Chain</p>
            </div>  
            <div class="dropdown">
            <p class="dropbtn">Jewellery Set</p>
            </div>  
            <div class="dropdown">
            <p class="dropbtn">Sarees Cotton</p>
            </div>
            <div class="dropdown">
            <p class="dropbtn">Casual Shoes</p>
            </div>
            <div class="dropdown">
            <p class="dropbtn">Track Pants</p>
            </div>      
            
            </Card.Body>
        </Card>
        </div>
        <div className="main_bodyB">
            <div className="main_bodyB_a">
                {/* slideshow */}
                <div className="body_carousel">
                    <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src="https://st2.depositphotos.com/5547208/8113/v/950/depositphotos_81139896-stock-illustration-online-shopping-banner.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src="https://previews.123rf.com/images/ylivdesign/ylivdesign1705/ylivdesign170502813/78258025-online-shopping-banner-horizontal-cartoon-style.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src="https://as1.ftcdn.net/jpg/01/01/07/62/500_F_101076224_Pa2RVjmM7sALGpo6lAq8joqUye9KXsLm.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
                </div>  
                    {/* location */}
                <div>
                    <Card className="card_box">
                    <Card.Img className="card_image" variant="top" src="https://img.icons8.com/ios/72/region-code.png" />
                    <Card.Body>
                    <Card.Title>Your Delivery Pincode</Card.Title>
                    <Card.Text>
                        Enter your pincode to check the availability and faster delivery options.
                    </Card.Text>
                    <input></input>
                    <Button className="card_buttonSubmit btn btn-dark btn-sm">Submit</Button>
                    <Button className="card_buttonNext btn btn-secondary btn-sm">Next</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
            <div className="body_products">
                <div><p>TRENDING PRODUCTS</p></div>
                <div>
                <BodyProducts />
                </div>      
            </div>
            
        </div>
        
    </div>
    )
}

export default Body