import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <div> 
        {data.allStrapiBanner.edges.map(document => (
            <div> 
                <h2>
                    {document.node.Heading}
                </h2>
                <p>
                    {document.node.Sub_heading}
                </p>
                <Img fixed={document.node.Image.childImageSharp.fixed} />
            </div>
        ))}
    </div>
    <ul>
        {data.allStrapiArticle.edges.map(document => (
            <li key={document.node.id}>
                <h2>
                    <Link to={`/${document.node.id}`}>
                        {document.node.title}
                    </Link>
                </h2>
                <Img fixed={document.node.image.childImageSharp.fixed} />
                <p>
                    {document.node.content}
                </p>
            </li>
        ))}
    </ul>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
    query IndexQuery {
        allStrapiArticle {
            edges {
                node {
                    id
                    image {
                        childImageSharp {
                            fixed(width: 200) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    title
                    content
                }
            }
        }
        allStrapiBanner {
            edges {
              node {
                id
                Heading
                Sub_heading
                CTA_text
                CTA_link
                Image {
                    childImageSharp {
                        fixed(width: 200, height: 125) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
              }
            }
          }
    }
`
    