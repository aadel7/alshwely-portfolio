import React, { useState } from 'react';
import Papa from 'papaparse';
import { useTable } from 'react-table';
import 'my-app\src\components\Spreadsheet.js';

function SpreadsheetApp() {
  const [data, setData] = useState([]);
  const [totals, setTotals] = useState({});

  function handleFileUpload(event) {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: result => {
        setData(result.data);
      },
    });
  }

  function calculateTotals(data) {
    const months = {};
    data.forEach(row => {
      const date = new Date(row.date);
      const month = `${date.getMonth() + 1}/${date.getFullYear()}`;
      if (!months[month]) {
        months[month] = 0;
      }
      months[month] += Number(row.amount);
    });
    setTotals(months);
  }

  const columns = [
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'Amount',
      accessor: 'amount',
    },
  ];

  const tableInstance = useTable({
    columns,
    data,
  });

  return (
    <div className="SpreadsheetApp">
      <h1>Spreadsheet App</h1>
      <div className="UploadSection">
        <h2>Upload Spreadsheet</h2>
        <input type="file" onChange={handleFileUpload} />
        <button onClick={() => calculateTotals(data)}>Calculate Totals</button>
      </div>
      <div className="TableSection">
        <h2>Spreadsheet Data</h2>
        <table {...tableInstance.getTableProps()}>
          <thead>
            {tableInstance.headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...tableInstance.getTableBodyProps()}>
            {tableInstance.rows.map(row => {
              tableInstance.prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="TotalsSection">
        <h2>Totals</h2>
        <ul>
          {Object.entries(totals).map(([month, total]) => (
            <li key={month}>
              <span>{month}</span>
              <span>${total.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Spreadsheet;