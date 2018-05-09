import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <h1>Últimos Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={ post.node.id }>
        <h3>{post.node.frontmatter.titulo}</h3>
        <p>Postado em: {post.node.frontmatter.date}</p>
        <Link to={post.node.frontmatter.path}>mais</Link>
      </div>
    ))}    
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery{  
    allMarkdownRemark{
      edges{
        node{
        id        
        frontmatter{
          path
          date
          titulo          
        } 
      }
    }
  }
}
`

export default BlogPage
