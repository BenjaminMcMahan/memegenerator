import {useState} from "react";
import memeData from "../memeData";

const Meme = () => {
    // const [memeImage, setMemeImage] = useState('http://i.imgflip.com/1bij.jpg');

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    const [allMemeImages, setAllMemeImages] = useState(memeData);

    const getMemeImage = () => {
        const randomMeme = allMemeImages.data.memes[Math.floor(Math.random() * allMemeImages.data.memes.length)];
        const url = randomMeme.url;

        setMeme(prevMeme => (
            {
                ...prevMeme,
                randomImage: url
            }
        ));
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
            <img src={meme.randomImage} alt="Meme" className="meme--image"/>
        </main>
    );
};

export default Meme;