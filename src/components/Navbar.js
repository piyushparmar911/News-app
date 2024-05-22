import React from 'react'; 
import { Link } from "react-router-dom";
import logo2 from './logo2.png';

export default function Navbar({mode,mode1,toggleMode,modeText}) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  navbar-${mode} bg-${mode} sticky-top`}>
        <div className="container-fluid">
          {/* <h2 className={`navbar-brand text-${mode === 'dark'? 'light ' : 'dark'}`}>NewsApp</h2> */}
          <img src={logo2} style={{height: "60px", width: "60px"}} alt="" />
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" accessKey='g' aria-current="page" to="/general">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" accessKey='b' to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" accessKey='n' to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" accessKey='h' to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" accessKey='s' to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" accessKey='p' to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" accessKey='t' to="/technology">Technology</Link>
              </li>
            </ul>
            <div className="form-check  form-switch">
              <input className="form-check-input " onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">
                {modeText}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
