import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <UserGreeting/> */}
      {/* <ParentComponent /> */}
      {/*<Profile name="thanuj" lastName="sai"></Profile>*/}{/*this value(Thanuj) gets passed as props*/}
      {/* <Resume name="thanuj"></Resume>
      <Counter/>
      <FunctionEvent/>
      <ClassEvent/> */}
      {/* <Greet name="thanuj" heroName="ironman">{/* properties can be sent/passed to components, they are called props} */}
        {/*<p>This is children props</p>{/*this can be rendered as props.children*/}
      {/* </Greet>
      <Greet name="vamshi" heroName="flash"/>
      <Greet name="usha" heroName="superman"/>
      <Welcome name="thanuj" heroName="ironman"/>
      <Welcome name="vamshi" heroName="flash"/>
      <Welcome name="usha" heroName="superman"/>
      <Message messageCode="10" messageContent="This is a message from props"/> */}
      {/* <Hello/> */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
