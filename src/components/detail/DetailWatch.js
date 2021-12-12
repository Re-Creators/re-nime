import { useContext } from "react";
import { DetailContext } from "../../context/detailContext";

function DetailWatch() {
  const { data } = useContext(DetailContext);
  return (
    <div className="grid gap-5 grid-cols-3 grid-rows-[repeat(auto-fill,_100px)]">
      {data.streamingEpisodes.map((streaming) => (
        <a
          href={streaming.url}
          target="_blank"
          className="overflow-hidden h-[100px] relative bg-cover bg-center"
          style={{
            backgroundImage: `url('${streaming.thumbnail}')`,
          }}
        >
          <div className="bg-overlay absolute bottom-0 inset-x-0 p-2 overflow-hidden text-white text-sm whitespace-nowrap text-ellipsis">
            {streaming.title}
          </div>
        </a>
      ))}
    </div>
  );
}

export default DetailWatch;
