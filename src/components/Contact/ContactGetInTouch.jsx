import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import { motion } from "framer-motion";
import Envelope from "../../assets/images/Envelope-fill.svg";
import Phone from "../../assets/images/Phone-outgoing.svg";

const ContactGetInTouch = () => {
  const [loading, setLoading] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [successText, setSuccessText] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstName = (e) => {
    // 👇 Store the input value to local state
    setFirstName(e.target.value);
  };

  const contactUs = () => {
    if (firstName.length === 0) {
      setErrorText("Enter your FirstName");
      setErrorAlert(true);
      return setTimeout(() => setErrorAlert(false), 2000);
    }
    if (lastName.length === 0) {
      setErrorText("Enter your LastName");
      setErrorAlert(true);
      return setTimeout(() => setErrorAlert(false), 2000);
    }
    if (email.length === 0) {
      setErrorText("Enter your email");
      setErrorAlert(true);
      return setTimeout(() => setErrorAlert(false), 2000);
    }
    if (subject.length === 0) {
      setErrorText("Enter your Subject");
      setErrorAlert(true);
      return setTimeout(() => setErrorAlert(false), 2000);
    }
    if (message.length === 0) {
      setErrorText("Enter your message");
      setErrorAlert(true);
      return setTimeout(() => setErrorAlert(false), 2000);
    }
    setLoading(true);
    var bodyFormData = new FormData();
    bodyFormData.append("firstname", firstName);
    bodyFormData.append("lastname", lastName);
    bodyFormData.append("email", email);
    bodyFormData.append("subjectline", subject);
    bodyFormData.append("message", message);
    axios({
      method: "post",
      url: "/api/contactus",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        // handle success
        setSuccessText(response.data.message);
        setSuccessAlert(true);
        setLoading(false);
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
        return setTimeout(() => setSuccessAlert(false), 3000);
      })
      .catch((error) => {
        // handle error
        setErrorText(
          error?.response?.data?.message
            ? error?.response?.data?.message
            : error?.message
        );
        setErrorAlert(true);
        setLoading(false);
        return setTimeout(() => setErrorAlert(false), 3000);
      });
  };

  const ErrorAlert = ({ errorText }) => {
    return (
      <motion.div
        id="alert-2"
        className="flex p-4 mb-4 font-Regular text-red-800 border border-red-300 rounded-lg bg-red-50"
        role="alert"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>

        <span className="sr-only">Info</span>
        <div className="ml-3 text-sm font-medium">{errorText}</div>
      </motion.div>
    );
  };

  const SuccessAlert = ({ successText }) => {
    return (
      <motion.div
        id="alert-2"
        className="flex p-4 mb-4 font-Regular text-green-800 border border-green-300 rounded-lg bg-green-50"
        role="alert"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="sr-only">Info</span>
        <div className="ml-3 text-sm font-medium">{successText}</div>
      </motion.div>
    );
  };

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
              <p className="font-Regular text-[#6D6D6D] lg:text-lg md:text-lg sm:text-base text-base pt-4">
                We love to inform your vehicle purchase and sale decisions. Get
                in touch today, we&apos;ll help you find the perfect vehicle
                with utmost convenience.
              </p>
              <div className="flex flex-col justify-start items-start">
                <div className="font-Regular inline-flex text-[#6D6D6D] lg:text-xl md:text-lg sm:text-base text-base pt-16">
                  <img
                    src={Envelope}
                    alt="Envelope-fill"
                    style={{ height: "auto" }}
                    className="img-fluid mx-auto mr-6"
                  />
                  <a
                    href="mailto:info@bargainmotogh.com"
                    className="cursor-pointer hover:underline"
                  >
                    info@bargainmotogh.com
                  </a>
                </div>
                <div className="font-Regular inline-flex text-[#6D6D6D] lg:text-xl md:text-lg sm:text-base text-base pt-9">
                  <img
                    src={Phone}
                    alt="Phone-outgoing"
                    style={{ height: "auto" }}
                    className="img-fluid mx-auto mr-6"
                  />
                  <a
                    href="tel:+233 53 428 3825"
                    className="cursor-pointer hover:underline"
                  >
                    +233 53 428 3825
                  </a>
                </div>
              </div>
            </div>
            {/* Right Col */}

            <div className="text-left backdrop-blur-xl shadow-slate-300 shadow-2xl bg-[#FFF] p-10 pl-10 pr-10 rounded-2xl">
              <header className="lg:text-2xl md:text-2xl sm:text-xl text-xl pb-6 font-SemiBold text-[#000] break-normal md:break-all">
                Leave a message, we will <br /> respond ASAP.
              </header>
              {loading ? null : errorAlert ? (
                <ErrorAlert errorText={errorText} />
              ) : successAlert ? (
                <SuccessAlert successText={successText} />
              ) : null}
              <form name="contact" method="post">
                <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#0A0D14]">
                  Your firstname
                  <input
                    type="text"
                    id="large-input"
                    placeholder="e.g Oheema"
                    name="firstname"
                    required
                    className="block w-full p-4 mt-2 text-[#666] font-Regular rounded-lg bg-[#F5F5F5] sm:text-md outline-none focus:outline-amber-300"
                    onChange={handleFirstName}
                    value={firstName}
                  />
                </div>
                <div className="relative z-0 w-full mb-6 group text-sm font-Regular text-[#0A0D14]">
                  Your lastname
                  <input
                    type="text"
                    id="large-input"
                    placeholder="e.gNketiah"
                    name="firstname"
                    required
                    className="block w-full p-4 mt-2 text-[#666] font-Regular rounded-lg bg-[#F5F5F5] sm:text-md outline-none focus:outline-amber-300"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
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
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
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
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </div>

                {loading ? (
                  <Spinner />
                ) : (
                  <button
                    type="submit"
                    className="text-[#5C2E14] bg-[#F3B757] hover:bg-amber-500 focus:ring-1 focus:outline-none
                   focus:ring-amber-100 font-medium font-SemiBold rounded-lg text-xl p-3 pl-12 pr-12 text-center"
                    onClick={() => contactUs()}
                  >
                    Send Message
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactGetInTouch;
