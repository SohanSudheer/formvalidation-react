import './App.css';
import { userSchema } from './UserValidations';

function App() {
  
  const createUser=async(event)=>{
    event.preventDefault()
    let formData={
      name:event.target[0].value,
      email:event.target[1].value,
      password:event.target[2].value
    }
    const isValid=await userSchema.isValid(formData)
    console.log(isValid)
  }

  return (
    <div className="App">
      <form onSubmit={createUser}>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='password' />
        <input type="submit" />
      </form>
      
    </div>
  );
}

export default App;
