import "./globals.css";
import { Noto_Sans, Noto_Serif_SC } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "琉球之浪 · Okinawa Immersive Journey",
  description:
    "Mailchimp 式卷轴叙事 × 浮世绘视觉｜让冲绳的自然、历史与岛人节奏一气呵成。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hans">
      <body className={`${notoSans.variable} ${notoSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
