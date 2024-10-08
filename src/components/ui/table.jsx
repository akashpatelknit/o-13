const Table = ({ columns = [], dataSource = [] }) => {
  return (
    <div className="relative overflow-x-auto bg-cardbg rounded-bl-3xl rounded-br-3xl">
      <table className="w-full text-sm text-center rtl:text-center dark:text-gray-400">
        {/* Table Header */}
        <thead className="text-[#5E5E5E] bg-card-bg border-b">
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col" className="px-6 py-3">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {dataSource.map((record, rowIndex) => (
            <tr key={rowIndex} className="bg-cardbg border-b text-center">
              {columns.map((col) => (
                <td key={col.key} className="px-6 py-4">
                  {col.render
                    ? col.render(record[col.dataIndex], record)
                    : record[col.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
