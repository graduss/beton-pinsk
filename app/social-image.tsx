import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Бетон в Пинске с доставкой и аренда спецтехники";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function createSocialImage() {
  const [regular, bold] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/DejaVuSans.ttf")),
    readFile(join(process.cwd(), "assets/fonts/DejaVuSans-Bold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#efe4d6",
          color: "#22170f",
          fontFamily: "DejaVu Sans",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(135deg, #f8f1e8 0%, #efe4d6 48%, #d9c3aa 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -120,
            top: -160,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "rgba(255,255,255,0.58)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -170,
            bottom: -190,
            width: 590,
            height: 590,
            borderRadius: 590,
            background: "rgba(181,83,40,0.18)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 56,
            right: 56,
            top: 54,
            bottom: 54,
            display: "flex",
            border: "2px solid rgba(34,23,15,0.11)",
            borderRadius: 38,
            background: "rgba(255,250,243,0.82)",
            boxShadow: "0 30px 90px rgba(35,24,14,0.18)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 680,
              padding: "52px 0 52px 56px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-start",
                  padding: "10px 16px",
                  borderRadius: 999,
                  border: "1px solid rgba(34,23,15,0.12)",
                  background: "#ffffff",
                  color: "#b55328",
                  fontSize: 19,
                  fontWeight: 700,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                Пинск • Иваново • Лунинец • Столин
              </div>

              <div
                style={{
                  marginTop: 26,
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 66,
                  lineHeight: 0.95,
                  fontWeight: 700,
                  letterSpacing: -1,
                }}
              >
                <span>Бетон</span>
                <span>с доставкой</span>
                <span style={{ color: "#b55328" }}>от производителя</span>
              </div>

              <div
                style={{
                  marginTop: 24,
                  display: "flex",
                  width: 540,
                  color: "rgba(34,23,15,0.72)",
                  fontSize: 26,
                  lineHeight: 1.28,
                }}
              >
                Марки М150-М500, паспорт качества, доставка миксером и
                консультация по подбору.
              </div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(180deg, #2c2119 0%, #17110c 100%)",
              color: "#fffaf3",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 34,
                right: 34,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  fontSize: 20,
                  color: "rgba(255,255,255,0.62)",
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                }}
              >
                Заказать
              </div>
              <div style={{ marginTop: 6, fontSize: 35, fontWeight: 700 }}>
                +375 44 739-18-21
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                left: 38,
                right: 38,
                bottom: 38,
                display: "flex",
                flexDirection: "column",
                padding: 24,
                borderRadius: 26,
                border: "1px solid rgba(255,255,255,0.13)",
                background: "rgba(45,35,28,0.92)",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,0.58)",
                  letterSpacing: 2.2,
                  textTransform: "uppercase",
                }}
              >
                Спецтехника
              </div>
              <div style={{ marginTop: 10, fontSize: 25, lineHeight: 1.28 }}>
                ЕК-12 • МАЗ 10 тонн • Амкодор
              </div>
              <div
                style={{
                  marginTop: 12,
                  fontSize: 31,
                  fontWeight: 700,
                  color: "#f3dfcb",
                }}
              >
                +375 44 550-83-02
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                left: 54,
                top: 172,
                display: "flex",
                padding: "14px 18px",
                borderRadius: 18,
                background: "rgba(181,83,40,0.86)",
                color: "#fffaf3",
                fontSize: 23,
                fontWeight: 700,
              }}
            >
              М150-М500
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "DejaVu Sans",
          data: regular,
          style: "normal",
          weight: 400,
        },
        {
          name: "DejaVu Sans",
          data: bold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
