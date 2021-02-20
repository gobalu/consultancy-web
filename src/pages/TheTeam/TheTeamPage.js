import React, { Fragment } from "react";

import Bio from "../../components/Bio";
import profiles from "../../assets/profiles";

const bios = profiles.map((profile) =>
  <Bio person={profile}/>
);

const TheTeamPage = () => {
  return (
    <Fragment>
      {bios}
    </Fragment>
  )
};

export default TheTeamPage;
