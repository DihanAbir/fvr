import React from 'react';
import fullertone from '../../public/accomodation/fullertone.png';
import sultan from '../../public/accomodation/sultan.png';
import ascott from '../../public/accomodation/ascott.png';
import AccomodationCard from './AccomodationCard';

const Accomodation = () => {
    const accomodations = [
        {
            pic:fullertone,
            blueTitle:"The Fullerton hotel",
            content1:"Located in the Central Business District, The Fullerton Hotel Singapore is a 5-minute drive from Clarke Quay and Boat Quay. It features a spa, infinity pool and a fitness center.",
            content2:"The Fullerton Hotel Singapore is a 25-minute drive from Changi International Airport. Raffles Place MRT Station is a short 5-minute walk from the hotel.",
            specialContent:"*Preferential rate for delegates available, contact us for more information.",
        },
        {
            pic:sultan,
            title:"The Fullerton hotel",
            content1:"Located in the Central Business District, The Fullerton Hotel Singapore is a 5-minute drive from Clarke Quay and Boat Quay. It features a spa, infinity pool and a fitness center.",
            content2:"The Fullerton Hotel Singapore is a 25-minute drive from Changi International Airport. Raffles Place MRT Station is a short 5-minute walk from the hotel.",
        },
        {
            pic:ascott,
            title:"The Fullerton hotel",
            content1:"Located in the Central Business District, The Fullerton Hotel Singapore is a 5-minute drive from Clarke Quay and Boat Quay. It features a spa, infinity pool and a fitness center.",
            content2:"The Fullerton Hotel Singapore is a 25-minute drive from Changi International Airport. Raffles Place MRT Station is a short 5-minute walk from the hotel.",
        },
    ]
    return (
        <div className='container'>
            <div className='text-center accomodation_main_title py-5'>
            <p>31 Aug - 01 Sept 2022</p>
            <p>The Fullerton Hotel Singapore</p>
            </div>
            {
                accomodations.map((accomodation,index)=><AccomodationCard
                key={index}
                accomodation={accomodation}></AccomodationCard>)
            }
      
        </div>
    );
};

export default Accomodation;