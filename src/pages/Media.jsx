import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/card/CardMedia";
import { useDarkMode } from "../contexts/DarkModeContext";
import axios from "axios";

const Media = () => {
  const [articles, setArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        setArticles(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const loadMore = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 6);
  };

  return (
    <Layout>
      <div className="flex md:container md:mx-auto justify-between lg:px-40 ">
        <div
          className={`m-0 p-4 xl:p-0 xl:pr-8 w-full mb-10 ${isDarkMode ? "text-gray-300" : "text-gray-900"}`}
        >
          <div className="py-4">
            <div className="flex-grow flex-col px-5 md:py-20 py-6 space-y-8">
              <section className="flex flex-col mb-4">
                <section className="w-fit">
                  <div
                    className={`text-center flex justify-center rounded-full border border-b-4 w-[80px] mb-2 mx-auto ${isDarkMode ? "border-[#4DB3C5]" : "border-[#4DB3C5]"}`}
                  />
                  <h2
                    className={`w-fit text-3xl font-bold ${isDarkMode ? "text-gray-100" : "text-[#0E0F11]"}`}
                  >
                    Rekomendasi
                  </h2>
                </section>
                <p
                  className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-900"}`}
                >
                  Rekomendasi produk sesuai kebutuhan pembeli
                </p>
              </section>
              <section className="md:grid md:grid-cols-3 sm:flex sm:flex-row w-full h-full justify-self-stretch">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  articles
                    .slice(0, visibleArticles)
                    .map((article, index) => (
                      <Card
                        key={index}
                        cardId={article.id}
                        cardTitle={article.title}
                        cardImg={`https://picsum.photos/id/${index}/360/300`}
                        cardDescription={article.body}
                      />
                    ))
                )}
              </section>
              <button
                onClick={loadMore}
                disabled={visibleArticles >= articles.length}
                className="mt-6 bg-[#009EA9] text-white px-4 py-2 rounded disabled:opacity-50 w-full hover:bg-[#50bcc4]"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Media;
