import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

import clients from "../data/clients";
import { members, alumni } from "../data/people";
import { groupBy } from "../util";

import AboutTabItem from "./AboutTabItem";
import ClientProfileCard from "./ClientProfileCard";
import MemberProfileCard from "./MemberProfileCard";
import ProfileCardGroup from "./ProfileCardGroup";

function Members() {
  return (
    <ProfileCardGroup
      profiles={members.map((member, index) => (
        <MemberProfileCard member={member} roleLimit={1} key={index} />
      ))}
    />
  );
}

function Alumni() {
  const yearsAndAlumni = groupBy(alumni, (alumnus) => alumnus.graduationYear).reverse();
  return (
    <>
      {yearsAndAlumni.map(([year, alumni]) => (
        <ProfileCardGroup
          key={year}
          title={`Class of ${year}`}
          profiles={alumni.map((alumnus, index) => (
            <MemberProfileCard member={alumnus} roleLimit={100} key={index} />
          ))}
        />
      ))}
    </>
  );
}

function Clients() {
  const statusesAndClients = groupBy(clients, (client) =>
    client.endYear === null ? "Current" : "Past"
  );
  return (
    <>
      {statusesAndClients.map(([status, clients]) => (
        <ProfileCardGroup
          key={status}
          title={status}
          profiles={clients.map((client, index) => (
            <ClientProfileCard client={client} key={index} />
          ))}
        />
      ))}
    </>
  );
}

export default function AboutTabs() {
  return (
    <Tab.Container defaultActiveKey="members">
      <Nav justify className="mb-5">
        <AboutTabItem title={members.length.toString()} subtitle="Members" eventKey="members" />
        <AboutTabItem title={alumni.length.toString()} subtitle="Alumni" eventKey="alumni" />
        <AboutTabItem title={clients.length.toString()} subtitle="Clients" eventKey="clients" />
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="members">
          <Members />
        </Tab.Pane>
        <Tab.Pane eventKey="alumni">
          <Alumni />
        </Tab.Pane>
        <Tab.Pane eventKey="clients">
          <Clients />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}
