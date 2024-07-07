import React, { useMemo } from "react";
import { useTable } from "react-table";

import "./Table.css";

const Table = ({ data, editData, deleteData }) => {
    const columns = useMemo(
        () => [
            { Header: "ID", accessor: "id",
                Cell: (props) => {
                    return <span>{props.value}</span>;
                },
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
                    return <input readOnly type="checkbox" checked={props.value} />
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
  } = useTable({ columns, data });

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
              <th className="Actions">Actions</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
                <td><span className="EditFunction" onClick={() => editData(idx)}>Edit</span><span className="DeleteFunction" onClick={() => deleteData(idx)}>Delete</span></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;