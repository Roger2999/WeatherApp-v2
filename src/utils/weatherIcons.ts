import {
  WbSunny, // sol
  Cloud, // nubes
  Grain, // lluvia
  Thunderstorm, // tormenta
  AcUnit, // nieve
  BlurOn, // niebla
  Opacity, // llovizna
  SevereCold, // lluvia helada / escarcha
} from "@mui/icons-material";

export const weatherMap = {
  // Despejado y nubes
  0: { label: "Cielo despejado", icon: WbSunny },
  1: { label: "Mayormente despejado", icon: WbSunny },
  2: { label: "Parcialmente nublado", icon: Cloud },
  3: { label: "Nublado", icon: Cloud },

  // Niebla
  45: { label: "Niebla", icon: BlurOn },
  48: { label: "Niebla con escarcha", icon: BlurOn },

  // Llovizna
  51: { label: "Llovizna ligera", icon: Opacity },
  53: { label: "Llovizna moderada", icon: Opacity },
  55: { label: "Llovizna densa", icon: Opacity },
  56: { label: "Llovizna helada ligera", icon: SevereCold },
  57: { label: "Llovizna helada densa", icon: SevereCold },

  // Lluvia
  61: { label: "Lluvia ligera", icon: Grain },
  63: { label: "Lluvia moderada", icon: Grain },
  65: { label: "Lluvia intensa", icon: Grain },
  66: { label: "Lluvia helada ligera", icon: SevereCold },
  67: { label: "Lluvia helada intensa", icon: SevereCold },

  // Nieve
  71: { label: "Nieve ligera", icon: AcUnit },
  73: { label: "Nieve moderada", icon: AcUnit },
  75: { label: "Nieve intensa", icon: AcUnit },
  77: { label: "Granos de nieve", icon: AcUnit },

  // Chubascos
  80: { label: "Chubascos de lluvia ligera", icon: Grain },
  81: { label: "Chubascos de lluvia moderada", icon: Grain },
  82: { label: "Chubascos de lluvia fuerte", icon: Grain },
  85: { label: "Chubascos de nieve ligera", icon: AcUnit },
  86: { label: "Chubascos de nieve fuerte", icon: AcUnit },

  // Tormentas
  95: { label: "Tormenta", icon: Thunderstorm },
  96: { label: "Tormenta con granizo ligero", icon: Thunderstorm },
  99: { label: "Tormenta con granizo fuerte", icon: Thunderstorm },
};
