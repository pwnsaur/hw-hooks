import MemoComponent from '../src/components/MemoComponent';
import CallbackComponent from './components/CallbackComponent';
import './App.css';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <MemoComponent />
      <CallbackComponent />
    </div>
  );
};

export default App;
