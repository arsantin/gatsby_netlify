import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
    <div style={{
      background: 'darkgrey',
      paddingTop: '10px'
      }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly'
      }} >
      <li><Link to="/">Home</Link></li>
      <li><Link to="/foodtrucks">Food Trucks</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/sobre">Sobre</Link></li>
      </ul>
      </div> 
)

export default Menu