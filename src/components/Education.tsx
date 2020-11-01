import React from 'react';

import { gray } from '../utils/constants';

import Icon from './Icon';

interface EducationProps {
  startDate: string;
  endDate: string;
  title: string;
  location: string;
}

export default function Education({ startDate, endDate, title, location }: EducationProps) {
  return (
    <div className="education">
      <div className="education-icon">
        <Icon name="school" size="64" fill={gray} />
      </div>
      <div className="education-date">
        {startDate} <Icon className="align-top" name="arrow" fill={gray} size="12" /> {endDate}
      </div>
      <div className="education-title">{title}</div>
      <div className="education-location">{location}</div>
    </div>
  );
}
