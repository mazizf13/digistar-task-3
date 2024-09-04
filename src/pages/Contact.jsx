import React from "react";
import Layout from "../components/layout/Layout";
import { contact, contactLinks, socialLinks } from "../data/item";
import CardContact from "../components/card/CardContact";
import { useDarkMode } from "../contexts/DarkModeContext";
import {
  Phone,
  Instagram,
  Facebook,
  Twitter,
  MailIcon as MailsIcon,
  Youtube,
} from "lucide-react";
import FeedbackList from "../components/feedback/FeedbackList";
import FeedbackForm from "../components/feedback/FeedbackForm";
import { useFeedback } from "../hooks/useFeedback";

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  const { feedbacks, addFeedback, likeFeedback, deleteFeedback, setFeedbacks } =
    useFeedback();
  const iconColor = isDarkMode ? "text-gray-300" : "text-gray-700";

  return (
    <Layout>
      <div
        className={`flex md:container md:mx-auto justify-between lg:px-40 ${
          isDarkMode ? "bg-gray-900 text-gray-300" : "text-[#444B55]"
        }`}
      >
        <div className="w-screen lg:mt-12 xl:mt-12 mb-10 p-7 md:p-0 lg:p-0 xl:p-0">
          <FeedbackForm addFeedback={addFeedback} setFeedbacks={setFeedbacks} />
          <FeedbackList
            feedbacks={feedbacks}
            likeFeedback={likeFeedback}
            deleteFeedback={deleteFeedback}
          />

          <div className="mb-5">
            <div
              className={`text-[48px] font-bold ${
                isDarkMode ? "text-gray-200" : ""
              }`}
            >
              {contact.title}
            </div>
            <p
              className={`text-[16px] leading-6 ${
                isDarkMode ? "text-gray-400" : ""
              }`}
            >
              {contact.desc1}
              <br />
              {contact.desc2}
            </p>
          </div>
          <div className="flex flex-col justify-between items-center w-full gap-4">
            <div className="w-full flex flex-col lg:flex-row xl:flex-row gap-4">
              <CardContact cardTitle={contact.subTitle}>
                <div className={`py-4 ${isDarkMode ? "text-gray-300" : ""}`}>
                  {contactLinks.map((contactLink, index) => (
                    <div key={index} className="mb-4">
                      <h2
                        className={`text-lg font-bold ${
                          isDarkMode ? "text-gray-200" : ""
                        }`}
                      >
                        {contactLink.name}
                      </h2>
                      <span className="flex items-center">
                        <p className={`pr-2 ${iconColor}`}>
                          {contactLink.type === "email" ? (
                            <MailsIcon className="w-6 h-6" />
                          ) : (
                            <Phone className="w-6 h-6" />
                          )}
                        </p>
                        {contactLink.detail}
                      </span>
                    </div>
                  ))}
                  <p
                    className={`text-lg font-bold mt-2 ${
                      isDarkMode ? "text-gray-200" : ""
                    }`}
                  >
                    Senin - Jumat | 08:00 - 17:00 WIB
                  </p>
                </div>
              </CardContact>
              <CardContact cardTitle={contact.subTitle2}>
                <h6
                  className={`text-[16px] font-medium ${
                    isDarkMode ? "text-gray-300" : ""
                  }`}
                >
                  PaDi UMKM Headquarters
                </h6>
                <h6
                  className={`text-[16px] font-medium ${
                    isDarkMode ? "text-gray-300" : ""
                  }`}
                >
                  Gedung Telkom Direktorat Business and Technology
                </h6>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : ""}`}>
                  Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta,
                  12810 Indonesia
                </p>
                <div className="mt-5">
                  <h3
                    className={`text-[22px] font-bold ${
                      isDarkMode ? "text-gray-200" : ""
                    }`}
                  >
                    Ikuti Media Sosial Kami
                  </h3>
                  <div className="flex items-center space-x-2 mt-4 justify-center xl:justify-start">
                    {socialLinks.map((socialLink, index) => (
                      <div className="cursor-pointer" key={index}>
                        <a
                          className="w-full h-full"
                          href={socialLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {socialLink.name === "Instagram" && (
                            <Instagram className={`w-8 h-8 ${iconColor}`} />
                          )}
                          {socialLink.name === "Facebook" && (
                            <Facebook className={`w-8 h-8 ${iconColor}`} />
                          )}
                          {socialLink.name === "Twitter" && (
                            <Twitter className={`w-8 h-8 ${iconColor}`} />
                          )}
                          {socialLink.name === "Youtube" && (
                            <Youtube className={`w-8 h-8 ${iconColor}`} />
                          )}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContact>
            </div>
          </div>
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.042131415892!2d107.58926129229269!3d-6.873423436961501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e767e572539b%3A0xd9f0847b9cbb3fb8!2sTelkom%20Direktorat%20Digital%20Business!5e1!3m2!1sid!2sid!4v1724899614208!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={`shadow rounded-lg w-full ${
                isDarkMode ? "bg-gray-800" : ""
              }`}
              title="Telkom Direktorat Digital Business"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
