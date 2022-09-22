import React from "react";

import Hero from "../components/Hero";
import PaddedBox from "../components/PaddedBox";
import PageTitle from "../components/PageTitle";
import markdown from "../util/markdown";

export default function Students() {
  const title = "Get Involved";
  /**
   * TODO:
   * - Update all links (in the following list) to match website structure after complete website has been deployed
   *   - Application link for students in "What is TSE's recruitment process like?"
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
## For Students

Become a part of the Triton Software Engineering family and put your skills to use by giving back to the community! Together, we can work alongside nonprofit organizations to create a greater impact. We recruit annually in the fall so make sure you stay up to date.

## Apply

Applications are currently closed. Please check back Week 0 of Fall Quarter 2022 if you are interested in joining.

## FAQs

##### What is Triton Software Engineering?

Triton Software Engineering (TSE) is a multidisciplinary student organization at UC San Diego. We partner with nonprofits to design and develop software, websites, and mobile applications pro-bono for social good, while giving our developers practical, real world experience.

### Why should I join TSE?

If you are passionate about helping others using the skills you learn in college, then TSE is the perfect place for you! We are all about social good, and we hope you share our passion. TSE offers a close network of like-minded students, and we can help you build skills that allow you to advance your career.

### What kind of experience do I need to join TSE?

At Triton Software Engineering, we seek students who are hardworking and passionate about social good. We are a project-based organization, so experience working in teams is a plus! TEST designers and TEST developers do not need prior experience in their field (see the next section for more details). Other developer and designer positions will require some prior experience.

Product Managers must have some leadership experience and optionally some software engineering knowledge. The leadership experience tells us that you are ready to lead the direction of your product and the potential software background will provide you with context on our projects.

Designers must have working knowledge of the standard design process (i.e. stages of research, ideation, testing) and also some experience with their own UI/UX work (if you have a portfolio to show us, that’d be fantastic!).

Developers must be familiar with any one OOP language (Java, Python, and C/C++ are common ones). Juniors and seniors should have basic exposure to web development (HTML, CSS, JavaScript, HTTP, REST APIs) and at least one database. Familiarity with React.js and/or backend development is a plus. However, knowledge of specific technologies is not required, as we will teach you the technologies necessary to contribute.

### What is the TEST program?

The TSE Early Start Training (TEST) program provides students from underprivileged backgrounds who have little to no technical development/design experience with a first step into exploring software engineering and UI/UX design. TEST developers and designers will learn the fundamentals of their domain while working on beginner-level internal projects for TSE. 

You may either apply to TSE or the TEST program, not both. If you are unsure about which is right for you, please email adave@ucsd.edu.

### What is TSE's recruitment process like?

TSE recruits new members at the beginning of every Fall quarter. In 2019, we accepted a total of 31 members from 167 applicants. In 2020, we accepted a total of 29 members from 164 applicants. In 2021, we accepted a total of 30 members from 311 applicants.

There are three stages for both designers and developers. We start with a resume screen, then a behvioral phone screen (with a Systems Design question for aspiring TSE developers), followed by an in-person technical interview. For TEST, we will have a resume screen and then a combined behavioral and technical in-person interview. Due to the current circumstances, our in-person interviews will be virtual.

Interested in applying? [Click here!](/students#apply)

### How many project teams are there? How are TSE projects structured?

The number of project teams in TSE depends on the number of nonprofits we are able to secure collaborations with every year. In the past two school years, we had 7 project teams.

In the 2021-2022 school year, TSE’s structure consisted of our board, a design team, 6 project-based teams, and the TEST team. Each project team was made up of an engineering manager, a product manager, 6 developers, and 2-3 designers. Teams work independently of one another to create software for the nonprofit organization that they have been assigned to.

### What does being a product manager look like at TSE?

A product manager is on a project team with developers and designers. They attend every client meeting to understand the nonprofit’s needs and convert them into features that designers and developers will work on building. The product manager may have 1 client meeting each week, as well as a team meeting where they can communicate their updates. Finally, they’ll also meet with the rest of the product managers each week to update each other on their progress. There will also be documentation written every few weeks to keep track of changes to the product roadmap. A typical week for product managers has 3-4 meetings and a couple of hours worth of preparation, totaling up to 4-6 hours worth of work per week.

### What does being a designer look like at TSE?

Designers communicate closely with our nonprofit clients in order to craft user flows, wireframes, and prototypes that align with their needs. Designers often take on projects in pairs. They are the ones creating the detailed plan for the end solution, which is then eventually handed off to TSE developers. There’s a variety of types of projects, ranging from website rebranding to internal software tools. Typically, designers spend 5-7 hours a week on TSE activities.

### What does being a developer look like at TSE?

We emulate the Agile Workflow to give our developers some insight on industry standards. Developers complete weekly tasks assigned to them by their project manager during their team meetings. The work that you will be doing depends on your client. For most web development work, we tend to stick to the MERN stack, and for most cross-platform mobile development, we focus on using React Native with Expo. This means that, as a whole, TSE ends up with many JavaScript-based applications. However, depending on the client's needs, we have been known to use other technologies, such as TypeScript, Go, and PostgreSQL. Typically, developers spend 4-6 hours a week on TSE activities.

### How can I stay up-to-date with upcoming TSE events?

We host both internal and public events. To find our public events, follow us on [Facebook](https://www.facebook.com/TritonSE) and [Instagram](https://www.instagram.com/ucsd_tse/). You can also find a list of our past and upcoming events [here](/events).

### How is TSE operating during the ongoing pandemic?

We are working in a hybrid model. Our last recruitment season was completely online and we plan to continue the online structure this year. We hope to have a hybrid recruitment process next year. We will do our best to provide as much support as possible through in person Information Sessions and various panels, but all interviews and phone screens will continue to be remote. 

All TSE team meetings and work are conducted in a hybrid structure at the moment. We will be continuing regular virtual & in person workshops and social events. This year, all of our events are primarily in person. Please visit our website and Facebook page for the most up-to-date information.

## Still have questions?

If you still have any questions regarding how to get involved with us, please feel free to contact us at [tse@ucsd.edu](mailto:tse@ucsd.edu) and we will get in touch with you as soon as possible.
        `}
      </PaddedBox>
    </>
  );
}
