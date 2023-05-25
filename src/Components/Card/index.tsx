import React from "react";
import Image from "next/image";

interface CardProps {
  id: string;
  imgSrc: string;
  imgAlt?: string;
  title: string;
  description?: string;
  shouldLazyLoad: boolean;
}

const Card: React.FC<CardProps> = ({
  id,
  imgSrc,
  title,
  description,
  imgAlt,
  shouldLazyLoad,
}) => {
  return (
    <section className="max-w-7xl mx-auto" id={id}>
      <div className="bg-white shadow-lg border border-gray-300 rounded-lg max-w-7xl max-h-fit dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <div className="rounded-t-lg overflow-hidden">
            <Image
              className="rounded-t-lg object-cover object-center h-auto w-full max-h-96"
              src={imgSrc}
              alt={imgAlt ? imgAlt : ""}
              width={1278}
              height={384}
              loading={shouldLazyLoad ? "lazy" : "eager"}
              priority={!shouldLazyLoad}
            />
          </div>
        </a>
        <div className="p-5">
          <a href="#">
            <h2 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {title}
            </h2>
          </a>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
            {description}
          </p>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
