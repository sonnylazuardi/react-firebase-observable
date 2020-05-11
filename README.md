# React Firebase Observable

Reactjs firebase data observable using mobx.

```javascript
import { observer, useFirebaseObservable } from "react-firebase-observable";

export const App = observer(() => {
  const initialState = {
    scores: [ { name: "User 0", score: 0 } ],
    question: "..."
  };
  const firebaseConfig = {...};
  const data = useFirebaseObservable(firebaseConfig, initialState);

  return (
    <div className="App">
      <h2>Firebase Observable!</h2>
      <div>{data.question}</div>
      <UserList scores={scores} />
      <button
        onClick={() => {
          data.question = "question A";
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          data.question = "question B";
        }}
      >
        Change B
      </button>
    </div>
  );
});
```

### How to Use

Wrap your component with `observer` function, and config your observable firebase inside the observer function
