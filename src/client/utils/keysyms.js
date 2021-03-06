const keyCodes = {
  8: 65288,
  9: 65289,
  13: 65293,
  16: 65505,
  17: 65507,
  18: 65513,
  19: 65300,
  20: 65509,
  27: 65307,
  32: 32,
  33: 33,
  34: 34,
  35: 65367,
  36: 65360,
  37: 65361,
  38: 65362,
  39: 65363,
  40: 65364,
  45: 65379,
  46: 65535,
  48: 48,
  49: 49,
  50: 50,
  51: 51,
  52: 52,
  53: 53,
  54: 54,
  55: 55,
  56: 56,
  57: 57,
  65: 97,
  66: 98,
  67: 99,
  68: 100,
  69: 101,
  70: 102,
  71: 103,
  72: 104,
  73: 105,
  74: 106,
  75: 107,
  76: 108,
  77: 109,
  78: 110,
  79: 111,
  80: 112,
  81: 113,
  82: 114,
  83: 115,
  84: 116,
  85: 117,
  86: 118,
  87: 119,
  88: 120,
  89: 121,
  90: 122,
  91: 65515,
  92: 65516,
  93: 65376,
  106: 65450,
  107: 65451,
  109: 65453,
  110: 65454,
  111: 65455,
  112: 65470,
  113: 65471,
  114: 65472,
  115: 65473,
  116: 65474,
  117: 65475,
  118: 65476,
  119: 65477,
  120: 65478,
  121: 65479,
  144: 65407,
  145: 65300,
  186: 59,  // semicolon
  187: 61,  // equal sign
  188: 44,  // comma
  189: 45,  // dash
  190: 46,  // period
  191: 47,  // forward slash
  192: 96,  // grave accent
  219: 91,  // open bracket
  220: 92,  // back slash
  221: 93,  // close bracket
  222: 39,  // single quote
};

const convert = code => keyCodes[code];

export default convert;
