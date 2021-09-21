import React, { useMemo } from "react";
import { usePagination, useTable } from "react-table";
import DATA from "../data.json";
import { COLUMNS, GROUPED_COLUMN } from "../Column";
import FlexStyle from "rakib-flex-style";

const PaginationTable = () => {
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
    usePagination
  );
  //Destructuring properties and methods from tableInstance
  //for pagination instead of rows use page
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    //next prev page fn
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    // page number
    state,
    pageOptions,
    //jump to first or last page
    gotoPage,
    pageCount,
    //items to be rendered in per page
    setPageSize,
  } = tableInstance;
  const { pageIndex, pageSize } = state;
  return (
    <FlexStyle column center className="table_wrapper">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((x) => (
            <tr {...x.getHeaderGroupProps()}>
              {x.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((x) => {
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
      </table>
      <div>
        {/* show data in per page */}
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[25, 50, 75, 100, 125, 150, 200].map((x) => (
            <option key={x} value={x}>
              show {x}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {">>"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        {/* <span>
          page <b>{pageIndex + 1}</b> of {pageOptions.length}
        </span> */}
        <span>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              gotoPage(e.target.value ? Number(e.target.value) - 1 : 0);
            }}
          />
          <b>
            {pageIndex + 1}/{pageOptions.length}
          </b>
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {"<<"}
        </button>
      </div>
    </FlexStyle>
  );
};

export default PaginationTable;
