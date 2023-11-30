import React from 'react';
import PageBanner from "../../components/PageBanner/PageBanner";
import PageTitle from "../../components/PageTitle/PageTitle";

const AboutUs = () => {
  return (
    <div>
      <PageTitle title="About" />
      <PageBanner heading="About Us" />
      <div className="w-11/12 mx-auto p-4 my-16">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg mb-6">
          Welcome to Heart Bond, a marriage website dedicated to fostering
          strong and lasting relationships.
        </p>
        <p className="text-lg mb-6">
          Our mission is to provide a platform where couples can find valuable resources,
          guidance, and support to strengthen their bonds and create enduring relationships.
        </p>
        <p className="text-lg mb-6">
          With a team of relationship experts, therapists, and professionals, we aim to
          offer comprehensive advice, tips, and tools to navigate the beautiful journey of
          marriage successfully.
        </p>
        <p className="text-lg mb-6">
          At Heart Bond, we believe that every relationship deserves care, attention, and
          continuous efforts to thrive. Join us in building a community dedicated to love,
          respect, and understanding.
        </p>
        <p className="text-lg mb-6">
          Feel free to explore our website, engage with our content, and become a part of
          our supportive community as we embark on this journey together.
        </p>
        <p className="text-lg mb-6">
          Thank you for choosing Heart Bond to be a part of your relationship's success story!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
