import CustomTippy from "../CustomTippy";
import { Link } from "react-router-dom";

function LandingSection({ title }) {
  return (
    <div>
      <div className="flex justify-between">
        <Link
          to="/"
          className="uppercase text-lg font-semibold hover:text-active"
        >
          {title}
        </Link>
        <Link to="/" className="text-xs hover:text-active">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-results mt-5 gap-8">
        <CustomTippy>
          <Link to="/anime/7290/komi-san" className="group relative">
            <div className="mb-3 w-full h-card-result">
              <img
                src="/images/komi.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 group-hover:text-active">
              Komi-san wa, Komyushou desu.
            </div>
          </Link>
        </CustomTippy>
      </div>
    </div>
  );
}

export default LandingSection;
