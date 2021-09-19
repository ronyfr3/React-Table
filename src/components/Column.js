export const COLUMNS = [
  {
    Header: "User",
    Footer: "User",
    accessor: "user",
    Cell: (tableProps) => (
      <img src={tableProps.row.original.user} alt="" className="imageStyle" />
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
