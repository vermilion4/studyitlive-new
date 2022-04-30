import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./WebPages/Home";
import SignUp from "./WebPages/SignUp";
import LogIn from "./WebPages/LogIn";
import LecturerOverview from "./WebPages/LecturerPortal/LecturerOverview";
import PasswordReset from "./WebPages/PasswordReset";
import LecturerVideos from "./WebPages/LecturerPortal/LecturerVideos";
import LecturerVideo2 from "./WebPages/LecturerPortal/LecturerVideo2"
import LecturerChat from "./WebPages/LecturerPortal/LecturerChat";
import LecturerLiveClass1 from "./WebPages/LecturerPortal/LecturerLiveClass1";
import LecturerLiveClass2 from "./WebPages/LecturerPortal/LecturerLiveClass2";
import LecturerSchedule from "./WebPages/LecturerPortal/LecturerSchedule";
import LecturerStudentList from "./WebPages/LecturerPortal/LecturerStudentList";
import LecturerCourses from "./WebPages/LecturerPortal/LecturerCourses";
import LecturerProfile from "./WebPages/LecturerPortal/LecturerProfile";
import LecturerMaterials from "./WebPages/LecturerPortal/LecturerMaterials"
import NewPassword from "./WebPages/NewPassword"
import LecturerDiscussion from "./WebPages/LecturerPortal/LecturerDiscussion";
import LecturerSearch from "./WebPages/LecturerPortal/LecturerSearch"
import LecturerHelp from "./WebPages/LecturerPortal/LecturerHelp";
import UserType from './WebPages/UserType';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        {/* <Test /> */}
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/usertype' component={UserType} />
          <Route path='/login' component={LogIn} />
          <Route path='/lecOverview' component={LecturerOverview} />
          <Route path='/passwordreset' component={PasswordReset} />
          <Route path='/lecMaterial' component={LecturerMaterials} />
          <Route path='/lecVideo' component={LecturerVideos} />
          <Route path='/lecVideos' component={LecturerVideo2} />
          <Route path='/lecChat' component={LecturerChat} />
          <Route path='/lecLiveCLass' component={LecturerLiveClass1} />
          <Route path='/lecLiveClass2' component={LecturerLiveClass2} />
          <Route path='/lecSchedule' component={LecturerSchedule} />
          <Route path='/lecStudents' component={LecturerStudentList} />
          <Route path='/lecCourses' component={LecturerCourses} />
          <Route path='/lecProfile' component={LecturerProfile} />
          <Route path='/lecDiscussion' component={LecturerDiscussion} />
          <Route path='/newpassword' component={NewPassword} />
          <Route path='/lecSearch' component={LecturerSearch} />
          <Route path='/lecHelp' component={LecturerHelp} />

        </Switch>
      </Router>

    </>

  );
}

export default App;
