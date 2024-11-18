// seconds
export const SwitchSceneDuration = 3;

export interface SceneItem {
  name: string;
  path: string;
  height?: {
    top?: string | number;
    mid?: string | number;
    botBg?: string | number;
    bot?: string | number;
  };
  y?: {
    top?: string | number;
    mid?: string | number;
    botBg?: string | number;
    bot?: string | number;
  };
}

export type Scenes =
  'Desert' |
  'Outdoors' |
  'Seaside' |
  'Halloween' |
  'City' |
  'Residence' |
  'Night' |
  'Park';

export const SceneList: Record<Scenes, SceneItem> = {
  Desert: {
    name: 'desert',
    path: 'desert',
    height: {
      botBg: 250,
      bot: 120,
    },
  },
  Outdoors: {
    name: 'outdoors',
    path: 'outdoors',
    height: {
      botBg: 234,
      bot: 234,
    },
  },
  Seaside: {
    name: 'seaside',
    path: 'seaside',
    height: {
      top: '55vh',
      botBg: 0,
      bot: 272,
    },
    y: {
      mid: '-500px',
    },
  },
  Halloween: {
    name: 'halloween',
    path: 'halloween',
    height: {
      top: '90vh',
      mid: 600,
      botBg: 0,
      bot: 493,
    },
    y: {
      mid: '-700px',
    },
  },
  City: {
    name: 'city',
    path: 'city',
    height: {
      top: '70vh',
      mid: 400,
      botBg: 0,
      bot: 229,
    },
    y: {
      mid: '-620px',
    },
  },
  Residence: {
    name: 'residence',
    path: 'residence',
    height: {
      top: '80vh',
      mid: 284,
      botBg: 0,
      bot: 217,
    },
    y: {
      mid: '-490px',
    },
  },
  Night: {
    name: 'night',
    path: 'night',
    height: {
      top: '60vh',
      mid: 400,
      botBg: 0,
      bot: 397,
    },
    y: {
      mid: '-652px',
    },
  },
  Park: {
    name: 'park',
    path: 'park',
    height: {
      top: '100vh',
      mid: 500,
      botBg: 267,
      bot: 267,
    },
    y: {
      mid: '-440px',
    },
  },
};
