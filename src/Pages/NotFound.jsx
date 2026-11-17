import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-4">

      <div className="text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 max-w-lg w-full shadow-2xl">

        <h1 className="text-8xl font-extrabold text-blue-400 mb-4">
          404
        </h1>

        <h2 className="text-3xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-300 mb-8 leading-relaxed">
          The page you are looking for doesn't exist or may have been moved.
          Let's take you back home!
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg hover:shadow-blue-500/40"
        >
          ← Back to Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;