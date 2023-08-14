import logo from './logo.svg';
import './App.css';

function App() {
  const mede = {
    textDecoration:"underline",
    color:"red",
    fontSize:"15px"
  }
  return (
 
<>
<h1 style={mede}>Welcome to react</h1>
<h1 className='osas'>Lorem ipsum dolor sit amet</h1>
<h2 className='text-green-400'>TailWind</h2>
<div className='sm:flex block justify-center'>
  <div className='w-24 h-24  sm:w-52  bg-orange-600 hover:bg-green-400'></div>
  <div className='w-24 h-24 sm:w-52  bg-orange-500'></div>
</div>
</>
  );
}

export default App;
