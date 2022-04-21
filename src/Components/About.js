const aboutMe = "Jamey is a current—and soon to be former—Lancer at Pasadena City College. He's spent his time there between the software and web dev tracks. But, Jamey also wears many hats. While studying, he's been teaching English at Dongguk University (go Tuskers!) in Seoul, South Korea, and has been interning at a startup (Zephframe) in Seoul to design the for a climate control system UI display.";

function AboutMe(props) {
    return <p className="text">{props.aboutMe}</p>;
};

export default function About(props) {
    return(
        <div className={`about ${props.darkMode ? "dark" : "light"}`} >
            <h3 className="title">About</h3>
            <AboutMe aboutMe={aboutMe}/>
        </div>
    );
};