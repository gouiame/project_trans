
function NotFound() {
    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white h-screen flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
                    404
                </h1>
                <p className="text-xl mt-4 text-gray-300 mb-6">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <a
                    href="/"
                    className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
                    Return to Home
                </a>
            </div>
        </div>
    );

}

export default NotFound;
