import Student from './Student.jsx'

function App() {
 return (
  <>
    <Student name="Adane" age="18" isStudent= {true}/>
    <Student name="Amir" age={19} isStudent= {true}/>
    <Student name="Eyob" age={25} isStudent= {false}/>
    <Student />
  </>
 );
}

export default App
