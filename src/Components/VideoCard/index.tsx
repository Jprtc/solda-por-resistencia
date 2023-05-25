interface VideoCardProps {
  videoSrc: string;
}

const VideoCard = ({ videoSrc }: VideoCardProps) => {
  return (
    <section className="max-w-6xl mx-auto max-h-100vh animate-fade-in-normal sm:max-h-592px">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-max dark:bg-gray-800 dark:border-gray-700">
        <iframe
          className="rounded-t-lg"
          width="100%"
          height="420"
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="p-5">
          <a href="#">
            <h4 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              Vantagens da solda a resistência:
            </h4>
          </a>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            facilisis enim nibh, a imperdiet est malesuada eu. Ut sodales ornare
            faucibus. Duis eget dui bibendum, lobortis sapien ut, venenatis
            massa. Etiam non augue sed lectus pellentesque tempus. Curabitur ut
            tortor ex. Proin consectetur imperdiet volutpat. Nam eu elit at
            metus efficitur dignissim. Cras commodo mauris tristique magna
            elementum fermentum. Maecenas nisl odio, bibendum quis ligula
            maximus, sagittis tristique lectus. Nullam risus odio, viverra a
            rutrum ac, accumsan vitae neque. Morbi viverra nunc urna, vitae
            ultricies augue mollis et. Nam euismod tellus vitae ante cursus, at
            dictum tellus aliquet.
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

export default VideoCard;
