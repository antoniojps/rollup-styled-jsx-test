import React, { ReactElement } from "react";
import { Avatar } from "@geist-ui/react";

export type Props = {
  name: string;
  image?: string | null;
  hasName?: boolean;
};

const User = ({ name, image, hasName = true }: Props): ReactElement => {
  const [firstLetter] = name.split("");
  return (
    <span className="user">
      <Avatar
        src={image || undefined}
        text={firstLetter}
        className="user__avatar"
      />
      {hasName && <span className="user__name">{name}</span>}
      <style jsx>{`
        .user {
          display: inline-flex;
          align-items: center;
          &__avatar {
            border: 1px solid yellow;
          }
          &__name {
            font-size: var(--size-xs);
            font-weight: var(--weight-semibold);
            margin-left: var(--space-3x);
          }
        }
      `}</style>
    </span>
  );
};

export default User;
