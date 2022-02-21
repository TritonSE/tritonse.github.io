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

Check out our process and what a project goes through from initial contact with a nonprofit organization all the way to handing off the product to them.
        `}
      </Hero>
      <PaddedBox>
        {markdown`
Triton Software Engineering follows the Agile philosophy when developing software. We believe that requirements, design, and development should be a collaborative, iterative effort that doesn’t take place in silos. Our timeline for developing the first version of your project is as follows:

### Outreach & Onboarding _(May-June)_

- We start by getting to know your organization, your mission, and your vision. Only then do we begin the ideation process, where we'll brainstorm a variety of ideas for what TSE can build for you. We will pair you with one of our product managers who will work with you to determine the direction of your product.

### Summer Break _(July-August)_

- Our members do internships to gain more experience!

### Requirements Drafting _(September-October)_

- Your product manager works with you to identify your priorities and requirements for an initial version of your product and puts it into writing.

### Design Iterations _(November-December)_

- We assign designers to your project, who put together the visual blueprint of what the first version of your project will look like.

### Development _(January-March)_

- Finally, the development team is put together! Led by their engineering manager, the developers start coding and aim to have something in your hands by the end of March.

The Agile philosophy is inherently iterative. That means while development begins on version 1, we’re also working with you to draft requirements and design version 2! These iteration cycles continue for as long as you’d like until the end of the year.
        `}
      </PaddedBox>
    </>
  );
}
