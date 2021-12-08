import Tippy from "@tippyjs/react/headless";
import { useSpring, animated } from "react-spring";
import { BsEmojiSmile } from "react-icons/bs";

function CustomTippy({ children, genres, score, date }) {
  const config = { tension: 300, friction: 15 };
  const initialStyles = { opacity: 0, transform: "scale(0.5)" };
  const [props, setSpring] = useSpring(() => initialStyles);
  function onMount() {
    setSpring({
      opacity: 1,
      transform: "scale(1)",
      onRest: () => {},
      config,
    });
  }

  function onHide({ unmount }) {
    setSpring({
      ...initialStyles,
      onRest: unmount,
      config: { ...config, clamp: true },
    });
  }
  return (
    <Tippy
      render={(attrs) => (
        <animated.div
          className="bg-primary text-white p-5 min-w-tooltip rounded-md relative"
          {...attrs}
          style={{ ...props }}
          id="tooltip"
        >
          <div className="flex items-center justify-between">
            <span className="font-semibold">{date}</span>
            {score && (
              <div className="ml-5 flex items-center">
                <BsEmojiSmile className="w-5 h-5 mr-3" />
                {score}%
              </div>
            )}
          </div>
          <div className="mt-4 text-sm leading-5">
            <div className="font-bold">Wit Studio</div>
            <div className="font-semibold">
              <span>TV Show</span>
            </div>
          </div>
          <div className="mt-5 flex gap-2 text-xs">
            {genres?.map((genre, index) => (
              <div className="py-1 px-2 bg-red-400 rounded-md" key={index}>
                {genre}
              </div>
            ))}
          </div>
          <div id="arrow" data-popper-arrow></div>
        </animated.div>
      )}
      animation={true}
      onMount={onMount}
      onHide={onHide}
      placement="right-start"
      arrow={true}
      popperOptions={{
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              mainAxis: false, // true by default
            },
          },
        ],
      }}
    >
      {children}
    </Tippy>
  );
}

export default CustomTippy;
