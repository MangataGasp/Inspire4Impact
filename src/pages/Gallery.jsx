import React from "react";
import { motion } from 'motion/react';

export default function Gallery() {
  return (
    <div>
      <div>
        <section className="py-32 bg-[#f0eded] relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-[#7A211E] text-3xl md:text-5xl font-semibold">
                Impact Gallery
              </h2>
              <p className="text-gray-400 mt-4 font-medium">
                Explore our inspiring moments in the field.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
              <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group">
                <img
                  alt="Gallery 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-alt="A vibrant action shot from a youth leadership summit, featuring several diverse participants in mid-discussion with bright, engaged expressions. The lighting is high-key and optimistic, focusing on the genuine smiles and collaboration of the youth involved."
                  src="assets/gal6.jpg"
                />
              </div>
              <div className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden group">
                <img
                  alt="Gallery 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-alt="A detailed, candid photograph of a student presenting their startup idea at a pitch competition. The focus is sharp on the presenter's expressive gestures, with a supportive audience slightly blurred in the background, conveying a sense of community and encouragement."
                  src="assets/gal2.png"
                />
              </div>
              <div className="md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden group">
                <img
                  alt="Gallery 3"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-alt="A professional group photo of team members and volunteers outside a community center, celebrating the completion of a project. The lighting is golden hour warm, creating a feeling of accomplishment and joy. All subjects are dressed in smart-casual Inspire4Impact attire."
                  src="assets/gal3.png"
                />
              </div>
              <div className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden group">
                <img
                  alt="Gallery 4"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-alt="An energetic snapshot of a workshop session where participants are cheering or celebrating a breakthrough. The motion blur in the background adds to the sense of high energy and excitement, while the focal subjects show authentic passion and engagement."
                  src="assets/gal5.jpg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
