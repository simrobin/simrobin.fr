import React from 'react';
import Head from 'next/head';

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
        <i className="sr-logo"></i>
        <h1 className="title">
          <strong className="title-name">Simon Robin</strong>
          <em className="title-job">Développeur Front&#8209;End</em>
        </h1>
        <div className="contact">
          <a
            href="mailto:simon@simrobin.fr"
            title="M'envoyer un message"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sr-mail"></i> Message
          </a>
          <a
            href="https://twitter.com/simrobins"
            title="Me suivre sur Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sr-twitter"></i> Twitter
          </a>
          <a
            href="https://github.com/simrobin"
            title="Consulter mon GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="sr-github"></i> GitHub
          </a>
        </div>
      </header>

      <main>
        <section className="about-section">
          <div className="section-wrapper">
            <h2 className="section-title">À propos de moi</h2>

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
                  2017 <i className="sr-arrow"></i> Aujourd'hui
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
                  2012 <i className="sr-arrow"></i> 2017
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
                  2010 <i className="sr-arrow"></i> 2012
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
                  2009 <i className="sr-arrow"></i> 2010
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
                    <i className="sr-school"></i>
                  </div>
                  <div className="education-date">
                    2010
                    <i className="sr-arrow"></i> 2012
                  </div>
                  <div className="education-title">Master MIAGE</div>
                  <div className="education-location">Université Paris XI | Orsay</div>
                </div>
                <div className="education">
                  <div className="education-icon">
                    <i className="sr-school"></i>
                  </div>
                  <div className="education-date">
                    2007
                    <i className="sr-arrow"></i> 2010
                  </div>
                  <div className="education-title">Licence MIAGE</div>
                  <div className="education-location">Université Paris XI | Orsay</div>
                </div>
              </div>
            </div>

            <div className="resume">
              <i className="sr-file"></i>
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
                <i className="sr-volleyball"></i>
                <p className="interest-name">Volley-Ball</p>
              </li>
              <li className="interest">
                <i className="sr-roller"></i>
                <p className="interest-name">Roller</p>
              </li>
              <li className="interest">
                <i className="sr-tennis"></i>
                <p className="interest-name">Tennis</p>
              </li>
              <li className="interest">
                <i className="sr-cooking"></i>
                <p className="interest-name">Cuisine</p>
              </li>
              <li className="interest">
                <i className="sr-music"></i>
                <p className="interest-name">Guitare</p>
              </li>
              <li className="interest">
                <i className="sr-map"></i>
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
