import Container from "react-bootstrap/Container";
import MemberProfileCard from "../components/MemberProfileCard";
import PageTitle from "../components/PageTitle";
import ProfileCardGroup from "../components/ProfileCardGroup";
import members from "../data/members";

export default function About() {
  const currentMembers = members.filter((member) => member.graduationYear === null);
  return (
    <>
      <PageTitle title="About Us" />
      <Container>
        <ProfileCardGroup profiles={currentMembers.map((member, index) => <MemberProfileCard member={member} roleLimit={1} key={index} />)} />
      </Container>
    </>
  );
}
