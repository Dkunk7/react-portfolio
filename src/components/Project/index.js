import React from 'react';

const Project = (props) => {
    const { projects } = props;

    return(
        <div>
            <h2>Projects</h2>

            {projects.map((project) => (
                <div key = {project.title}>
                    <h3>{project.title}</h3>
                    <a href = {project.link} target = "_blank" rel="noreferrer">
                        <img src = {require(`../../assets/project-images/${project.image}.PNG`).default} width = "800" height = "500" alt = {`${project.title} sample`}/>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Project;