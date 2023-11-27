import React, { useReducer } from 'react';
import reducer from './reducer.jsx';
import Context from './context.jsx';
import axios from 'axios';
import { GET_SKILLS, GET_PROJECTS } from './types.jsx';

const State = (props) => {

  const initialState = {
    projects: [], 
    skills: [],
    language: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProjects = async () => {
    const res = await axios.get('http://localhost:3000/projects');
    console.log(res.data);
    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    })
  };

  const getSkills = async () => {
    const res = await axios.get('http://localhost:3000/skills');
    dispatch({
      type: GET_SKILLS,
      payload: res.data
    })
  };

  return (
    <Context.Provider value={{
      projects: state.projects,
      skills: state.skills,
      language: state.language,
      getProjects,
      getSkills,
    }}>
      {props.children}
    </Context.Provider>
  )
};

export default State;