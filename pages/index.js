import Root from "../components/body/root";
import { Social } from "../components/root/index";
import Link from "next/link";

const Index = () => {
  return (
    <Root>
      <div className="hero flex justify-center direction-column">
        <p className="title white email">
          Mail me:
          <a href="mailto:nathanpham.me@gmail.com">nathanpham.me@gmail.com</a>
        </p>
        <div className="container">
          <p className="title introduction crayola default-size">
            Hello, my name is
          </p>
          <h1 className="title name">Nathan Pham</h1>
          <p className="white default-size">
            I'm a software engineer in California passionate about agriculture
            and healthcare.
          </p>
          <div className="socials">
            <Social href="https://twitter.com/phamn23" icon="twitter" />
            <Social
              href="https://www.youtube.com/channel/UChMBU9Tti39CrTOZJH_xy1w"
              icon="youtube"
            />
            <Social href="https://github.com/nathan-pham" icon="github" />
          </div>
        </div>
        <Link href="/projects">
          <div className="project-icon">
            <div></div>
          </div>
        </Link>
      </div>
    </Root>
  );
};

export default Index;
