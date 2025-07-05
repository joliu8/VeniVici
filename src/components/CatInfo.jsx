import BanInfo from "./BanInfo";
const CatInfo = ({onBan, image, breedInfo }) => {

    return (
        <>

            <div className="info-card">

                {breedInfo ? (
                    <div className="breed-tags">
                        <h2>Cat Breed: {breedInfo[0].name ? breedInfo[0].name : ""}</h2>

                        <button onClick={onBan}>{breedInfo[0].name ? breedInfo[0].name: "No Life Span Info"}</button>
                        <button onClick={onBan}>{breedInfo[0].origin ? breedInfo[0].origin : "No Origin Info"}</button>
                        <button>{breedInfo[0].life_span ? breedInfo[0].life_span + " years" : "No Life Span Info"}</button>
                        <button>{breedInfo[0].temperament ? breedInfo[0].temperament : null}</button>
                    </div>
                ) : (<div></div>)
                }

                {image ? (
                    <img
                        className="cat-image"
                        src={image}
                        alt="cat image"
                    />
                ) : (
                    <div> </div>
                )}

            </div>
        </>
    );
};

export default CatInfo;