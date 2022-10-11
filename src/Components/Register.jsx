import React from 'react';
import styledComponents from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import {faCheck, faTimes, faInForCircle } from '@fortawesome/free-solid-svg-icons';
import { fontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Register() {
    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const useRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [pwdValid, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [sucess, setSuccess] = useState(false)

  return (
    <div>
        
    </div>
  )
}

export default Register