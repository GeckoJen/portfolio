import React from 'react';
import HeaderTitle from '../src/components/HeaderTitle';
import Navbar from '../src/components/Navbar';
import ProjectList from '../src/components/ProjectList';
import { createClient } from 'contentful';


function Portfolio({ projects }) {
 
  console.log(projects)
//sort projects in reverse date order
  projects.sort((a, b)=>{return new Date(b.fields.date.split("T")[0]) - new Date(a.fields.date.split("T")[0]);});
  
    return (
      <div className="body">
        <Navbar />
        <HeaderTitle title="portfolio" />
    
        {projects.map((project) => {
          let url = `https:${project.fields.thumbnail.fields.file.url}`;
          return <ProjectList key={project.sys.createdAt} title={project.fields.title} image={url} description={project.fields.description}
            deploy={project.fields.deploy} github={project.fields.github} documentation={project.fields.documentation} date={project.fields.date}
          />
        })} 
      </div>
    );
}

export async function getStaticProps() {

  const client = createClient({
    space: process.env.SPACE,
    accessToken: process.env.ACCESSTOKEN, 
  });

  const res = await client.getEntries();
  const projects = await res.items

  return {
    props: {
      projects,
    },
  };
}

export default Portfolio;
