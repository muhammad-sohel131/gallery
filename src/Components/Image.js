const Image = ({image}) => {
    const tags = image.tags.split(', ')

    return(
        <div>
            <a href={image.largeImageURL} target='_blank' rel='noreferrer'>
            <img src={image.webformatURL} alt='' />
            </a>
    
            <div className='image-info'>
                <h2 className='image-title'>photography by {image.user}</h2>
                <ul>
                    <li><strong>Collections: </strong> {image.collections}</li>
                    <li><strong>Comments: </strong> {image.comments}</li>
                    <li><strong>Likes: </strong> {image.likes}</li>
                    <li><strong>Downloads: </strong> {image.downloads}</li>
                </ul>

                <p className='tags'>
                {tags.map(tag => {
                    return <span className='tag' key={tag}>{tag}</span>
                })}
                </p>

            </div>
        </div>
    )
}

export default Image