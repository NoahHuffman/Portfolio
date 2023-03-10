import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Noah H. | About</title>
      </Head>
      <div className="about">
        <span className="aboutContent">
          <h2 className="abouth1">about me</h2>
          Hello there! My name is Noah Huffman, and I am a 20 year old software
          developer. I am currently enrolled at the University of Tennessee at
          Chattanooga where I plan to earn a Bachelor of Computer Science degree
          in about a year. I have been learning software development since 2020,
          and have worked with roughly 10 languages, and multiple frameworks.
          <br />
          <br />
          <br />I absolutely love coding and problem solving, and I am excited
          to become a professional developer in the future. I enjoy fishing,
          spending time with loved ones, and reading. I am passionate about
          expanding my knowledge, software development, and serving my church
          family and community.
        </span>
      </div>
    </div>
  );
};

export default About;
