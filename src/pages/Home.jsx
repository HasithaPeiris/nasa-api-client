import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="flex justify-center items-start mt-12 mb-24">
        <div className="max-w-screen-lg px-5">
          <h1 className="text-3xl font-bold text-center mb-12">Space Apps</h1>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/3">
              <div className="bg-primary-dark bg-opacity-75 rounded-lg border-2 border-secondary p-4">
                <img
                  src="pikaso.jpeg"
                  alt="Image"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">APOD</h2>
                <p className="text-text-white mb-4">
                  You can see the Astronomy Picture of the Day.
                </p>
                <Link to="/apod">
                  <button className="bg-primary hover:bg-button-hover text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-secondary">
                    Go to App
                  </button>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="bg-primary-dark bg-opacity-75 rounded-lg border-2 border-secondary p-4">
                <img
                  src="wildfire.jpg"
                  alt="Image"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">Wild Fires</h2>
                <p className="text-text-white mb-4">
                  You can see wild fires on Earth from the NASA satellites.
                </p>
                <Link to="/map">
                  <button className="bg-primary hover:bg-button-hover text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-secondary">
                    Go to App
                  </button>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="bg-primary-dark bg-opacity-75 rounded-lg border-2 border-secondary p-4">
                <img
                  src="mars.jpg"
                  alt="Image"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">
                  Mars Rover Images
                </h2>
                <p className="text-text-white mb-4">
                  Image data gathered by NASA's Curiosity, Opportunity, and
                  Spirit rovers on Mars.
                </p>
                <Link to="/map">
                  <button className="bg-primary hover:bg-button-hover text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-secondary">
                    Go to App
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
