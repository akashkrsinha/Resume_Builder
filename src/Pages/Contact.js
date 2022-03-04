import React, { useState } from 'react'
import style from '../Styles/contact.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import setContact from '../actions/contact.action'
import {db} from '../firebaseConfig'
import { doc, setDoc, updateDoc } from 'firebase/firestore'
// import { useSelector } from 'react-redux'

export default function Contact() {
    const dispatch = useDispatch()
    let { ContactReducer,userReducer } = useSelector((state) => state)

    console.log(ContactReducer);


    const [form, setForm] = useState({
        name: ContactReducer.name,
        email: ContactReducer.email,
        address: ContactReducer.address,
        city: ContactReducer.city,
        country: ContactReducer.country,
        number: ContactReducer.number
    })

    let obj = {}

    function handelChange(e) {
        let {name, value}=e.target

        setForm({
            ...form,
            [name]: value
        })


    }

    console.log(userReducer);
    async function submit() {
        obj.name = form.name;
        obj.email = form.email;
        obj.address = form.address;
        obj.city = form.city;
        obj.country = form.country;
        obj.number = form.number;
        console.log(obj);
        const docRef = await updateDoc(doc(db, "user_info",userReducer.uid), {contact:obj})
        dispatch(setContact(obj))
    }

    return (

        <div className={style.aboutusContainer}>
            <form>
                <h1>Tell us about yourself</h1>
                <p>With this info, recruiters will be able to find you.</p>

                <div className='label'>Name</div>
                <input type="text" required placeholder='*Required' onChange={handelChange} name='name' value={form.name}></input>

                <div className='label'>Email</div>
                <input type="email" required placeholder='*Required' onChange={handelChange} name='email' value={form.email}></input>

                <input type="checkbox"></input>
                <span>Don't show on resume</span>

                <div className='label'>Street Address</div>
                <input type="text" onChange={handelChange} name='address' value={form.address}></input>

                <div className='label'>City</div>
                <input type="text" onChange={handelChange} name='city' value={form.city}></input>

                <div className='label'>Country</div>
                <input type="text" onChange={handelChange} name='country' value={form.country}></input>

                <div className='label'>Phone Number</div>
                <input type="number" onChange={handelChange} name='number' value={form.number}></input>
                <span>+Add another number</span>

                <div className={style.formButton}>
                    <Link to='/experience' style={{ textDecoration: "none" }}>
                        <input type="submit" value="SAVE and CONTINUE" onClick={submit}></input>
                    </Link>
                </div>

                <Link to='/' style={{ textDecoration: "none" }}>
                    <div className={style.backForm}> Back </div>
                </Link>
            </form>
        </div>

    )
}
