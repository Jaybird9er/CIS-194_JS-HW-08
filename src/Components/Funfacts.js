const myFacts = "In addition to the aforementioned responsibilities, Jamey also looks after two dogs. And when he has time, he likes to go perform comedy at open mics around Seoul.";

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque urna quis finibus porttitor. Etiam ex turpis, tempor at urna vel, convallis vestibulum velit. Suspendisse.

function MyFacts({myFacts}) {
    return <p className="text">{myFacts}</p>;
};

export default function Funfacts(props) {
    return (
        <div className={`funfacts ${props.darkMode ? "dark" : "light"}`} >
            <h3 className="title">Funfacts</h3>
            <MyFacts myFacts={myFacts} />
        </div>
    );
};