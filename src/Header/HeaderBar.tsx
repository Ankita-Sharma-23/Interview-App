import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { TeamOutlined, CheckOutlined } from "@ant-design/icons";
import { LoginOutlined, MenuOutlined, LogoutOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

const HeaderBar = (props: any) => {
  console.log("1111111111", props.loginInfo);
  return (
    <div className="headerBg">
      <div className="header">
        <h1 className="head">
          <TeamOutlined /> Interview update
        </h1>
        <div className="navBarOption">
          <div>
            <Link to="/Home" className="login">
              <AiTwotoneHome />
              <p className="script">Home</p>
            </Link>
          </div>
          {props.loginInfo.UserName}
          <div>
            <Link to="/Login" className="login">
              <LoginOutlined />
              <p className="script">Login</p>
            </Link>
          </div>
          <div>
            <Link to="/Form" className="login">
              <MenuOutlined />
              <p className="script">Details</p>
            </Link>
          </div>
          <div>
            <Link to="/Interviews" className="reset">
              <CheckOutlined />
              <p className="script">Interviews</p>
            </Link>
          </div>
          <div>
            <Link to="/Home" className="reset">
              <LogoutOutlined />
              <p className="script">LogOut</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: { userDetails: any }) => {
  return {
    loginInfo: state.userDetails,
  };
};
export default connect(mapStateToProps, null)(HeaderBar);
