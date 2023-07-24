// import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'

export const Footer = () => {
    let footerStyle = {
      position: "relative",
      top:"150vh",
      width: "100%",
     //border:"2px solid red"

    }

  return (

    <div className="bg-dark text-light py-3"style={
      footerStyle}>
      <footer>
      <p className="text-center">
      Copyright &copy;MytodosList.com    

      </p>  
      </footer> 
                   
    </div>
  )
}
