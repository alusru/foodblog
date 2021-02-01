import React from 'react'
import {  graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 
import { FaClock, FaUtensils,FaUsers } from 'react-icons/fa';

const ArticleTemplate = ({ data }) => (
  <Layout>
    <div className="row">
        <div id="tm-gallery-page-pizza" className="tm-gallery-page">
    <h1 className="single-page-article-title">{data.strapiArticle.title}</h1>
        <Img fixed={data.strapiArticle.image.childImageSharp.fixed}/>
        
        <div className="item-feature">
                                <ul>
                                    <li>
                                        <div className="feature-wrap">
                                            <div className="media">
                                                <div className="feature-icon">
                                                    <FaClock />
                                                </div>
                                                <div className="media-body space-sm">
                                                    <div className="feature-title">PREP TIME</div>
                                                    <div className="feature-sub-title">{data.strapiArticle.preptime}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="feature-wrap">
                                            <div className="media">
                                                <div className="feature-icon">
                                                    <FaUtensils />
                                                </div>
                                                <div className="media-body space-sm">
                                                    <div className="feature-title">COOK TIME</div>
                                                    <div className="feature-sub-title">{data.strapiArticle.cooktime}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="feature-wrap">
                                            <div className="media">
                                                <div className="feature-icon">
                                                 <FaUsers/>
                                                </div>
                                                <div className="media-body space-sm">
                                                    <div className="feature-title">SERVING</div>
                                                    <div className="feature-sub-title">{data.strapiArticle.serving}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
        </div>
        <div className="col-12">
        
        <div   className="tm-gallery-page">
        <h1 className="heading-in">Ingredients</h1>
                                <p>{data.strapiArticle.ingredient}</p>
        </div>
</div> 
        <div className="col-12">
            <hr className="hr" />
        <div  className="tm-gallery-page">
        <h1 className="heading-in">Recipe</h1>
        <p>{data.strapiArticle.Content}</p>

        </div>
        </div>
    </div>
 

   


   

  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      Content
      ingredient
      preptime
      cooktime
      serving
      image {
          childImageSharp {
            fixed(width: 1200, height: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      
    }
  }
`