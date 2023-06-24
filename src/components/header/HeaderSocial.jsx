import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {RxVercelLogo} from 'react-icons/rx';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="http://" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><BsGithub></BsGithub></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"><RxVercelLogo></RxVercelLogo></a>
    </div>
  )
}

export default HeaderSocial