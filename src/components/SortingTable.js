import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import DATA from "./data.json";
import { COLUMNS, GROUPED_COLUMN } from "./Column";
import FlexStyle from "rakib-flex-style";

const SortingTable = () => {
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
    useSortBy
  );
  //Destructuring properties and methods from tableInstance
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = tableInstance;
  return (
    <FlexStyle column center className="table_wrapper">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((x) => (
            <tr {...x.getHeaderGroupProps()}>
              {x.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <span className="downarrow">&or;</span>
                      ) : (
                        <span className="uparrow">&and;</span>
                      )
                    ) : (
                      ""
                    )}
                  </span>
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
  );
};

export default SortingTable;
