import Head from "next/head";

const About = () => {
    return ( 
        <div>
            <Head>
                <title>Noah H. | About</title>
            </Head>


            <h1 className="abouth1">About Me</h1>
            <div className="about">
                <span className="aboutContent">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Sed quis sodales risus. 
                Aliquam gravida, ligula vel blandit ullamcorper, augue 
                urna lobortis libero, sed consectetur nulla odio in justo. 
                Praesent porttitor mi at dolor dapibus pulvinar. Etiam 
                tincidunt, dui vel venenatis pellentesque, odio lorem 
                pharetra ante, ac consequat lectus ipsum id lectus. 
                Praesent et interdum libero, eu rutrum justo. Nullam 
                venenatis fringilla turpis vulputate tincidunt. 
                Pellentesque non lacinia nisi. Nullam tempus quam 
                eu purus congue aliquam.</span>
            </div>
        </div>
     );
}
 
export default About;