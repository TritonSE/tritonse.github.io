import React from "react";

import Hero from "../components/Hero";
import PaddedBox from "../components/PaddedBox";
import PageTitle from "../components/PageTitle";
import markdown from "../util/markdown";

export default function Nonprofits() {
  const title = "Get Involved";
  /**
   * TODO:
   * - Remove "Apply" section
   */
  return (
    <>
      <PageTitle title={title} />
      <Hero imageKey="content/photoshoot-marketing-7">
        {markdown`
# ${title}

Work with Triton Software Engineering and use software solutions to better the community.
        `}
      </Hero>
      <PaddedBox>
        {markdown`
## For Nonprofits

Partner with Triton Software Engineering and we will work hand-in-hand with you to develop the technology that will turn your vision into a reality free of cost.

If you have a proposal for a project, get in touch with us by emailing [tse@ucsd.edu](mailto:tse@ucsd.edu). We will work with you to deliver a solution that satisfies your needs.

## FAQs

### How are TSE projects structured?

TSE’s structure consists of our board and 6 project-based teams. Each project team is made up of an engineering manager, a product manager, 6 developers, and 2-3 designers. Teams work independently of one another to create software for the nonprofit organization that they have been assigned to.

### What resources does TSE have to ensure success?

Our organization recruits some of the most hard-working, passionate, and brightest students at UC San Diego. Through effective leadership, frequent check-ins, and organized project timelines set with our clients and board, we ensure that our combination of talent, dedication, and care will result in projects that benefit the nonprofits we work with.

### How is TSE operating during the ongoing pandemic?

We are working in a hybrid model with most project teams primarily meeting in person. All TSE meetings with nonprofit clients will continue to be remote.

## Still have questions?

If you still have any questions regarding how to get involved with us, please feel free to contact us at [tse@ucsd.edu](mailto:tse@ucsd.edu) and we will get in touch with you as soon as possible.
        `}
      </PaddedBox>
    </>
  );
}
