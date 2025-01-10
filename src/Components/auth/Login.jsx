import '../../styles/login.css';
const Login = () => {
  return (
    <>
      <div className='modal-overlay'>
        <div className='modal-content'>
          <h2>Sign In</h2>
          <form className='signin-form'>
            <label>
              Email:
              <input type='email' placeholder='Enter your email' required />
            </label>
            <label>
              Password:
              <input
                type='password'
                placeholder='Enter your password'
                required
              />
            </label>
            <button type='submit' className='submit-button'>
              Sign In
            </button>
          </form>
          {/* <button className='close-button' onClick={toggleModal}>
                ×
            </button> */}
        </div>
      </div>
    </>
  );
};

export default Login;
