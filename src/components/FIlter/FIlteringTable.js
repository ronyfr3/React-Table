import React, { useMemo } from "react";
import { useTable, useGlobalFilter } from "react-table";
import DATA from "../data.json";
import { COLUMNS, GROUPED_COLUMN } from "../Column";
import FlexStyle from "rakib-flex-style";
import SearchFilter from "./SearchFIlter";

const FilteringTable = () => {
  //useTable hooks need useMemo hook to memoize rows and columns
  //useMemo to prevent recreating same data on every render
  //TO ADD GROUPED COLUMN REPLACE COLUMNS TO GROUPED_COLUMN --> const columns = useMemo(() => GROUPED_COLUMN, []);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);

  //creating table instance
  const tableInstance = useTable(
    {
      //two properties: COLUMN || ROWS
      columns,
      data,
    },
    useGlobalFilter
  );
  //Destructuring properties and methods from tableInstance
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
    state, //table state
    setGlobalFilter, //that fn set global filter state value
  } = tableInstance;
  const { globalFilter } = state;
  return (
    <>
      <SearchFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <FlexStyle column center className="table_wrapper">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((x) => (
              <tr {...x.getHeaderGroupProps()}>
                {x.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((x) => {
              prepareRow(x);
              return (
                <tr {...x.getRowProps()}>
                  {x.cells.map((cell) => {
                    // console.log(cell?.column?.Header)
                    return (
                      <td
                        {...cell.getCellProps()}
                        data-label={cell?.column?.Header}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          {/* TABLE FOOTER */}
          <tfoot>
            {footerGroups.map((x) => (
              <tr {...x.getFooterGroupProps()}>
                {x.headers.map((column) => (
                  <td {...column.getFooterProps}>{column.render("Footer")}</td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </FlexStyle>
    </>
  );
};

export default FilteringTable;
