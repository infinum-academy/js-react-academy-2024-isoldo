interface IColorPairs {
  bg: string;
  font: string;
};

function getColorPair(): IColorPairs {
  const pairs: IColorPairs[] = [
    {
      bg: 'e000a1',
      font: '1a1a1a'
    },
    {
      bg: '1a1a1a',
      font: 'e000a1'
    },
    {
      bg: '780f0f',
      font: '7ce6e6'
    },
    {
      bg: '7ce6e6',
      font: '780f0f'
    },
    {
      bg: '7ae688',
      font: '610fc4'
    },
    {
      bg: '610fc4',
      font: '7ae688'
    },
    {
      bg: '3c3c3c',
      font: 'f53d00'
    },
    {
      bg: 'f53d00',
      font: '3c3c3c'
    }
  ];

  const idx = Math.floor(Math.random() * pairs.length);

  return pairs[idx];
}

export function getEmailAndAvatar(): {email: string, avatar: string} {
  const names = [
    'ante', 'bore', 'cunami', 'devito', 'elena', 'fox', 'grse', 'hilje', 'ivan', 'jala', 'kools'
  ];
  const inits = [
    'AP', 'BB', 'CF', 'DV', 'EK', 'FF', 'GR', 'HM', 'IS', 'JB', 'KS'
  ];

  const idx = Math.floor(Math.random() * names.length);
  const colorPair = getColorPair();
  return {
    email: names[idx] + '@infinum.com',
    avatar: `https://fakeimg.pl/60x60/${colorPair.bg}/${colorPair.font}?text=${inits[idx]}&font=noto`
  }
}
