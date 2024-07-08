import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
// import { BsFillTrash3Fill, BsPen } from "react-icons/bs";

import "./Table.css";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ data, editData, deleteData }) => {
  const columns = useMemo(
      () => [
          { Header: "ID", accessor: "id",
              Cell: (props) => {
                  return <span>{props.value}</span>;
              }
          },
          { Header: "Type", accessor: "type",
              Cell: (props) => {
                  return <span>{props.value}</span>;
              }
          },
          { Header: "Prompt", accessor: "prompt",
              Cell: (props) => {
                  return <span>{props.value}</span>;
              }
          },
          { Header: "Stage", accessor: "stage",
              Cell: (props) => {
                  return <span>{props.value}</span>;
              }
          },
          { Header: "Enabled", accessor: "enabled",
              Cell: (props) => {
                  return <input className="form-check-input" readOnly type="checkbox" value={props.value} checked={props.value} />
              }
          }
      ],
      []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data }, useSortBy);

  return (
    <div className="table-container">
      {data.length > 0 &&
      <table {...getTableProps()}>
        <TableHead headerGroups={headerGroups} />
        <TableBody editData={editData} deleteData={deleteData} getTableBodyProps={getTableBodyProps} rows={rows} prepareRow={prepareRow} />
      </table>
      }
    </div>
  );
}

export default Table;