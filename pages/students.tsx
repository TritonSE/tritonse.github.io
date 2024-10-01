import React from "react";

import CollapsibleSection from "../components/CollapsibleSection";
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

## 2024 Fall Recruitment Timeline

- Application opens - Week 0 Thursday 9/26 12:01am
- Engineers on the Green - Week 1 Tuesday 10/1 11:00am-3:00pm @ Warren Mall
- Tabling session 1 - Week 1 Wednesday 10/2 11:00am-3:00pm @ Library Walk 1977
- Tabling session 2 - Week 1 Thursday 10/3 11:00am-3:00pm @ Library Walk 1977
- Intern Panel - Week 1 Thursday 10/3 6:00-7:30pm @ [tinyurl.com/tseinternpanel](https://tinyurl.com/tseinternpanel)
- Tabling session 3 - Week 2 Monday 10/7 11:00am-3:00pm @ Library Walk 1977
- Tabling session 4 - Week 2 Tuesday 10/8 11:00am-3:00pm @ Library Walk 1977
- Info Session 1 - Week 2 Tuesday 10/8 7:30-8:30pm @ CSE 1202
- Info Session 2 - Week 2 Thursday 10/10 6:00-7:00pm @ CSE 1202
- Application closes - Week 2 Sunday 10/13 11:59pm
- Phone screen invitation emails sent - Week 3 Friday 10/18
- Technical interview invitation emails sent - Week 5 Friday 11/1
- Acceptance/rejection emails sent - Week 8 Tuesday 11/19
`}
        <CollapsibleSection title="General FAQs">
          {markdown`
### What is Triton Software Engineering?

Triton Software Engineering (TSE) is a multidisciplinary student organization at UC San Diego. We partner with nonprofits to design and develop software, websites, and mobile applications pro-bono for social good, while giving our developers practical, real world experience.

### Why should I join TSE?

If you are passionate about helping others using the skills you learn in college, then TSE is the perfect place for you! We are all about social good, and we hope you share our passion. TSE offers a close network of like-minded students, and we can help you build skills that allow you to advance your career.

### What is TSE's recruitment process like?

TSE recruits new members at the beginning of every Fall quarter. In 2019, we accepted a total of 31 members from 167 applicants. In 2020, we accepted a total of 29 members from 164 applicants. In 2021, we accepted a total of 30 members from 311 applicants.

There are three stages for both designers and developers. We start with a resume screen, then a behavioral phone screen (with a Systems Design question for aspiring TSE developers), followed by a technical interview. For TEST, we will have a resume screen and then a combined behavioral and technical interview. Due to the current circumstances, our recruitment process will be conducted virtually.

Interested in applying? [Click here!](${recruitment.applicationUrl})

### How many project teams are there? How are TSE projects structured?

The number of project teams in TSE depends on the number of nonprofits we are able to secure collaborations with every year. In the past school year, we had 7 project teams.

In the 2022-2023 school year, TSE’s structure consisted of our board, a design team, 6 project-based teams, and the TEST team. Each project team was made up of an engineering manager, a product manager, 8 developers, and 2-3 designers. Teams work independently of one another to create software for the nonprofit organization that they have been assigned to.

### How can I stay up-to-date with upcoming TSE events?

We host both internal and public events. To find our public events, follow us on [Facebook](https://www.facebook.com/TritonSE) and [Instagram](https://www.instagram.com/ucsd_tse/). You can also find a list of our past and upcoming events [here](/events).
          `}
        </CollapsibleSection>
        <CollapsibleSection title="Developer FAQs">
          {markdown`
### What computer science knowledge is expected for the developer recruitment process?

Here is the knowledge we expect for each grade level. The interview questions might not cover all of these topics, and it might be possible to pass the interviews without knowing all of these topics, but our interview questions are designed with these expectations in mind.

#### First-years

Approximately CSE 8A or equivalent:

- Familiarity with at least one programming language
- Basic datatypes: booleans, integers, floating-point numbers, strings, arrays/lists
- Control flow structures: if/else statements, for/while loops
- Functions
- Unit testing concepts (no specific frameworks needed) and edge cases

#### Sophomores/Juniors/Seniors/Transfers

Approximately CSE 12 or equivalent:

- All of the topics for first-years, listed above
- Analyzing time and space complexity
- Recursion
- Data structures: multidimensional arrays/lists, dynamic arrays, stacks, queues, hash tables (also known as hash maps, dictionaries)
- Algorithms: sorting, binary search

### How can I prepare for the technical components of the developer recruitment process?

In the phone screen, expect to do one or more of the following:

- Demonstrate your familiarity with the computer science concepts above
- Describe how you would test a piece of code
- Verbally explain a pseudocode solution to a small programming task

To prep for the technical interview:

- Brush up on a high-level programming language. Python, Java, or JavaScript is preferred. C or C++ might work, but due to the nature of the interview tasks, it may be more difficult to use these languages. You will not be able to compile or run your code, so exact syntax/APIs are not that important, but we expect you to demonstrate familiarity with the language you choose.
- Expect to solve one or more programming tasks, which may have multiple parts. Be mindful of edge cases, and discuss your approach with your interviewer before you start writing code.
- You will be evaluated on your communication and problem-solving skills, the readability, maintainability, and correctness of your code, and (for sophomores/juniors/seniors) the algorithmic performance of your code.

### What does being a developer look like at TSE?

We emulate the Agile Workflow to give our developers some insight on industry standards. Developers complete weekly tasks assigned to them by their project manager during their team meetings. The work that you will be doing depends on your client. For most web development work, we tend to stick to the MERN stack, and for most cross-platform mobile development, we focus on using React Native with Expo. This means that, as a whole, TSE ends up with many JavaScript-based applications. However, depending on the client's needs, we have been known to use other technologies, such as TypeScript, Go, and PostgreSQL. Typically, developers spend 4-6 hours a week on TSE activities.
          `}
        </CollapsibleSection>
        <CollapsibleSection title="Designer FAQs">
          {markdown`
### How can I prepare for the technical interview in the designer recruitment process?

Be prepared to present a past project you worked on. The presentation will be a total of 25 minutes, with 15 minutes of presentation and 10 minutes of questions. It is recommended to have either slides or some sort of visual component to your presentation.

Be prepared to solve a design challenge. You will be given a prompt similar to an actual TSE project and will have 30 minutes to demonstrate your ability to think through and solve this problem. You should be prepared to both talk through your thought process as well as create some very low fidelity visuals to convey your ideas. We really want to understand what you are thinking the whole time, so please think out loud! If you get stuck at any point, the interviewer(s) will be there to help guide you.

### What does being a designer look like at TSE?

Designers collaborate closely with their non-profit client, carefully listening to the client’s needs to create tailored solutions. Using design tools like Figma, they guide projects through the entire design process, including research, ideation, wireframing, prototyping, etc. Along the way, designers hand off their designs to developers, while remaining available to address any feasibility concerns. Projects vary in scope, from website rebranding to internal software tools, providing a dynamic range of challenges. On average, designers dedicate 5-7 hours per week to TSE activities.
          `}
        </CollapsibleSection>
        <CollapsibleSection title="TEST FAQs">
          {markdown`
### What is the TEST program?

The TSE Early Start Training (TEST) program provides students from underprivileged backgrounds who have little to no technical development/design experience with a first step into exploring software engineering and UI/UX design. TEST developers and designers will learn the fundamentals of their domain while working on beginner-level internal projects for TSE. The program lasts for the school year, after this period TEST members can choose whether or not they'd like to be evaluated to potentially become TSE developers and designers.

You may either apply to TSE or the TEST program, not both. If you are unsure about which is right for you, please email nboloori@ucsd.edu.

### What sort of projects will I be working on in the TEST program?

The projects TEST developers and designers work on varies year-to-year based on member preferences and TEST Lead input. In the past, we've had both collaborative projects and individual ones. These projects combine all of the skills you learn throughout the year into something you can be proud of and show off.

### Can I join TSE as a developer or designer after I complete the TEST program?

Yes! We have a process internally to transition TEST members to TSE members. Our goal is to maximize the conversion rate between the two. This is not to say TEST members aren't part of TSE. Everything TSE related applies to both TEST and TSE members, the only difference between the two are the projects that you work on and the additional evaluation TEST members can choose to undergo to become TSE members. This "evaluation" is just to determine whether or not TEST members are equipped to take on the more advanced work associated with TSE projects.

### What does being a TEST member look like at TSE?

Our primary focus with TEST is to enable students from underprivileged backgrounds to explore development and design. As a TEST member, you will be spending the first portion of the year learning all about your chosen discipline. These lessons will be taught by our TEST Leads who have created customized curriculum to help you on your journey. You'll be collaborating with other TEST members during this entire process. After this first "bootcamp" period, you'll move onto the project portion of the year where you'll create something awesome using all of skills you picked up. Typically, TEST members spend 4-6 hours a week on TSE activities.
          `}
        </CollapsibleSection>
        {markdown`
## Still have questions?

If you still have any questions regarding how to get involved with us, please feel free to contact us at [tse@ucsd.edu](mailto:tse@ucsd.edu) and we will get in touch with you as soon as possible.
        `}
      </PaddedBox>
    </>
  );
}
