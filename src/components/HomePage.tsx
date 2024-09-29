import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  
  const handleRedirect = () => {
    if (url) {
      navigate(url);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-[#043C6B]">
      <div
        className="flex flex-col md:flex-row items-center text-white rounded-lg
         mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-3"
      >
        <div className="mb-6 md:mb-0 md:mr-16">
          <img
            src={"/assets/logo.png"}
            alt="Logo"
            className="w-24 md:w-[20rem]"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4 flex items-center">
            <span>PROTECTED</span>
            <span className="ml-2">TEXT</span>
          </h1>

          <ul className="list-disc pl-4 text-lg mb-8 space-y-2">
            <li>The safest site on the web for storing your text!</li>
            <li>
              Enter any URL, e.g., protectedText.com/
              <span className="italic">anything</span>. You find it - it's
              yours!
            </li>
            <li>Encrypt all your notes, access anywhere.</li>
            <li>
              Simple. Fast. Free. No ads. Secure - check the code yourself.
            </li>
          </ul>

          <form className="flex items-center">
            <input
              type="text"
              placeholder="Enter URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="p-2 rounded-l-lg border-none text-black bg-white focus:outline-none w-72"
            />
            <button
              onClick={handleRedirect}
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
