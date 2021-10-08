import React, { useState } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import { FiEdit3 } from "react-icons/fi";
import { MdDescription } from "react-icons/md";
import { connect } from "react-redux";

const Form = (props: { addInterview: any; interviewList: any }) => {
  const [interview, setInterview] = useState<any>("");
  const [description, setDescription] = useState<any>("");
  const [select, setSelect] = useState<any>("");
  const[selected,setSelected]= useState<any>("")

  const changeSelectOptionHandler = (event: { target: { value: any; }; }) => {
    setSelect(event.target.value);
  };

  const handleChange=(e: { target: { value: any; }; })=>{
    setSelected(e.target.value)
  }

  const frontend = ["Mr.Sumit","Mr.Rohit","Mr.XXX"];
  const fullstack= ["X", "Y", "Z", "H"];
  const backend = ["A", "B", "C", "D"];

  let type = null;
  let options = null;

  if (select === "Front-End") {
    type = frontend;
  } else if (select === "Back-End") {
    type = fullstack;
  } else if (select === "Full-Stack") {
    type = backend;
  }


  const addInterviews = () => {
    if(interview|| description||selected){
      const interViews = {
        interview: interview,
        description: description,
        select: select,
      };
      console.log("78888888", interViews);
      //  alert(interViews)
      props?.addInterview(interViews);
      console.log(props?.addInterview(interViews));
  
      setInterview("");
      setDescription("");
      setSelect("");

    }
    else{
      alert("required all the fields")
    }
   
  };
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>

      <InputGroup className="mb-3" aria-required>
        <InputGroup.Text id="basic-addon1" aria-required>
          <FiEdit3 aria-required />
        </InputGroup.Text>
        <FormControl
          type="text"
          value={interview}
          name="interview"
          onChange={(event: any) => setInterview(event.target.value)}
          placeholder="Title............"
          required
        />
      </InputGroup>

      <InputGroup className="mb-3" aria-required>
        <InputGroup.Text id="basic-addon1">
          {" "}
          <MdDescription />
        </InputGroup.Text>
        <FormControl
          type="text"
          value={description}
          name="description"
          onChange={(event: any) => setDescription(event.target.value)}
          placeholder="Description"
          required
        />
      </InputGroup>
        <div className="dropDown">
          <select onChange={changeSelectOptionHandler} className="dropdownClass">
            <option>Choose...</option>
            <option>Front-End</option>
            <option>Back-End</option>
            <option>Full-Stack</option>
          </select>
        </div>
        <div>
          <select onChange={handleChange} className="dropdownClass">
            {

              options
            }
          </select>
        </div>
      <br></br>
      <br></br>

      <Button
        variant="primary" 
        type="submit"
        onClick={() => {
          addInterviews();
        }}
        style={{ backgroundColor: "green", width: "150px", height: "40px" }}
      >
        ADD
      </Button>
      {props.interviewList.map(
        (item: {
          interview:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          description:
            | string
            | number
            | boolean
            | {}
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactNodeArray
            | React.ReactPortal
            | null
            | undefined;
          selected:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
        }) => { 
          return (
            <div className="boxstyle">
              <Card bg="dark">
                <Card.Body>
                  <Card.Title>{item.interview}</Card.Title>
                  <Card.Text>
                    <div>Description:{item.description}</div>
                  </Card.Text>
                  <Card.Text>
                    <div>Interviewer:{item.selected}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        }
      )}
    </div>
  );
};
const mapStateToProps = (state: { interViews: any }) => {
  return {
    interviewList: state.interViews,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    addInterview: (val: any) =>
      dispatch({ type: "ADD_INTERVIEW", payload: val }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
