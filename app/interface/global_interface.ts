import {StaticImageData} from "next/image";

export interface Text_Interface {
  children: React.ReactNode;
  className?: string;
}

export interface Button_Interface {
  children: React.ReactNode;
  className?: string;
}

export interface image_Interface {
  src: StaticImageData;
  className?: string;
}

export interface Skill_Interface {
  children: React.ReactNode;
}

export interface Card_Interface {
  title: String;
  tolls: String;
  descrption: String;
}

export interface Social_Interface {
  children: React.ReactNode;
  href: string | "/";
}

export interface Social_Interface {
  children: React.ReactNode;
  href: string | "/";
}

export interface Contact_Interface {
  children: React.ReactNode;
  src: StaticImageData;
  href: string;
}
