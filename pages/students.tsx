import React from "react";

import Hero from "../components/Hero";
import PaddedBox from "../components/PaddedBox";
import PageTitle from "../components/PageTitle";
import markdown from "../util/markdown";

export default function Students() {
  const title = "For Students";
  return (
    <>
      <PageTitle title={title} />
      <Hero imageKey="content/photoshoot-marketing-7">
        {markdown`
# ${title}

Become part of Triton Software Engineering and join us in using technology to build a better community. Together, we can work alongside nonprofit organizations to create a greater impact.
        `}
      </Hero>
      <PaddedBox>
        {markdown`
## Overview

### What is Triton Software Engineering?

Triton Software Engineering (TSE) is a multidisciplinary student organization at UC San Diego. We partner with nonprofits to design and develop software, websites, and mobile applications pro-bono for social good, while giving our developers practical, real world experience.
        `}
      </PaddedBox>
    </>
  );
}
