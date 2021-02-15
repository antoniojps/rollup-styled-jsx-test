import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Button, Spacer } from '@geist-ui/react';
import { User as UserType } from '@ytrank/types';
import { Logo, DividerVertical } from '../../atoms';
import { NavLink, User, UserPickerMenu } from '../../molecules';
import { NavLinkProps } from '../../molecules/NavLink/NavLink';
import { UserPickerMenuProps } from '../../molecules/UserPickerMenu/UserPickerMenu';

export type NavProps = {
  start?: NavLinkProps[];
  end?: NavLinkProps[];
  picker?: UserPickerMenuProps;
  removeLogoText?: boolean;
  showContactButton?: boolean;
  showSignupButton?: boolean;
  user?: UserType;
};

export const Nav = ({
  start = [],
  end = [],
  user = {},
  picker,
  removeLogoText = false,
  showContactButton = true,
  showSignupButton = true,
}: NavProps): ReactElement => {
  return (
    <nav>
      <div className="start">
        <Link href="/">
          <a>
            <Logo removeText={removeLogoText} />
          </a>
        </Link>
        <span className="divider">
          <DividerVertical />
        </span>
        {picker && <UserPickerMenu {...picker} />}
        {picker && start.length > 0 && (
          <span className="divider">
            <DividerVertical />
          </span>
        )}
        {start.map((item) => (
          <NavLink {...item} key={item.label} />
        ))}
        {showContactButton && (
          <>
            <Spacer x={0.5} />
            <Button size="small" auto>
              Contact us
            </Button>
          </>
        )}
      </div>
      <div className="end">
        {end.map((item) => (
          <NavLink {...item} key={item.label} />
        ))}
        {showSignupButton && (
          <>
            <Spacer x={0.5} />
            <Button size="small" type="success" auto>
              Sign up
            </Button>
          </>
        )}
        {user?.name && (
          <span className="user">
            <Spacer x={0.5} />
            <User image={user?.image} name={user?.name} hasName={false} />
          </span>
        )}
      </div>
      <style jsx>{`
        nav {
          max-width: 1040px;
          display: flex;
          margin: auto;
          padding: 0 var(--gap);
          height: var(--header-height);
          user-select: none;
        }
        .start {
          display: flex;
          align-items: center;
          flex: 1;
          padding-right: var(--gap-half);
          &__actions {
            padding-left: var(--gap-quarter);
            button {
              font-weight: var(--weight-semibold);
            }
          }
        }
        .end {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
          & .user {
            display: inline-flex;
            align-items: center;
            transform: translateY(2px);
          }
        }
        .divider {
          display: flex;
          align-items: center;
          margin: 0 var(--space-gap-quarter);
        }
      `}</style>
    </nav>
  );
};

export default Nav;
