/* eslint-disable react/jsx-key */
import React, { ReactElement } from 'react';
import { useTable, Column } from 'react-table';

type TableProps<T extends object> = {
  data: T[];
  columns: Column<T>[];
  type?: 'default' | 'secondary';
};

const Table = <T extends object>({
  data,
  columns,
  type = 'default',
}: TableProps<T>): ReactElement => {
  const dataMemoized = React.useMemo(() => data, [data]);
  const columnsMemoized = React.useMemo(() => columns, [columns]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<T>({
    columns: columnsMemoized,
    data: dataMemoized,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <th {...column.getHeaderProps()} style={{ width: column?.headerWidth || 'auto' }}>
                  {column.render('Header')}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <style jsx>{`
        table {
          border-collapse: seperate;
          border-spacing: 0px;
          width: 100%;
        }

        th {
          font-weight: var(--weight-semibold);
          font-size: var(--size-xs2);
          text-transform: uppercase;
          color: var(--accents-4);
          text-align: left;
          padding-right: var(--space-large);
          &:last-of-type {
            padding-right: 0;
          }
        }

        thead {
          ${type === 'secondary'
            ? `
            padding: var(--space-gap-half);
            background-color: var(--background-light);
          `
            : ''}

          th {
            ${type === 'secondary'
              ? `
              padding: var(--space-gap-half);
              background-color: var(--background-light);
              border-bottom: 1px solid rgb(234, 234, 234);
              border-top: 1px solid rgb(234, 234, 234);
            `
              : ''}

            &:nth-child(1) {
              ${type === 'secondary'
                ? `
                border-bottom: 1px solid rgb(234, 234, 234);
                border-left: 1px solid rgb(234, 234, 234);
                border-top: 1px solid rgb(234, 234, 234);
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
              `
                : ``}
            }
            &:last-child {
              ${type === 'secondary'
                ? `
                border-bottom: 1px solid rgb(234, 234, 234);
                border-right: 1px solid rgb(234, 234, 234);
                border-top: 1px solid rgb(234, 234, 234);
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
              `
                : ``}
            }
          }
        }

        tr {
          font-size: var(--size-xs);
          td {
            border-bottom: 1px solid var(--border);
          }
          &:last-of-type {
            td {
              border-bottom: none;
            }
          }
        }

        td {
          padding: var(--space-3x) 0;
          padding-right: var(--space-6x);
          font-weight: var(--weight-normal);
          ${type === 'secondary'
            ? `
            padding: var(--space-gap-half);
          `
            : ``}
        }

        tbody tr td:first-of-type {
          padding-left: var(--space-gap-half);
        }
      `}</style>
    </table>
  );
};

export default Table;
