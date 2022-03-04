import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from '../Styles/final.module.css'
import { Link } from 'react-router-dom'
import jsPDF from 'jspdf'
import setFinal from '../actions/final.action'
// import finalReducer from '../reducers/finalReducer'

export default function Final() {
  let { ContactReducer } = useSelector((state) => state)
  let { experienceReducer } = useSelector((state) => state)
  let { educationReducer } = useSelector((state) => state)
  let { skillReducer } = useSelector((state) => state)
  let { summaryReducer } = useSelector((state) => state)
  let { finalReducer } = useSelector((state) => state)

  const [doc, setDocument] = useState(finalReducer.doc)

  const colorClass = "color" + doc.color;
  const bgColor = "bgColor" + doc.color;
  const setFontSize = "fontSize" + doc.fontsize;
  const setFontFamily = "fontfamily" + doc.fontfamily


  let dispatch = useDispatch()

  function fontSizeChange(e) {
    const { value } = e.target

    let v = 0;
    if (value === 'Small') {
      v = 1;
    } else if (value === 'Medium') {
      v = 2
    } else if (value === 'Large') {
      v = 3;
    } else if (value === 'X-Large') {
      v = 4;
    }

    setDocument({
      ...doc,
      fontsize: v
    })
    dispatch(setFinal(doc))
  }

  function handelFontFamily(e) {
    const { value } = e.target

    let v = 0;
    if (value === 'Arial') {
      v = 1;
    } else if (value === 'Georgia') {
      v = 2
    } else if (value === 'Times New Roman') {
      v = 3;
    } else if (value === 'Verdana') {
      v = 4;
    } else if (value === 'Sans-serif') {
      v = 5;
    } else if (value === 'Lucida Sans') {
      v = 6;
    }

    setDocument({
      ...doc,
      fontfamily: v
    })
    dispatch(setFinal(doc))
  }


  function changeColor(e) {
    const { name, value } = e.target;
    setDocument({
      ...doc,
      [name]: value
    })
    dispatch(setFinal(doc))
  }

  useEffect(() => {

  }, [doc])

  function generatePdf() {
    var doc = new jsPDF("p", "pt", "a4")
    doc.html(document.querySelector('#downloadPdf'), {
      callback: function (pdf) {
        var pageCount = doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount);
        pdf.save("/files/myPdf.pdf")
      }
    })
  }

  function printPage() {
    var divContents = document.querySelector('#downloadPdf').innerHTML;
    var a = window.open('', '', 'height=600, width=600');
    a.document.write(divContents);
    a.document.close();
    a.print();
  }



  return (

    <div className={style.final}>
      <div className={style.sidebar}>
        <div className={style.sidebarHeading}>Design Your Resume!!</div>
        <div className={style.sidebarHeading2}>Please select your choice efficiently</div>

        <div className={style.exportOption}>
          <div className={style.subHeading}>Export Options</div>

          <div className={style.download} onClick={generatePdf} title="Click To Download">Download</div>


          <div className={style.print} onClick={printPage} title="Click To Print">Print</div>
          <div className={style.email} title="Click to mail this Resume">Email</div>
        </div>

        <div className={style.formattingOptions}>

          <div className={style.subHeading}>Formatting Options</div>
          <div className={style.subText}>Layout</div>
          <div className={style.condensed}>Condensed</div>
          <div className={style.standard}>Standard</div>
          <div className={style.expanded}>Expanded</div>

          <div className={style.fontSelection}>
            <div>
              <div className={style.subText}>Font Style</div>
              <select className={style.fontSelect} onChange={handelFontFamily}>
                {/* <option>Raleway</option>
                <option>Ubuntu</option>
                <option>Montserrat</option>
                <option>Times New Roman</option>
                <option>Source Sans</option>
                <option>Hind</option> */}

                <option>Arial</option>
                <option>Georgia</option>
                <option>Times New Roman</option>
                <option>Verdana</option>
                <option>Sans-serif</option>
                <option>Lucida Sans</option>
              </select>
            </div>

            <div>
              <div className={style.subText}>Font Size</div>
              <select className={style.fontSelect} onChange={fontSizeChange}>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
              </select>
            </div>
          </div>
        </div>

        <div className={style.colorOption}>
          <div className={style.subHeading}>Colors</div>
          <div className={style.colorContainer}>
            <input className={style.color1} onClick={changeColor} name='color' value={1}></input>
            <input className={style.color2} onClick={changeColor} name='color' value={2}></input>
            <input className={style.color3} onClick={changeColor} name='color' value={3}></input>
            <input className={style.color4} onClick={changeColor} name='color' value={4}></input>
            <input className={style.color5} onClick={changeColor} name='color' value={5}></input>
            <input className={style.color6} onClick={changeColor} name='color' value={6}></input>
            <input className={style.color7} onClick={changeColor} name='color' value={7}></input>
            <input className={style.color8} onClick={changeColor} name='color' value={8}></input>
            <input className={style.color9} onClick={changeColor} name='color' value={9}></input>
          </div>
        </div>

        <div className={style.lastsection}>+ Add New Section</div>
        <div className={style.lastsection}>Change Template</div>

      </div>

      <div className={style.resumeContainer}>

        {/* Resume Div */}

        <div className={`${style.resume} ${setFontSize} ${setFontFamily}`} id='downloadPdf'>

          <Link to='/contact' style={{ textDecoration: "none" }}>
            <div className={style.contactDetails}>
              <div className={style.contactLine1}>
                <div className={`${style.box} ${bgColor}`}></div>
                <div className={`${style.contactName} ${colorClass}`}>{ContactReducer.name}</div>
              </div>
              <div className={style.contactDetails2}>
                <div className={style.contactEmail}>{ContactReducer.email}</div>
                <div className={style.contactAddress}>{ContactReducer.address}</div>
                <div className={style.contactCity}>{ContactReducer.city}</div>
                <div className={style.contactCountry}>{ContactReducer.country}</div>
                <div className={style.contactPhoneNumber}>{ContactReducer.number}</div>
              </div>
            </div>
          </Link>

          <Link to='/experience' style={{ textDecoration: "none" }}>
            <div className={style.experienceDetails}>
              <div className={`${style.detailHeading} ${colorClass}`}>EXPERIENCE</div>
              <div className={style.jobTitle}>{experienceReducer.jobTitle}</div>
              <div className={style.jobCompany}>{experienceReducer.company}</div>
              <div className={style.jobCity}>{experienceReducer.city}</div>
              <div className={style.jobCountry}>{experienceReducer.country}</div>
              <div className={style.jobDate}>{experienceReducer.startMonth} {experienceReducer.startYear + "-"} {experienceReducer.endMonth} {experienceReducer.endYear}</div>
            </div>
          </Link>

          <Link to='/education' style={{ textDecoration: "none" }}>
            <div className={style.educationDetails}>
              <div className={`${style.detailHeading} ${colorClass}`}>EDUCATION</div>
              <div style={style.schoolName}>{educationReducer.school}</div>
              <div className={style.educationCity}>{educationReducer.city}</div>
              <div className={style.educationCountyr}>{educationReducer.country}</div>
              <div className={style.educationDegree}>{educationReducer.degree}</div>
              <div className={style.graduationDate}>{educationReducer.graduationMonth} {educationReducer.graduationYear}</div>
              <div className={style.educationDescription}>{educationReducer.description}</div>
            </div>
          </Link>

          <Link to='/skill' style={{ textDecoration: "none" }}>
            <div className={style.skillDetails}>
              <div className={`${style.detailHeading} ${colorClass}`}>SKILLS</div>
              <div>{skillReducer.skill1}</div>
              <div>{skillReducer.skill2}</div>
              <div>{skillReducer.skill3}</div>
              <div>{skillReducer.skill4}</div>
              <div>{skillReducer.skill5}</div>
              <div>{skillReducer.skill6}</div>
            </div>
          </Link>

          <Link to='/summary' style={{ textDecoration: "none" }}>
            <div className={style.summaryDetails}>
              <div className={`${style.detailHeading} ${colorClass}`}>Summary</div>
              <div>{summaryReducer.summary}</div>
            </div>
          </Link>

        </div>

        {/* <Link to='/summary' style={{ textDecoration: "none" }}>
          <div className={style.backBtn}>Back</div>
        </Link> */}

      </div>
    </div >
  )
}
