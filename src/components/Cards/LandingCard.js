import { generateSlug } from "../../utils/index";
import { Link } from "react-router-dom";
import { forwardRef, useState } from "react";

const LandingCard = forwardRef(({ title, img, id, isRanked, rank }, ref) => {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div
      className="group cursor-pointer w-full grid grid-rows-min-content relative md:last:hidden"
      ref={ref}
    >
      {isRanked && rank && (
        <div
          className={`absolute z-20 -top-2 -left-2 w-[38px] h-[38px] bg-red-600 rounded-full  p-2 font-bold flex justify-center items-center text-sm`}
        >
          #{rank}
        </div>
      )}
      <Link
        to={`/anime/${id}/${generateSlug(title)}`}
        className="card-height w-full relative overflow-hidden"
      >
        <div
          className={`h-full w-full bg-sky-500 rounded-md ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <img
          src={img}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-cover object-center rounded-md ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoaded(false)}
        />
      </Link>
      <Link to={`/anime/${id}/${generateSlug(title)}`}>
        <div className="card-text mt-2 group-hover:text-active ">{title}</div>
      </Link>
    </div>
  );
});

export default LandingCard;
