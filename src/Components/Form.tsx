import React, { useState } from "react";
import { Button, Card,FormControl, InputGroup } from "react-bootstrap";
import { FiEdit3 } from "react-icons/fi";
import { MdDescription } from "react-icons/md";
import { Select, MenuItem } from "@material-ui/core";
import { SelectOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

export const Form = (props: {
    addInterview: (arg0: {
    interview: string;
    description: string;
  }) => void;
  interviewList: any[];
}) => {
  const [interview, setInterview] = useState<any>("");
  const [description, setDescription] = useState<any>("");

  console.log("77777777",props.interviewList)

  const addInterviews = () => {
    const interViews = {
      interview: interview,
      description: description,
    };
 console.log("78888888",interViews)
//  alert(interViews)
     props.addInterview(interViews)
    // props?.addInterview(interViews);
    console.log(props.addInterview(interViews))

    setInterview("");
    setDescription("");
  }; 

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <FiEdit3 />
        </InputGroup.Text>
        <FormControl
          type="text"
          value={interview}
          name="interview"
          onChange={(event:any) => setInterview(event.target.value)}
          placeholder="Title............"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          {" "}
          <MdDescription />
        </InputGroup.Text>
        <FormControl
          type="text"
          value={description}
          name="description"
          onChange={(event:any) => setDescription(event.target.value)}
          placeholder="Description"
        />
      </InputGroup>
      <SelectOutlined />
      <Select
        labelId="label"
        id="select"
        value="10"
        style={{
          width: "80%",
          backgroundColor: "rgb(78, 77, 77)",
          alignSelf: "center",
          height: "50px",
        }}
      >
        <MenuItem value="10">.....select.....</MenuItem>
        <MenuItem value="20">Twenty</MenuItem>
      </Select>
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
        Add Detail
      </Button>
    </div>
  );
};

const mapStateToProps=(state: { interViews: any; })=>{
    return{
        interviewList:state?.interViews
    }
}
const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: any; }) => any) => {
return {
    addInterview: (val: any) => dispatch({ type: "ADD_INTERVIEW", payload: val }),
}
} 
export default connect(mapStateToProps,mapDispatchToProps)

