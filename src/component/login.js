import React, { useRef, useState, useEffect} from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation} from 'react-router-dom';

const Login = () => {
  const{ setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state.from.pathname || "/";


  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])
  useEffect(()=> {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an HTTP POST request to the login endpoint
      const response = await axios.post('http://localhost:8080/api/auth/login', 
      {
        "username" : user,
        "password" : pwd
      }
     );
    
      // Check if the login was successful
      if (response.status === 200) {
         const accessKey = response.data.accessKey;
         const role = response.data.role;
         setAuth({user, pwd, role, accessKey});
         setUser('');
         setPwd('');
         navigate(from, {replace: true});
      } else {
        setErrMsg('Unauthorized!');
      }
    } catch (error) {
      if(error.response.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if(error.response.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
        errRef.current.focus();
    } 
  };

  return(
      
      <section>
        
      <p ref={errRef} className={errMsg ? "errmsg" : 
      "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username: </label>
        <input 
          type='text' 
          id='username'
          ref={userRef}
          autoComplete='off'
          onChange={(e) => setUser(e.target.value)}
          value = {user}
          required
        />
        
        <label htmlFor='password'>Password: </label>
        <input 
          type='password' 
          id='password'
          onChange={(e) => setPwd(e.target.value)}
          value = {pwd}
          required
        />
        <button>Sign In</button>
      </form>
      {/* <p>
        Need an Account?<br />
        <span className='line'>
          <a href="#">Sign Up</a>
        </span>
      </p> */}
    </section>
    
  )
}

export default Login