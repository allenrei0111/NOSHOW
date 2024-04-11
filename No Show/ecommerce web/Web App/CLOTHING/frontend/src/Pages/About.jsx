import React from 'react';
import './CSS/About.css'; // Adjusted CSS path
import teamMember1Img from '../Components/Images/team_member1.jpg'; // Adjusted image path for team member 1
import teamMember2Img from '../Components/Images/team_member2.jpg'; // Adjusted image path for team member 2
import teamMember3Img from '../Components/Images/team_member3.jpg'; // Adjusted image path for team member 3

const About = () => {
  return (
    <section>
      <h4 className='about'>About</h4>
      <div className="about-container">
        <h2 className='h2'>Welcome to LanderStylez</h2>
        <p>LanderStylez is a fashion-forward clothing brand committed to providing high-quality apparel for 
          individuals who appreciate style and comfort. Founded with a passion for creativity and expression, our brand aims to 
          empower individuals to embrace their unique sense of fashion.
        Our journey began with a vision to redefine contemporary fashion, blending modern trends with timeless elegance.
           Each garment is meticulously crafted using premium materials to ensure durability and comfort without compromising on style.
        Join us as we embark on this exciting journey of style, sustainability, and self-expression. 
          Explore our collection and discover the perfect pieces to elevate your wardrobe.</p>
        <div className="team-members">
          <div className="team-member">
            <img src={teamMember1Img} alt="Team Member 1" />
            <h3>Allen Delos Trinos</h3>
            <p>Role: Designer</p>
          </div>
          <div className="team-member">
            <img src={teamMember2Img} alt="Team Member 2" />
            <h3>David Aturdido</h3>
            <p>Role: Developer</p>
          </div>
          <div className="team-member">
            <img src={teamMember3Img} alt="Team Member 3" />
            <h3>Danilo Vinas</h3>
            <p>Role: Team Leader</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
