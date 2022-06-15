import React, {useRef, useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Spinner from "../components/Spinner";
import axios from 'axios';


const MySwal = withReactContent(Swal)
const ContactForm = () => {
    const form = useRef(null);
    const [loading,setLoading] = useState(false);
	const onSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
        setLoading(true);
        axios.post('https://jsonplaceholder.typicode.com/users', {
			firstname: formData.get('firstname'),
			lastname: formData.get('lastname'),
			email: formData.get('email'),
			phone: formData.get('phone')
		})
        .then(res=>{
            setLoading(false);
            console.log(res);
            MySwal.fire('Datos de contacto enviados con éxito')
        })
        .catch(error=>{
            setLoading(false);
            console.log(error);
        })
	}
    return (
        <>
                <form id="event-form"  ref={form} onSubmit={onSubmit}>
                <div className="fieldset-wrapper">
                    <div className="input-wrapper">
                        <div className="complete-name">
                            <label htmlFor="first-name">Nombre</label>
                            <input type="text" id="first-name" name="firstname" required />
                        </div>
                        <div className="complete-name">
                            <label htmlFor="last-name">Apellido</label>
                            <input type="text" id="last-name" name="lastname" required />
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <div className="complete-name">
                            <label htmlFor="email">Mail</label>
                            <input type="text" id="email" name="email" required />
                        </div>
                        <div className="complete-name">
                            <label htmlFor="phone">Teléfono</label>
                            <input type="text" id="phone" name="phone" required />
                        </div>
                    </div>
                </div>
            </form>            
            {loading && <Spinner />}
            {!loading && <footer>
                <button type="submit" className="button" form="event-form">ENVIAR</button>
            </footer>}
        </>
    )

}

export default ContactForm;