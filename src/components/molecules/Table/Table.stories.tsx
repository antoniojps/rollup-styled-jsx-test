import React from 'react';
import { Badge, Dot, Spacer } from '@geist-ui/react';
import { Column } from 'react-table';
import Table from './Table';

export default {
  title: 'molecules/Table',
};

const data = [
  {
    keyword: 'coronavirus',
    change: -10,
    page: 2,
    position: 1,
  },
  {
    keyword: 'coronavirus video',
    change: 1,
    page: 1,
    position: 10,
  },
];

const computeBadgeType = (value: number) => {
  if (value === 0) return 'default';
  return value > 0 ? 'success' : 'error';
};

const columns: Column<typeof data[0]>[] = [
  {
    Header: 'keyword',
    headerWidth: '100%',
    accessor: 'keyword',
    Cell: function Keyword({ value }) {
      return (
        <div className="keyword">
          <Dot />
          <Spacer x={0.1} />
          <span>{value}</span>
          <style jsx>{`
            .keyword {
              display: inline-flex;
              align-items: center;
              font-weight: var(--weight-semibold);
            }
          `}</style>
        </div>
      );
    },
  },
  {
    Header: 'change',
    accessor: 'change',
    Cell: function BadgeChange({ value }) {
      const type = computeBadgeType(value);
      return <Badge type={type}>{value}</Badge>;
    },
  },
  {
    Header: 'page',
    accessor: 'page',
  },
  {
    Header: 'position',
    accessor: 'position',
  },
];

export const Basic = () => <Table data={data} columns={columns} />;
export const HeaderSecondary = () => <Table data={data} columns={columns} type="secondary" />;
