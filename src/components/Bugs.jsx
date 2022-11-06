import React, { Component } from 'react';
import { loadBugs, resolveBug, getUnresolvedBugs } from '../store/bugs';
import { connect } from "react-redux";

class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  render() {
    return (
      <ul>{this.props.bugs.map(bug => <li key={bug.id}>{bug.description}<button onClick={() => this.props.handleResolve(bug.id)}>Resolve</button></li>)}</ul>
    );
  }
}

//this function takes the state of the store and returns the part of the store we are interested in
const mapStateToProps = state => ({
  //what we set here, will be passed to our component with a prop of the same name
  bugs: getUnresolvedBugs(state)//state.entities.bugs.list
});

//this function takes the dispatch function of the store and maps it to the props for our component
const mapDispatchToProps = dispatch => ({
  //the properties of this object are going to be the properties of our component
  loadBugs: () => dispatch(loadBugs()),
  handleResolve: (bugId) => dispatch(resolveBug(bugId))
});

//Container component that wraps our presentation component (Bugs)
//Creates a component that wraps the component passed as a parameter
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);