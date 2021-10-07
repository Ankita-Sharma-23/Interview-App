import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { TeamOutlined } from "@ant-design/icons";
import {
  LoginOutlined,
  MenuOutlined,
  LogoutOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

export const Header = (props: any) => {
  return (
    <div>
      <div className="header">
        <h1 className="head">
          <TeamOutlined /> Interview update
        </h1>

        <div className="home">
          <h1>
            <Link to="/Home" className="login">
              <AiTwotoneHome />
              <br></br>
              <p className="script">Home</p>
            </Link>
          </h1>
        </div>
        <div>
          <h1>
            <Link to="/Login" className="login">
              <LoginOutlined />
              <br></br> <p className="script">Login</p>
            </Link>
          </h1>
        </div>
        <div>
          <h1>
            <Link to="/Form" className="login">
              <MenuOutlined />
              <br></br>
              <p className="script">Details</p>
            </Link>
          </h1>
        </div>
        <div>
          <h1>
            <Link to="/Home" className="reset">
              <DeleteOutlined />
              <br></br>
              <p className="script">Reset</p>
            </Link>
          </h1>
        </div>
        <div>
          <h1>
            <Link to="/Home" className="reset">
              <LogoutOutlined />
              <br></br>
              <p className="script">LogOut</p>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};
