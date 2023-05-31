import './App.css';
import Card from './components/Card';

function App() {
  const name = 'Samuel';
  const surname = 'Hysi';
  const city = 'Korce';
  const birthday = '05/09/2000';
  const description = 'My name is Samuel Hysi. I am 22 years old and I have recently finished my bachelor in Informatics. I really enjoy such things as sports, gaming, travelling and programming, especially in the front-end side. My goal is to be a senior ReactJs developer.'
  return (
   <Card name= {name} surname={surname} city={city} birthday={birthday} description={description}/>
  );
}

export default App;
