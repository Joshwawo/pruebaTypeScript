import {Link} from 'react-router-dom';
const Error404 = () => {
  return (
    <div>
      <div className="h-screen w-screen bg-gray-100 dark:bg-[#0f1109] flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 dark:text-gray-300/70">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.{" "}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <Link to={'/'}>
              <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-gray-600/60 active:bg-gray-600 hover:bg-gray-700">
                back to homepage
              </button>
            </Link>
          </div>
          <div className="max-w-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
