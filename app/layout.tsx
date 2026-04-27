import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Бетон в Пинске с доставкой",
  description:
    "Бетон в Пинске, Иваново, Лунинец и Столин с доставкой от производителя. Марки М150-М500, паспорт качества и консультация по подбору.",
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
