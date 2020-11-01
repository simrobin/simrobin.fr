import React from 'react';

import Icon from './Icon';

export default function Header() {
  return (
    <header>
      <Icon name="logo" fill="#fff" size="64" />
      <h1 className="title">
        <strong className="title-name">Simon Robin</strong>
        <em className="title-job">Développeur Front&#8209;End</em>
      </h1>
      <div className="contact">
        <a
          className="contact__link"
          href="mailto:simon@simrobin.fr"
          title="M'envoyer un message"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="align-top margin-right" name="mail" size="18" /> Message
        </a>
        <a
          className="contact__link"
          href="https://twitter.com/simrobins"
          title="Me suivre sur Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="align-top margin-right" name="twitter" size="18" /> Twitter
        </a>
        <a
          className="contact__link"
          href="https://github.com/simrobin"
          title="Consulter mon GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="align-top margin-right" name="github" size="18" /> GitHub
        </a>
      </div>
    </header>
  );
}
