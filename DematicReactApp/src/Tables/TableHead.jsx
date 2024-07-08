const TableHead = ({ headerGroups }) => {

    return (
        <thead>
            {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}</th>
                ))}
                <th className="Actions">Actions</th>
            </tr>
            ))}
        </thead>
    );
}

export default TableHead;