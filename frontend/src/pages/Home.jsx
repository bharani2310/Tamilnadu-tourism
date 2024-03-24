import React from 'react' ;
import '../styles/home.css'
import { Container , Row ,Col} from 'reactstrap';
import heroImg from './../media/1.webp';
import heroVideo from './../media/2.webp';
import heroImg02 from './../media/3.webp';
import Subtitle from '../shared/Subtitle';
import WorldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';
import SearchBar from '../shared/SearchBar';
import { TypeAnimation } from 'react-type-animation';
import ServiceList from '../services/ServiceList';



const Home = () => {
    return <>
    {/* ==========hero section start===============*/}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Know Before You Go'}/>
                                    <img src={WorldImg} alt=""/>                               
                            </div>
                            <div>
                                <TypeAnimation 
                                sequence={[
                                    'Welcome to Tamil Nadu',
                                    2000,
                                    'where stories never end',
                                    2000,
                                ]}
                                speed={50}
                                className='text-accent'
                                repeat={Infinity}
                                />
                            </div>
                            <h5>A potpourri of vibrant cultures, exotic destinations and enduring memories. welcome to one of the heartlands of human civilization.</h5>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box">
                            <img src={heroImg} alt=""/>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box mt-4 hero__video-box">
                            <img src={heroVideo} alt="" controls/>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02} alt=""/>
                        </div>
                    </Col>
                    <SearchBar/>
                </Row>
            </Container>
        </section>
    {/* ==========hero section end===============*/}

    

    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services__subtitle">What we Serve</h5>
                    <h2 className='services__title'>We Offer our best services</h2>
                </Col>
                <ServiceList />
            </Row>
        </Container>
    </section>

    {/* ==========featured tour section start===============*/}

    {/* <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <Subtitle subtitle={'Explore'}/>
                    <h2 className="featured__tour-title">Our featured tours</h2>
                </Col>
                <FeaturedTourList/>
            </Row>
        </Container>
    </section> */}

    {/* ==========featured tour section end===============*/}

    {/* ==========experience section start===============*/}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experience__content">
                            <Subtitle subtitle={'Experience'}/>
                            <h2>with all our experience<br/>we will serve you</h2>
                            <p> Our team is dedicated to providing exceptional service and creating unforgettable 
                                experiences tailored to your preferences. Whether you're embarking on a cultural 
                                immersion tour, an adventurous expedition, or a leisurely getaway,
                                 we are here to ensure every aspect of your trip exceeds expectations.
                            </p>
                        </div>

                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>
                                    12k+
                                </span>
                                <h6>Successful Trips</h6>
                            </div>

                            <div className="counter__box">
                                <span>
                                    2k+
                                </span>
                                <h6>Regular Clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>
                                    15
                                </span>
                                <h6>Years of Experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="experience__img">
                            <img src={experienceImg} alt=''/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    {/* ========== experience section end===============*/}

    {/* ========== gallery section start===============*/}
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Gallery'}/>
                    <h2 className="gallery__title">Visit our  tour Gallery</h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery />
                </Col>
            </Row>
        </Container>
    </section>
    {/* ========== gallery section end===============*/}

    {/* ========== testimonial section start===============*/}
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Fans Love'}/>
                    <h2 className="testimonial__title">What Our Clients say about us</h2>
                </Col>
                <Col lg='12'>
                    <Testimonials />
                </Col>
            </Row>
        </Container>
    </section>
    {/* ========== testimonial section end===============*/}
    <Newsletter/>






    
    </>
};

export default Home;