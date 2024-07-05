import React, { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [message, setMessage] = useState("My message");
  useEffect(() => {
    fetch("http://localhost:3000/courses/hello")
      .then((res) => res.json())
      .then((obj) => setMessage(obj.message));
  }, []);

  return <div>{message}</div>;
};

export default App;
// type AppState = {
//   message: string;
// };
// export default class App extends React.Component<{}, AppState> {
//   state: AppState = {
//     message: "Default message",
//   };

//   componentDidMount(): void {
//     console.log("bro");
//     fetch("http://localhost:3000/courses/hello")
//       .then((res) => res.json())
//       .then((obj) => this.setState({ message: obj.message }));
//   }

//   render() {
//     return <div>{this.state.message}</div>;
//   }
// }
