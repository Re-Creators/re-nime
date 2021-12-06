import { Link } from "react-router-dom";

function DetailOverview() {
  return (
    <div className="text-white">
      {/* Relations */}
      <div className="mb-3">
        <h1>Relations</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-primary grid grid-cols-detail-relation gap-3">
            <img src="/images/sumatsu.jpg" alt="" className="w-full bg-cover" />
            <div className="py-3 flex flex-col">
              <h3 className="font-semibold text-sm text-active">Source</h3>
              <Link to="/anime/8343/monogatari" className="hover:text-active">
                Monogatari Series: Final Season
              </Link>
              <div className="mt-auto text-xs text-gray-400">Light Novel</div>
            </div>
          </div>
          <div className="bg-primary grid grid-cols-detail-relation gap-3">
            <img src="/images/takop.jpg" alt="" className="w-full bg-cover" />
            <div className="py-3 flex flex-col">
              <h3 className="font-semibold text-sm text-active">Source</h3>
              <Link to="/anime/8343/monogatari" className="hover:text-active">
                Monogatari Series: Final Season
              </Link>
              <div className="mt-auto text-xs text-gray-400">Light Novel</div>
            </div>
          </div>
          <div className="bg-primary grid grid-cols-detail-relation gap-3">
            <img src="/images/takop.jpg" alt="" className="w-full bg-cover" />
            <div className="py-3 flex flex-col">
              <h3 className="font-semibold text-sm text-active">Source</h3>
              <Link to="/anime/8343/monogatari" className="hover:text-active">
                Monogatari Series: Final Season
              </Link>
              <div className="mt-auto text-xs text-gray-400">Light Novel</div>
            </div>
          </div>
        </div>
      </div>
      {/* Characters */}
      <div className="mb-3">
        <h1>Characters</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-primary flex h-detail-card">
            {/* Character */}
            <div className="w-1/2 flex gap-2">
              <img
                src="/images/takop.jpg"
                alt=""
                className="h-full bg-cover w-16"
              />
              <div className="h-full flex flex-col py-2">
                <Link
                  to="/anime/8343/monogatari"
                  className="hover:text-active text-xs"
                >
                  Araragi Koyomi
                </Link>
                <div className="mt-auto text-xs text-gray-400">Light Novel</div>
              </div>
            </div>
            {/* Voice Actor */}
            <div className="w-1/2 flex gap-2 flex-row-reverse">
              <img
                src="/images/takop.jpg"
                alt=""
                className="h-full bg-cover w-16"
              />
              <div className="h-full flex flex-col py-2">
                <Link
                  to="/anime/8343/monogatari"
                  className="hover:text-active text-xs"
                >
                  Araragi Koyomi
                </Link>
                <div className="mt-auto text-xs text-right text-gray-400">
                  Light Novel
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary flex h-detail-card">
            {/* Character */}
            <div className="w-1/2 flex gap-2">
              <img
                src="/images/takop.jpg"
                alt=""
                className="h-full bg-cover w-16"
              />
              <div className="h-full flex flex-col py-2">
                <Link
                  to="/anime/8343/monogatari"
                  className="hover:text-active text-xs"
                >
                  Araragi Koyomi
                </Link>
                <div className="mt-auto text-xs text-gray-400">Light Novel</div>
              </div>
            </div>
            {/* Voice Actor */}
            <div className="w-1/2 flex gap-2 flex-row-reverse">
              <img
                src="/images/takop.jpg"
                alt=""
                className="h-full bg-cover w-16"
              />
              <div className="h-full flex flex-col py-2">
                <Link
                  to="/anime/8343/monogatari"
                  className="hover:text-active text-xs"
                >
                  Araragi Koyomi
                </Link>
                <div className="mt-auto text-xs text-right text-gray-400">
                  Light Novel
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary flex h-detail-card">
            {/* Character */}
            <div className="w-1/2 flex gap-2">
              <img
                src="/images/takop.jpg"
                alt=""
                className="h-full bg-cover w-16"
              />
              <div className="h-full flex flex-col py-2">
                <Link
                  to="/anime/8343/monogatari"
                  className="hover:text-active text-xs"
                >
                  Araragi Koyomi
                </Link>
                <div className="mt-auto text-xs text-gray-400">Light Novel</div>
              </div>
            </div>
            {/* Voice Actor */}
            <div className="w-1/2 flex gap-2 flex-row-reverse">
              <img
                src="/images/takop.jpg"
                alt=""
                className="h-full bg-cover w-16"
              />
              <div className="h-full flex flex-col py-2">
                <Link
                  to="/anime/8343/monogatari"
                  className="hover:text-active text-xs"
                >
                  Araragi Koyomi
                </Link>
                <div className="mt-auto text-xs text-right text-gray-400">
                  Light Novel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailOverview;
