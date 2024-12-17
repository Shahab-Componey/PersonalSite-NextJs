import {StaticImageData} from "next/image";
import React, {ReactNode} from "react";

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
  logo: StaticImageData;
}

export interface Card_Interface {
  defualtComponent: ReactNode;
  hoveredComponent: ReactNode;
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

