import Envelope from "../../assets/images/Envelope-fill.svg";
import Phone from "../../assets/images/Phone-outgoing.svg";

const ContactGetInTouch = () => {
  return (
    <div className="bg-[#FFF8EB]">
      <div className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-1 sm:grid-cols-1">
            {/* Left Col */}
            <div className="text-left items-center md:p-24 sm:p-8 p-8">
              <header className="font-Bold text-[#000] lg:text-4xl md:text-3xl sm:text-3xl text-3xl break-normal md:break-all">
                Get In Touch
              </header>
              <p className="font-Regular text-[#6D6D6D] lg:text-lg md:text-lg sm:text-base text-base pt-4 break-normal md:break-all">
                We love to inform your vehicle purchase and sale decisions. Get
                in touch today, we'll help you find the perfect vehicle with
                utmost convenience.
              </p>
              <p className="font-Regular inline-flex text-[#6D6D6D] lg:text-xl md:text-lg sm:text-base text-base pt-16 break-normal md:break-all">
                <img
                  src={Envelope}
                  alt="Envelope-fill"
                  style={{ height: "auto" }}
                  className="img-fluid mx-auto mr-6"
                />
                info@bargainmotogh.com
              </p>
              <p className="font-Regular inline-flex text-[#6D6D6D] lg:text-xl md:text-lg sm:text-base text-base pt-9 break-normal md:break-all">
                <img
                  src={Phone}
                  alt="Phone-outgoing"
                  style={{ height: "auto" }}
                  className="img-fluid mx-auto mr-6"
                />
                +233 243 589 7564
              </p>
            </div>
            {/* Right Col */}
            <div className="text-left backdrop-blur-xl bg-[#FFF] p-10 pl-10 pr-10 rounded-2xl">
              <header className="lg:text-2xl md:text-2xl sm:text-xl text-xl pb-6 font-SemiBold text-[#000] break-normal md:break-all">
                Leave a message, we will <br /> respond ASAP.
              </header>
              <form name="contact" method="post">
                <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#0A0D14]">
                  Your fullname
                  <input
                    type="text"
                    id="large-input"
                    placeholder="e.g Oheema Nketiah"
                    name="firstname"
                    required
                    className="block w-full p-4 mt-2 text-[#666] font-Regular rounded-lg bg-[#F5F5F5] sm:text-md outline-none focus:outline-amber-300"
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#0A0D14]">
                  Your email
                  <input
                    type="text"
                    id="large-input"
                    placeholder="e.g oheemanketia@gmail.com"
                    name="email"
                    required
                    className="block w-full p-4 mt-2 text-[#666] font-Regular rounded-lg bg-[#F5F5F5] sm:text-md
                      outline-none focus:outline-amber-300"
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#0A0D14]">
                  Subject
                  <input
                    type="text"
                    id="large-input"
                    placeholder="Add your subject"
                    name="subjectline"
                    required
                    className="block w-full p-4 mt-2 text-[#666] font-Regular rounded-lg bg-[#F5F5F5] sm:text-md outline-none focus:outline-amber-300"
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#0A0D14]">
                  Your message
                  <textarea
                    id="message"
                    required
                    name="message"
                    rows="4"
                    className="block p-1 mt-2 w-full text-[#666] font-Regular bg-[#F5F5F5] sm:text-md rounded-lg outline-none focus:outline-amber-300"
                    placeholder="start typing..."
                  ></textarea>
                </div>

                {/*Netlify Form Handling*/}
                <input type="hidden" name="form-name" value="contact" />
                {/*Netlify Form Handling*/}

                <button
                  type="submit"
                  className="text-[#5C2E14] bg-[#F3B757] hover:bg-amber-500 focus:ring-1 focus:outline-none
                   focus:ring-amber-100 font-medium font-SemiBold rounded-lg text-xl p-3 pl-12 pr-12 text-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactGetInTouch;
