export interface Launch {
  fairings: Fairings;
  links: Links;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: Failure[];
  details: string;
  crew: any[];
  ships: any[];
  capsules: any[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: null;
  id: string;
}

interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: null;
  landing_type: null;
  landpad: null;
}

interface Failure {
  time: number;
  altitude: null;
  reason: string;
}

interface Links {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: null;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

interface Flickr {
  small: any[];
  original: any[];
}

interface Reddit {
  campaign: null;
  launch: null;
  media: null;
  recovery: null;
}

interface Patch {
  small: string;
  large: string;
}

interface Fairings {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ships: any[];
}


export interface Rocket {
  height: Height;
  diameter: Height;
  mass: Mass;
  first_stage: Firststage;
  second_stage: Secondstage;
  engines: Engines;
  landing_legs: Landinglegs;
  payload_weights: Payloadweight[];
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
}

interface Payloadweight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

interface Landinglegs {
  number: number;
  material: null | string;
}

interface Engines {
  isp: Isp;
  thrust_sea_level: Thrustsealevel;
  thrust_vacuum: Thrustsealevel;
  number: number;
  type: string;
  version: string;
  layout: null | string;
  engine_loss_max: null | number;
  propellant_1: string;
  propellant_2: string;
  thrust_to_weight: number;
}

interface Isp {
  sea_level: number;
  vacuum: number;
}

interface Secondstage {
  thrust: Thrustsealevel;
  payloads: Payloads;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: null | number;
}

interface Payloads {
  composite_fairing: Compositefairing;
  option_1: string;
}

interface Compositefairing {
  height: Height2;
  diameter: Height2;
}

interface Height2 {
  meters: null | number;
  feet: null | number;
}

interface Firststage {
  thrust_sea_level: Thrustsealevel;
  thrust_vacuum: Thrustsealevel;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: null | number;
}

interface Thrustsealevel {
  kN: number;
  lbf: number;
}

interface Mass {
  kg: number;
  lb: number;
}

interface Height {
  meters: number;
  feet: number;
}