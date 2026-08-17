import { useState } from "react";

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      
      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-80 object-cover"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 
        w-10 h-10 rounded-full bg-white/90 shadow-md 
        flex items-center justify-center 
        hover:bg-white transition"
      >
        ←
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 
        w-10 h-10 rounded-full bg-white/90 shadow-md 
        flex items-center justify-center 
        hover:bg-white transition"
      >
        →
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index
                ? "w-6 bg-indigo-600"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};