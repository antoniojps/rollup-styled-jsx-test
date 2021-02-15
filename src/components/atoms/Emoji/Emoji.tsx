import React, { ReactElement } from 'react';

type EmojiProps = {
  label: string;
  emoji: string;
};

const Emoji = (props: EmojiProps): ReactElement => (
  <span role="img" aria-label={props.label}>
    {props.emoji}
  </span>
);
export default Emoji;
