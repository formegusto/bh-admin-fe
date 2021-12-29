import { connect } from "react-redux";
import { RootReducer } from "..";
import * as actions from "./actions";

const mapState = ({ apiApplication }: RootReducer) => ({
  ...apiApplication,
});
const ApiApplicationConnector = connect(mapState, { ...actions });
export default ApiApplicationConnector;
