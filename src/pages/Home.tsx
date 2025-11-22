import React from 'react';
import Hero from '../sections/Hero';
import Mission from '../sections/Mission';
import EventStructure from '../sections/EventStructure';
import Packages from '../sections/Packages';
import Team from '../sections/Team';
import Stats from '../sections/Stats';
import Celebrities from '../sections/Celebrities';

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero />
      <Mission />
      <EventStructure />
      <Packages />
      <Team />
      <Stats />
      <Celebrities />
    </div>
  );
}
