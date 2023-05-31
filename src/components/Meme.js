const Meme = () => {
    return (
        <main>
            <form className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Shut up"
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="and take my money"
                />
                <button type="submit" className="form--button">
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    );
};

export default Meme;