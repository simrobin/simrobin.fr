import { loadRenderers } from 'astro:container';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import * as cheerio from 'cheerio';
import { describe, expect, test } from 'vitest';
import Education from '../components/Education.astro';
import Experience from '../components/Experience.astro';
import Footer from '../components/Footer.astro';
import Header from '../components/Header.astro';

describe('Header', () => {
  test('renders name and job title', async () => {
    const container = await AstroContainer.create({
      renderers: await loadRenderers([]),
    });
    const result = await container.renderToString(Header);
    const $ = cheerio.load(result);

    expect($('strong').text()).toContain('Simon Robin');
    expect($('em').text()).toContain('Développeur Front');
  });

  test('renders contact links', async () => {
    const container = await AstroContainer.create({
      renderers: await loadRenderers([]),
    });
    const result = await container.renderToString(Header);
    const $ = cheerio.load(result);

    const links = $('a');
    expect(links.length).toBe(3);
    expect(links.eq(0).attr('href')).toBe('mailto:simon@simrobin.fr');
    expect(links.eq(1).attr('href')).toBe('https://twitter.com/simrobins');
    expect(links.eq(2).attr('href')).toBe('https://github.com/simrobin');
  });

  test('renders theme toggle button', async () => {
    const container = await AstroContainer.create({
      renderers: await loadRenderers([]),
    });
    const result = await container.renderToString(Header);
    const $ = cheerio.load(result);

    expect($('#theme-toggle').length).toBe(1);
    expect($('#theme-toggle').attr('aria-label')).toBe('Changer de thème');
  });
});

describe('Experience', () => {
  test('renders experience details', async () => {
    const container = await AstroContainer.create({
      renderers: await loadRenderers([]),
    });
    const result = await container.renderToString(Experience, {
      props: {
        startDate: '2017',
        endDate: "Aujourd'hui",
        title: 'Développeur front-end',
        location: 'MeilleursAgents | Paris',
        missions: ['Mission 1', 'Mission 2'],
      },
    });
    const $ = cheerio.load(result);

    expect(result).toContain('2017');
    expect($.text()).toContain("Aujourd'hui");
    expect(result).toContain('Développeur front-end');
    expect(result).toContain('MeilleursAgents | Paris');
    expect($('li').length).toBe(2);
    expect($('li').eq(0).text()).toBe('Mission 1');
  });
});

describe('Education', () => {
  test('renders education details', async () => {
    const container = await AstroContainer.create({
      renderers: await loadRenderers([]),
    });
    const result = await container.renderToString(Education, {
      props: {
        startDate: '2010',
        endDate: '2012',
        title: 'Master MIAGE',
        location: 'Université Paris XI | Orsay',
      },
    });

    expect(result).toContain('2010');
    expect(result).toContain('2012');
    expect(result).toContain('Master MIAGE');
    expect(result).toContain('Université Paris XI | Orsay');
  });
});

describe('Footer', () => {
  test('renders copyright and credits', async () => {
    const container = await AstroContainer.create({
      renderers: await loadRenderers([]),
    });
    const result = await container.renderToString(Footer);

    expect(result).toContain('Simon Robin');
    expect(result).toContain('Elodie Arete');
    expect(result).toContain(new Date().getFullYear().toString());
  });

  test('renders link to designer website', async () => {
    const container = await AstroContainer.create({
      renderers: await loadRenderers([]),
    });
    const result = await container.renderToString(Footer);
    const $ = cheerio.load(result);

    const link = $('a');
    expect(link.attr('href')).toBe('https://www.elodiearete.fr');
    expect(link.attr('target')).toBe('_blank');
  });
});
