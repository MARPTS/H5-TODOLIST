import { Checkbox, List, Toast, Button } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
import * as React from 'react';
import { CompleteState, Todo, todoStorage} from '../../server/localStorage';

import './index.less';

interface Props {
    todoList: Todo[];
    completeState: CompleteState;
    fetch: () => void;
}

export default class TodoList extends React.Component<Props, {}> {

    render () {
        const {todoList, completeState} = this.props;
        let count = 0;
        const render = <List >
        {todoList.map((todo) => {
            if (todo.completed === completeState) {
                count ++;
                return <div style={{position: 'relative'}}>
                        <CheckboxItem
                        key={todo.id}
                        onChange={(evt: any) => this.onChange(evt, todo.id)}
                        defaultChecked={todo.completed === CompleteState.Done}
                        disabled={completeState === CompleteState.Cancel}
                        >
                        {todo.title}
                        </CheckboxItem>
                        {completeState === CompleteState.Cancel ? '' : <Button type="ghost" size="small" inline className="list-cancel-btn" onClick={() => this.onClickCancel(todo.id)}>cancel</Button>}</div>;
            }
            return; }) as any}
        </List>;
        return <div>
                    {count ? render : <div className="enpty-placeHolder">Hear is enpty！</div>}
                </div>;
    }

    private onChange = (evt: any, id: number) => {
        if (this.props.completeState === CompleteState.Cancel) {return; }
        todoStorage.setCompleteState(evt.target.checked ? CompleteState.Done : CompleteState.Todo, id);
        Toast.success('success!', 0.5, () => {
            this.props.fetch();
        });
    }

    private onClickCancel = (id: number) => {
        todoStorage.setCompleteState(CompleteState.Cancel, id);
        Toast.success('success cancel this item!', 0.5, () => {
            this.props.fetch();
        });
    }
}