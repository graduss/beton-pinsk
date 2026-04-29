import type { Metadata } from "next";
import "./globals.css";

const title = "Бетон в Пинске с доставкой";
const description =
  "Бетон в Пинске, Иваново, Лунинец и Столин с доставкой от производителя. Марки М150-М500, паспорт качества и консультация по подбору.";
const socialImageAlt = "Бетон в Пинске с доставкой и аренда спецтехники";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  keywords: [
    "бетон Пинск",
    "купить бетон Пинск",
    "бетон с доставкой",
    "доставка бетона Пинск",
    "бетон Иваново",
    "бетон Лунинец",
    "бетон Столин",
    "товарный бетон",
    "бетон М150",
    "бетон М200",
    "бетон М250",
    "бетон М300",
    "бетон М350",
    "бетон М400",
    "бетон М500",
    "бетон на гранитном щебне",
    "паспорт качества бетона",
    "аренда экскаватора ЕК-12",
    "аренда самосвала МАЗ",
    "аренда погрузчика Амкодор",
  ],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Бетон в Пинске",
    locale: "ru_BY",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: socialImageAlt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/twitter-image",
        alt: socialImageAlt,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
