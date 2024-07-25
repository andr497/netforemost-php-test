export interface IAccommodation {
  csv_id: number;
  price: number;
  title: string;
  type: string;
  meters: string;
  meter_per_price: number;
  advertiser: string;
  register_at?: string;
}

export interface IAccommodationFilterParams {
  quantity_bedrooms?: number;
  max_price?: number;
  min_price?: number;
  filter_distance: boolean;
  lat?: number;
  long?: number;
  distance_km?: number;
}