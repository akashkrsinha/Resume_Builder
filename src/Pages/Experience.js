import React, { useState } from 'react'
import style from '../Styles/experience.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import setExperience from '../actions/experience.action'

export default function Experience() {
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "september", "October", "November", "December"];
    const yearArr = [];

    let currYear = new Date().getFullYear();
    for (let i = 2000; i <= currYear; i++) {
        yearArr.push(i);
    }

    const dispatch = useDispatch()
    let { experienceReducer } = useSelector((state) => state)

    // console.log(experienceReducer);

    const [form2, setForm2] = useState({
        jobTitle: experienceReducer.jobTitle,
        company: experienceReducer.company,
        city: experienceReducer.city,
        country: experienceReducer.country,
        startMonth: experienceReducer.startMonth,
        startYear: experienceReducer.startYear,
        endMonth: experienceReducer.endMonth,
        endYear: experienceReducer.endYear,
    })

    function handelChange(e) {
        let { name, value } = e.target
        console.log(name, value);
        setForm2({
            ...form2,
            [name]: value
        })
    }

    function submit() {
        dispatch(setExperience(form2))
        console.log(form2);
    }

    return (
        <div className={style.experienceContainer}>
            <div className={style.main}>
                <div className={style.text1}>Work Experience</div>
                <div className={style.text2}>Fill detail of your most recent position.</div>

                <div className={style.label}>Job Title</div>
                <input type="text" onChange={handelChange} name='jobTitle' value={form2.jobTitle}></input>

                <div className={style.label}>Company</div>
                <input type="text" onChange={handelChange} name='company' value={form2.company}></input>

                <div className={style.label}>City/Town</div>
                <input type="text" onChange={handelChange} name='city' value={form2.city}></input>

                <div className={style.label}>Country</div>
                <input type="text" onChange={handelChange} name='country' value={form2.country}></input>

                <div className={style.label}>Start Date</div>
                <select onChange={handelChange} name='startMonth' value={form2.startMonth}>
                    <option>Month</option>
                    {
                        monthArr.map((monthName) => {
                            return (
                                <option value={monthName}>{monthName}</option>
                            )
                        })
                    }
                </select>

                <select onChange={handelChange} name='startYear' value={form2.startYear} >
                    <option>Year</option>
                    {
                        yearArr.map((year) => {
                            return (
                                <option value={year}>{year}</option>
                            )
                        })
                    }
                </select>

                <div className='label'>End Date</div>
                <select onChange={handelChange} name='endMonth' value={form2.endMonth}>
                    <option>Month</option>
                    {
                        monthArr.map((monthName) => {
                            return (
                                <option value={monthName}>{monthName}</option>
                            )
                        })
                    }
                </select>

                <select onChange={handelChange} name='endYear' value={form2.endYear}>
                    <option>Year</option>
                    {
                        yearArr.map((year) => {
                            return (
                                <option value={year}>{year}</option>
                            )
                        })
                    }
                </select>

                <div className={style.formButton}>
                    <Link to='/education' style={{ textDecoration: "none" }}>
                        <input type="submit" value="ENTER JOB DESCRIPTION" onClick={submit}></input>
                    </Link>
                </div>
                <Link to='/contact' style={{ textDecoration: "none" }}>
                    <div className={style.backForm}> Back </div>
                </Link>
            </div>
        </div>
    )
}
