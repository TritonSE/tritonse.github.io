"use client";

import { Accordion } from "@tritonse/tse-constellation";
import Link from "next/link";
import React from "react";

import ApplicationButton from "../../components/ApplicationButton";
import ImageCard from "../../components/ImageCard";
import PageContainer from "../../components/PageContainer";
import ResponsiveImage from "../../components/ResponsiveImage";
import recruitment from "../../data/recruitment";
import markdown from "../../util/markdown";

import styles from "./students.module.scss";

export default function Students() {
  return (
    <PageContainer>
      <div className={styles.topRow}>
        <div className={styles.imagesContainer}>
          <ImageCard
            imageKey="content/beach-photoshoot-homework"
            sizes={{
              mobile: {
                width: 140,
                height: 111,
              },
              tablet: {
                width: 263,
                height: 210,
              },
              desktop: {
                width: 356,
                height: 284,
              },
            }}
            rotationAngleDegrees={-3.11}
            className={styles.image1}
            priority
          />
          <ImageCard
            imageKey="content/beach-photoshoot-psyches-of-color"
            sizes={{
              mobile: {
                width: 135,
                height: 108,
              },
              tablet: {
                width: 254,
                height: 202,
              },
              desktop: {
                width: 344,
                height: 274,
              },
            }}
            rotationAngleDegrees={7.46}
            className={styles.image2}
            priority
          />
        </div>

        <div className={styles.topTextContainer}>
          <h1>Work With Us</h1>
          <h4 className={styles.boldText}>
            Use your skills to craft <span className={styles.goldText}>digital solutions</span>.
            Together, we can work alongside <span className={styles.goldText}>nonprofit</span>{" "}
            organizations and create a <span className={styles.goldText}>meaningful</span> impact.
          </h4>
        </div>
      </div>

      <h2>Students</h2>
      <h4>
        Are you passionate about software and social impact? Are you looking to join a unique and
        close-knit community? Join Us!
        <br />
        <br />
        Our mission provides a distinct experience to develop technical skills and interact with
        nonprofit clients all while applying your skills to impact real lives.
      </h4>

      <br />

      <div className={styles.devsDesignersRow}>
        <div className={styles.roleColumn}>
          <ResponsiveImage
            imageKey="content/beach-photoshoot-devs"
            sizes={{
              mobile: {
                width: 256,
                height: 167,
              },
              tablet: {
                width: 400,
                height: 261,
              },
              desktop: {
                width: 567,
                height: 370,
              },
            }}
            className={styles.roundedImage}
          />
          <h2>Developers</h2>
          <h4>
            Interested in developing products for social good? Apply to TSE&apos;s development team!
          </h4>
        </div>

        <div className={styles.roleColumn}>
          <ResponsiveImage
            imageKey="content/beach-photoshoot-designers"
            sizes={{
              mobile: {
                width: 254,
                height: 173,
              },
              tablet: {
                width: 400,
                height: 272,
              },
              desktop: {
                width: 542,
                height: 370,
              },
            }}
            className={styles.roundedImage}
          />
          <h2>Designers</h2>
          <h4>
            Interested in ideating from user research to high-fidelity screens? Apply to TSE&apos;s
            design team!
          </h4>
        </div>
      </div>

      {recruitment.acceptingApplications ? (
        <>
          <ApplicationButton />
          <div style={{ marginTop: "1.5em" }}>
            {markdown`Applications are due on ${recruitment.deadline}.`}
          </div>
        </>
      ) : (
        markdown`
We are no longer accepting applications for this school year. If you are interested, please apply in Fall quarter of the next school year.
        `
      )}

      {markdown`
## 2025 Fall Recruitment Timeline

- Application opens - Week 0 Thursday 9/25 12:01am
- Application closes - Week 2 Sunday 10/12 11:59pm
- Phone screen invitation emails sent - Week 3 Friday 10/17
- Technical interview invitation emails sent - Week 5 Monday 10/27
- Acceptance/rejection emails sent - Week 6 Friday 11/7
      `}

      <h2>Frequently Asked Questions</h2>

      <h2 className={styles.faqSectionTitle}>General</h2>
      <Accordion
        items={[
          {
            header: "What is Triton Software Engineering?",
            content: (
              <p>
                Triton Software Engineering (TSE) is a multidisciplinary student organization at UC
                San Diego. We partner with nonprofits to design and develop software, websites, and
                mobile applications pro-bono for social good, while giving our developers practical,
                real world experience.
              </p>
            ),
          },
          {
            header: "Why should I join TSE?",
            content: (
              <p>
                If you are passionate about helping others using the skills you learn in college,
                then TSE is the perfect place for you! We are all about social good, and we hope you
                share our passion. TSE offers a close network of like-minded students, and we can
                help you build skills that allow you to advance your career.
              </p>
            ),
          },
          {
            header: "What is the recruitment process like?",
            content: (
              <p>
                TSE recruits new members at the beginning of every Fall quarter. In 2024, we
                accepted a total of 49 members from 486 applicants.
                <br />
                <br />
                There are three application stages for both designers and developers. We start with
                a resume screen, then a behavioral interview (with a few technical questions for
                aspiring TSE developers), followed by a technical interview. For TEST, we have a
                resume screen, followed by a combined behavioral and technical interview.
              </p>
            ),
          },
          {
            header: "How many project teams are there?",
            content: (
              <p>
                The number of project teams in TSE depends on the number of nonprofits we are able
                to secure collaborations with every year. We usually have around 6 project teams,
                along with the TEST team. Each project team consists of an engineering manager, a
                product manager, 7-8 developers, and 2-3 designers. Teams work independently of one
                another to create software for the nonprofit organization that they have been
                assigned to.
              </p>
            ),
          },
          {
            header: "How can I stay up-to-date with events?",
            content: (
              <p>
                We host both internal and public events. To find our public events, follow us on{" "}
                <a href="https://www.facebook.com/TritonSE">Facebook</a> and{" "}
                <a href="https://www.instagram.com/ucsd_tse/">Instagram</a>. You can also find a
                list of our past and upcoming events <Link href="/events">here</Link>.
              </p>
            ),
          },
        ]}
        hideControls
        disableHoverEffect
        borderColor="white"
        className={styles.accordion}
      />

      <h2 className={styles.faqSectionTitle}>Developer</h2>
      <Accordion
        items={[
          {
            header: "What computer science knowledge is expected for developer applicants?",
            content: (
              <>
                <p>
                  Here is the knowledge we expect for each grade level. Note that your grade level
                  is determined by the year you entered college (e.g. if you started college in
                  2024, graduate in 2027, and are applying during the fall 2024 recruitment cycle,
                  then you will be evaluated as a freshman). The interview questions might not cover
                  all of these topics, and it might be possible to pass the interviews without
                  knowing all of these topics, but our interview questions are designed with these
                  expectations in mind.
                </p>
                <h4>First-years</h4>
                <p>Approximately CSE 8A or equivalent:</p>
                <ul>
                  <li>Familiarity with at least one programming language</li>
                  <li>
                    Basic datatypes: booleans, integers, floating-point numbers, strings,
                    arrays/lists
                  </li>
                  <li>Control flow structures: if/else statements, for/while loops</li>
                  <li>Functions</li>
                  <li>Unit testing concepts (no specific frameworks needed) and edge cases</li>
                </ul>

                <h4>Sophomores/Juniors/Seniors/Transfers</h4>
                <p>Approximately CSE 12 or equivalent:</p>
                <ul>
                  <li>All of the topics for first-years, listed above</li>
                  <li>Analyzing time and space complexity</li>
                  <li>Recursion</li>
                  <li>
                    Data structures: multidimensional arrays/lists, dynamic arrays, stacks, queues,
                    hash tables (also known as hash maps, dictionaries)
                  </li>
                  <li>Algorithms: sorting, binary search</li>
                </ul>
              </>
            ),
          },
          {
            header:
              "How can I prepare for the technical components of the developer recruitment process?",
            content: (
              <>
                <p>In the behavioral interview, expect to do one or more of the following:</p>
                <ul>
                  <li>Demonstrate your familiarity with the computer science concepts above</li>
                  <li>Describe how you would test a piece of code</li>
                  <li>Verbally explain a pseudocode solution to a small programming task</li>
                </ul>
                <p>To prep for the technical interview:</p>
                <ul>
                  <li>
                    Brush up on a high-level programming language. Due to the nature of the
                    interview tasks, some languages may be more difficult to use than others.
                    Python, Java, or JavaScript is preferred. You will not be able to compile or run
                    your code, so exact syntax/APIs are not that important, but we expect you to
                    demonstrate familiarity with the language you choose.
                  </li>
                  <li>
                    Expect to solve one or more programming tasks, which may have multiple parts. Be
                    mindful of edge cases, and discuss your approach with your interviewer before
                    you start writing code.
                  </li>
                  <li>
                    You will be evaluated on your communication and problem-solving skills, the
                    readability, maintainability, and correctness of your code, and (for
                    sophomores/juniors/seniors) the algorithmic performance of your code.
                  </li>
                </ul>
              </>
            ),
          },
          {
            header: "What does being a TSE developer look like?",
            content: (
              <p>
                We emulate the Agile Workflow to give our developers some insight on industry
                standards. Developers complete weekly tasks assigned to them by their project
                manager during their team meetings. The work that you will be doing depends on your
                client. For most web development work, we tend to stick to the MERN stack, and for
                most cross-platform mobile development, we focus on using React Native with Expo.
                This means that, as a whole, TSE ends up with many JavaScript-based applications.
                However, depending on the client&apos;s needs, we may use other technologies, such
                as TypeScript, Go, and PostgreSQL. Typically, developers spend 4-6 hours a week on
                TSE activities.
              </p>
            ),
          },
        ]}
        hideControls
        disableHoverEffect
        borderColor="white"
        className={styles.accordion}
      />

      <h2 className={styles.faqSectionTitle}>Designer</h2>
      <Accordion
        items={[
          {
            header: "How can I prepare for the designer technical interview?",
            content: (
              <p>
                Be prepared to present a past project you worked on. The presentation will be a
                total of 25 minutes, with 15 minutes of presentation and 10 minutes of questions. It
                is recommended to have either slides or some sort of visual component to your
                presentation.
                <br />
                <br />
                Be prepared to solve a design challenge. You will be given a prompt similar to an
                actual TSE project and will have 30 minutes to demonstrate your ability to think
                through and solve this problem. You should be prepared to both talk through your
                thought process as well as create some very low fidelity visuals to convey your
                ideas. We really want to understand what you are thinking the whole time, so please
                think out loud! If you get stuck at any point, the interviewer(s) will be there to
                help guide you.
              </p>
            ),
          },
          {
            header: "What does being a TSE designer look like?",
            content: (
              <p>
                Designers collaborate closely with their non-profit client, carefully listening to
                the client&apos;s needs to create tailored solutions. Using design tools like Figma,
                they guide projects through the entire design process, including research, ideation,
                wireframing, prototyping, etc. Along the way, designers hand off their designs to
                developers, while remaining available to address any feasibility concerns. Projects
                vary in scope, from website rebranding to internal software tools, providing a
                dynamic range of challenges. On average, designers dedicate 5-7 hours per week to
                TSE activities.
              </p>
            ),
          },
        ]}
        hideControls
        disableHoverEffect
        borderColor="white"
        className={styles.accordion}
      />

      <h2 className={styles.faqSectionTitle}>TEST</h2>
      <Accordion
        items={[
          {
            header: "What is the TEST program?",
            content: (
              <p>
                The TSE Early Start Training (TEST) program provides students from underprivileged
                backgrounds who have absolutely no technical development/design experience with a
                first step into exploring software engineering or UI/UX design. TEST developers and
                designers will learn the fundamentals of their domain while working on
                beginner-level projects. The program lasts for the school year, then after this
                period TEST members can potentially become TSE developers and designers.
                <br />
                <br />
                You may apply to either TSE or the TEST program, not both. If you are unsure about
                which is right for you, please email <a href="mailto:tse@ucsd.edu">tse@ucsd.edu</a>.
              </p>
            ),
          },
          {
            header: "What sort of projects will I be working on in the TEST program?",
            content: (
              <p>
                The projects TEST developers and designers work on varies year-to-year based on
                member preferences and TEST Lead input. In the past, we&apos;ve had both
                collaborative projects and individual ones. These projects combine all of the skills
                you learn throughout the year into something you can be proud of and show off.
              </p>
            ),
          },
          {
            header: "Can I join TSE as a developer or designer after I complete the TEST program?",
            content: (
              <p>
                Yes! We have a process internally to transition TEST members to TSE members. Our
                goal is to maximize the conversion rate between the two. This is not to say TEST
                members aren&apos;t part of TSE. Everything TSE related applies to both TEST and TSE
                members, the only difference between the two are the projects that you work on and
                the additional evaluation TEST members can choose to undergo to become TSE members.
                This &quot;evaluation&quot; is just to determine whether or not TEST members are
                equipped to take on the more advanced work associated with TSE projects.
              </p>
            ),
          },
          {
            header: "What does being a TEST member look like at TSE?",
            content: (
              <p>
                As a TEST member, you will be spending the first portion of the year learning all
                about your chosen discipline. These lessons will be taught by our TEST Leads who
                have created customized curriculum to help you on your journey. You&apos;ll be
                collaborating with other TEST members during this entire process. After this first
                &quot;bootcamp&quot; period, you&apos;ll move onto the project portion of the year
                where you&apos;ll create something awesome using all of skills you picked up.
                Typically, TEST members spend 4-6 hours a week on TSE activities.
              </p>
            ),
          },
        ]}
        hideControls
        disableHoverEffect
        borderColor="white"
        className={styles.accordion}
      />

      {markdown`
## Still have questions?

If you still have any questions regarding how to get involved with us, please feel free to contact us at [tse@ucsd.edu](mailto:tse@ucsd.edu) and we will get in touch with you as soon as possible.
      `}
    </PageContainer>
  );
}
