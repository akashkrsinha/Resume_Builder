import React, {useState} from 'react'
import style from '../Styles/education.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import educationReducer from '../reducers/educationReducer'
import setEducation from '../actions/education.action'

export default function Education() {

    const dispatch = useDispatch()
    let { educationReducer } = useSelector((state) => state)

    console.log(educationReducer);


    const [form3, setForm3] = useState({
        school: educationReducer.school,
        city: educationReducer.city,
        country: educationReducer.country,
        degree: educationReducer.degree,
        graduationMonth: educationReducer.graduationMonth,
        graduationYear: educationReducer.graduationYear,
        description: educationReducer.description
    })

    function handelChange(e) {
        let {name, value}=e.target

        setForm3({
            ...form3,
            [name]: value
        })

    }

    function submit() {
        
        console.log(form3);
        dispatch(setEducation(form3))
    }
  return (

        <div className={style.educationContainer}>
            <form>
                <div className={style.text1}>Education</div>
                <div className={style.text2}>Start with your most recent educational institution.</div>
            
                <div >School Name</div>
                <input type="text" className={style.inp} onChange={handelChange} name='school' value={form3.school}></input>

                <div className={style.cityCountry}>
                    <div className={style.lebel1}>City/Town</div>

                    <div className={style.lebel2}>Country</div>
                </div>

                <div className={style.cityCountryInput}>
                    <div className={style.cityInput}> <input type="text" onChange={handelChange} name='city' value={form3.city}></input> </div>
                    <div className={style.countryInput}> <input type="text"  onChange={handelChange} name='country' value={form3.country}></input></div>
                </div>

                <div className={style.label}>Degree</div>
                <input type="text" className={style.inp}  onChange={handelChange} name='degree' value={form3.degree}></input>

                <div className={style.label}>Graduation Date</div>
                
                <div className={style.graduationInput}>
                    <select name="Month" className={style.monthSelect} onChange={handelChange} name='graduationMonth' value={form3.graduationMonth}>
                        <option>Month</option>
                        <option value="january">january</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>

                    <select name="Year" onChange={handelChange} name='graduationYear' value={form3.graduationYear}>
                        <option>year</option>
                        <option value="1940">1940</option>
                        <option value="1941">1941</option>
                        <option value="1942">1942</option>
                        <option value="1943">1943</option>
                        <option value="1944">1944</option>
                        <option value="1945">1945</option>
                        <option value="1946">1946</option>
                        <option value="1947">1947</option>
                        <option value="1948">1948</option>
                        <option value="1949">1949</option>
                        <option value="1950">1950</option>
                        <option value="1951">1951</option>
                        <option value="1952">1952</option>
                        <option value="1953">1953</option>
                        <option value="1954">1954</option>
                        <option value="1955">1955</option>
                        <option value="1956">1956</option>
                        <option value="1957">1957</option>
                        <option value="1958">1958</option>
                        <option value="1959">1959</option>
                        <option value="1960">1960</option>
                        <option value="1961">1961</option>
                        <option value="1962">1962</option>
                        <option value="1963">1963</option>
                        <option value="1964">1964</option>
                        <option value="1965">1965</option>
                        <option value="1966">1966</option>
                        <option value="1967">1967</option>
                        <option value="1968">1968</option>
                        <option value="1969">1969</option>
                        <option value="1970">1970</option>
                        <option value="1971">1971</option>
                        <option value="1972">1972</option>
                        <option value="1973">1973</option>
                        <option value="1974">1974</option>
                        <option value="1975">1975</option>
                        <option value="1976">1976</option>
                        <option value="1977">1977</option>
                        <option value="1978">1978</option>
                        <option value="1979">1979</option>
                        <option value="1980">1980</option>
                        <option value="1981">1981</option>
                        <option value="1982">1982</option>
                        <option value="1983">1983</option>
                        <option value="1984">1984</option>
                        <option value="1985">1985</option>
                        <option value="1986">1986</option>
                        <option value="1987">1987</option>
                        <option value="1988">1988</option>
                        <option value="1989">1989</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>

                <div className={style.baseline} >Description</div>
                <textarea rows="7" cols="50" className={style.textbox} onChange={handelChange} name='description' value={form3.description} ></textarea>

                <div className={style.formButton}>
                    <Link to='/skill' style={{ textDecoration: "none" }}>
                        <input type="submit" value="SAVE AND CONTINUE" onClick={submit}></input>
                    </Link>
                </div>
                <Link to='/experience' style={{ textDecoration: "none" }}>
                     <div className={style.backForm}> Back </div>
                </Link>
            </form>
        </div>
  )
}
