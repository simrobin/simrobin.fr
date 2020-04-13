import React from 'react';
import Head from 'next/head';
import Icon from '../components/Icon';

const gray = '#2B2B2B';

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Simon Robin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Simon Robin, Développeur Front-end sur Paris" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simrobin.fr" />
        <meta property="og:title" content="Simon Robin" />
        <meta property="og:description" content="Simon Robin, Développeur Front-end sur Paris" />
        <meta property="og:image" content="https://simrobin.fr/android-chrome-512x512.png" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:width" content="512" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://simrobin.fr" />
        <meta name="twitter:image" content="https://simrobin.fr/android-chrome-512x512.png" />
        <meta name="twitter:description" content="Simon Robin, Développeur Front-end sur Paris" />
        <meta name="twitter:title" content="Simon Robin" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500"
        />
      </Head>
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

      <main>
        <section className="about-section">
          <div className="section-wrapper">
            <h2 className="section-title">
              <Icon className="align-top margin-right" name="arrow" size="22" />{' '}
              <span>À propos de moi</span>
            </h2>

            <p className="about-me">
              Passionné de développement, j’aime découvrir et construire des applications web qui
              facilitent le quotidien des utilisateurs.
              <br /> Je profite de la communauté open source et du travail en équipe autour de
              projets communs pour maintenir mes connaissances à jour au quotidien.
            </p>

            <ul className="about-skills">
              <li>
                <strong>Web</strong> : HTML, CSS, JavaScript, Angular(JS), React
              </li>
              <li>
                <strong>Backend</strong> : Golang, Node.js, SQL, PHP
              </li>
              <li>
                <strong>Devops</strong> : Docker, Kubernetes, Bash, Jenkins, Travis
              </li>
              <li>
                <strong>Langues</strong> : Anglais (courant), Allemand (scolaire)
              </li>
            </ul>
          </div>
        </section>

        <section className="experiences-section">
          <div className="section-wrapper">
            <h2 className="section-title">Expériences</h2>

            <div className="experiences">
              <div className="experience">
                <div className="experience-date">
                  2017{' '}
                  <Icon name="arrow" fill={gray} size="12" style={{ verticalAlign: 'middle' }} />{' '}
                  Aujourd'hui
                </div>
                <div className="experience-title">Développeur front-end</div>
                <div className="experience-location">MeilleursAgents | Paris</div>
                <ul className="experience-missions">
                  <li>Développement et maintenance des fonctionnalités du site web</li>
                  <li>Conception d’outils en ligne pour les particuliers et les agences</li>
                  <li>Maintien en condition opérationnelle de la stack front</li>
                </ul>
              </div>
              <div className="experience">
                <div className="experience-date">
                  2012 <Icon name="arrow" fill={gray} className="align-top" size="12" /> 2017
                </div>
                <div className="experience-title">Développeur web</div>
                <div className="experience-location">Oodrive | Paris</div>
                <ul className="experience-missions">
                  <li>Développement d’applications pour la gestion de certificats personnels</li>
                  <li>Intégration des sites web de l’entreprise</li>
                  <li>Automatisation de la personnalisation client des applications de partage</li>
                </ul>
              </div>
              <div className="experience">
                <div className="experience-date">
                  2010 <Icon name="arrow" fill={gray} className="align-top" size="12" /> 2012
                </div>
                <div className="experience-title">Développeur front-end</div>
                <div className="experience-location">AXA France | Nanterre</div>
                <ul className="experience-missions">
                  <li>
                    Mise en place d’une API de géolocalisation pour la recherche des distributeurs
                  </li>
                  <li>Amélioration continue de la compatibilité entre navigateurs et devices</li>
                  <li>Suivi de projet sur le lancement et la refonte de sites grands publics</li>
                  <li>Étude technique sur le choix d’un nouveau CMS</li>
                </ul>
              </div>
              <div className="experience">
                <div className="experience-date">
                  2009 <Icon name="arrow" fill={gray} className="align-top" size="12" /> 2010
                </div>
                <div className="experience-title">Développeur</div>
                <div className="experience-location">Telindus | Paris</div>
                <ul className="experience-missions">
                  <li>Développement d’une application de gestion de ressources humaines</li>
                  <li>Maintenance des applications internes et de l’intranet collaboratif</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="education-section">
          <div className="section-wrapper">
            <div className="education-wrapper">
              <h2 className="section-title">Formations</h2>

              <div className="educations">
                <div className="education">
                  <div className="education-icon">
                    <Icon name="school" size="64" fill={gray} />
                  </div>
                  <div className="education-date">
                    2010 <Icon name="arrow" fill={gray} className="align-top" size="12" /> 2012
                  </div>
                  <div className="education-title">Master MIAGE</div>
                  <div className="education-location">Université Paris XI | Orsay</div>
                </div>
                <div className="education">
                  <div className="education-icon">
                    <Icon name="school" size="64" fill={gray} />
                  </div>
                  <div className="education-date">
                    2007 <Icon name="arrow" fill={gray} className="align-top" size="12" /> 2010
                  </div>
                  <div className="education-title">Licence MIAGE</div>
                  <div className="education-location">Université Paris XI | Orsay</div>
                </div>
              </div>
            </div>

            <div className="resume">
              <Icon name="file" size="44" fill={gray} />
              <div className="resume-description">Besoin d'une version transportable ?</div>
              <a
                href="/files/cv-simon-robin.pdf"
                target="_blank"
                title="Télécharger mon CV"
                className="resume-link"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </section>

        <section className="interest-section">
          <div className="section-wrapper">
            <h2 className="section-title">Centres d'intérêts</h2>

            <ul className="interests">
              <li className="interest">
                <Icon name="volleyball" size="44" />
                <p className="interest-name">Volley-Ball</p>
              </li>
              <li className="interest">
                <Icon name="roller" size="44" />
                <p className="interest-name">Roller</p>
              </li>
              <li className="interest">
                <Icon name="tennis" size="44" />
                <p className="interest-name">Tennis</p>
              </li>
              <li className="interest">
                <Icon name="cooking" size="44" />
                <p className="interest-name">Cuisine</p>
              </li>
              <li className="interest">
                <Icon name="music" size="44" />
                <p className="interest-name">Guitare</p>
              </li>
              <li className="interest">
                <Icon name="map" size="44" />
                <p className="interest-name">Voyage</p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Simon Robin | Design by{' '}
        <a
          href="https://www.elodiearete.fr"
          title="Site web d'Elodie Arete"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elodie Arete
        </a>
      </footer>
    </React.Fragment>
  );
}
