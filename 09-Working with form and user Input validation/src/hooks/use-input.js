import { useReducer } from 'react';

const inputInitialState = {
    value:'',
    isTouched: false
}
const inputFuncReducer = (state, action) => {

    if(action.type === 'INPUT'){
        return {
            value:action.value,
            isTouched: state.isTouched
        }
    }
    else if(action.type === 'BLUR'){
        return {
            value:state.value,
            isTouched: action.isTouched
        }
    }
    else if(action.type === 'RESET'){
        return {
            value:'',
            isTouched: false
        }
    }
    return inputInitialState;
}
const useForm = (validate) => {

    const [inputState, dispatch] = useReducer(inputFuncReducer, inputInitialState);

    const isInputValid = validate(inputState.value);
    const hasError = !isInputValid && inputState.isTouched;
    
    const inputValueChangeHandler = event => {
        dispatch({type:'INPUT', value:event.target.value});
    }

    const inputValueBlur = event => {
        dispatch({type:'BLUR', isTouched:true});
    }

    const reset = () => {
        dispatch({type:'RESER'});
    }

    return {
        value:inputState.value,
        isInputValid,
        hasError,
        inputValueChangeHandler,
        inputValueBlur,
        reset
    }
}

export default useForm;