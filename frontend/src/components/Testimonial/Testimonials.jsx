import React from 'react';
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'


const Testimonials = () => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            }
        ]

    }
    return <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>Absolutely fantastic experience! The tour guide was incredibly knowledgeable and passionate about 
                    the area we were exploring. They shared fascinating stories and historical facts that really brought 
                    the sights to life. The itinerary was well-planned, with just the right balance of sightseeing and leisure time. 
                    I highly recommend this tour to anyone looking for an enriching and memorable travel experience.</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img height={100} width={100} src={ava01} alt='' className='w-25 h-25 rounded-2'/>
                    <h5 className='mb-0 mt-3'>Aadhi</h5>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>A perfect way to explore the city! This tour exceeded all my expectations. The guide was friendly, professional,
                     and went above and beyond to ensure everyone had a great time. They provided insider tips and recommendations that made
                      the experience even more special. The group size was small,
                     allowing for a personalized experience, and the itinerary included all the must-see spots. I would definitely book with this tour company again</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} height={100} width={100} alt='' className='w-25 h-25 rounded-2'/>
                    <h5 className='mb-0 mt-3'>Dhanush</h5>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>This tour was simply outstanding! From start to finish, everything was seamless and enjoyable. The tour company was 
                    incredibly responsive and accommodating, making the booking process a breeze. Our guide was exceptional, providing insightful 
                    commentary and making the experience both educational and entertaining. Plus, the small group size created a more intimate atmosphere where we could ask 
                     questions and interact with fellow travelers.
                     Overall, it was a truly unforgettable experience, and I would highly recommend it to anyone looking to explore the area.</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} height={100} width={100} alt='' className='w-25 h-25 rounded-2'/>
                    <h5 className='mb-0 mt-3'>Surya</h5>                    
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>I can't speak highly enough about this tour! It was a highlight of our trip. The tour guide was incredibly knowledgeable, passionate, 
                    and personable, making the whole experience both informative and fun. The itinerary was well-thought-out, covering all the must-see 
                    attractions while also incorporating some hidden gems that we wouldn't have discovered on our own. What really stood out was the 
                    attention to detail and the extra touches provided by the tour company, from comfortable transportation to delicious snacks along the way.
                     It felt like a VIP experience from start to finish. If you're looking for a memorable and hassle-free way to explore the area,
                      look no further than this tour!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava04} height={100} width={100} alt='' className='w-25 h-25 rounded-2'/>
                    <h5 className='mb-0 mt-3'>Vijay</h5>                    
                </div>
            </div>

            
        </Slider>
    
};

export default Testimonials;