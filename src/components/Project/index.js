import React from 'react';
// import { Carousel } from 'react-bootstrap'

const Project = (props) => {
    const { projects } = props;

    return(
        <div>
            <h2 className = "proj-header">Projects</h2>

            {projects.map((project) => (
                <div key = {project.title} className = "proj-container">
                    <h3 className = "project-title">{project.title}</h3>
                    <a href = {project.link} target = "_blank" rel="noreferrer">
                        <img src = {require(`../../assets/project-images/${project.image}.PNG`).default} width = "800" height = "500" alt = {`${project.title} sample`}/>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Project;