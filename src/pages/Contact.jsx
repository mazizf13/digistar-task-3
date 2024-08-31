import React from "react";
import Layout from "../components/layout/Layout";
import { contact, contactLinks, socialLinks } from "../data/item";
import CardContact from "../components/card/CardContact";

const Contact = () => {
  return (
    <>
      <Layout>
        <div className="text-[#444B55] flex md:container md:mx-auto justify-between lg:px-40">
          <div className="w-screen lg:mt-12 xl:mt-12 mb-10 p-7 md:p-0 lg:p-0 xl:p-0">
            <div className="mb-5">
              <div className="text-[48px] font-bold ">{contact.title}</div>
              <p className="text-[16px] leading-6">
                {contact.desc1}
                <br />
                {contact.desc2}
              </p>
            </div>
            <div className="flex flex-col justify-between items-center w-full gap-4">
              <div className="w-full flex flex-col lg:flex-row xl:flex-row gap-4">
                <CardContact cardTitle={contact.subTitle}>
                  <div className="py-4">
                    {contactLinks.map((contactLink, index) => (
                      <div>
                        <h2 className="text-lg font-bold">
                          {contactLink.name}
                        </h2>
                        <span className="flex items-center">
                          <p className="pr-2">
                            <img
                              src={contactLink.img}
                              alt={contactLink.name}
                              className="w-6 h-6"
                            />
                          </p>
                          {contactLink.detail}
                        </span>
                      </div>
                    ))}
                    <p className="text-lg font-bold mt-2">
                      Senin - Jumat | 08:00 - 17:00 WIB
                    </p>
                  </div>
                </CardContact>
                <CardContact cardTitle={contact.subTitle2}>
                  <h6 className="text-[16px] font-medium">
                    PaDi UMKM Headquarters
                  </h6>
                  <h6 className="text-[16px] font-medium">
                    Gedung Telkom Direktorat Business and Technology
                  </h6>
                  <p className="text-sm">
                    Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI
                    Jakarta, 12810 Indonesia
                  </p>
                  <div className="mt-5">
                    <h3 className="text-[22px] font-bold">
                      Ikuti Media Sosial Kami
                    </h3>
                    <div className="flex items-center space-x-2 mt-4 justify-center xl:justify-start">
                      {socialLinks.map((socialLink, index) => (
                        <div className="cursor-pointer">
                          <a
                            key={index}
                            className="w-full h-full"
                            href={socialLink.url}
                            target="_blank"
                          >
                            <img
                              src={socialLink.img}
                              alt={socialLink.name}
                              className="w-8 h-8"
                            />
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.042131415892!2d107.58926129229269!3d-6.873423436961501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e767e572539b%3A0xd9d0847b9cbb3fb8!2sTelkom%20Direktorat%20Digital%20Business!5e1!3m2!1sid!2sid!4v1724899614208!5m2!1sid!2sid"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="shadow rounded-lg w-full"
                title="Telkom Direktorat Digital Business"
              ></iframe>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
