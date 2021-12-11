import { Link } from "react-router-dom";

function RelationCardSmall() {
  return (
    <div className="w-small-card h-preview-card max-h-preview-card relative inline-grid group">
      <Link
        to="/"
        style={{ backgroundImage: `url('/images/komi.png')` }}
        className="bg-cover bg-center"
      >
        <div className="w-full absolute bottom-0 p-2 bg-overlay text-xs font-semibold text-center">
          Source
        </div>
      </Link>
      <div className="absolute w-preview-relation h-full bg-primary left-full hidden group-hover:block">
        <div className="p-3 flex flex-col capitalize h-full">
          <h3 className="font-semibold text-xs text-active">Source</h3>
          <Link
            to="/anime/8343/monogatari"
            className="hover:text-active text-sm"
          >
            otome
          </Link>
          <div className="mt-auto text-xs text-gray-400">manga · finis</div>
        </div>
      </div>
    </div>
  );
}

export default RelationCardSmall;
