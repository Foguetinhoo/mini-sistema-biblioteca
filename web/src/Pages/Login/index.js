import React,{useState,useEffect,useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../../Components/Button/style';
import Back from '../../assets/back.png'
import {faBookReader,faUser,faUnlockAlt,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faEye,faEyeSlash} from '@fortawesome/free-regular-svg-icons'
 import './style.css';
import { Link } from 'react-router-dom';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
function Login() {
    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')
    const [type,setType] = useState(true)
    const passwordRef = useRef(null)
    const userRef = useRef(null)

    useEffect(() => {
        userRef.current.focus()
      }, [])
    const verifyInputs = e =>{

    }
    const disableButton = () => user === ''|| password ===''? true:false
    const changeType = (e) =>{
        setType(!type)
        type ? passwordRef.current.type ="text":passwordRef.current.type ="password"  
    }
 
    return <div className="page">
        <div className="form">
            <span 
            className="title">Library <FontAwesomeIcon  icon={faBookReader} size="1x"/></span>
            <form>
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
               <Link to="/register">
                    <p>Forgot the password?</p>
               </Link>

                <Button 
                    className="buttonSubmit" 
                    disabled={disableButton()}
                    >
                    Login 
                    <FontAwesomeIcon  className="iconButton" icon={faArrowRight}/>
                </Button>
            </form>
        </div>
        <div className="back">
            <img className="backgroundImage" src={Back} alt="background"/>
        </div>
    </div>;
}

export default Login;