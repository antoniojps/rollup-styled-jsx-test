import React, { useState, ReactElement } from 'react';
import { LinkActive, Clamp } from '../../atoms';
import { Popover, Spacer } from '@geist-ui/react';
import { ChevronDown } from '@geist-ui/react-icons';

type Link = {
  label: string;
  to: string;
};

export type NavLinkProps = {
  label: string;
  to?: string;
  popover?: Link[];
};

type NavPopoverProps = {
  links: Link[];
};

const NavPopover = ({ links }: NavPopoverProps): ReactElement => {
  return (
    <div className="popover-content">
      {links.map((link, index) => (
        <>
          {index !== 0 && <Popover.Item line />}
          <Popover.Item key={link.label}>
            <LinkActive href={link.to}>
              <a>{link.label}</a>
            </LinkActive>
          </Popover.Item>
        </>
      ))}
      <style jsx>{`
        .popover-content {
          a {
            cursor: pointer;
            color: var(--accents-5);
            font-size: var(--size-xs);
            font-weight: var(--weight-semibold);
            transition: color 0.2s ease 0s;
          }

          a:hover {
            color: var(--base);
          }
        }
      `}</style>
    </div>
  );
};

const NavLink = ({ label, to, popover }: NavLinkProps): ReactElement | null => {
  const [isPopoverVisible, setPopoverVisible] = useState<boolean>(false);

  if (typeof to === 'string' && (!popover || popover?.length === 0))
    return (
      <LinkActive href={to} activeClassName="nav-link--active" className="nav-link">
        <a>
          <Clamp>{label}</Clamp>
          <style jsx>{`
            a {
              cursor: pointer;
              padding: var(--space-gap-half);
              color: var(--accents-5);
              font-size: var(--size-xs);
              font-weight: var(--weight-semibold);
              transition: color 0.2s ease 0s;
            }

            a:hover {
              color: var(--base);
              text-decoration: none;
            }
            .nav-link--active {
              color: var(--base);
            }
          `}</style>
        </a>
      </LinkActive>
    );

  if (popover && popover.length > 0) {
    return (
      <Popover
        content={<NavPopover links={popover} />}
        placement="bottomStart"
        enterDelay={0}
        leaveDelay={0}
        hideArrow={false}
        trigger="hover"
        offset={0}
        onVisibleChange={setPopoverVisible}
      >
        <span className="nav-popover">
          {label}
          <Spacer x={0.4} />
          <ChevronDown size={14} color={isPopoverVisible ? 'var(--base)' : 'var(--accents-5)'} />
        </span>
        <style jsx>{`
          .nav-popover {
            width: max-content;
            cursor: pointer;
            padding: var(--space-gap-half);
            color: ${isPopoverVisible ? 'var(--base)' : 'var(--accents-5)'};
            font-size: var(--size-xs);
            font-weight: var(--weight-semibold);
            transition: color 0.2s ease 0s;
            display: flex;
            align-items: center;
          }

          .nav-popover:hover {
            color: var(--base);
            &svg {
              color: red;
            }
          }
        `}</style>
      </Popover>
    );
  }

  return null;
};

export default NavLink;
