import React, {useState}  from 'react'
import style from '../Styles/summary.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import setSummary from '../actions/summary.action'

export default function Summary() {

  const dispatch = useDispatch()
  let { summaryReducer } = useSelector((state) => state)


  const [form5, setForm5] = useState({
    summary: summaryReducer.summary,
  })

  function handelChange(e) {
      let {name, value}=e.target

      setForm5({
          ...form5,
          [name]: value
      })

  }

  function submit() {
      
      console.log(form5);
      dispatch(setSummary(form5))
  }
  return (
    <div className={style.summary}>
      <div className={style.summaryContainer}>
          <div>Summary</div>
          <div>Briefly describe the value that you bring through your skills, background and experience.</div>
          <textarea rows="8" cols="50" onChange={handelChange} name='summary' value={form5.summary}></textarea>
          <div className={style.skillButton}>
          <Link to='/final' style={{ textDecoration: "none" }}>
            <input type="submit" value="SAVE AND CONTINUE" onClick={submit}></input>
          </Link>
        </div>
        <Link to='/skill' style={{ textDecoration: "none" }}>
          <div className={style.backBtn}> Back </div>
        </Link>
      </div>
    </div>
  )
}
