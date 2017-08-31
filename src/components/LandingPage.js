import React from "react";
import { ContentContainer } from "../style/styledComponents";

const style = {
  align: 'middle',
}

const LandingPage = props => {
  return (
    <ContentContainer>
      <img src="../../images/code-banner.png" {...style}></img>
    </ContentContainer>
  )
}

export default LandingPage;