import React, { useState } from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

const Interviews = (props: {
  removetodo: (arg0: any) => void;
  edittodo: (arg0: {
    editToDo:
      | { interview: string; description: string; date: string }
      | { completed: boolean };
    editIndex: number;
  }) => void;
  interviewList: any[];
}) => {
  const [interview, setInterview] = useState<any>("");
  const [description, setDescription] = useState<any>(""); 
  const [date, setDate] = useState<any>("");
  const [completed, setCompleted] = useState<any>(false);
  const [editMode, setEditMode] = useState<any>(false);
  const [editIndex, setEditIndex] = useState<any>(-1);

  const removeThisTask = (removeIndex: any) => {
    props.removetodo(removeIndex);
  };

  const editingDone = () => {
    const editData = {
      editToDo: {
        interview: interview,
        description: description,
        date: date,
      },
      editIndex: editIndex,
    };

    props.edittodo(editData);
    setEditMode(false);
    setInterview("");
    setDescription("");
    setDate("");
  };

  const editThisTask = (editIndex: React.SetStateAction<any>) => {
    const { task, description, date, completed } = props.interviewList[editIndex];
    setInterview(task);
    setDescription(description);
    setDate(date);
    setCompleted(completed);
    setEditMode(true);
    setEditIndex(editIndex);
  };

  const onChecked = (index: number) => {
    const editData = {
      editToDo: {
        completed: !props.interviewList[index].completed,
      },
      editIndex: index,
    };
    props.edittodo(editData);
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
          <input
            value={date}
            type="date"
            onChange={(event) => setDate(event.target.value)}
          />
          <br />
          <br />
          <br />
          <button
            onClick={() => {
              editingDone();
            }}
          >
            Done Editing
          </button>
          <br />
          <br />
        </div>
      )}
      <h2>All the Tasks can be viewed here.</h2>

      {props.interviewList.map((item, index) => {
        return (
          <div
            key={index}
            className={item.completed ? "completed boxstyle" : "boxstyle"}
          >
            <Card bg="dark">
              <Card.Body>
                <Card.Title>
                  <input
                    type="checkbox"
                    onClick={() => {
                      onChecked(index);
                    }}
                  />
                  {item.task}
                </Card.Title>
                <Card.Text>
                  <div>Description:{item.description}</div>
                  <div>To be done by:{item.date}</div>
                  <ButtonGroup aria-label="Basic example">
                    <Button
                      className="mx-1"
                      variant="primary"
                      onClick={() => {
                        editThisTask(index);
                      }}
                    >
                      <AiOutlineEdit />
                      Edit
                    </Button>

                    <Button
                      className="mx-1"
                      variant="danger"
                      onClick={() => {
                        removeThisTask(index);
                      }}
                    >
                      <AiTwotoneDelete />
                      Remove
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
const mapStateToProps = (state: { todoItems: any }) => {
  return {
    interviewList: state.todoItems,
  };
};
const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: any }) => any
) => {
  return {
    edittodo: (val: any) => dispatch({ type: "EDIT_TODO", payload: val }),
    removetodo: (val: any) => dispatch({ type: "REMOVE_TODO", payload: val }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Interviews);
