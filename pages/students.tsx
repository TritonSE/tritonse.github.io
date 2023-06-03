import React from "react";

import Hero from "../components/Hero";
import PaddedBox from "../components/PaddedBox";
import PageTitle from "../components/PageTitle";
import recruitment from "../data/recruitment";
import markdown from "../util/markdown";

export default function Students() {
  const title = "Get Involved";
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

${
  recruitment.acceptingApplications
    ? `Please fill out the application form [here](${recruitment.applicationUrl}). Applications are due on ${recruitment.deadline}.`
    : "We are no longer accepting applications for this school year. If you are interested, please apply in Fall quarter of the next school year."
}

## FAQs

##### What is Triton Software Engineering?

Triton Software Engineering (TSE) is a multidisciplinary student organization at UC San Diego. We partner with nonprofits to design and develop software, websites, and mobile applications pro-bono for social good, while giving our developers practical, real world experience.

### Why should I join TSE?

If you are passionate about helping others using the skills you learn in college, then TSE is the perfect place for you! We are all about social good, and we hope you share our passion. TSE offers a close network of like-minded students, and we can help you build skills that allow you to advance your career.

### What is the TEST program?

The TSE Early Start Training (TEST) program provides students from underprivileged backgrounds who have little to no technical development/design experience with a first step into exploring software engineering and UI/UX design. TEST developers and designers will learn the fundamentals of their domain while working on beginner-level internal projects for TSE.

You may either apply to TSE or the TEST program, not both. If you are unsure about which is right for you, please email adave@ucsd.edu.

### What is TSE's recruitment process like?

TSE recruits new members at the beginning of every Fall quarter. In 2019, we accepted a total of 31 members from 167 applicants. In 2020, we accepted a total of 29 members from 164 applicants. In 2021, we accepted a total of 30 members from 311 applicants.

There are three stages for both designers and developers. We start with a resume screen, then a behavioral phone screen (with a Systems Design question for aspiring TSE developers), followed by a technical interview. For TEST, we will have a resume screen and then a combined behavioral and technical interview. Due to the current circumstances, our recruitment process will be conducted virtually.

Interested in applying? [Click here!](${recruitment.applicationUrl})

### What computer science knowledge is expected for the developer recruitment process?

Here is the knowledge we expect for each grade level. The interview questions might not cover all of these topics, and it might be possible to pass the interviews without knowing all of these topics, but our interview questions are designed with these expectations in mind.

#### Freshmen

Approximately CSE 8A or equivalent:

- Familiarity with at least one programming language
- Basic datatypes: booleans, integers, floating-point numbers, strings, arrays/lists
- Control flow structures: if/else statements, for/while loops
- Functions
- Exceptions
- Unit testing concepts (no specific frameworks needed) and edge cases

#### Sophomores

Approximately CSE 12 or equivalent:

- All of the topics for freshmen, listed above
- Pointers or references, depending on the language you use
- Recursion
- Data structures: multidimensional arrays/lists, dynamic arrays, linked lists, stacks, queues, heaps, binary search trees, hash tables (also known as hash maps, dictionaries)
- Algorithms: sorting, binary search
- Object-oriented programming concepts: classes, constructors, instance variables, methods

#### Juniors/Seniors

- All of the topics for freshmen and sophomores, listed above
- Analyzing time and space complexity
- Trees and graphs
- More challenging applications of the previously listed algorithms and data structures

### How can I prepare for the technical components of the developer recruitment process?

In the phone screen, expect to do one or more of the following:

- Demonstrate your familiarity with the computer science concepts above
- Describe how you would test a piece of code
- Verbally explain a pseudocode solution to a small programming task

To prep for the technical interview:

- Brush up on a high-level programming language. Python, Java, or JavaScript is preferred. C or C++ might work, but due to the nature of the interview tasks, it may be more difficult to use these languages. You will not be able to compile or run your code, so exact syntax/APIs are not that important, but we expect you to demonstrate familiarity with the language you choose.
- Expect to solve one or more programming tasks, which may have multiple parts. Be mindful of edge cases, and discuss your approach with your interviewer before you start writing code.
- You will be evaluated on your communication and problem-solving skills, the readability, maintainability, and correctness of your code, and (for juniors/seniors) the algorithmic performance of your code.

### How can I prepare for the technical interview in the designer recruitment process?

Be prepared to present a past project you worked on. The presentation will be a total of 25 minutes, with 15 minutes of presentation and 10 minutes of questions. It is recommended to have either slides or some sort of visual component to your presentation.

Be prepared to solve a design challenge. You will be given a prompt similar to an actual TSE project and will have 30 minutes to demonstrate your ability to think through and solve this problem. You should be prepared to both talk through your thought process as well as create some very low fidelity visuals to convey your ideas. We really want to understand what you are thinking the whole time, so please think out loud! If you get stuck at any point, the interviewer(s) will be there to help guide you

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

### How did TSE operate during the pandemic?

We worked in a hybrid model during the pandemic. Now, we are continuing our hybrid model while increasing in person activities. Our last recruitment season was completely online and we plan to continue the online structure this year. We will do our best to provide as much support as possible through in person Information Sessions and various panels, but all interviews and phone screens will continue to be remote.

All TSE team meetings and work are conducted in a hybrid structure at the moment. We will be continuing regular virtual & in person workshops and social events. This year, all of our events are primarily in person. For the most up-to-date information, visit our Facebook page or check out upcoming events [here](/events).

## Still have questions?

If you still have any questions regarding how to get involved with us, please feel free to contact us at [tse@ucsd.edu](mailto:tse@ucsd.edu) and we will get in touch with you as soon as possible.
        `}
      </PaddedBox>
    </>
  );
}
