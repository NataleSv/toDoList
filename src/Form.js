import {useState} from 'react';

function Form(props){
    let [value, setValue] = useState('');
    let {addTask} = props;

    let sendSubmit = (event) => {
       event.preventDefault();
       addTask(value);
       setValue('');
    }

    return(
        <div>
           <form onSubmit={sendSubmit}>
               <input type="text"
               className="input"
               value={value}
               onChange={event => setValue(event.target.value)}
               />
           </form>
        </div>
    )
}

export default Form;