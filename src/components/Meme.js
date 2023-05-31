import memeData from "../memeData";

const Meme = () => {
    const getMemeImage = () => {
        const randomMeme = memeData.data.memes[Math.floor(Math.random() * memeData.data.memes.length)];
        const url = randomMeme.url;
    };
    return (
        <main>
            <div className="form">
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
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    );
};

export default Meme;