import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle><div style={{color:'#ff2d2d'}}>PhD student</div> in <b className="text-secondary lined-link">Computer Science</b> at <div style={{color: '#ff2d2d'}}>UMass, Amherst</div></SubTitle>
            </div> 
            <div>
              <Title> Hello, I’m Kunjal </Title>
              <Text> I'm a PhD student at CICS, UMass Amherst; hailing from <b className="text-primary lined-link">India</b>. </Text>
              <Text> My main area of research is Multimodal Fusion in Machine Learning, and Affective Computing.</Text>
              <Text> I am currently a part of MLSys and HCI labs at UMass, concocting ways to make AI emotionally available for a more empathetic future. </Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
