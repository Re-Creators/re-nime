import { Link } from "react-router-dom";

function RelationCardSmall({ img, relationType, type, status, title }) {
  return (
    <div className="w-small-card h-preview-card max-h-preview-card relative inline-grid capitalize">
      <Link
        to="/"
        style={{ backgroundImage: `url('${img}')` }}
        className="bg-cover bg-center peer rounded-sm group"
      >
        <div className="w-full absolute bottom-0 p-2 bg-overlay text-xs font-semibold text-center group-hover:opacity-0 transition-opacity duration-300">
          {relationType}
        </div>
      </Link>
      <div className="absolute z-10 w-preview-relation h-full transition-all duration-300 bg-primary left-full opacity-0 hidden peer-hover:opacity-100 peer-hover:block ">
        <div className="p-3 flex flex-col capitalize h-full">
          <h3 className="font-semibold text-xs text-active">{relationType}</h3>
          <Link
            to="/anime/8343/monogatari"
            className="hover:text-active text-sm"
          >
            {title}
          </Link>
          <div className="mt-auto text-xs text-gray-400">
            {type} · {status}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelationCardSmall;
