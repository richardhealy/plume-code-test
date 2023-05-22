import { useRanking } from '@/hooks/api/getRanking';
import { SortableIcon } from '@/ui/atoms/SortableIcon';
import { Spinner } from '@/ui/atoms/Spinner';
import { Seasons } from '@/ui/molecules/Seasons';
import { Header } from '@/ui/organisms/Header';
import { useState } from 'react';

export const MainPage = () => {
  const [isTeams, setIsTeams] = useState<boolean>(false);
  const [season, setSeason] = useState<string>('2012');

  const { rankings, isLoading } = useRanking(isTeams, season);

  const { response: results } = rankings ?? {};

  const toggleTeams = () => {
    setIsTeams(!isTeams);
  };

  const handleSort = (sortBy: string) => {
    console.log(`implement ${sortBy}`);
  };

  return (
    <>
      <Header />
      <main className="p-16 bg-[#EFEFEF] grow w-full">
        <h2 className="my-4 text-lg font-semibold">Seasons</h2>

        <Seasons setSeason={setSeason} />

        <div className="flex justify-end mt-5">
          <span className="mr-2">Team</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={toggleTeams}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="relative overflow-x-auto mt-5">
          {!isLoading && (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Position
                      <button
                        className="trasparent"
                        onClick={() => handleSort('position')}
                      >
                        <SortableIcon />
                      </button>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Name
                      <button
                        className="trasparent"
                        onClick={() => handleSort('name')}
                      >
                        <SortableIcon />
                      </button>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Logo
                      <button
                        className="trasparent"
                        onClick={() => handleSort('logo')}
                      >
                        <SortableIcon />
                      </button>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Points
                      <button
                        className="trasparent"
                        onClick={() => handleSort('points')}
                      >
                        <SortableIcon />
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {results?.map((result, index) => (
                  <tr
                    /** This should be something other the index, like a unique id */
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {result.position}
                    </th>
                    <td className="px-6 py-4">
                      {isTeams ? result.team?.name : result.driver?.name}
                    </td>
                    <td className="px-6 py-4">
                      {result.team.logo ? (
                        <img
                          className="h-10 "
                          src={result.team.logo}
                          alt={`${result.team.name} logo`}
                        />
                      ) : (
                        '-'
                      )}
                    </td>
                    <td className="px-6 py-4">{result.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {isLoading && (
            <div className="flex justify-center items-center w-full h-full">
              <Spinner />
            </div>
          )}
        </div>
      </main>
    </>
  );
};
