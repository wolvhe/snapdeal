import React from 'react'
import "./body.css";
import { Button, Card, Carousel } from "react-bootstrap";
import BodyProducts from "./BodyProducts";
function Body() {
    return (
    <div className="mainn">
        <div className="main_bodyA">
            {/* left menu */}
          <Card className="card_menu">
            <Card.Body>
            <Card.Text>
                TOP CATEGORIES
            </Card.Text>
            <Card.Text>
                All Offers
            </Card.Text>
            <Card.Text>
                Mobiles & Tablets
            </Card.Text>
            <Card.Text>
               Electronics
            </Card.Text>
            <Card.Text>
                Computers & Gaming
            </Card.Text>
            <Card.Text>
                Home & Kitchen
            </Card.Text>
            <Card.Text>
                MORE CATEGORIES
            </Card.Text>
            <Card.Text>
                Men's Fashion
            </Card.Text>
            <Card.Text>
                Women's Fashion
            </Card.Text>
            <Card.Text>
                Toys,Kids' Fashion & more
            </Card.Text>
            <Card.Text>
                Beauty,Health & Daily Needs
            </Card.Text>
            <Card.Text>
                Sports,Fitness & Outdoor
            </Card.Text>
            <Card.Text>
                Car & Motorbike
            </Card.Text>
            <Card.Text>
                Hobbies
            </Card.Text>
            <Card.Text>
                Books, Media & Music
            </Card.Text>
            <Card.Text>
                See All Categories
            </Card.Text>
            <Card.Text>
                TRENDING SEARCHES
            </Card.Text>
            <Card.Text>
                Mangalsutra
            </Card.Text>
            <Card.Text>
                Banarasi Silk Saree
            </Card.Text>
            <Card.Text>
                Ladies Sandal
            </Card.Text>
            <Card.Text>
                Sport Shoe
            </Card.Text>
            <Card.Text>
                Power Bank
            </Card.Text>
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