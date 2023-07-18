export type dataAirQualityT =
  | {
      name: string;
      country: string;
      state: string;
      aqi: number;
      co: number;
      nh3: number;
      no: number;
      no2: number;
      o3: number;
      pm2_5: number;
      pm10: number;
      so2: number;
    }
  | undefined;
