import { BsFillTrash3Fill, BsPen } from "react-icons/bs";

const TableBody = ({ editData, deleteData, getTableBodyProps, rows, prepareRow }) => {
    return (
        <tbody {...getTableBodyProps()}>
            {rows.map((row, idx) => {
            prepareRow(row);
            return (
                <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                    <td><span className="EditFunction" onClick={() => editData(idx)}><BsPen /></span><span className="DeleteFunction" onClick={() => deleteData(idx)}><BsFillTrash3Fill /></span></td>
                </tr>
            );
            })}
        </tbody>
    );
}

export default TableBody;