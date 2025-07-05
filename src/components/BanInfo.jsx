const BanInfo = ({ bannedAttributes, removeBanned }) => {


    return (
        <>
            <h2>Ban List</h2>
            <h3>Click on tags to add and remove.</h3>


            <div className="banned-container">
                {bannedAttributes && bannedAttributes.length > 0 ? (
                    bannedAttributes.map((att, index) => (
                        <button onClick={removeBanned} className="attribute" key={index}>
                            {att}
                        </button>
                    )


                    )
                ) : (
                    <div>
                        <h3>No banned attributes.</h3>
                    </div>
                )}
            </div>


        </>
    );
};
export default BanInfo;