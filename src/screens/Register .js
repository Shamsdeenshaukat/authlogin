import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const { success = loading, user } = userContext();
    const [username, setUsename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (success) {
            navigate("/")
        }
    }, [success])

  return (
    <form className="form">
      <div>
              <div className='form-group'>
                  <label htmlFor="" >username</label> 
                     <imput type="text" className='form-control' />
                  placeholder="enter a username" value={username} /
        </div>
              <div className='form-group'>
                  <label htmlFor="email">email</label>
                  <imput type="email" className='form-control'
                  placeholder="example@gmail.com" value={username}/>
        </div>
        </div>
              <div className='form-group'>
              <label htmlFor="username">password</label>
             <imput type="password" className='form-control'
                  placeholder="enter a valid password" value={password}/>
          </div>
          <button type="submit">
              
          </button>
          <div className="row">
              I already have an account
              <Link to="/login">
                  Login to your account
              </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register   