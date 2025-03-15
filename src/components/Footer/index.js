import React from 'react';
import './index.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentDate = new Date(Date.now());

  return (
    <footer>
      <div className='footer-container'>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <small className='website-rights'>Pearl Wong © 2022 - {currentDate.getFullYear()}</small>
            <div className='social-icons'>
              <a
                href='https://www.github.com/pwong09'
                rel="noreferrer"
                target='_blank'
              >
                <button aria-label='Github' className='social-icon-link' tabIndex='-1'><FaGithub /></button>
              </a>
              <a
                href='https://www.linkedin.com/in/pearl-wong'
                rel="noreferrer"
                target='_blank'
              >
                <button aria-label='LinkedIn' className='social-icon-link' tabIndex='-1'><FaLinkedin /></button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
