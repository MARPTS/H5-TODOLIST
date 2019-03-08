export interface Todo {
    id: number;
    completed: CompleteState;
    title: string;
}

export const enum CompleteState {
    Todo,
    Done,
    Cancel
}

const STORAGE_KEY = 'todos-list';

export const todoStorage = {
    async mock() {
        if (!localStorage.getItem(STORAGE_KEY)) {
            for (let i = 0; i < 30; i++) {
                await this.addTodo(String(Math.round(Math.random() * i * 100))).then((res: Todo) => {
                    if (i > 10 && i <= 20) {
                        this.setCompleteState(CompleteState.Done, res.id);
                    } else if (i > 20) {
                        this.setCompleteState(CompleteState.Cancel, res.id);
                    }
                });
            }
        }
    },
    fetch(state?: CompleteState): Promise<Todo[]> {
        return new Promise((resolve, reject) => {
            const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            if (!state) {
                resolve(todos);
            } else {
              const targetList = todos.find((todo: Todo, index: number) => {
                    todo.completed = state;
                });
                resolve(targetList);
            }
        });
    },
    addTodo(title: string) {
        return new Promise ((resolve) => {
            todoStorage.fetch().then((data: Todo[]) => {
                const todos = data;
                const newTodo = {
                    id: data.length + 1,
                    completed: CompleteState.Todo,
                    title
                };
                todos.push(newTodo);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
                resolve(newTodo);
            });
        });
    },
    setCompleteState(state: CompleteState, id: number) {
        return new Promise((resove, reject) => {
            this.fetch().then((res) => {
                const todoIndex = res.findIndex((todo) => todo.id === id);
                if (todoIndex === -1) {
                    reject('can not find the id' + id)
                } else {
                    res[todoIndex].completed = state;
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(res));
                    resove('success');
                }
            });
        });
    }
};

