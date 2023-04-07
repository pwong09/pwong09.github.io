import React from 'react';
import './index.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <small className='website-rights'>Pearl Wong © 2022 - 2023</small>
            <div className='social-icons'>
              <a
                aria-label="Github"
                href='https://www.github.com/pwong09'
                rel="noreferrer"
                target='_blank'
              >
                <button className='social-icon-link'><FaGithub /></button>
              </a>
              <a
                aria-label="LinkedIn"
                href='https://www.linkedin.com/in/pwong09'
                rel="noreferrer"
                target='_blank'
              >
                <button className='social-icon-link'><FaLinkedin /></button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
