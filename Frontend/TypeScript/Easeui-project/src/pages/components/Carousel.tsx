import { Carousel } from "../../components/Carousel/Carousel";
import { ComponentPreview } from "../../components/Carousel/ComponentPreview/ComponentPreview";

const CarouselPage = () => {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  ];

  const carouselCode = `import { Carousel } from "./components/Carousel/Carousel";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
];

<Carousel images={images} />`;

  return (
    <div className="min-h-screen bg-gray-50 p-10">

      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Carousel
          </h1>

          <p className="text-gray-600">
            A carousel allows users to navigate through multiple slides.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <h2 className="text-2xl font-semibold mb-2">
            Basic Carousel
          </h2>

          <p className="text-gray-500 mb-6">
            Navigate between slides using the arrows or indicators.
          </p>

          <ComponentPreview code={carouselCode}>
            <Carousel images={images} />
          </ComponentPreview>

        </div>

      </div>

    </div>
  );
};

export default CarouselPage;