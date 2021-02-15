import React, { ReactElement } from "react";
import PickerMenuTitle from "./PickerMenuTitle";
import PickerMenuLink, { Props as PickerMenuLinkProps } from "./PickerMenuLink";
import PickerMenuDivider from "./PickerMenuDivider";

export type Menu = {
  title?: string;
  links?: PickerMenuLinkProps[];
};

type Props = {
  menu: Menu[];
};

const PickerMenu = ({ menu = [] }: Props): ReactElement => {
  return (
    <div className="picker-menu">
      {menu.map((item, index) => (
        <>
          {item?.title && <PickerMenuTitle>{item.title}</PickerMenuTitle>}
          {item?.links?.map((button, i) => (
            <PickerMenuLink key={button.title + i} {...button} />
          ))}
          {index !== menu.length - 1 && <PickerMenuDivider />}
        </>
      ))}
      <style jsx>{`
        .picker-menu {
          width: auto;
          min-width: 240px;
          display: inline-flex;
          flex-direction: column;
          border-radius: var(--radius);
        }
      `}</style>
    </div>
  );
};

export default PickerMenu;
