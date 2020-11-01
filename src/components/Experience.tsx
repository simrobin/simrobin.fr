import React, { ReactNode } from 'react';

import { gray } from '../utils/constants';

import Icon from './Icon';

interface ExperienceProps {
  startDate: string;
  endDate: string;
  title: string;
  location: string;
  children: ReactNode;
}

export default function Experience({
  startDate,
  endDate,
  title,
  location,
  children,
}: ExperienceProps) {
  return (
    <div className="experience">
      <div className="experience-date">
        {startDate} <Icon className="align-top" name="arrow" fill={gray} size="12" /> {endDate}
      </div>
      <div className="experience-title">{title}</div>
      <div className="experience-location">{location}</div>
      <ul className="experience-missions">{children}</ul>
    </div>
  );
}
