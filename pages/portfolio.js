import React, {useState} from 'react';
import HeaderTitle from '../src/components/HeaderTitle';
import Navbar from '../src/components/Navbar';
import ProjectList from '../src/components/ProjectList';
//  import contentful from 'contentful';


function Portfolio({projects}) {

console.log(projects)

    return (
      <body>
        <Navbar />
        <HeaderTitle title="portfolio" />
    
        {projects.map((project) => {
          return <ProjectList key={project.id} title={project.title} description={project.description}
            deploy={project.deploy} github={project.github} documentation={project.documentation} date={project.date}
          />
        })} 
      </body>
    );
}

export async function getStaticProps() {
  const res = await fetch("https://geckojenportfolio.herokuapp.com/projects");
  const data = await res.json();
  const projects = data.payload;

  // const client = contentful.createClient({
  //   space: "y1nl1j4ond7o",
  //   environment: "master",
  //   accessToken: "yPX3T6YetjKXMoiEgCH2ew3y7p8JlbVflcHMd0llVEM", 
  // });

  // client
  //   .getEntries()
  //   .then((response) => console.log(response.items))
  //   .catch(console.error);

  return {
    props: {
      projects,
    },
  };
}

export default Portfolio;


// base url: https://cdn.contentful.com

// const contentful = require("contentful");

// const client = contentful.createClient({
//   space: "<space_id>", //y1nl1j4ond7o
//   environment: "<environment_id>", // defaults to 'master' if not set
//   accessToken: "<content_delivery_api_key>",  //yPX3T6YetjKXMoiEgCH2ew3y7p8JlbVflcHMd0llVEM
// });

// client
//   .getEntries()
//   .then((response) => console.log(response.items))
//   .catch(console.error);