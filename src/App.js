import React from "react";
import ColumnFilter from "./components/FIlter/columnfilter/ColumnFilter";
import BasicTable from "./components/BasicTable";
import FilteringTable from "./components/FIlter/FIlteringTable";
import SortingTable from "./components/SortingTable";
import "./sass/main.scss";
import PaginationTable from "./components/PaginationTable.js/PaginationTable";

const App = () => {
  return (
    <div>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <ColumnFilter /> */}
      <PaginationTable />
    </div>
  );
};

export default App;
