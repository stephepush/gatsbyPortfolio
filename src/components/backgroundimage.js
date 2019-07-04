import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ className }) => {
    <StaticQuery query={ graphql`{
        homebg:file(relativePath:{eq: "homebg.jpg"}) {
          childImageSharp {
            fluid(maxWidth:1920) {
              base64
            }
          }
        }
      }`} 
      
      />
}