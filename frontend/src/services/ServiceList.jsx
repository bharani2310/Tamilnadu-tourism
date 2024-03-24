import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';

import guiImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    // {
    //     imgUrl : weatherImg,
    //     title: 'Calculate weather',
    //     desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit'
    // },
    {
        imgUrl : guiImg,
        title: 'Best Tour Organizing',
        desc:'We offer a wide range  of tours that express the cultural dignity of Tamil Nadu.'
    },
    {
        imgUrl : customizationImg,
        title: 'Customization',
        desc:'We provide high customization to our clients.'
    },
]

const ServiceList = () => {
    return (
    <>
    {
        servicesData.map((item,index) => (
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}> 
            <ServiceCard item={item}/>
        </Col>
        ))
    }
    </>
    );
};

export default ServiceList;