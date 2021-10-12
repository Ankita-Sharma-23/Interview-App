import React, { useState } from 'react'
import { AiFillFilter } from 'react-icons/ai'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Left } from 'react-bootstrap/lib/Media'

const ViewInterview = (props: { interviewList: any[] }) => {
    const [showList, setShowList] = useState(props.interviewList)

    const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        switch (event.target.value) {
            case "Selected":
                const selectedList= props.interviewList.filter((item, index) => {
                    if (!item.Selected) {
                        return true
                    }
                    else {
                        return false
                    }
                })
                console.log(selectedList)
                setShowList(selectedList)

                break;

            case "Rejected":
                const rejectedList= props.interviewList.filter((item, index) => {
                     if (item.Selected) {
                        return true
                    }
                    else {
                        return false
                    }
                })
                console.log(rejectedList)
                setShowList(rejectedList)

                break;

           
            case "view_all":
                setShowList(props.interviewList)

                break;

            default:
                setShowList([])
        }
    } 

    return ( 
        <div className="container3">
            <br /><br />
            <h3 className="InterviewHeading2">View the list of selected and rejected condidate!</h3><br /><br /><br />
            <Row className="interviewView">
                <Col sm={{ span: 4, offset: 1 }} >
                </Col>
                <Col sm={{ span: 3, offset: 1 }}>
                    <select onChange={(event) => { changeHandler(event) }} className="selectoption">
                        <option value="view_all" >whole List</option>
                        <option value="Selected" >Selected</option>
                        <option value="Rejected" >Rejected</option>
                    </select>
                </Col>


            </Row> 

            {showList.map((item, index) => {
                return (
                    <div key={index} className="boxstyle">
                        <div>interview:{item.interview}</div>
                        <div>Description:{item.description}</div>
                        <div>Selected By:{item.select}</div>

                    </div>

                )
            })}

        </div >
    )
}
const mapStateToProps=(state:{interViews:any})=>{
    return{
    interviewList: state.interViews
    }

}

const mapDispatchToProps=(dispatch:any )=>{
    return{
    addtodo: (val: any)=>
     dispatch({ type: "ADD_USER", payload: val })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewInterview)
    