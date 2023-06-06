import "./Todo.css"
import "./TodoList.css"

function Todo({ id, title, completed, onComplete }) {
  const isCompleted = (status) => {
    return status ? "completed" : "incomplete"
  }

  const completeTodo = () => {
    onComplete(id)
  }

  return (
    <div className={`list ${isCompleted(completed)}`}>
      {title}
      <div className="btn-action">
        <button onClick={completeTodo}>
          <span className="material-symbols-outlined">done</span>
        </button>
        <button>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  )
}

export default Todo;
