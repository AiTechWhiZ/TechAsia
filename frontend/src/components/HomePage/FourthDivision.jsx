import React from 'react'
import Slider from 'react-slick'
import '../../styles/Home/FourthDivision.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import client1 from '../../Images/Home/FourthDiv/c1.png'
import client2 from '../../Images/Home/FourthDiv/c2.jpg'
import client3 from '../../Images/Home/FourthDiv/c3.jpg'
import client4 from '../../Images/Home/FourthDiv/c4.jpg'
import client5 from '../../Images/Home/FourthDiv/c5.jpg'
import client6 from '../../Images/Home/FourthDiv/c6.jpg'

const FourthDivision = () => {
    const projects = [
        { 
            id: 1,  
            description: 'Automated manual hydraulic machine used for pipe bending machine using PLC for high volume production.', 
            clientLogo: client1 
        },
        { 
            id: 2,  
            description: 'We supply DVCB (automatic condenser fan regulator) since 2016, Also Developed Comby controller for Panasia. They are Innovative HVAC manufactures with many Patented technologies.', 
            clientLogo: client2 
        },
        { 
            id: 3,  
            description: 'Installed Digital Timer ( techAsia make) with buzzer for Electrode powder mixing timing maintaining and monitoring.They are leading welding rods manufactures in India.',  
            clientLogo: client3   
        },
        { 
            id: 4,  
            description:
            ( 
                <p className='c4'>
                    <li>Designed and Installation of Water supply valve opening and closing angle indicator.</li>
                    <li>Power Factor Correction Panel  for pumping station.</li>
                </p>
            ),
            clientLogo: client4   
        },
        { 
            id: 5,  
            description: 'Upgraded Steel bottle base welding machine using PLC (Retrofitting).They are the first Indian steel bottle manufactures.',  
            clientLogo: client5   
        },
        { 
            id: 6,  
            description: 'We designed Controller and filter life indicator for Air filter and Sterilizer units for them. They are in the business of steel operation theater laminar air flow system, for Hospital.',  
            clientLogo: client6   
        },
        // Add more projects as needed
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1282,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 978,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="project-slider">
            <h2>Our Clients & Projects</h2><hr/>
            <Slider {...sliderSettings}>
                {projects.map((project) => (
                    <div key={project.id} className="project-slide">
                        <div className="project-details">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="client-logo">
                            <img src={project.clientLogo} alt={`Client logo for ${project.title}`} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FourthDivision;
