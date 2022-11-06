import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUnresolvedBugs, loadBugs, resolveBug } from '../store/bugs';

const BugsList = () => {
  //with this hook, we can get the dispatch function
  const dispatch = useDispatch();
  //with this hook, we can select a slice of our Store
  //const bugs = useSelector(state => state.entities.bugs.list);
  const bugs = useSelector(getUnresolvedBugs);

  const handleResolve = (bugsId) => dispatch(resolveBug(bugsId));

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <ul>{bugs.map(bug => <li key={bug.id}>{bug.description}<button onClick={() => handleResolve(bug.id)}>Resolve</button></li>)}</ul>
  );
}
 
export default BugsList;