import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import HomepageView from "../../components/organism/homepageView";
import { sortArray, filterResults, isFilterEmpty } from "../../utilities";

function Home() {
  const intialState = {
    filters: {
      human: false,
      alien: false,
      male: false,
      female: false,
      unknown: false,
      postApoOrigin: false,
      nuptia: false
    },
    sort: "asc",
    actualData: { results: [] },
    displayData: { results: [] }
  };
  const [actualData, setActualData] = useState(intialState.actualData);
  const [displayData, setDisplayData] = useState(intialState.displayData);
  const [filters, setFilters] = useState(intialState.filters);
  const [sort, setSort] = useState(intialState.sort);

  useEffect(() => {
    async function fetchData() {
      const url = "https://rickandmortyapi.com/api/character/";
      const result = await axios(url);
      setActualData(result.data);
      setDisplayData(result.data);
    }
    fetchData();
  }, []);

  const updateFilters = useCallback(
    event => {
      const {
        target: { name, checked }
      } = event;
      const field = name.split(":")[1];
      const updatedFilters = { ...filters, [field]: checked };
      setFilters(updatedFilters);
      const filteredResults = filterResults(actualData.results, updatedFilters);
      const resultsToDisplay =
        isFilterEmpty(updatedFilters) && filteredResults.length === 0
          ? actualData.results
          : filteredResults;
      setDisplayData({
        ...displayData,
        results: sortArray(resultsToDisplay, sort)
      });
    },
    [displayData, filters, actualData.results, sort]
  );

  const updateSearchResults = useCallback(
    value => {
      const { results } = displayData;
      const searchedResults = results.filter(({ name }) =>
        name.toUpperCase().includes(value.toUpperCase())
      );
      let cardsToDisplay = [];
      if (value.length > 0) {
        cardsToDisplay = searchedResults;
      } else if (isFilterEmpty(filters)) {
        cardsToDisplay = sortArray(actualData.results, sort);
      } else {
        const filteredResults = filterResults(actualData.results, filters);
        cardsToDisplay = sortArray(filteredResults, sort);
      }
      setDisplayData({ ...displayData, results: cardsToDisplay });
    },
    [displayData, filters, sort, actualData.results]
  );

  const updateSortResults = useCallback(
    value => {
      const { results } = displayData;
      const newResults = sortArray(results, value);
      setSort(value);
      setDisplayData({ ...displayData, results: newResults });
    },
    [displayData]
  );

  return (
    <HomepageView
      cardsData={displayData.results}
      filtersData={filters}
      onFilterChange={updateFilters}
      onSearchChange={updateSearchResults}
      onSortChange={updateSortResults}
      sortValue={sort}
    />
  );
}

export default Home;
