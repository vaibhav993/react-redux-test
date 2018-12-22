import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Users from "../components/Users/Users"

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    data: state.users
});

export default withRouter(connect(mapStateToProps)(Users));