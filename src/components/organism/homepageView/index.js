import React from "react";
import Grid from "@material-ui/core/Grid";
import CardsGrid from "../../molecules/cardsGrid";
import FilterPanel from "../../molecules/filterPanel";
import SearchedPills from "../../molecules/searchedPills";
import SearchPanel from "../../molecules/searchPanel";

function HomepageView(props) {
  const {
    cardsData,
    filtersData,
    onFilterChange,
    onSearchChange,
    onSortChange,
    sortValue
  } = props;
  return (
    <Grid container>
      <Grid item xs={12} sm={3} lg={2}>
        <FilterPanel
          filtersData={filtersData}
          onFilterChange={onFilterChange}
        />
      </Grid>
      <Grid item xs={12} sm={9} lg={10}>
        <SearchedPills
          filtersData={filtersData}
          onPillsDelete={onFilterChange}
        />
        <SearchPanel
          sortValue={sortValue}
          onSearchChange={onSearchChange}
          onSortChange={onSortChange}
        />
        <CardsGrid cards={cardsData} />
      </Grid>
    </Grid>
  );
}

export default HomepageView;
