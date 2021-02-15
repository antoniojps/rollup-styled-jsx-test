import React, { ReactElement, useMemo } from 'react';
import { CountryValueType } from '../../atoms/Select';
import { Clamp, SelectCountry } from '../../atoms';
import { Table } from '../../molecules';
import { Spacer, Fieldset, Text, Button } from '@geist-ui/react';
import { ExternalLink, ArrowRight } from '@geist-ui/react-icons';
import { Column } from 'react-table';

type RankData = {
  keyword: string;
  page: number;
  position: number;
};

type Props = {
  title: string;
  thumbnail: string;
  videoId: string;
  countries: CountryValueType[];
  initialCountry?: CountryValueType;
  data: RankData[];
};

const columns: Column<RankData>[] = [
  {
    headerWidth: '100%',
    accessor: 'keyword',
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

const VideoRankResults = ({
  title,
  thumbnail,
  videoId,
  countries = [],
  initialCountry,
  data = [],
}: Props): ReactElement => {
  const [value, setValue] = React.useState<CountryValueType>(
    initialCountry || countries.length > 0 ? countries[0] : undefined
  );

  const countriesOptions = useMemo<{ [key: string]: string }>(() => {
    return countries.reduce(
      (opts, country) => ({
        ...opts,
        [country.value]: country.label,
      }),
      {}
    );
  }, [countries]);

  return (
    <div className="video-rank">
      <div className="video-rank__header">
        <div className="video-rank__thumbnail" />
        <div className="video-rank__info">
          <div className="video-rank__info-start">
            <h3 className="video-rank__title" title={title}>
              <Clamp>{title}</Clamp>
            </h3>
            <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer">
              View video
              <Spacer x={0.3} />
              <ExternalLink size={14} />
            </a>
          </div>
          <div className="video-rank__info-end">
            <SelectCountry
              countriesOptions={countriesOptions}
              value={value}
              onChange={setValue}
              disabled={countries.length < 2}
              size="xs2"
            />
          </div>
        </div>
      </div>
      <div className="video-rank__table">
        <Table data={data} columns={columns} />
      </div>
      <Fieldset.Footer>
        <Fieldset.Footer.Status>
          <a>
            <Text span>Lorem ipsum dollar</Text>
          </a>
        </Fieldset.Footer.Status>
        <Fieldset.Footer.Actions>
          <Button auto size="mini" type="error" iconRight={<ArrowRight />}>
            Track ranks
          </Button>
        </Fieldset.Footer.Actions>
      </Fieldset.Footer>
      <style jsx>{`
        .video-rank {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius);
          box-shadow: var(--shadow-smallest);
          max-width: var(--page-width-with-margin);

          &__header {
            display: flex;
            flex-grow: 1;
            padding: var(--space-3x) var(--space-4x);
            padding-bottom: 0;
          }

          &__table {
            padding-right: var(--space-4x);
            padding-left: var(--space-4x);
          }

          &__thumbnail {
            width: 107.23px;
            flex: none;
            height: 60px;
            background-color: var(--accents-2);
            border-radius: var(--radius-half);
            background-image: url(${thumbnail});
            background-size: cover;
            background-position: center;
            margin-right: var(--space-4x);
          }
          &__title {
            width: calc(100%-100px);
            flex: auto;
            color: var(--base);
            font-size: var(--size-base);
            font-weight: var(--weight-semibold);
            padding-right: var(--space-small);
            margin-bottom: var(--space) !important;
          }

          &__info {
            display: flex;
            justify-content: space-between;
            flex-grow: 1;

            a {
              display: inline-flex;
              align-items: center;
              font-size: var(--size-xs);
              font-weight: var(--weight-semibold);
            }
            &-end {
              margin-left: var(--space-4x);
            }
          }
        }

        :global(.video-rank__table th) {
          background-color: transparent !important;
          border: none !important;
          font-size: var(--size-xs2) !important;
        }

        :global(.video-rank__table th div) {
          min-height: auto !important;
        }

        :global(.video-rank__table th:first-of-type) {
          width: 75%;
        }

        :global(.video-rank__table td:first-of-type) {
          font-size: var(--size-xs);
          font-weight: var(--weight-semibold);
          color: var(--base);
        }

        :global(.video-rank__table tr:last-of-type td) {
          border: none;
        }

        :global(.video-rank__table tr) {
          pointer-events: none;
        }

        :global(.video-rank footer) {
          background-color: var(--background);
        }
      `}</style>
    </div>
  );
};

export default VideoRankResults;
