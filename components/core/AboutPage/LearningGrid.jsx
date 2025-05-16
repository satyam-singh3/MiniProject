import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 6,
    heading: "24/7 Support",
    description:
      "Get help anytime with our dedicated support team available round the clock to assist you with any queries.",
  },
];

const LearningGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-richblack-5 mb-4 animate-slideUp">
          {LearningGridArray[0].heading}
          <HighlightText text={LearningGridArray[0].highlightText} />
        </h1>
        <p className="text-richblack-300 text-lg max-w-3xl mx-auto mb-8 animate-slideUp" style={{ animationDelay: '100ms' }}>
          {LearningGridArray[0].description}
        </p>
        <div className="flex justify-center animate-slideUp" style={{ animationDelay: '200ms' }}>
          <CTAButton active={true} linkto={LearningGridArray[0].BtnLink}>
            {LearningGridArray[0].BtnText}
          </CTAButton>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LearningGridArray.slice(1).map((item) => (
          <div className="bg-gradient-to-br from-richblue-900 to-richblue-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-richblue-800 hover:to-richblue-700">
            <h2 className="text-xl font-semibold mb-2 text-richblack-5">{item.heading}</h2>
            <p className="text-richblack-300 mb-4">{item.description}</p>
            <a
              href={item.BtnLink}
              className="text-caribbeangreen-200 hover:text-caribbeangreen-50 font-medium inline-flex items-center"
            >
              {item.BtnText}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningGrid;