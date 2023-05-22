interface SeasonsProps {
  setSeason: (season: string) => void;
}

export const Seasons = ({ setSeason }: SeasonsProps) => {
  const seasons = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
  ];

  return (
    <div className="overflow-hidden overflow-x-auto">
      <ul className="flex text-sm font-medium text-center text-gray-500 dark:text-gray-400 flex-nowrap">
        {seasons.map((season, index) => (
          <li key={index} className="mr-2">
            <button
              className="inline-block px-4 py-3 text-zinc-900 bg-gray-100 rounded-lg active"
              aria-current="page"
              onClick={() => setSeason(season)}
            >
              {season}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
