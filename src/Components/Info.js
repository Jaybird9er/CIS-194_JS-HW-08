const image = "images/jKirk.jpg";


function Image({image}) {
    return <img className="title" src={image} alt="Jamey's headshot" width="100%"/>;
};

function Name({name}) {
    return <h4 className="title">{name}</h4>;
};

function Tag({subtitle}) {
    return <h6 className="subtitle">{subtitle}</h6>;
};

export default function Info(props) {
    return (
        <div className={`info ${props.darkMode ? "dark" : "light"}`} >
            <Image image={image} />
            <Name name="Jamey Kirk"/>
            <Tag subtitle="Here to KirkStart any project"/>
        </div>
    );
};