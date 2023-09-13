import React from "react";
import globe from "./globe.svg";
import gmail from "./gmail.svg";
import smartphone from "./smartphone.svg";
import location from "./location.svg";

export default function Contact() {
  return (
    <div className="flex flex-col w-full h-full mt-10 lg:mt-0">
      <div className="text-[22px] pl-3 mb-4 text-[#fff] font-bold    tracking-widest">
        Contact Info
      </div>
      <div className="w-full h-full contact ">
        <div className="flex flex-col justify-between w-full h-full ">
          <div className="flex items-center justify-start py-3 location">
            <img
              width={20}
              src={location}
              alt="globe"
              className="text-white    hover:text-[#ff8a73] mx-2"
            />

            <div className="flex flex-col justify-center ">
              <div className="text-[#fff] hidden lg:block  pl-4  text-[17px] font-sans">
                Near St.Alphonsa College of Arts and Science ,
              </div>
              <div className="text-[#fff] hidden lg:block  pl-4   text-[17px] font-sans">
                Soosaipuram, Karinkal, Kanyakumari District ,
              </div>{" "}
              <div className="text-[#fff] hidden lg:block  pl-4   text-[17px] font-sans">
                Tamil Nadu, India
              </div>
              <div className="text-[#fff] block  lg:hidden   pl-4  text-[17px] font-sans">
                Near St.Alphonsa College of Arts and Science, Soosaipuram,
                Karinkal, Kanyakumari District, Tamil Nadu, India
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start py-3 location">
            {/* <svg
              className="text-white    hover:text-[#ff8a73] mx-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg> */}
            <img
              width={20}
              src={gmail}
              alt="globe"
              className="text-white    hover:text-[#ff8a73] mx-2"
            />
            <div className="flex items-center justify-center">
              <a
                href="mailto:SSBKD@gmail.com"
                class="text-[#fff] pl-5 text-[17px] font-sans  hover:text-[#faa4a4] hover:underline"
              >
                <p>SSBKD@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-start py-3 location">
            {/* <svg
              className="text-white    hover:text-[#ff8a73] mx-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg> */}
            <img
              width={20}
              src={smartphone}
              alt="globe"
              className="text-white    hover:text-[#ff8a73] mx-2"
            />

            <div className="flex flex-wrap items-center justify-start lg:justify-center">
              <a
                href="tel:+917598749731"
                class="text-[#fff] pl-4 text-[17px] font-sans hover:text-[#ffdbdb] hover:underline"
              >
                +91 75987 49731,
              </a>{" "}
              <a
                href="tel:+919486000674"
                class="text-[#fff] pl-4 text-[17px] font-sans hover:text-[#ffdbdb] hover:underline"
              >
                +91 94860 00674
              </a>
            </div>
          </div>
          <div className="flex items-center justify-start py-3 location">
            {/* <svg
              className="text-white    hover:text-[#ff8a73] mx-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg> */}
            <img
              width={20}
              src={globe}
              alt="globe"
              className="text-white    hover:text-[#ff8a73] mx-2"
            />
            <div className="flex items-center justify-center">
              <a
                href="/www.chennaicabs.in"
                class="text-[#fff] pl-4 text-[17px] font-sans hover:text-[#ffd9d9] hover:underline"
              >
                www.chennaicabs.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
