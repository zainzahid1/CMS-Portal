import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';
import Layout from './hoc/Layout/Layout'


const AdminProfile = React.lazy(() => {
  return import('./containers/ADMINDATA/Profile/Profile');
});
const InsertUser = React.lazy(() => {
  return import('./containers/ADMINDATA/ViewUsers/Insert');
});
const EditUser = React.lazy(() => {
  return import('./containers/ADMINDATA/ViewUsers/Edit');
});
const ViewUser = React.lazy(() => {
  return import('./containers/ADMINDATA/ViewUsers/View');
});
const EditAttendenceAdmin = React.lazy(() => {
  return import('./containers/ADMINDATA/ViewAttendenceSheet/Edit');
});
const ViewAttendenceAdmin = React.lazy(() => {
  return import('./containers/ADMINDATA/ViewAttendenceSheet/View');
});
const ViewLeaveSheet = React.lazy(() => {
  return import('./containers/ADMINDATA/ViewLeaveRequests/LeaveRequestsSheet');
});
const CheckSpecificStudentAttendence = React.lazy(() => {
  return import('./containers/ADMINDATA/AttendenceReportSpecificStudent/AttendenceReportSpecificStudent');
});
const ViewSpecificStudentAttendence = React.lazy(() => {
  return import('./containers/ADMINDATA/AttendenceReportSpecificStudent/ViewSpecificStudent');
});


const UserProfile = React.lazy(() => {
  return import('./containers/STUDENTDATA/Profile/Profile');
});
const MarkAttendence = React.lazy(() => {
  return import('./containers/STUDENTDATA/MarkAttendence/MarkAttendence');
});
const LeaveRequest = React.lazy(() => {
  return import('./containers/STUDENTDATA/LeaveRequest/LeaveRequest');
});
const ViewAttendence = React.lazy(() => {
  return import('./containers/STUDENTDATA/ViewAttendence/ViewAttendence');
});


const UserAuth = React.lazy(() => {
  return import('./containers/Authentication/UserSignupAndLogin');
});
const AdminAuth = React.lazy(() => {
  return import('./containers/Authentication/AdminSignupAndLogin');
});


const UserLogout = React.lazy(() => {
  return import('./containers/Authentication/UserLogout/UserLogout');
});
const AdminLogout = React.lazy(() => {
  return import('./containers/Authentication/AdminLogout/AdminLogout');
});


const MainPage = React.lazy(() => {
  return import('./components/MainPage/MainPage');
});


const App = props => {
  useEffect(() => {
    props.onTryAutoSignup();
  }, [props]);

  /* REMAINS CONSTANT NAVIGATION */

  let routes = (

    <Switch>
      <Route path="/userauth" render={(props) => <UserAuth {...props} />} />
      <Route path="/adminauth" render={(props) => <AdminAuth {...props} />} />
      <Route path="/" exact component={MainPage} />
      <Redirect to="/" />
    </Switch>
  )

  /* USER NAVIGATION */

  if (localStorage.getItem('data')) {
    routes = (
      <Switch>
        <Route path="/userprofile" render={(props) => <UserProfile {...props} />} />
        <Route path="/edit/:id" render={(props) => <EditUser {...props} />} />
        <Route path="/view" render={(props) => <ViewUser {...props} />} />
        <Route path="/markattendence" render={(props) => <MarkAttendence {...props} />} />
        <Route path="/viewattendence" render={(props) => <ViewAttendence {...props} />} />
        <Route path="/leaverequest" render={(props) => <LeaveRequest {...props} />} />
        <Route path="/userlogout" render={(props) => <UserLogout {...props} />} />
        <Route path="/adminauth" render={(props) => <AdminAuth {...props} />} />
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Switch>
    )
  }
  /* ADMIN NAVIGATION */

  if (localStorage.getItem('AdminData')) {
    routes = (
      <Switch>
        <Route path="/adminprofile" render={(props) => <AdminProfile {...props} />} />
        <Route path="/insert" render={(props) => <InsertUser {...props} />} />
        <Route path="/edit/:id" render={(props) => <EditUser {...props} />} />
        <Route path="/view" render={(props) => <ViewUser {...props} />} />
        <Route path="/viewattendenceadmin" render={(props) => <ViewAttendenceAdmin {...props} />} />
        <Route path="/editattendenceadmin/:id" render={(props) => <EditAttendenceAdmin {...props} />} />
        <Route path="/viewleavesheet" render={(props) => <ViewLeaveSheet {...props} />} />
        <Route path="/checkspecificstudentattendence" render={(props) => <CheckSpecificStudentAttendence {...props} />} />
        <Route path="/viewspecificstudentattendence" render={(props) => <ViewSpecificStudentAttendence {...props} />} />
        <Route path="/adminlogout" render={(props) => <AdminLogout {...props} />} />
        <Route path="/userauth" render={(props) => <UserAuth {...props} />} />
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Switch>
    )
  }


  return (
    <div>
      <Layout>
        <Suspense fallback>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );

}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    path: state.auth.authRedirectPath,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


