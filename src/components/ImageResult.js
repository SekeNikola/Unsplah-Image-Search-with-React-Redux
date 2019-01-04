import React from 'react';

const ImageResults = props => {
    const capitalLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const images = props.images.map((image) => {
        return (
            <div className="imageCard" key={image.id}>
                <a href={image.links.download} target="_blank" rel="noopener noreferrer"><img src={image.urls.small} className="photo mt-5" alt="" /></a>
                <br />
                <div className="description mt-3">
                    <img className="userImg" src={image.user.profile_image.medium} alt="" />
                    <p>{image.user.name}</p>
                    <p>{capitalLetter(image.description)}. Likes: {image.likes}</p>
                    {/* <hr/> */}
                </div>
            </div >
        )
    })
    return (
        <div>{images}</div>
        )
}


export default ImageResults