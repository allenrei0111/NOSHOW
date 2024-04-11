import React from 'react';
import './CSS/About.css'; // Adjusted CSS path
import teamMember1Img from '../Components/Images/team_member1.jpg'; // Adjusted image path for team member 1
import teamMember2Img from '../Components/Images/team_member2.jpg'; // Adjusted image path for team member 2
import teamMember3Img from '../Components/Images/team_member3.jpg'; // Adjusted image path for team member 3

const About = () => {
  return (
    <section>
      <h4>About</h4>
      <div className="about-container">
        <h2 className='h2'>LanderStylez</h2>
        <p>LanderStylez is a clothing brand that just started. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eveniet optio animi ipsum quaerat libero sapiente inventore aliquid, autem consequuntur doloribus porro accusantium, explicabo, impedit ab maiores quas aliquam facere?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quidem atque ut nulla? Id at eum ipsum.</p>
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
