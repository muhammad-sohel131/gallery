import { useEffect, useState } from 'react'

import Image from './Image'

const Gallery = () => {
    const [images, setImages] = useState([])
    const [searchText, setSearchText] = useState()

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=16322490-b4d6bb2a1c7990e7e79a81246&q=${searchText || 'bird+flowers'}&image_type=photo`)
            .then(res => res.json())
            .then(data => setImages(data.hits))
            .catch(err => console.log(err))
    },[searchText])

    const changeHandler = (e) => {
        setSearchText(e.target.value)
    }

    return(
        <div className='container'>
            <div className='searchBar'>
                <input type='text' placeholder='search...' value={searchText} onChange={changeHandler}/>
            </div>

            <div className='gallery'>
                {
                    images.length > 0 ? 
                    (images.map(image => <Image image={image} key={image.id} />))
                    : <h2 className='no-imge-found'>There is no image found</h2>
                }
            </div>
        </div>
    )
}

export default Gallery