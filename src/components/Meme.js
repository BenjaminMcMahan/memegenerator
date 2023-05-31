import {useState} from "react";
import memeData from "../memeData";

const Meme = () => {
    const [memeImage, setMemeImage] = useState('');
    const getMemeImage = () => {
        const randomMeme = memeData.data.memes[Math.floor(Math.random() * memeData.data.memes.length)];
        const url = randomMeme.url;

        setMemeImage(url);
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
            <img src={memeImage} alt="Meme" className="meme--image"/>
        </main>
    );
};

export default Meme;