import g1 from "@/assets/portfolio/graphic-1.jpg";
import g2 from "@/assets/portfolio/graphic-2.jpg";
import v1 from "@/assets/portfolio/video-1.jpg";
import v2 from "@/assets/portfolio/video-2.jpg";
import m1 from "@/assets/portfolio/motion-1.jpg";
import m2 from "@/assets/portfolio/motion-2.jpg";
import p1 from "@/assets/portfolio/IMG_8463.jpg";
import g3 from "@/assets/portfolio/Banner-01.jpg";

export type PortfolioCategory = "graphic" | "video" | "motion" | "photo";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  thumb: string;
  link?: string;
  description?: string;
}

export const ITEMS: PortfolioItem[] = [
  { id: "g1", title: "Poster Retro Modern", category: "graphic", thumb: g1, description: "Eksplorasi poster hitam-merah dengan tekstur grunge." },
  { id: "g2", title: "Branding Minimalis", category: "graphic", thumb: g2, description: "Komposisi tipografi tegas dengan aksen merah." },
  { id: "v1", title: "Cinematic Cut", category: "video", thumb: v1, description: "Thumbnail gaya sinematik untuk kanal YouTube.", link: "https://youtube.com" },
  { id: "v2", title: "Timeline Edit", category: "video", thumb: v2, description: "Mockup timeline editing dengan kontras tinggi.", link: "https://youtube.com" },
  { id: "m1", title: "Template Motion 01", category: "motion", thumb: m1, description: "Preview template motion grafis fleksibel.", link: "https://behance.net" },
  { id: "m2", title: "Template Motion 02", category: "motion", thumb: m2, description: "Frame modular dengan garis crimson.", link: "https://behance.net" },
  { id: "p1", title: "Photography 1", category: "photo", thumb: p1, description: "Photo setion Kelas Kpi D" },
  { id: "g3", title: "My Banner Brutalism Style", category: "graphic", thumb: g3, description: "Preview My Banner",}

];

export const CATEGORIES: { key: PortfolioCategory; label: string }[] = [
  { key: "graphic", label: "Graphic Design" },
  { key: "video", label: "Video Editing" },
  { key: "motion", label: "Template & Motion" },
  { key: "photo", label: "Photography" },
];
