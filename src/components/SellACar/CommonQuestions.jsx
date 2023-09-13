import chevrondown from "../../assets/images/chevron-down.svg";

const CommonQuestions = () => {
  return (
    <div className="flex flex-col space-y-12 items-center">
      <h3 className="container font-Bold text-[#191919] text-4xl text-bold m-10 text-center ">
        Common Questions
      </h3>
      <div className="lg:w-9/12 md:w-9/12 sm:w-10/12 w-10/12 h-[88] flex flex-col justify-center items-center font-Regular text-2xl space-y-10">
        <div className="text-[#333]">
          Who do i need to be verified to use Bargain Moto?
          <div className="inline-flex justify-end text-base text-[#000000]">
            <div className="ml-80">
              <img
                src={chevrondown}
                alt="chevron-down.svg"
                style={{ height: "16px", width: "16px" }}
                className="ml-2"
              />
            </div>
          </div>
          <h2 className="my-6 bg-[#D9D9D9] h-px sm:mx-auto lg:my-4" />
        </div>
        <div className="text-[#333]">
          How does BargainMoto ensure the quality of cars listed?
          <div className="inline-flex justify-end text-base text-[#000000]">
            <div className="ml-44">
              <img
                src={chevrondown}
                alt="chevron-down.svg"
                style={{ height: "16px", width: "16px" }}
                className="ml-16"
              />
            </div>
          </div>
          <h2 className="my-6 bg-[#D9D9D9] h-px sm:mx-auto lg:my-4" />
        </div>
        <div className="text-[#333]">
          What fees does BargainMoto charge for its services?
          <div className="inline-flex justify-end text-base text-[#000000]">
            <div className="ml-56">
              <img
                src={chevrondown}
                alt="chevron-down.svg"
                style={{ height: "16px", width: "16px" }}
                className="ml-20"
              />
            </div>
          </div>
          <h2 className="my-6 bg-[#D9D9D9] h-px sm:mx-auto lg:my-4" />
        </div>
        <div className="text-[#333] text-right">
          What does BargainMoto protect my personal information?
          <div className="inline-flex justify-end text-base text-[#000000]">
            <div className="ml-56">
              <img
                src={chevrondown}
                alt="chevron-down.svg"
                style={{ height: "16px", width: "16px" }}
                className=""
              />
            </div>
          </div>
          <h2 className="my-6 bg-[#D9D9D9] h-px sm:mx-auto lg:my-4" />
        </div>
        <div className="text-[#333]">
          What should i do if i have a dispute with a buyer or seller?
          <div className="inline-flex justify-end text-base text-[#000000]">
            <div className="ml-60">
              <img
                src={chevrondown}
                alt="chevron-down.svg"
                style={{ height: "16px", width: "16px" }}
                className=""
              />
            </div>
          </div>
          <h2 className="my-6 bg-[#D9D9D9] h-px sm:mx-auto lg:my-4" />
        </div>
      </div>
    </div>
  );
};
export default CommonQuestions;
