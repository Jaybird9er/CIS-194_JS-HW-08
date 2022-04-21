import Contact from './Contact';

export default function Toggle(props) {
    return (
        <nav className={props.darkMode ? "dark" : 'light'} >
            <div className="toggler">
            <p className="toggler--light">L</p>
            <div className="toggler--slider">
                <div className="toggler--slider--circle" onClick={props.toggleDarkMode} ></div>
            </div>
            <p className="toggler--dark">D</p>
            </div>
            <Contact/>
        </nav>
    );
};