import Image from 'next/image';
import React from 'react';
import gallery1 from '../../public/gallery/gallery1.png';
import gallery2 from '../../public/gallery/gallery2.png';
import gallery3 from '../../public/gallery/gallery3.png';
import gallery4 from '../../public/gallery/gallery4.png';
import gallery5 from '../../public/gallery/gallery5.png';
import gallery6 from '../../public/gallery/gallery6.png';
import gallery7 from '../../public/gallery/gallery7.png';
import gallery8 from '../../public/gallery/gallery8.png';

const GallerySection = ({length}) => {
    const galleryPhotoes = [
        {
            pic: gallery1
        },
        {
            pic: gallery2
        },
        {
            pic: gallery3
        },
        {
            pic: gallery4
        },
        {
            pic: gallery5
        },
        {
            pic: gallery6
        },
        {
            pic: gallery7
        },
        {
            pic: gallery8
        }
    ]
    return (
        <div className='row g-5 mb-5'>
        {
            galleryPhotoes.slice(0,length).map((photo,index)=><div key={index}
            className="col-12 col-lg-6">
                <Image className='w-100' src={photo.pic} alt="galleryImg"/>
            </div>)
        }
        </div>
    );
};

export default GallerySection;