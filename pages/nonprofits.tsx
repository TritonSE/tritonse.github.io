import React from "react";

import Hero from "../components/Hero";
import PaddedBox from "../components/PaddedBox";
import PageTitle from "../components/PageTitle";
import markdown from "../util/markdown";

export default function Nonprofits() {
  const title = "For Nonprofits";
  return (
    <>
      <PageTitle title={title} />
      <Hero imageKey="content/photoshoot-marketing-7">
        {markdown`
# ${title}

TODO add blurb here
        `}
      </Hero>
      <PaddedBox>
        {markdown`
Partner up with Triton Software Engineering and we will work hand-in-hand to develop the technology that will turn your vision into a reality without costing you a penny.

If you have a proposal for an appropriate project, get in touch with us by emailing [tse@ucsd.edu](mailto:tse@ucsd.edu). We will work with you to deliver a solution that satisfies your needs.
        `}
      </PaddedBox>
    </>
  );
}
