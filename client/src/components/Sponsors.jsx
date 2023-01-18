import React from 'react'
import { FaAirbnb, FaAmazon, FaDropbox, FaSlack, FaDiscord, FaDribbble, FaMicrosoft, FaApple, FaGoogle, FaInstagram } from 'react-icons/fa'
import { SiDiscover, SiWalmart, SiSamsung } from 'react-icons/si'

const Sponsors = () => {
  const logoColor = {fill: '#abaaad'};
  return (
    <div className="sponsors-container">
      <span className="sponsors-header">
        More than <span>20,000 companies </span>partner with us
      </span>
      <div className="sponsors-logo-container">
        <FaAirbnb style={logoColor} />
        <FaAmazon style={logoColor} />
        <SiDiscover style={logoColor} />
        <SiWalmart style={logoColor} />
        <FaDropbox style={logoColor} />
        <FaSlack style={logoColor} />
        <FaDiscord style={logoColor} />
        <FaDribbble style={logoColor} />
        <FaMicrosoft style={logoColor} />
        <FaApple style={logoColor} />
        <FaGoogle style={logoColor} />
        <FaInstagram style={logoColor} />
        <SiSamsung style={logoColor} />
      </div>
    </div>
  )
}

export default Sponsors