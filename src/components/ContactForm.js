import React, { useState,useEffect } from 'react';
import axios from 'axios';
const ContactForm = props => {
const [ formState, setFormState ] = useState({
    firstName: "", 
    lastName: "",
    email: "",
    phone: "",
    help: "",
});
const [ isUpdating,setIsUpdating ] = useState(false)
useEffect(() => {
setFormState(props.update)

},[props.update])

const changeHandler = e => {
    setFormState({
    ...formState, [e.target.name]: e.target.value
    })
    console.log(formState)
}

const submitHandler = e => {
    e.preventDefault();
    console.log("new-user", formState)
    axios
    // post.("")

    // .then (res => {
    //     console.log(res)
    // })

    // .catch(error => {
    //     console.log("This is an error", error)
    // })
    // }

    setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        help: "",
    })
}
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>
                    First Name
                    <input type="text"
                     name="name" 
                     placeholder="First Name" 
                     onChange={changeHandler} 
                    //  value={formState.name}
                     />
                     </label>
                <label>
                    Last Name
                    <input
                     type="text"
                      name="last" 
                      placeholder="Last Name" 
                      onChange={changeHandler} 
                    //   value={formState.last}
                      />
                      </label>
                <label>
                    Email
                    <input 
                    type="email"
                    name="email" 
                    placeholder="Email" 
                    onChange={changeHandler} 
                    //  value={formState.email}
                     />
                     </label>
                <label>
                    Phone
                    <input
                     type="tel" 
                     name="phone" 
                     placeholder="Phone Number" 
                     onChange={changeHandler} 
                    //  value={formState.phone}
                     />
                     </label>
                <label>
                    Need help?
                    <input
                     type="text" 
                     name="help" 
                     placeholder="Please describe your issue." 
                     onChange={changeHandler} 
                    //  value={formState.help}
                     />
                     </label>
                     <button>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;