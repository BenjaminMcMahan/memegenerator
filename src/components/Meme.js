import {useState, useEffect} from "react";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    const [allMemeImages, setAllMemeImages] = useState([]);

    const getMemeImage = () => {
        const randomMeme = allMemeImages[Math.floor(Math.random() * allMemeImages.length)];
        const url = randomMeme.url;

        setMeme(prevMeme => (
            {
                ...prevMeme,
                randomImage: url
            }
        ));
    };
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])
    const handleChange = (event) => {
        const {name, value} = event.target;
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    name="topText"
                    className="form--input"
                    placeholder="Shut up"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input
                    type="text"
                    name="bottomText"
                    className="form--input"
                    placeholder="and take my money"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
};

export default Meme;