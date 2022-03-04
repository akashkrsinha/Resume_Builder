import React, {useState} from 'react'
import style from '../Styles/skill.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import setSkill from '../actions/skill.action'


export default function Skill() {

  const dispatch = useDispatch()
  let { skillReducer } = useSelector((state) => state)


  const [form4, setForm4] = useState({
    skill1: skillReducer.skill1,
    skill2: skillReducer.skill2,
    skill3: skillReducer.skill3,
    skill4: skillReducer.skill4,
    skill5: skillReducer.skill5,
    skill6: skillReducer.skill6
  })

  function handelChange(e) {
      let {name, value}=e.target

      setForm4({
          ...form4,
          [name]: value
      })

  }

  function submit() {
      
      console.log(form4);
      dispatch(setSkill(form4))
  }

  return (
    <div className={style.skill}>
      <div className={style.skillContainer}>
        <div className={style.text1}>Skills</div>
        <div className={style.text2}>Add a few skills to show employers what you're good at.</div>

        <div className={style.inputContainer}>
          <input type='text' placeholder='skill #1' onChange={handelChange} name='skill1' value={form4.skill1}></input>
          <span className='fontAwesome-icons fas fa-trash icon-delete'></span>
        </div>
        <div className={style.inputContainer}>
          <input type='text' placeholder='skill #2' onChange={handelChange} name='skill2' value={form4.skill2}></input>
          <span className='fontAwesome-icons fas fa-trash icon-delete'></span>
        </div>
        <div className={style.inputContainer}>
          <input type='text' placeholder='skill #3' onChange={handelChange} name='skill3' value={form4.skill3}></input>
          <span className='fontAwesome-icons fas fa-trash icon-delete'></span>
        </div>
        <div className={style.inputContainer}>
          <input type='text' placeholder='skill #4' onChange={handelChange} name='skill4' value={form4.skill4}></input>
          <span className='fontAwesome-icons fas fa-trash icon-delete'></span>
        </div>
        <div className={style.inputContainer}>
          <input type='text' placeholder='skill #5' onChange={handelChange} name='skill5' value={form4.skill5}></input>
          <span className='fontAwesome-icons fas fa-trash icon-delete'></span>
        </div>
        <div className={style.inputContainer}>
          <input type='text' placeholder='skill #6' onChange={handelChange} name='skill6' value={form4.skill6}></input>
          <span className='fontAwesome-icons fas fa-trash icon-delete'></span>
        </div>
        <div>+ Add another skill</div>
        <div className={style.skillButton}>
          <Link to='/summary' style={{ textDecoration: "none" }}>
            <input type="submit" value="SAVE AND CONTINUE" onClick={submit}></input>
          </Link>
        </div>
        <Link to='/education' style={{ textDecoration: "none" }}>
          <div className={style.backBtn}> Back </div>
        </Link>
      </div>
    </div>
  )
}
