import useInput from '../hooks/use-input';

const BasicForm = (props) => {

  const {value: enteredName, 
    isInputValid: isNameValid,
    hasError:nameInputIsNotValid,
    inputValueChangeHandler: nameInputChangeHandler,
    inputValueBlur: nameInputBlur,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');
  
  const {value: enteredLastName, 
    isInputValid: isLastNameValid,
    hasError:lastNameInputIsNotValid,
    inputValueChangeHandler: lastNameInputChangeHandler,
    inputValueBlur: lastNameInputBlur,
    reset: resetLastNameInput
  } = useInput(value => value.trim() !== '');

  const {value: enteredEmail, 
    isInputValid: isEmailValid,
    hasError:emailInputIsNotValid,
    inputValueChangeHandler: emailInputChangeHandler,
    inputValueBlur: emailInputBlur,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));


  let isFormValid = false;
  if(isNameValid && isEmailValid && isLastNameValid){
    isFormValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();
    resetNameInput();
    resetEmailInput();
    resetLastNameInput();
  }

  console.log('hgey');
  
  const classInvalid =  nameInputIsNotValid && emailInputIsNotValid && lastNameInputIsNotValid? 'form-control invalid':'form-control';


  return (
    <form onSubmit={submitHandler} >
      <div className='control-group'>
        <div className={classInvalid}>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text' 
          id='name'
          onChange = {nameInputChangeHandler}
          onBlur = {nameInputBlur}
          value={enteredName}
           />
            { nameInputIsNotValid && <div className = 'error-text'>First name must not be empty</div>}
        </div>
        <div className={classInvalid}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='name'
          onChange = {lastNameInputChangeHandler}
          onBlur = {lastNameInputBlur}
          value={enteredLastName}
          />
            { lastNameInputIsNotValid && <div className = 'error-text'> Last name must not be empty</div>}
        </div>
      </div>
      <div className={classInvalid}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='text' 
        id='name' 
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlur}
        value={enteredEmail}
        />
          { emailInputIsNotValid && <div className = 'error-text'>Email should be valid</div>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
