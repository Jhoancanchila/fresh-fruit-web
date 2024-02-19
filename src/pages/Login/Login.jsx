import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import imageLogo from '../../../public/logo.jpeg';
import Input from '../../components/Input/Input';

const Login = () => {
  // eslint-disable-next-line no-useless-escape
  let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const navigate = useNavigate();
  const [ credentials, setCredentials ] = useState({
    Email:"",
    Password: ""
  });
  const [ fieldRequired, setFieldRequired ] = useState({
    emailField:"",
    passField:""
  });
  const [ messageInvalideCredentials, setMessageInvalideCredentials ] = useState("");

  const handleLogin = () => {
    setMessageInvalideCredentials("");
    setFieldRequired({
      emailField: "",
      passField:""
    });
    if(credentials.Email && credentials.Password){
      if(!emailRegex.test(credentials.Email)){
        setFieldRequired({...fieldRequired,emailField:"enter a valid email address"})
      }else{
        if(credentials.Email.toLowerCase() === 'prueba@gmail.com' && credentials.Password === 'NTTDATA'){
          navigate("/fruits");
        }else{
          setMessageInvalideCredentials("Some of the credentials submitted are not correct.");
        }
      }
    }else{
      setFieldRequired({
        emailField: credentials.Email ? "" : "email required",
        passField:credentials.Password ? "" : "pass required"
      })
    }
  };

  return (
    <section className='max-w-[1280px] my-[6rem] mx-auto flex flex-wrap md:flex-nowrap md:justify-between justify-center bg-white rounded-3xl bg-white border-2 border-gray-100'>
      <div className='bg-white flex items-center justify-center rounded-3xl'>
        <img className='object-contain rounded-3xl' src={imageLogo} alt="" />
      </div>

      <div className=' w-11/12 max-w-[500px] sm:px-10 py-20 px-5 py-10'>
        <h4 className='text-5xl font-normal'>Welcome to fresh fruit</h4>
        <div className='mt-8'>
          <Input value={credentials} setValue={setCredentials} textLabel="Email" textPlaceHolder="Enter your email"/>
          <Input value={credentials} setValue={setCredentials} textLabel="Password" textPlaceHolder="Enter your Password"/>
          <div className='mt-8 flex justify-between items-center'>
            <button className='font-medium text-base text-[#EF8043]'>Forgot password</button>
          </div>
          <div className='mt-8 flex flex-col gap-y-4'>
            <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-[#EF8043] rounded-xl text-white font-bold text-lg' onClick={handleLogin}>Sign in</button>
          </div>
          <div className='mt-6 flex justify-center items-center'>
            <p className='font-medium text-base'>Dont have an account?</p>
            <button
              className='ml-2 font-medium text-base text-[#EF8043]'>Sign up</button>
          </div>
          {
            fieldRequired.emailField &&
            <p className='text-red-500 text-[12px] mt-2 flex justify-center items-center'>{fieldRequired.emailField}</p>
          }
          {
            fieldRequired.passField &&
            <p className='text-red-500 text-[12px] mt-2 flex justify-center items-center'>{fieldRequired.passField}</p>
          }
          {
            messageInvalideCredentials &&
            <p className='text-red-500 text-[12px] mt-2 flex justify-center items-center'>{messageInvalideCredentials}</p>
          }
        </div>
      </div>
    </section>
  )
}

export default Login