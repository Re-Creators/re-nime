import { Link } from "react-router-dom";
import { generateSlug } from "../../utils";

function CharacterCard({
  id,
  charImg,
  charName,
  charRole,
  vaImg,
  vaName,
  vaLang,
}) {
  return (
    <div className="bg-primary flex h-detail-card">
      {/* Character */}
      <div className="w-1/2 flex gap-2">
        <img
          src={charImg}
          alt=""
          className="h-full object-cover object-center w-16"
        />
        <div className="h-full flex flex-col py-2">
          <Link
            to={`/character/${id}/${generateSlug(charName)}`}
            className="hover:text-active text-xs"
          >
            {charName}
          </Link>
          <div className="mt-auto text-xs text-gray-400 capitalize">
            {charRole}
          </div>
        </div>
      </div>
      {/* Voice Actor */}
      <div className="w-1/2 flex gap-2 flex-row-reverse">
        <img
          src={vaImg}
          alt=""
          className="h-full object-cover object-center w-16"
        />
        <div className="h-full flex flex-col py-2">
          <Link
            to={"/anime/8343/monogatari"}
            className="hover:text-active text-xs"
          >
            {vaName}
          </Link>
          <div className="mt-auto text-xs text-right text-gray-400">
            {vaLang}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
