import axios from "axios";
import { useState } from "react";
export default function App() {
  return (
    <div>
      <MyHeader />
      <MyChatApp />
    </div>
  );
}

function MyHeader() {
  let appName = "MyChatApp";
  let name = "Student_Name : Vrushabh Dhone";
  let id = "Student_ID :210940520119";

  return (
    <div className="bg-dark p-3 mb-1">
      <span className="fs-2 me-2 text-light fw-bolder text-decoration-underline">
        {" "}
        {appName}
      </span>
      <span className="me-2 text-light">{name}</span>
      <span className="me-2 text-light">{id}</span>
    </div>
  );
}

function MyChatApp() {
  const [msg, setmsg] = useState("");
  const [list, setlist] = useState([]);

  const msgHandler = (e) => setmsg(e.target.value);
  const sendmsg = () => {
    //alert(`${msg}`);
    if (msg === "") {
      alert("please type something..");
      return;
    }

    const url = `http://localhost:4000/add-user`;
    const user = {
      msg: `${msg}`,
    };
    axios.post(url, user);

    const newmsg = [...list, user];
    setlist(newmsg);
    setmsg("");
  };
  return (
    <div className="bg-secondary" style={{ height: "100vh" }}>
      <div className="row">
        <div className="col-10 ">
          <input
            className="form-control ms-1 border-rounded-2 text-dark fw-bold"
            style={{ height: "80px", borderColor: "black", width: "100%" }}
            type="text"
            value={msg}
            placeholder="Lets Chat here.."
            onChange={msgHandler}
          />
        </div>
        <div className="col-2">
          <input
            className="btn btn-outline-dark text-danger fw-bold fs-3"
            style={{ height: "80px", width: "100%" }}
            type="button"
            value="Send"
            onClick={sendmsg}
          />
        </div>
      </div>
      <div>
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-dark text-light p-2 my-1 fw-bold "
            style={{ border: "black solid 2px", textAlign: "end" }}
          >
            {item.msg}
          </div>
        ))}
      </div>
    </div>
  );
}
