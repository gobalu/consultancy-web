import React, { Fragment } from "react";

import Bio from "../../components/Bio";

let person = {
  name: "Ben Jefferies | DIRECTOR",
  description: "Ben is an experienced Software Engineer, who has had extensive exposure to Open Banking, along with a career that has covered Frontend, Backend and Mobile Development over the past 10 years. Driven by the shear love of software development, he takes pride in providing the best solution to the problems he faces. As a Software Engineer, he has completed many open-source project that are available to view on his GitHub. In his spare time, he loves to go cycling and enjoys flying his drone.",
  github: "https://github.com/benjefferies",
  linkedin: "https://www.linkedin.com/in/ben-jefferies-0bb1b24b/"
}

const TheTeamPage = () => (
  <Fragment>
    <Bio person={person}/>
  </Fragment>
);

export default TheTeamPage;
