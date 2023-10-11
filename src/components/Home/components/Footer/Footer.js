const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gray-800">
      <div className="container flex flex-col items-center justify-between mx-auto lg:flex-row">
        <div className="mb-8 text-center lg:mb-0 lg:text-left lg:w-1/2">
          <h2 className="mb-4 text-xl font-bold">
            Needy College Students Ready to Help Older People!
          </h2>
          <p className="text-lg">
            Empowering students to assist the elderly with their tasks and
            errands.
          </p>
        </div>
        <div className="mb-8 text-center lg:mb-0 lg:text-left lg:w-1/2">
          <h2 className="mb-4 text-xl font-bold">
            Need assistance with a task?
          </h2>
          <p className="text-lg">
            Describe what you need done in a few sentences. Keep it simple and
            clear to attract the best Taskers.
          </p>
          <button className="px-6 py-3 mt-6 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700">
            Post Your Task
          </button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} We-Care. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
