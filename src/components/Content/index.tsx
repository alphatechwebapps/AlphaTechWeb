import React from "react";
import './style.css';
import projects from "../../data/projects";

/**
 * Content Component: Panel that display all projects avaliable in this application
 */

const Content: React.FC = ( ) => {
   
    /**
    * Function ProjectsContent: Load all categories and projects then show each item in the Content panel
    */
   
    const ProjectsContent = () => (
        <>
        {projects.map(category => (
            <div>
            {category.data.map(project => (
                <div>
                    <a href={project.url}>
                            <img src={project.icon} alt="" />
                            <h3>{project.title}</h3>
                        </a>
                    </div>				
				))}
            </div>
        ))}
        </>
      ); 

    /**
     * Return the PanelContent with all projects to main application
     */
    return (
        
			<section id="main_categories">            
                <section className="thumbnails">

                <ProjectsContent/>              
                                               
                </section>

        </section>
    );    
};

export default Content;