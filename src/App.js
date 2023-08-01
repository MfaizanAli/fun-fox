import './App.css';


import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
     <Provider store={store}>
      <div className="App">
        <h1>Task Management System</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
