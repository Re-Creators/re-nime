import Tippy from "@tippyjs/react/headless";
import CardTooltip from "./CardTooltip";

function LandingSection({ title }) {
  return (
    <div>
      <a
        href="#"
        className="uppercase text-lg tracking-widest hover:text-active"
      >
        Trending Now
      </a>
      <div className="grid grid-cols-results mt-5 gap-8">
        <Tippy
          render={(attrs) => <CardTooltip {...attrs} />}
          placement="right-start"
        >
          <div className="group relative">
            <div className="mb-3 w-full h-card-result">
              <img
                src="/images/komi.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <a href="#" className="mt-2 group-hover:text-active">
              Komi-san wa, Komyushou desu.
            </a>
          </div>
        </Tippy>
        <Tippy
          render={(attrs) => <CardTooltip {...attrs} />}
          placement="right-start"
        >
          <div className="group relative">
            <div className="mb-3 w-full h-card-result">
              <img
                src="/images/komi.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <a href="#" className="mt-2 group-hover:text-active">
              Komi-san wa, Komyushou desu.
            </a>
          </div>
        </Tippy>
      </div>
    </div>
  );
}

export default LandingSection;
