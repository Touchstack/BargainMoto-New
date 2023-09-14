import { useState } from "react";
import FAQDocs from "./Docs";

const CommonQuestions = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);
  const buyerDocs = FAQDocs;
  const activeHeader =
    "font-SemiBold pl-4 text-xl accordion-header text-[#333333] tracking-tighter";

  const FAQView = () => {
    return buyerDocs.map((item) => {
      return (
        <div
          key={item.headerId}
          className="flex-col justify-center items-center"
        >
          <h2 id={item.headerId} className="accordion-header">
            <button
              type="button"
              className={`${
                accordionOpen === item.accordionTarget ? "bg-white" : "bg-white"
              } flex justify-between items-center py-5 w-full text-lg text-left border-b border-gray-200 hover:bg-gray-200 focus:ring-gray-200 text-gray-900 accordion-header`}
              data-accordion-target={`#${item.accordionTarget}`}
              aria-expanded={
                accordionOpen !== item.accordionTarget ? "false" : "true"
              }
              aria-controls={`${item.accordionTarget}`}
              onClick={() => {
                accordionOpen !== item.accordionTarget
                  ? setAccordionOpen(item.accordionTarget)
                  : setAccordionOpen();
              }}
            >
              <span
                className={
                  accordionOpen === item.accordionTarget
                    ? activeHeader
                    : "font-Regular text-xl pl-4 text-[#333333] tracking-tighter"
                }
              >
                {item.title}
              </span>
              <svg
                data-accordion-icon=""
                className={
                  item.accordionTarget === accordionOpen ? "w-6 h-6" : "w-6 h-6"
                }
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id={`${item.accordionTarget}`}
            className={item.accordionTarget === accordionOpen ? null : "hidden"}
            aria-labelledby={`${item.accordionTarget}`}
          >
            {item.content.isListTop ? (
              <div className="py-5 border-b border-gray-200 accordion-header">
                <ul className="mb-2 list-disc text-gray-500 text-justify">
                  {item.content.lists.map((text) => {
                    return (
                      <li
                        key={text}
                        className="mb-2 font-Regular text-lg tracking-tighter"
                      >
                        {text}
                      </li>
                    );
                  })}
                </ul>
                {item.content.paragraphs.map((text) => {
                  return (
                    <p
                      key={text}
                      className="mb-2 text-gray-500 text-justify font-Regular text-lg tracking-tighter"
                    >
                      {text}
                    </p>
                  );
                })}
              </div>
            ) : item.content.isParagraghTop ? (
              <div className="py-5 border-b border-gray-200 accordion-header">
                {item.content.paragraphs.map((text) => {
                  return (
                    <p
                      key={text}
                      className="mb-2 text-gray-500 text-justify font-Regular text-lg tracking-tighter"
                    >
                      {text}
                    </p>
                  );
                })}
                <ul className="mb-2 list-disc text-gray-500 text-justify">
                  {item.content.lists.map((text) => {
                    return (
                      <li
                        key={text}
                        className="mb-2 font-Regular text-lg tracking-tighter"
                      >
                        {text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className="py-5 border-b border-gray-200 accordion-header">
                {item.content.paragraphs.map((text) => {
                  return (
                    <p key={text} className="mb-2 text-gray-500 text-justify">
                      {text}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h3 className="font-Bold text-[#191919] text-4xl text-bold m-10 text-center pt-16">
        Common Questions
      </h3>
      <div className="container mx-auto lg:w-6/12 md:w-8/12 sm:w-11/12 w-11/12 pb-32">
        <div className="flex-col justify-center items-center">
          <FAQView />
        </div>
      </div>
    </div>
  );
};
export default CommonQuestions;
