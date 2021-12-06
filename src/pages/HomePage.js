import { BsEmojiSmile } from "react-icons/bs";
import { Link } from "react-router-dom";
import LandingSection from "../components/LandingSection";

function HomePage() {
  return (
    <div className="flex flex-col gap-10 mb-96">
      <LandingSection title="Trending" />
      <LandingSection title="Popular This Season" />
      <LandingSection title="Upcoming next season" />
      <div>
        <div className="flex justify-between">
          <Link to="/" className="font-semibold">
            TOP 100 ANIME
          </Link>
          <Link to="/" className="text-xs">
            View All
          </Link>
        </div>
        <div className="mt-3">
          <div className="flex items-center h-24 mt-5">
            <div className="flex items-center justify-center p-4 h-14 mr-4 w-14 text-2xl text-active font-extrabold ">
              <span className="pt-1 text-xl">#</span>1
            </div>
            <div className="bg-primary w-full h-full p-2 flex items-center">
              <Link to="/" className="flex w-1/2 h-full">
                <img
                  src="/images/takop.jpg"
                  alt=""
                  className="h-full object-contain"
                />
                <div className="ml-3">
                  <h2>Takt Op : Destiny</h2>
                  <div className="flex mt-3 gap-2">
                    <div className="py-1 px-3 rounded-md bg-red-500 text-xs">
                      Adventure
                    </div>
                    <div className="py-1 px-3 rounded-md bg-red-500 text-xs">
                      Action
                    </div>
                  </div>
                </div>
              </Link>
              <div className="flex gap-14 items-center">
                <div className="flex items-center gap-2">
                  <BsEmojiSmile className="w-5 h-5 mb-2" />
                  <div className="">
                    90%
                    <div className="text-xs font-semibold">368200 users</div>
                  </div>
                </div>
                <div className="text-sm">
                  <div>Tv Show</div>
                  <div className="text-xs font-semibold">64 Episodes</div>
                </div>
                <div className="text-sm">
                  <div>Fall 2017</div>
                  <div className="text-xs font-semibold">Finished</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
