import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Rectangle,
} from "recharts";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { STATS_INFO } from "../../graphql/querySchema";

function DetailStats() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(STATS_INFO, {
    variables: {
      id: id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="text-white">
      {/* Rankings */}
      <div className="mb-5">
        <h1 className="mb-3">Rankings</h1>
        <div className="grid grid-cols-3 gap-4 text-sm">
          {data.Media.rankings.map((ranking) => (
            <div
              className="flex items-center px-2 py-3 bg-primary capitalize rounded-md text-center"
              key={ranking.id}
            >
              {ranking.type === "RATED" ? (
                <AiFillStar className="text-yellow-500 mr-3 w-4 h-4" />
              ) : (
                <AiFillHeart className="text-red-500 mr-3 w-4 h-4" />
              )}
              <span className="mx-auto">
                #{ranking.rank} {ranking.context}{" "}
                {ranking.season?.toLowerCase()} {ranking.year}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Airing Score Progression */}
      {data.Media.airingTrends.nodes.length > 0 && (
        <div className="mb-5">
          <h1 className="mb-3">Airing Score Progression</h1>
          <div className="h-[174px] p-3 bg-primary rounded-md">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data.Media.airingTrends.nodes.filter(
                  (trend) => trend.episode
                )}
                margin={{
                  top: 30,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="episode" stroke="#728aa1" reversed />
                <YAxis
                  stroke="#728aa1"
                  domain={["dataMin - 5", "dataMax + 5"]}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="averageScore"
                  stroke="#02a9ff"
                  fill="#3db4f2"
                  dot={{ strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Airing Watchers Progression */}
      {data.Media.airingTrends.nodes.length > 0 && (
        <div className="mb-3">
          <h1 className="mb-3">Airing Watchers Progression</h1>
          <div className="h-[174px] p-3 bg-primary rounded-md">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data.Media.airingTrends.nodes.filter(
                  (trend) => trend.episode
                )}
                margin={{
                  top: 30,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="episode" stroke="#728aa1" reversed />
                <YAxis
                  stroke="#728aa1"
                  domain={["dataMin - 5", "dataMax + 5"]}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="inProgress"
                  stroke="#02a9ff"
                  fill="#3db4f2"
                  dot={{ strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Score Distribution*/}
      <div className="mb-3">
        <h1 className="mb-3">Score Distribution</h1>
        <div className="h-[174px] p-3 bg-primary rounded-md">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data.Media.distribution.score}
              margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
              width={300}
              height={200}
            >
              <Bar
                dataKey="amount"
                fill="#8884d8"
                label={{ position: "top", fill: "#728aa1", fontSize: "14" }}
                shape={<Rectangle radius={25} />}
                barSize={15}
                minPointSize={20}
              >
                {data.Media.distribution.score.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`hsl(${index * 10 + 1}, 65%, 50%)`}
                  />
                ))}
              </Bar>
              <XAxis
                dataKey="score"
                tickLine={false}
                axisLine={false}
                stroke="#728aa1"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DetailStats;
