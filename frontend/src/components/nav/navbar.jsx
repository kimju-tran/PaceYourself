import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/navbar.scss";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.dropFunction = this.dropFunction.bind(this);
  }

  dropFunction() {
    document.getElementById("dropdown-menu").classList.toggle("show");
  }

  render() {
    return (
      <div className="navbar">
        <div className="nav-content-container">
          <h1 className="nav-header">Welcome {this.props.currentUser}!</h1>
          <span className="nav-dropdown-button" onClick={this.dropFunction}>
            <img 
              className="nav-icon" 
              src="https://img.icons8.com/color/64/000000/settings.png" 
              alt="gear"
            />
          </span>
            <div id="dropdown-menu" className="dropdown-menu">
              <ul className="options-list">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/incomes">Income list</Link>
                </li>
                <li>
                  <Link to="/expenses">Expense list</Link>
                </li>
                <li className="logout-button" >
                  <button onClick={this.props.logout} >Logout</button>
                </li>
              </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
