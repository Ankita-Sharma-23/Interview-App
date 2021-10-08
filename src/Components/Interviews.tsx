import React, { useState } from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

const Interviews = (props: {
  delete: (arg0: any) => void;
  edit: (arg0: {
    edit: { interview: string; description: string };
    editIndex: any;
  }) => void;
  interviewList: any[];
}) => {
  const [interview, setInterview] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [dropDown,setDropDown]=useState<string>('')

  const changeSelectOptionHandler = (event: { target: { value: any; }; }) => {
    setDropDown(event.target.value);
  };


  const deleteInterview = (removeIndex: any) => {
    props.delete(removeIndex);
  };

  const editingDone = () => {
    const editData = {
      edit: {
        interview: interview,
        description: description,
        select:dropDown
      },
      editIndex: editIndex,
    };

    props.edit(editData);
    setEditMode(false);
    setInterview("");
    setDescription("");
  };

  const editInterview = (editIndex: React.SetStateAction<any>) => {
    const { interview, description ,select} = props.interviewList[editIndex];
    console.log("props",props);
    setInterview(interview);
    setDescription(description);
    setEditMode(true);
    setEditIndex(editIndex);
    setDropDown(select);
  };

  return (
    <div className="container">
      {editMode && (
        <div>
          <br />
          <br />
          <input
            value={interview}
            type="text"
            onChange={(event) => setInterview(event.target.value)}
          />
          <br />
          <input
            value={description}
            type="text"
            onChange={(event) => setDescription(event.target.value)}
          />
          <br />
          <button
            onClick={() => {
              editingDone();
            }}
            className="doneediting"
          >
            Done Editing
          </button>
          <br />
          <br />
          <div className="dropDown">
          <select defaultValue={dropDown}
          onChange={changeSelectOptionHandler}
          >
            <option>Choose...</option>
            <option>Front-End</option>
            <option>Back-End</option>
            <option>Full-Stack</option>
          </select>
        </div>
        </div>
      )}
      <h2>All the Interviews can be viewed here.</h2>

      {props.interviewList.map((item, index) => {
        return (
          <div
            key={index}
            className={item.completed ? "completed boxstyle" : "boxstyle"}
          >
            <Card bg="dark">
              <Card.Body>
                <Card.Text>
                  <div>Interview:{item.interview}</div>
                  <br></br>
                  <br></br>
                  <div>Description:{item.description}</div>
                  <br></br>
                  <br></br>
                  <div>Interviewer:{item.select}</div>
                  <br></br>
                  <br></br>
                  <ButtonGroup aria-label="Basic example">
                    <Button
                      className="mx-1"
                      variant="primary"
                      onClick={() => {
                        editInterview(index);
                      }}
                    >
                      <AiOutlineEdit />
                      Edit
                    </Button>
                    <Button
                      className="mx-2"
                      variant="danger"
                      onClick={() => {
                        deleteInterview(index);
                      }}
                    >
                      <AiTwotoneDelete />
                      Delete
                    </Button>
                  </ButtonGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
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
    edit: (val: any) => dispatch({ type: "EDIT", payload: val }),
    delete: (val: any) => dispatch({ type: "DELETE", payload: val }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Interviews);
