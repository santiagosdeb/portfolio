import { GET_SKILLS, GET_PROJECTS } from './types.jsx'

export default function reducer(state, action) {
   switch (action.type) {
    case GET_SKILLS:
        return {
            ...state,
            skills: action.payload
        };
    case GET_PROJECTS:
        return {
            ...state,
            projects: action.payload
        }
   
    default:
        return state
   } 
}