import React from 'react';
import Masonry , {ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImages from './galleryImages';

const MasonryImagesGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
            <Masonry gutter='1rem'>
                {galleryImages.map((item,index)=>(
                    <img className='masonry__img'
                    src={item} key={index} alt=''
                    style={{
                        'width': '100%',
                        // 'height': '300px', 
                        'display': 'block',
                        'borderRadius': '20px'
                    }}/>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
};

export default MasonryImagesGallery;