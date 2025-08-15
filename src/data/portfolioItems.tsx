import g1 from "@/assets/portfolio/1.jpg";
import g2 from "@/assets/portfolio/2.jpg";
import g3 from "@/assets/portfolio/3.jpg";
import g4 from "@/assets/portfolio/4.jpg";
import g5 from "@/assets/portfolio/5.jpg";
import g6 from "@/assets/portfolio/6.jpg";
import g7 from "@/assets/portfolio/7.jpg";
import g8 from "@/assets/portfolio/8.jpg";
import g9 from "@/assets/portfolio/9.jpg";
import g10 from "@/assets/portfolio/10.jpg";
import g11 from "@/assets/portfolio/11.jpg";
import g12 from "@/assets/portfolio/12.jpg";


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
  { id: "g1", title: "Poster Personal Branding – “Miftah Ghalbi", category: "graphic", thumb: g1, description: "Desain poster personal branding bergaya retro-grunge dengan dominasi warna merah dan hitam yang memberikan kesan tegas, berani, dan kreatif." },
  { id: "g2", title: "Agenda 1 Muharram 1446 H – Rumah Belajar Kita", category: "graphic", thumb: g2, description: "Pawai obor, dzikir bersama, dan santunan anak yatim dalam rangka menyambut Tahun Baru Islam di Rumah Belajar Kita." },
  { id: "g3", title: "Bukber Rakansialo – 23 Maret 2025", category: "graphic", thumb: g3, description: "Acara buka bersama Rakansialo yang penuh kehangatan, bertempat di J-Cafe, Losari." },
  { id: "g4", title: "Wisuda Diva Elsa Sabilla S.H – UIN Syekh Nurjati Cirebon", category: "graphic", thumb: g4, description: "Ucapan selamat atas kelulusan Diva Elsa Sabilla yang meraih gelar Sarjana Hukum. Semoga gelar ini menjadi berkah dan bermanfaat." },
  { id: "g5", title: "Wisuda Nisaul Izza S. Ag- UIN Syekh Nurjati Cirebon", category: "graphic", thumb: g5, description: "Ucapan selamat atas kelulusan Nisaul Izza yang meraih gelar Sarjana Agama. Semoga gelar ini menjadi berkah dan bermanfaat." },
  { id: "g6", title: "Rakansialo Camp 2.0 – 3-4 April 2025", category: "graphic", thumb: g6, description: "Kegiatan camping seru di Sukageuri View dengan tema “Ngopi, Ngobrol, Game” bersama Rakansialo." },
  { id: "g7", title: "Maulid Nabi Muhammad SAW – Rumah Belajar Kita", category: "graphic", thumb: g7, description: "Acara Maulid Nabi pada 28 September 2024 di Rumah Belajar Kita, diisi dengan tausiyah Ustadzah Daryani (Bude Dar)." },
  { id: "g8", title: "Hari Santri Nasional – Rumah Belajar Kita", category: "graphic", thumb: g8, description: "Peringatan Hari Santri Nasional sebagai momen mengenang jasa para santri yang berjuang untuk kemerdekaan Indonesia. Pesan inspiratif dari Gus Mus." },
  { id: "g9", title: "ATQAH Post – Edisi 18 Maret 2025", category: "graphic", thumb: g9, description: "Buletin Asrama Tahfidzul Qur’an Assirojul Hasan yang membahas pentingnya menjadikan tadarus sebagai tradisi, bukan hanya rutinitas Ramadhan." },
  { id: "g10", title: "Poster Ucapan Ulang Tahun – Style Retro Jepang", category: "graphic", thumb: g10, description: "Desain poster ulang tahun bernuansa retro dengan sentuhan tipografi Jepang dan efek grain, memberikan kesan klasik dan unik." },
  { id: "g11", title: "Australia vs Indonesia – Kualifikasi Piala Asia 2025", category: "graphic", thumb: g11, description: "Pertandingan seru antara Australia dan Indonesia akan berlangsung pada 20 Maret 2025 di Allianz Stadium, Sydney, pukul 16:10 WIB. Ayo dukung Garuda!" },
  { id: "g12", title: "Indonesia vs Bahrain – Kualifikasi Piala Asia 2025", category: "graphic", thumb: g12, description: "Timnas Indonesia akan menjamu Bahrain di Stadion Utama Gelora Bung Karno, Jakarta pada 25 Maret 2025 pukul 20:45 WIB. Laga penting demi melangkah ke putaran berikutnya." },
  
  
];

export const CATEGORIES: { key: PortfolioCategory; label: string }[] = [
  { key: "graphic", label: "Graphic Design" },
  { key: "video", label: "Video Editing" },
  { key: "motion", label: "Template & Motion" },
  { key: "photo", label: "Photography" },
];
