import React, { useMemo } from "react";
import { useTable, useFilters } from "react-table";
import DATA from "../../data.json";
import { COLUMNS, GROUPED_COLUMN } from "../../Column";
import FlexStyle from "rakib-flex-style";

const ColumnFilter = () => {
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
    useFilters
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
    <div className="table_container">
      <FlexStyle column center className="table_wrapper">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((x) => (
              <tr {...x.getHeaderGroupProps()}>
                {x.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
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
    </div>
  );
};

export default ColumnFilter;
