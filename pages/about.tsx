import Container from "react-bootstrap/Container";
import PageTitle from "../components/PageTitle";
import AboutTabs from "../components/AboutTabs";

export default function About() {
  return (
    <>
      <PageTitle title="About Us" />
      <Container>
        <AboutTabs />
      </Container>
    </>
  );
}
