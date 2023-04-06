import localforage from 'localforage';
export const configLocalForage = () => {
  localforage.config({
    driver: localforage.LOCALSTORAGE
  });
};
export const storeSessionInfo = async (
  lang: string,
  hand: string,
  level: string | number
): Promise<void> => {
  await localforage.setItem('lang', lang);
  await localforage.setItem('hand', hand);
  await localforage.setItem('level', level);
};
export const storeLevelScore = async (
  level: string,
  score: number | string,
  mode
): Promise<void> => {
  //if the mode is game mode give it a prefix
  if (mode == 'game') {
    await localforage.setItem('game-' + level, score);
  } else {
    await localforage.setItem(level, score);
  }
};
export const clearAllScore = async () => {
  await localforage.removeItem('1');
  await localforage.removeItem('2');
  await localforage.removeItem('3');
  await localforage.removeItem('4');
};
export const getLevelScore = async (level: string) => {
  return localforage.getItem(level);
};
export const getSessionInfo = async (): Promise<{
  hand: unknown;
  lang: unknown;
  level: unknown;
}> => {
  let lang = await localforage.getItem('lang');
  let hand = await localforage.getItem('hand');
  let level = await localforage.getItem('level');

  return {
    lang,
    hand,
    level
  };
};
