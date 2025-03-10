import johndoe_headshot from '../media/Shifa4.jpeg';

// any css-accepted format
export const accent_color = "#daaa00";

export const name = "Shifa Somji";

export const profile_pic = johndoe_headshot;

export const introduction = <div>
  <p>I am a second-year PhD student at <a href="https://www.cs.purdue.edu/">Purdue Computer Science</a>, advised by <a href="https://www.sooyeonjeong.com/home">Sooyeon Jeong</a> in the <a href="https://human-agent-interaction.github.io/HAI-website/">Human-Agent Interaction Lab</a>, and <a href="https://joe-campbell.github.io/website/">Joe Campbell</a> in the Collaborative AI for Machines and People Lab. My current interests lie in human-robot interaction and full-stack robotics, focusing on enabling robots to interact with the physical world safely, fluently, and naturally. I aspire to build systems that integrate perception, prediction, planning, and control in the real world. </p>
  <p>I previously earned my Bachelor's with high distinction and departmental honors in Computer Science from <a href="https://www.hmc.edu/about/">Harvey Mudd College</a>, where I worked with <a href="https://www.linkedin.com/in/georgemontanez/">George Montanez</a> in the <a href="https://www.cs.hmc.edu/~montanez/amistad.html">AMISTAD lab</a> and <a href="https://www.hmc.edu/biology/faculty-staff/bush/">Eliot Bush</a> in the <a href="https://sites.google.com/a/g.hmc.edu/bushlab/">Bush lab</a>.</p>
</div>;

// icons from fontawesome 6.1.1 (free), or academicons (https://jpswalsh.github.io/academicons/)
export const icons = [
  {
    className: "ai ai-cv",
    link: process.env.PUBLIC_URL + '/Shifa_Somji_CV.pdf'
  },
  {
    className: "fa-brands fa-google",
    link: "https://scholar.google.com/citations?user=a-b3b9kAAAAJ&hl=en"
  },
  {
    className: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/shifasomji/"
  },
  {
    className: "fa-brands fa-twitter",
    link: "https://x.com/shifasomji"
  },
  {
    className: "fas fa-paper-plane",
    link: "mailto:ssomji@purdue.edu"
  }
];