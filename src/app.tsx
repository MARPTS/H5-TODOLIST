import {Badge, Icon, Modal, Tabs, Toast } from 'antd-mobile';
import * as React from 'react';
import TodoList from './components/TodoList';
import { todoStorage, CompleteState, Todo } from './server/localStorage';
const prompt = Modal.prompt as any;
// import TodoMvc from './components/todomvc';
import './app.less';

interface State {
  todoList: Todo[];
  isHaveToDoList: boolean;
}

export default class App extends React.Component<{}, State> {

    constructor(props: {}) {
      super(props);
      this.state = {
        todoList: [],
        isHaveToDoList: false
      };
    }

    componentDidMount() {
      todoStorage.mock().then(() => {
        this.fetchTodoList();
      });
    }

    render() {
      const tabs = [
        { title: <Badge dot={this.state.isHaveToDoList}>Ready</Badge>, sub: CompleteState.Todo },
        { title: <Badge >Finished</Badge>, sub: CompleteState.Done },
        { title: <Badge >Cancel</Badge>, sub: CompleteState.Cancel }
      ];
      const promptClick = () => prompt('ToDoList', 'Now, Write your work list!', [
        { text: 'Cancel' },
        { text: 'Submit', onPress: this.submitTodo }
      ], 'default', '') as any;
        return (
          <div style={{height: '100%'} }>
            <header className="title" onClick={promptClick}><Icon type="cross-circle" className="add-btn" />To Do List
            </header>
            <Tabs tabs={tabs}
              initialPage={0}
              // onChange={(tab, index) => { console.log('onChange', index, tab); }}
              // onTabClick={(tab, index) => { console.log('onTabClick', index, tab.title); }}
            >
              <div style={{ height: '100%', backgroundColor: '#fff' }}>
                <TodoList todoList={this.state.todoList} completeState={CompleteState.Todo} fetch={this.fetchTodoList} />
              </div>
              <div style={{ height: '100%', backgroundColor: '#fff' }}>
                <TodoList todoList={this.state.todoList} completeState={CompleteState.Done} fetch={this.fetchTodoList}/>
              </div>
              <div style={{ height: '100%', backgroundColor: '#fff' }}>
                <TodoList todoList={this.state.todoList} completeState={CompleteState.Cancel} fetch={this.fetchTodoList}/>
              </div>
            </Tabs>
        </div>
          );
    }

    private fetchTodoList = (completeState?: CompleteState) => {
      todoStorage.fetch(completeState).then((data) => {
        this.setState({
            todoList: data,
            isHaveToDoList: !!data.find((todo) => todo.completed === CompleteState.Todo)
        });
    });
    }

    private submitTodo = (value: string) => {
      todoStorage.addTodo(value).then(() => {
        Toast.success('success!', 0.5, () => {
          this.fetchTodoList();
        });
        }
      );
    }

}
