const Gallery = ({ images }) => {

    return (
        <div className="gallery">
            <h2> Cat History</h2>
            <div className="image-container">
                {images && images.length > 0 ? (
                    images.map((pic, index) => (
                        <li className="gallery" key={index}>
                            <img
                                className="gallery-image"
                                src={pic}
                                alt="Undefined screenshot from query"
                                width="500"
                            />
                        </li>
                    )


                    )
                ) : (
                    <div>
                        <h3>No cats yet. </h3>
                    </div>
                )}
            </div>


        </div>
    );
};

export default Gallery;