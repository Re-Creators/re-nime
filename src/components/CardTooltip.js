import { BsEmojiSmile } from "react-icons/bs";

function CardTooltip() {
  return (
    <div className="bg-primary text-white p-5 w-tooltip rounded-md relative">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Ep 10 airing in 10 days</span>
        <div className="flex items-center">
          <BsEmojiSmile className="w-5 h-5 mr-3" />
          87%
        </div>
      </div>
      <div className="mt-4 text-sm leading-5">
        <div className="font-bold">Wit Studio</div>
        <div className="font-semibold">
          <span>TV Show</span>
        </div>
      </div>
      <div className="mt-5 flex gap-2 text-xs">
        <div className="py-1 px-2 bg-red-400 rounded-md">Adventure</div>
        <div className="py-1 px-2 bg-red-400 rounded-md">Acttion</div>
        <div className="py-1 px-2 bg-red-400 rounded-md">Slice of Life</div>
      </div>
      <div id="arrow" className="-left-1 top-2 bg-primary"></div>
    </div>
  );
}

export default CardTooltip;
