import React from 'react'
import Link from 'gatsby-link'

export default function Template({data}){
  const post = data.markdownRemark
  console.log("post", post)
  return(
    <div>
      <Link to="/blog">Voltar</Link>
      <hr />
      <h1>{post.frontmatter.titulo}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html}} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: {path: { eq: $path}}){
      html
      frontmatter{
        path
        titulo
        date
      }        
    }
  }
`