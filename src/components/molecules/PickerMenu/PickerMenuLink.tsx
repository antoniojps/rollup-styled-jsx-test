import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Avatar } from '@geist-ui/react';
import { Icon as IconType } from '@geist-ui/react-icons';

export type Props = {
  title: string;
  image?: string;
  Icon?: IconType;
  href?: string;
  hrefIcon?: string;
};

const PickerMenuLink = ({ title, image, href = '/', Icon, hrefIcon }: Props): ReactElement => {
  return (
    <div className="picker">
      <Link href={href}>
        <a className="picker__start">
          {image && (
            <span className="picker-avatar">
              <Avatar src={image} size="mini" />
            </span>
          )}
          {title}
        </a>
      </Link>
      {Icon && (
        <Link href={hrefIcon || href}>
          <a className="picker-icon">
            <Icon size={16} />
          </a>
        </Link>
      )}
      <style jsx>{`
        .picker {
          display: flex;
          align-items: center;
          justify-content: space-between;

          &__start {
            display: flex;
            padding-right: 10px;
            width: 100%;
          }

          &-avatar {
            margin-right: 10px;
          }
          &-icon {
            height: 16px;
            color: var(--accents-3);
          }

          &:hover {
            background-color: var(--background-light);
            cursor: pointer;
            color: var(--base);

            a {
              color: var(--base);
            }
          }
        }

        a {
          padding: var(--space-4x) var(--space-5x);
          outline: none;
          font-size: var(--size-xs);
          color: var(--accents-5);
          &:hover {
            text-decoration: none;
          }
        }
      `}</style>
    </div>
  );
};

export default PickerMenuLink;
