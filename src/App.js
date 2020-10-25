import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
 function lead(id ){

  var list= document.getElementById(id);
 
    list.style.display = "block";
 
 }


  
  return (
    <>
    <h1>LeadersBoard</h1>
   <div className="aa" id='dis'  >
      <Student name ="David" uname="Bahria University" score={335} />
      <Student name ="Jenni" uname="Bahria University" score={345} />
      <Student name ="Alex" uname="Au University" score={350} />
      <Student name ="Jon" uname="Harvard" score={350} />
      <Student name ="Wiley" uname="Bahria University" score={300} />
      <Student name ="Pankaj" uname="Delhi University" score={500} />

      </div>
      <button className="a" onClick={()=> lead('dis')} >Click to show Top Leaders</button>
    </>
  );
}

export default App;
