import React from 'react';
import './index.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='footer-container'>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <small className='website-rights'>Pearl Wong © 2022</small>
                    <div className='social-icons'>
                        <a
                            className='social-icon-link'
                            href='https://www.github.com/pwong09'
                            target='_blank'
                            rel="noreferrer"
                        >
                            <FaGithub />
                        </a>
                        <a
                            className='social-icon-link'
                            href='https://www.linkedin.com/in/pwong09'
                            target='_blank'
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
