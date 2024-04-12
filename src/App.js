import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Profile name="thanuj" lastName="sai"></Profile>
      <Resume name="thanuj"></Resume>
      {/* <Hello/> */}
      {/* <Counter/> */}
      {}
      {/*
      <Message messageCode="10" messageContent="This is a message from props"/>
      <Profile name="Thanuj" lastName="sai">{/*this value(Thanuj) gets passed as props}
      <p>This is a profile of a person</p>
      </Profile>
      <Profile name="Vamshi" lastName="sai"/>{/*this value(Thanuj) gets passed as props
      <Profile name="Usha" lastName="chutki"/>{/*this value(Thanuj) gets passed as props}
      <Profile name="Venkateshwarlu"/>{/*this value(Thanuj) gets passed as props}
      {/* properties can be sent/passed to components, they are called props}
  */}
    </div>
  );
}

export default App;
