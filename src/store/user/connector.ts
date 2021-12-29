import { connect } from "react-redux";
import { RootReducer } from "..";
import * as actions from "./actions";

const mapState = ({ user }: RootReducer) => ({
  ...user,
});

const UserConnector = connect(mapState, { ...actions });
export default UserConnector;
