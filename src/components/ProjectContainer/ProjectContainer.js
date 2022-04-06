import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import ProjectOne from './ProjectOne'
import Navigation from './Navigation'
// import {ProjectOne} from './ProjectOne'



const ProjectContainer = ({ project }) => (
  // <Router>
  <div className='project'>
   
    
    
    <h3>{project.name}</h3>
    {/* <Navigation/>
    <Switch>
      <Route exact path="/projectone" component= {ProjectOne}/>
    </Switch> */}

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}



    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
    
  </div>
  // </Router>
)


export default ProjectContainer
