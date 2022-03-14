import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [isLabelTouch, setIsLabelTouch] = useState(false);
  const isNameValid = enteredName.trim() !== '';
  const nameInputIsNotValid = !isNameValid && isLabelTouch;
  let isFormValid = false;
  if(isNameValid){
    isFormValid = true;
  }  
  const inputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const inputBlur = event => {
    setIsLabelTouch(true);
  }
  
  const submitHandler = event => {
    event.preventDefault();
    setIsLabelTouch(true);
      if(!isNameValid){
        return;
      }
    setEnteredName('');
    setIsLabelTouch(false);
  }

  console.log('hgey');
  
  const classInvalid =  nameInputIsNotValid ? 'form-control invalid':'form-control';
  return (
    <form onSubmit={submitHandler}>
      <div className={classInvalid}>
        <label htmlFor='name'>Your Name</label>
        <input 
        onChange={inputChangeHandler}
        type='text' 
        id='name'
        value={enteredName}
        onBlur={inputBlur}
        />
      </div>
      { nameInputIsNotValid && <div className = 'error-text'>Name must not be empty</div>}
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
