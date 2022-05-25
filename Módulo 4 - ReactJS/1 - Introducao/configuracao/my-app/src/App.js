import './App.css';

function sum(a ,b){
  return a + b;
}

function App() {
  return (
    <div className='teste'>
      Bruno Juwer - Introdução ao ReactJS
      <h1>Soma {sum(1, 3)}</h1>
    </div>

  );
}

export default App;
