import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CreateTodo from './components/todos/CreateTodo';
import manageTodo from './reducers/manageTodo';

let store = createStore(manageTodo);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <CreateTodo />
          </div>
      </Provider>
    );
  }
}

export default App;
