export type TitleWordArray = {
  title: string;
  color: string;
  delay: number;
}[];

export type StatsArray = {
  title: string;
  value: string;
  key: number;
}[];

export type AboutFeatures = {
  name: string;
  description: string;
  icon: SVGProps<SVGSVGElement> & { title?: string | undefined; titleId?: string | undefined; };
}[];

export type FeatureProps = {
  icon: React.ReactElement;
  name: string;
  description: string;
  flipped: boolean;
  image: StaticImageData;
};

export type SectionProps = {
  title?: string;
  heading: string;
  description: string;
};
