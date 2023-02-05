import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ComboBox.css";
import App from "../App.js";
import axios from "axios";
// import SouthIcon from '@mui/icons-material/South';
// npm i @mui/icons-material
import DataSection from "../components/DataSection";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const initialData = {
  first: "",
  second: "",
  third: "",
  fourth: "",
};

const Form = () => {
  const [Data, updateData] = React.useState(initialData);
  const [users, setUsers] = useState([]);
  const [dataShow, setDataShow] = useState([]);
  const [entryPoint, setEntryPoint] = useState([]);
  const [exitPoint, setExitPoint] = useState([]);
  const [forty, setForty] = useState([]);
  const [upto120, setupto120] = useState([]);
  const [upto250, setupto250] = useState([]);
  const [tones, setTones] = useState([]);
  const [upto350, setupto350] = useState([]);
  const [upto450, setupto450] = useState([]);
  const [more450, setmore450] = useState([]);

  // users supposed to be for API mapping but I dont think it working from API but instead from the SQL Database
  const [spinner, setSpinner] = useState(false);

  const handleChange = (e) => {
    updateData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(Data);
  };

  const handleAutocompletefirstChange = (e, value) => {
    updateData({
      ...Data,
      first: value,
    });
  };

  const handleAutocompletesecondChange = (e, value) => {
    updateData({
      ...Data,
      second: value,
    });
  };

  const handleAutocompletethirdChange = (e, value) => {
    updateData({
      ...Data,
      third: value,
    });
  };
  const handleAutocompleteforthChange = (e, value) => {
    updateData({
      ...Data,
      forth: value,
    });
  };
  console.log(Data);
  useEffect(() => {
    if (Data.first == "Entry Point") {
      console.log("Entry Point Selected");
      setEntryPoint([]);
      axios
        .get("http://localhost:4000/entrypoint")
        .then((res) => {
          setEntryPoint(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Entry Point Record", entryPoint);
    }
    if (Data.first == "Exit Point") {
      console.log("Exit Point Selected");
      setExitPoint([]);
      axios
        .get("http://localhost:4000/exitPoint")
        .then((res) => {
          setExitPoint(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Exit Point Record", exitPoint);
    }
    if (Data.first == "MTOW (TONNES)") {
      console.log("Tonnes Selected");
      setTones([]);
      axios
        .get("http://localhost:4000/routepoint")
        .then((res) => {
          setTones(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Tones Record", tones);
    }
    if (Data.first == "5 to 40") {
      console.log("Forty Selected");
      setForty([]);
      axios
        .get("http://localhost:4000/fourty")
        .then((res) => {
          setForty(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Forty Record", forty);
    }
    if (Data.first == "More than 40 and upto 120") {
      console.log("120 Selected");
      setupto120([]);
      axios
        .get("http://localhost:4000/onehundredtwenty")
        .then((res) => {
          setupto120(res.data);
        })
        .catch((err) => console.log(err));
      console.log("120 Record", upto120);
    }
    if (Data.first == "More than 120 and upto 250") {
      console.log("250 Selected");
      setupto250([]);
      axios
        .get("http://localhost:4000/twohundredfifty")
        .then((res) => {
          setupto250(res.data);
        })
        .catch((err) => console.log(err));
      console.log("250 Record", upto250);
    }
    if (Data.first == "More than 250 and upto 350") {
      console.log("350 Selected");
      setupto350([]);
      axios
        .get("http://localhost:4000/threehundredfifty")
        .then((res) => {
          setupto350(res.data);
        })
        .catch((err) => console.log(err));
      console.log("350 Record", upto350);
    }
    if (Data.first == "More than 350 and upto 450") {
      console.log("350 Selected");
      setupto450([]);
      axios
        .get("http://localhost:4000/fourhundredfifty")
        .then((res) => {
          setupto450(res.data);
        })
        .catch((err) => console.log(err));
      console.log("450 Record", upto450);
    }
    if (Data.first == "More than 450") {
      console.log("350 Selected");
      setmore450([]);
      axios
        .get("http://localhost:4000/morefourhundredfifty")
        .then((res) => {
          setmore450(res.data);
        })
        .catch((err) => console.log(err));
      console.log("450 More Record", more450);
    }
    if (Data.second == "Entry Point") {
      console.log("Entry Point Selected");
      setEntryPoint([]);
      axios
        .get("http://localhost:4000/entrypoint")
        .then((res) => {
          setEntryPoint(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Entry Point Record", entryPoint);
    }
    if (Data.second == "Exit Point") {
      console.log("Exit Point Selected");
      setExitPoint([]);
      axios
        .get("http://localhost:4000/exitPoint")
        .then((res) => {
          setExitPoint(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Exit Point Record", exitPoint);
    }
    if (Data.second == "MTOW (TONNES)") {
      console.log("Tonnes Selected");
      setTones([]);
      axios
        .get("http://localhost:4000/routepoint")
        .then((res) => {
          setTones(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Tones Record", exitPoint);
    }
    if (Data.second == "5 to 40") {
      console.log("Forty Selected");
      setForty([]);
      axios
        .get("http://localhost:4000/fourty")
        .then((res) => {
          setForty(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Forty Record", forty);
    }
    if (Data.second == "More than 40 and upto 120") {
      console.log("120 Selected");
      setupto120([]);
      axios
        .get("http://localhost:4000/onehundredtwenty")
        .then((res) => {
          setupto120(res.data);
        })
        .catch((err) => console.log(err));
      console.log("120 Record", upto120);
    }
    if (Data.second == "More than 120 and upto 250") {
      console.log("250 Selected");
      setupto250([]);
      axios
        .get("http://localhost:4000/twohundredfifty")
        .then((res) => {
          setupto250(res.data);
        })
        .catch((err) => console.log(err));
      console.log("250 Record", upto250);
    }
    if (Data.second == "More than 250 and upto 350") {
      console.log("350 Selected");
      setupto350([]);
      axios
        .get("http://localhost:4000/threehundredfifty")
        .then((res) => {
          setupto350(res.data);
        })
        .catch((err) => console.log(err));
      console.log("350 Record", upto350);
    }
    if (Data.second == "More than 350 and upto 450") {
      console.log("350 Selected");
      setupto450([]);
      axios
        .get("http://localhost:4000/fourhundredfifty")
        .then((res) => {
          setupto450(res.data);
        })
        .catch((err) => console.log(err));
      console.log("450 Record", upto450);
    }
    if (Data.second == "More than 450") {
      console.log("350 Selected");
      setmore450([]);
      axios
        .get("http://localhost:4000/morefourhundredfifty")
        .then((res) => {
          setmore450(res.data);
        })
        .catch((err) => console.log(err));
      console.log("450 More Record", more450);
    }
    if (Data.third == "Entry Point") {
      console.log("Entry Point Selected");
      setEntryPoint([]);
      axios
        .get("http://localhost:4000/entrypoint")
        .then((res) => {
          setEntryPoint(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Entry Point Record", entryPoint);
    }
    if (Data.third == "Exit Point") {
      console.log("Exit Point Selected");
      setExitPoint([]);
      axios
        .get("http://localhost:4000/exitPoint")
        .then((res) => {
          setExitPoint(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Exit Point Record", exitPoint);
    }
    if (Data.third == "MTOW (TONNES)") {
      console.log("Tonnes Selected");
      setTones([]);
      axios
        .get("http://localhost:4000/routepoint")
        .then((res) => {
          setTones(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Tones Record", exitPoint);
    }
    if (Data.third == "5 to 40") {
      console.log("Forty Selected");
      setForty([]);
      axios
        .get("http://localhost:4000/fourty")
        .then((res) => {
          setForty(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Forty Record", forty);
    }
    if (Data.third == "More than 40 and upto 120") {
      console.log("120 Selected");
      setupto120([]);
      axios
        .get("http://localhost:4000/onehundredtwenty")
        .then((res) => {
          setupto120(res.data);
        })
        .catch((err) => console.log(err));
      console.log("120 Record", upto120);
    }
    if (Data.third == "More than 120 and upto 250") {
      console.log("250 Selected");
      setupto250([]);
      axios
        .get("http://localhost:4000/twohundredfifty")
        .then((res) => {
          setupto250(res.data);
        })
        .catch((err) => console.log(err));
      console.log("250 Record", upto250);
    }
    if (Data.third == "More than 250 and upto 350") {
      console.log("350 Selected");
      setupto350([]);
      axios
        .get("http://localhost:4000/threehundredfifty")
        .then((res) => {
          setupto350(res.data);
        })
        .catch((err) => console.log(err));
      console.log("350 Record", upto350);
    }
    if (Data.third == "More than 350 and upto 450") {
      console.log("350 Selected");
      setupto450([]);
      axios
        .get("http://localhost:4000/fourhundredfifty")
        .then((res) => {
          setupto450(res.data);
        })
        .catch((err) => console.log(err));
      console.log("450 Record", upto450);
    }
    if (Data.third == "More than 450") {
      console.log("350 Selected");
      setmore450([]);
      axios
        .get("http://localhost:4000/morefourhundredfifty")
        .then((res) => {
          setmore450(res.data);
        })
        .catch((err) => console.log(err));
      console.log("450 More Record", more450);
    }
    if (Data.forth == "Entry Point") {
      console.log("Entry Point Selected");
      setEntryPoint([]);
      axios
        .get("http://localhost:4000/entrypoint")
        .then((res) => {
          setEntryPoint(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Entry Point Record", entryPoint);
    }
    if (Data.forth == "Exit Point") {
      console.log("Exit Point Selected");
      setExitPoint([]);
      axios
        .get("http://localhost:4000/exitPoint")
        .then((res) => {
          setExitPoint(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Exit Point Record", exitPoint);
    }
    if (Data.forth == "MTOW (TONNES)") {
      console.log("Tonnes Selected");
      setTones([]);
      axios
        .get("http://localhost:4000/routepoint")
        .then((res) => {
          setTones(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Tones Record", exitPoint);
    }
    if (Data.forth == "5 to 40") {
      console.log("Forty Selected");
      setForty([]);
      axios
        .get("http://localhost:4000/fourty")
        .then((res) => {
          setForty(res.data);
        })
        .catch((err) => console.log(err));
      console.log("Forty Record", forty);
    }
    if (Data.forth == "More than 40 and upto 120") {
      console.log("120 Selected");
      setupto120([]);
      axios
        .get("http://localhost:4000/onehundredtwenty")
        .then((res) => {
          setupto120(res.data);
        })
        .catch((err) => console.log(err));
      console.log("120 Record", upto120);
    }
    if (Data.forth == "More than 120 and upto 250") {
      console.log("250 Selected");
      setupto250([]);
      axios
        .get("http://localhost:4000/twohundredfifty")
        .then((res) => {
          setupto250(res.data);
        })
        .catch((err) => console.log(err));
      console.log("250 Record", upto250);
    }
    if (Data.forth == "More than 250 and upto 350") {
      console.log("350 Selected");
      setupto350([]);
      axios
        .get("http://localhost:4000/threehundredfifty")
        .then((res) => {
          setupto350(res.data);
        })
        .catch((err) => console.log(err));
      console.log("350 Record", upto350);
    }
    if (Data.forth == "More than 350 and upto 450") {
      console.log("350 Selected");
      setupto450([]);
      axios
        .get("http://localhost:4000/fourhundredfifty")
        .then((res) => {
          setupto450(res.data);
        })
        .catch((err) => console.log(err));
      console.log("450 Record", upto450);
    }
    if (Data.forth == "More than 450") {
      console.log("350 Selected");
      setmore450([]);
      axios
        .get("http://localhost:4000/morefourhundredfifty")
        .then((res) => {
          setmore450(res.data);
        })
        .catch((err) => console.log(err));
      console.log("450 More Record", more450);
    }
    // const res = await fetch('http://localhost:4000/getdata_withQuery');
    // const data = await res.json();
    // setUsers(data);
  }, [Data]);
  console.log(users);

  console.log("Records");
  console.log("Records EXIT", exitPoint);
  console.log("Records", entryPoint);
  console.log("Records", tones);
  console.log("Records", forty);
  console.log("Records");
  console.log("Records");

  const options = [
    "Entry Point",
    "Exit Point",
    "MTOW (TONNES)",
    "5 to 40",
    "More than 40 and upto 120",
    "More than 120 and upto 250",
    "More than 250 and upto 350",
    "More than 350 and upto 450",
    "More than 450",
  ];

  let props = [];
  console.log(props);
  function autoScroll() {
    window.scrollTo(0, 500);
  }
  const fetchData = () => {
    setSpinner(true);

    localStorage.removeItem("EntryPoint");
    localStorage.removeItem("ExitPoint");
    localStorage.removeItem("Tones");
    localStorage.removeItem("Forty");
    localStorage.removeItem("upto120");
    localStorage.removeItem("upto250");
    localStorage.removeItem("upto350");
    localStorage.removeItem("upto450");
    localStorage.removeItem("more450");
    localStorage.setItem("EntryPoint", JSON.stringify(entryPoint));
    localStorage.setItem("ExitPoint", JSON.stringify(exitPoint));
    localStorage.setItem("Tones", JSON.stringify(tones));
    localStorage.setItem("Forty", JSON.stringify(forty));
    localStorage.setItem("upto120", JSON.stringify(upto120));
    localStorage.setItem("upto250", JSON.stringify(upto250));
    localStorage.setItem("upto350", JSON.stringify(upto350));
    localStorage.setItem("upto450", JSON.stringify(upto450));
    localStorage.setItem("more450", JSON.stringify(more450));
    console.log(props);

    window.location.reload();
    setTimeout(() => {
      autoScroll();
    }, 10);
  };

  return (
    <div className="container">
      {/* <DataSection /> */}
      <Content>
        <div className="features">
          <div className="buttons">
            <h1>Fill in Details</h1>

            <form>
              {/* <select>
                  <option>null</option>
                  <option>ENTRY_POINT1</option>
                  <option>EXIT_POINT1</option>
                </select> */}

              <div className="ComboBox">
                <div style={{ marginLeft: "0%", marginTop: "0px" }}>
                  <Autocomplete
                    name="initialData"
                    onChange={(event, value) =>
                      handleAutocompletefirstChange(event, value)
                    }
                    options={options}
                    style={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="select"
                        variant="outlined"
                        name="first"
                        onChange={handleChange}
                      />
                    )}
                  />
                </div>
                <br />

                <div style={{ marginLeft: "0%", marginTop: "0px" }}>
                  <Autocomplete
                    name="initialData"
                    onChange={(event, value) =>
                      handleAutocompletesecondChange(event, value)
                    }
                    options={options}
                    style={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="select"
                        variant="outlined"
                        name="second"
                        onChange={handleChange}
                      />
                    )}
                  />
                </div>
                <br />

                <div style={{ marginLeft: "0%", marginTop: "0px" }}>
                  <Autocomplete
                    name="initialData"
                    onChange={(event, value) =>
                      handleAutocompletethirdChange(event, value)
                    }
                    options={options}
                    style={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="select"
                        variant="outlined"
                        name="third"
                        onChange={handleChange}
                      />
                    )}
                  />
                </div>
                <br />
                <div style={{ marginLeft: "0%", marginTop: "0px" }}>
                  <Autocomplete
                    name="initialData"
                    onChange={(event, value) =>
                      handleAutocompleteforthChange(event, value)
                    }
                    options={options}
                    style={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="select"
                        variant="outlined"
                        name="third"
                        onChange={handleChange}
                      />
                    )}
                  />
                </div>
                <br />
              </div>

              <div className="btn">
                <Button variant="primary" onClick={() => fetchData()}>
                  Submit
                </Button>{" "}
                {/* <DataSection/> */}
                <Button type="clear" variant="danger">
                  Clear
                </Button>{" "}
                {spinner && <p>something is loading</p>}
              </div>
            </form>

            <p>Please enter details required above.</p>

            <div className="data">
              {/* "fourty":703,"onehundredtwenty":926,"twohundredfifty":1406,"threehundredfifty":1597,"fourhundredfifty":1821,"morefourhundredfifty":2076 */}
              {/* {users.map((item) => (
          <div className='map_Data'> 
            <ol key={item.ENTRY_POINT1}>
              Entry_Point: { item.ENTRY_POINT1 }
              <br />
              Exit_Point: { item.EXIT_POINT1 }
              <br />
              Route_Point: { item.RoutePoint }
              <br />
              Distance_Nm: { item.DistanceNm }
              <br />
              {/* Distance_km: { item.Distance_km } */}
              {/* MTOW (TONNES): { item.Distance_km } */}
              {/* </ol> */}

              {/* </div> */}

              {/* ))} */}
            </div>
            {/* dont worry about random error connection message on site console, they will eventually go away */}
          </div>
        </div>
        {/* Add downwards arrow */}
      </Content>
    </div>
  );
};

const Content = styled.div`
  // background-color:grey;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-left: 25%;
  margin-right: 25%;
`;

export default Form;
