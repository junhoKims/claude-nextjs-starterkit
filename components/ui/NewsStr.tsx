'use client';

export function NewsStr() {
  const randomValue = Math.floor(Math.random() * 10) + 1;
  const news = randomValue <= 5 ? 'good news' : 'bad news';

  return <div>{news}</div>;
}
