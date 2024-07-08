import React, { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [courses, setCourses] = useState<any[]>([{ title: "Default" }]);
  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((courses) => {
        setCourses(courses);
      });
  }, []);
  return (
    <div>
      <ul>
        {courses.map((item) => (
          <li key={item.id}>
            {item.number} - {item?.title}
          </li>
        ))}
      </ul>
    </div>
  );
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
