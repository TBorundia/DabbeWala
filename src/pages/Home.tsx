import React from 'react';
import { Hero } from '../components/Hero';
import { SearchBar } from '../components/SearchBar';
import { Features } from '../components/Features';
import { TiffinServices } from '../components/TiffinServices';

export function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Features />
      <TiffinServices />
    </>
  );
}