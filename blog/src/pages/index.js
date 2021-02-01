import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from 'gatsby-image'


const IndexPage = ({ data }) => (
  
  <Layout>
    <div className="row tm-gallery">
          <div id="tm-gallery-page-pizza" className="tm-gallery-page">
            {data.allStrapiArticle.edges.map(items => (
                 <article key={items.node.id} className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
                 <Link to={`/${items.node.id}`}>
                 <figure>
                   <Img fixed={items.node.image.childImageSharp.fixed} />
                   <figcaption>
                   <h4 className="tm-gallery-title">{items.node.title}</h4>
                   <p className="tm-gallery-description">{items.node.Content.substring(0,77)+ '...' }</p>
                   </figcaption>
                 </figure>
                 </Link>
               </article>
            ))}
          </div>
        </div>
  </Layout>
)

export default IndexPage

export  const pageQuery = graphql`
query IndexQuery{
  allStrapiArticle{
    edges{
      node{
        id
        image{
          childImageSharp{
            fixed(width:250,height:250){
              ...GatsbyImageSharpFixed
            }
          }
        }
        title
        Content
        ingredient
        preptime
        cooktime
        serving
      }
    }
  }
}
`