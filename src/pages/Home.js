import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import Video from '../partials/Video';

import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div>
    <Video width="100%" height="100%"/>

    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}

      <Header style="height: 5rem"/>

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        {/* <FeaturesBlocks /> */}
        <Testimonials />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

      </div>
      </div>
  );
}

export default Home;