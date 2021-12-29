import Container from "react-bootstrap/Container";

import AboutTabs from "../components/AboutTabs";
import PageTitle from "../components/PageTitle";

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
