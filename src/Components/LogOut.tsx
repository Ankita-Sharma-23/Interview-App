import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const LogOut = (props: any) => {
  useEffect(() => {
    props.logout();
  });

  return (
    <div>
      <Redirect to="/Home" />
    </div>
  );
};
const mapDispatchToProps = (dispatch: (arg0: { type: string }) => void) => {
  return {
    logout: () => {
      dispatch({ type: "LOGOUT" });
    },
  };
};
export default connect(null, mapDispatchToProps)(LogOut);
