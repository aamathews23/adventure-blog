import { toArray } from 'react-emoji-render';

/**
 * Converts all the emojis in a string
 * @param value
 * @returns a string with emojis
 */
const useEmojis = (value: string) => {
  const emojisArray = toArray(value);

  const emojiString = emojisArray.reduce(
    (previous: React.ReactNode, current: React.ReactNode) => {
      if (typeof current === 'string') {
        return previous + current;
      }
      return previous + (current as React.ReactElement)?.props.children;
    },
    '',
  );

  return (emojiString && emojiString.toString()) || '';
};

export default useEmojis;
