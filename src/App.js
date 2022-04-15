import { useSelector, useDispatch } from "react-redux";
import { changeUsersName } from "./redux/actions/changeUsersName";
import { changeUsersAge } from "./redux/actions/changeUsersAge";
import { useState } from "react";

export default function App() {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <hr></hr>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(changeUsersName(name));
          dispatch(changeUsersAge(age));
          setName("");
          setAge("");
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Change name"
        ></input>
        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          placeholder="Change age"
        ></input>
        <input type="submit" value="Change user details" />
      </form>
    </div>
  );
}
