import React,{useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css';
import { Button } from '../../Components/Button/style';
import Back from "../../assets/backregister.svg";
import {faUser,faUnlockAlt,faArrowRight,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {faEye,faEyeSlash} from '@fortawesome/free-regular-svg-icons'

function Register() {
  const [user,setUser] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')
  const [type,setType] = useState(true)
  const passwordRef = useRef(null)
  const userRef = useRef(null)
  const nameRef = useRef(null)

  const disableButton = () => user === ''|| password ===''||name === '' ? true:false
  const changeType = (e) =>{
    setType(!type)
    type ? passwordRef.current.type ="text":passwordRef.current.type ="password"  
}
return <div className="page">
   
  <div className="form">
      <span 
      className="title">Register <FontAwesomeIcon  icon={faPaperPlane} size="1x"/></span>
      <form>
      <div className="inputForm">
              <FontAwesomeIcon icon={faUser}/>
              <input  
                  type="text" 
                  name="name"
                  maxLength={20}
                  value={name}
                  placeholder="Name"   
                  onChange={name => setName(name.target.value.trim())}
                  ref={nameRef}
              />
          </div>
          <div className="inputForm">
              <FontAwesomeIcon icon={faUser}/>
              <input  
                  type="text" 
                  name="user"
                  maxLength={20}
                  value={user}
                  placeholder="User"   
                  onChange={user => setUser(user.target.value.trim())}
                  ref={userRef}
              />
          </div>
          <div className="inputForm">
              <FontAwesomeIcon icon={faUnlockAlt}/>
              <input 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={password}
                  maxLength={20}
                  onChange={e => setPassword(e.target.value.trim())}
                  ref={passwordRef}
              />
              <FontAwesomeIcon 
              className="eyeIcon"
              onClick={changeType} 
              widths="20px"
              icon={type ? faEyeSlash:faEye}/>
          </div>
         <Link to="/login">
              <p>Already have an account?</p>
         </Link>

          <Button 
              className="buttonSubmit" 
              disabled={disableButton()}
              >
              Sig In
              <FontAwesomeIcon  className="iconButton" icon={faArrowRight}/>
          </Button>
      </form>
  </div>
  <div className="back">
      <img className="backgroundImage" src={Back} alt="background"/> 
  </div>
</div>;
}

export default Register;