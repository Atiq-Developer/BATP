import Image from "next/image";

interface SectionProps {
  title: string;
  content: string;
  imageUrl: string;
  altText: string;
}

const Section: React.FC<SectionProps> = ({ title, content, imageUrl, altText }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10 bg-red-500  ">
      {/* Left: Heading & Paragraph */}
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold text-green-700">{title}</h2>
        <p className="text-gray-800 mt-2">{content}</p>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/3">
        <Image
          src={imageUrl}
          alt={altText}
          width={300}
          height={200}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

const Biofeedback: React.FC = () => {
  const sections = [
    {
      title: "Brainwave Biofeedback",
      content:
        "Behavior Analysis & Therapy Partners (BATP) is proud to have supported a Neurofeedback program implemented in two schools in South Philadelphia...",
      imageUrl: "/images/kids1.jpg", // Replace with actual image paths
      altText: "Kids playing outside",
    },
    {
      title: "ABAI Poster Presentation",
      content:
        "In May 2024, BATP co-founder Gary Ames presented a poster at the 50th Applied Behavior Analysis International Convention...",
      imageUrl: "/images/kids2.jpg", // Replace with actual image paths
      altText: "Baby sitting on a bench",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Neurofeedback Program Overview</h1>
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
};

export default Biofeedback;
