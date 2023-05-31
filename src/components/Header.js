import TrollFaceImg from "../images/troll-face.png";

const Header = () => {
    return (
        <header className="header">
            <img
                src={TrollFaceImg}
                alt="Troll Face"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    );
};

export default Header;