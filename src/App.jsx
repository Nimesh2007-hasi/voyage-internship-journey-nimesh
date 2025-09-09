import Comp1 from "./Componets/Comp1/Comp1";

function App() {
 const age=18;
 const country="Sri Lanka";
const getFullName=(f,m,l) =>{
  return `${f} ${m} ${l}`;
}
const arr= ["BMW","Porche","Ferrari"];
  return (
    <>
    
      <h1 className='heading'>My First App with React</h1>
      <h1>Employee Details</h1>
      <p>Full Name: {getFullName("WG","Nimesh","Hasith")}</p>
      <p>Age :{age} </p>
      <p>Country :{country}</p>
      <p>Nimesh likes {arr[0]}</p>
      <p>Languages</p>
      <ul>
        <li>Html</li>
        <li>Java</li>
        <li>Python</li>

      </ul>
      <Comp1 />
      
    </>
  )
}

export default App
