import { format } from "date-fns";
//this is for columnfilter
import Search from "./FIlter/columnfilter/Search";

export const COLUMNS = [
  {
    Header: "User",
    Footer: "User",
    accessor: "user",
    Filter: Search, //this is for column filter
    disableFilters: true, //to disable filter input for this column
    Cell: (tableProps) => (
      <img src={tableProps.row.original.user} alt="" className="imageStyle" />
    ),
  },
  {
    Header: "Gender",
    Footer: "Gender",
    accessor: "gender",
    Filter: Search, //this is for column filter
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
    Filter: Search, //this is for column filter
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    Filter: Search, //this is for column filter
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter: Search, //this is for column filter
    //convert string to number
    Cell: ({ value }) => {
      return parseInt(value);
    },
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    Filter: Search, //this is for column filter
  },
  {
    Header: "City",
    Footer: "City",
    accessor: "city",
    Filter: Search, //this is for column filter
  },
  {
    Header: "Date",
    Footer: "Date",
    accessor: "date",
    Filter: Search, //this is for column filter
    // Cell property is our data view in table
    //format date string to date
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
];

//HEADER LABEL
export const GROUPED_COLUMN = [
  {
    Header: "FIRST LABEL",
    Footer: "FIRST LABEL",
    accessor: "FIRST LABEL",
    columns: [
      {
        Header: "User",
        Footer: "User",
        accessor: "user",
        Cell: (tableProps) => (
          <img
            src={tableProps.row.original.user}
            alt=""
            className="imageStyle"
          />
        ),
      },
      {
        Header: "Gender",
        Footer: "Gender",
        accessor: "gender",
      },
      {
        Header: "Age",
        Footer: "Age",
        accessor: "age",
      },
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
    ],
  },
  {
    Header: "SECOND LABEL",
    Footer: "SECOND LABEL",
    accessor: "SECOND LABEL",
    columns: [
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "City",
        Footer: "City",
        accessor: "city",
      },
      {
        Header: "Date",
        Footer: "Date",
        accessor: "date",
      },
    ],
  },
];
