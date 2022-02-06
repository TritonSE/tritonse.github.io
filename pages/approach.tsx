import React from "react";

import Hero from "../components/Hero";
import PaddedBox from "../components/PaddedBox";
import PageTitle from "../components/PageTitle";
import markdown from "../util/markdown";

export default function Approach() {
  const title = "Our Approach";
  return (
    <>
      <PageTitle title={title} />
      <Hero imageKey="content/photoshoot-marketing-15">
        {markdown`
# ${title}

Check out our process and what a project goes through from initial contact all the way to offboarding back to the nonprofit organization.
        `}
      </Hero>
      <PaddedBox>
        {markdown`
## Onboarding

We start by getting to know your organization, your mission, and your vision. Only then do we begin the ideation process, where we'll brainstorm a variety of ideas for what TSE can build for you. Our outreach team will draft a project proposal that details exactly what a partnership with TSE looks like.

Once this proposal is complete, we move on to the design stage.
        `}
      </PaddedBox>
    </>
  );
}
