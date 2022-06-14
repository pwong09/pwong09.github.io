import emailjs from "@emailjs/browser"
import {useState, useEffect, useRef} from "react"
import Loader from "react-loaders"
import AnimateLetters from "../../components/AnimateLetters"
import "./Contact.scss"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs
        .sendForm(
            'service_n2fkijs',
            'template_lo0angc',
            refForm.current,
            '_ZT4o9ygwS1Y54IfO'
        )
        .then(
            () => {
                alert('Message was sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message.')
            }
        )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimateLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in building new or existing products that help people and their communities. 
                        Feel free to reach out if you have a project or idea you want to chat about!
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email  " placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required>
                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact