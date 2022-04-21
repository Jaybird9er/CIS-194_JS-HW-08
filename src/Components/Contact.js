export default function Contact(props) {
    return (
        <div className={`contact ${props.darkMode ? "dark" : "light"}`} >
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <img className="linkedin" src="images\linkedin_button.png" alt="linkedin"/>
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                <img className="email" src="images\email_button.png" alt="email"/>
            </a>
        </div>
    );
};


// export default function Contact(props) {
//     return (
//         <div className={`contact ${props.darkMode ? "dark" : "light"}`} >
//             <a href="https://www.linkedin.com/in/jameykirk/" target="_blank" rel="noreferrer">
//                 <img className="linkedin" src="images\linkedin_button.png" alt="linkedin"/>
//             </a>
//             <a href="mailto:jameykirk@gmail.com" >
//                 <img className="email" src="images\email_button.png" alt="email"/>
//             </a>
//         </div>
//     );
// };