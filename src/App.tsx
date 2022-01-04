import Counter from './bases/Counter';
import CounterBy from './bases/CounterBy';
import CounterEffect from './bases/CounterEffect';
import CounterHook from './bases/CounterHook';
import CounterReducerComponent from './counter-reducer/CounterReducer';
// import CounterReducerComponent from './bases/CounterReducer';

function App() {
  return (
    <div className="App">

      <Counter initialValue={ 15 } />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </div>
  );
}

export default App;
