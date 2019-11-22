import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Redirect, Route } from "react-router-dom";
import '../stylesheets/app.scss';
import '../stylesheets/reset.css';

import IncomeIndexContainer from './income/income_index_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeContainer from './session/home_container';
import Main from './main/main_page';
import ExpenseFormContainer from './expense/expense_form_container';
// import ExpenseIndexContainer from './expense/expense_index_container';


const App = () => (
  <div className="app-view-port">
    <Switch>
      {/* <Route exact path="/expenseindex" component={ExpenseIndexContainer} /> */}
      <Route exact path="/expenseform" component={ExpenseFormContainer} />
      <AuthRoute exact path="/" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/home" component={HomeContainer} />
      <ProtectedRoute exact path="/income" component={IncomeIndexContainer} />
      <ProtectedRoute exact path="/main" component={Main} />
     < Redirect to="/"/>
    </Switch>
  </div>
);

export default App;