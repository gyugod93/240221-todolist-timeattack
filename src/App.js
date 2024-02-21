import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [workingCards, setWorkingCards] = useState([]);
  const [completedCards, setCompletedCards] = useState([]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    const newTodo = { title, content };
    setWorkingCards([...workingCards, newTodo]);
    setTitle("");
    setContent("");
  };

  const deleteTodoHandler = (index, isWorking) => {
    if (isWorking) {
      const updatedWorkingCard = [...workingCards];
      updatedWorkingCard.splice(index, 1);
      setCompletedCards(updatedWorkingCard);
    }
  };

  const workingTodoHandler = (index) => {
    const workingCard = completedCards[index];
    deleteTodoHandler(index, true);
    setWorkingCards([...workingCards, workingCard]);
  };

  return (
    <div>
      <h1>Todolist</h1>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          onSubmit={addTodoHandler}
          placeholder="제목을 입력해주세요"
        />
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          style={{ marginLeft: "15px" }}
          placeholder="내용을 입력해주세요"
        />
        <button
          onClick={(e) => addTodoHandler(e)}
          style={{ marginLeft: "15px" }}
        >
          입력
        </button>
      </form>
      <h2>working</h2>
      {workingCards.map((card, index) => {
        return (
          <div key={index}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
            <button onClick={() => workingTodoHandler(index)}>완료</button>
            <button onClick={() => deleteTodoHandler(index, true)}>삭제</button>
          </div>
        );
      })}
      <h2>done</h2>
      {completedCards.map((card, index) => {
        return (
          <div key={index}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
            <button>취소</button>
            <button>삭제</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
