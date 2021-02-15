import React, { ReactElement, useState } from 'react';
import User, { Props as UserProps } from '../User/User';
import { PickerDropdownButton } from '../../atoms';
import PickerMenu, { Menu as MenuProps } from '../PickerMenu/PickerMenu';
import { Popover } from '@geist-ui/react';

export type UserPickerMenuProps = {
  project: UserProps & { link?: string };
  menu: MenuProps[];
};

const UserPickerMenu = ({
  project = { name: '' },
  menu = [],
}: UserPickerMenuProps): ReactElement => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="user-picker-menu">
      <User {...project} />
      <span className="user-picker-menu__btn">
        <PickerDropdownButton onClick={() => setVisible(!isVisible)} />
      </span>
      <Popover
        content={<PickerMenu menu={menu} />}
        className="geist-popover"
        offset={24}
        visible={isVisible}
        onVisibleChange={setVisible}
        hideArrow
      >
        <span className="user-picker-menu__trigger" />
      </Popover>
      <style jsx>{`
        .user-picker-menu {
          display: flex;
          align-items: center;
          position: relative;

          &__btn {
            margin-left: var(--space-3x);
            transform: translateY(2px);
          }

          &__trigger {
            width: 100%;
            min-height: 1px;
            position: absolute;
            left: 0;
            top: 100%;
          }
        }

        :global(.tooltip-content.popover > .inner) {
          padding: 0;
          text-align: left;
        }
      `}</style>
    </div>
  );
};

export default UserPickerMenu;
