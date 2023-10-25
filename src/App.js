import React from 'react';
import './App.css';
import Login from './component/Login'
import StudentList from './component/StudentList'
import {AddStudent,EditStudent} from './component/AddStudent'
import NotFound from './component/NotFound'
import MyDetails from './component/MyDetails'
import MyDetailsStu from './component/MydetailsStu';
import { povider, Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Faculty from './component/Faculty';
import OpenHTMLPage from './component/OpenHTMLPage';
// import Dashboard from './component/dashboard';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <Router>
      <Switch>
           <Route exact path= "/faculty" component={Faculty}/>
           <Route exact path= "/OpenHTMLPage" component={OpenHTMLPage}/>
           {/* <Route exact path= "/Dashboard" component={<Dashboard/>}/> */}

          <Route exact path="/" component={Login} />
          <Route exact path="/students" component={StudentList} />
          <Route exact path="/add-student" component={AddStudent} />
          <Route exact path="/edit-student/:id" component={EditStudent} />
          <Route exact path="/my-details/:id" component={MyDetails} />
          <Route exact path="/my-detailsStu/:id" component={MyDetailsStu} />

          <Route component={NotFound} />
        </Switch>
      {/* <h1>hii</h1> */}
      
      </Router>
      </Provider>
    </div>
  );
}

export default App;
