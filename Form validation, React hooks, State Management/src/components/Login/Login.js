import React, { 
  useState, 
  useEffect, 
  useReducer, 
  useContext,
  useRef
} from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../Store/auth-context';
import Input from '../Input/Input';

const emailReducer = (state, action) =>{//It is the previous state snapshot that we are passing
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.includes('@')};
  }  
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return {value: '', isValid: false};
};

const passwordReducer = (state, action) =>{//It is the previous state snapshot that we are passing
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 6};
  }  
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.trim().length > 6};
  }
  return {value: '', isValid: false};
};

const Login = (props) => {
  const authCtx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState,dispatchPassword] =useReducer(passwordReducer, {value:'',isValid:null});

  const {isValid: isEmailValid} = emailState;
  const {isValid: isPasswordValid} = passwordState;

  useEffect(()=>{
    const timerIdentifier = setTimeout(()=>{
      console.log("Validity check Running");
      setFormIsValid(
        isEmailValid && isPasswordValid
      );
    },500);
    return ()=>{
      console.log("Cleanup");
     clearTimeout(timerIdentifier);
    }
  },[isEmailValid, isPasswordValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authCtx.onLogin(emailState.value, passwordState.value);
    }
    else if(!isEmailValid){
        emailInputRef.current.focus();
    }
    else{
        passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          ref = {emailInputRef}
          id="email"
          type="email"
          label="E-mail"
          value = {emailState.value}
          onChange = {emailChangeHandler}
          onBlur = {validateEmailHandler}
          isValid = {isEmailValid}
        />
        <Input 
          ref = {passwordInputRef}
          id="password"
          type="password"
          label="Password"
          value = {passwordState.value}
          onChange = {passwordChangeHandler}
          onBlur = {validatePasswordHandler}
          isValid = {isPasswordValid}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
