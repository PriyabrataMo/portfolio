import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Priyabrata Mondal | AI/Agent Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Avatar */}
        <img
          src="https://avatars.githubusercontent.com/u/95865224?v=4"
          width={180}
          height={180}
          style={{
            borderRadius: "50%",
            border: "4px solid #6366f1",
            marginRight: "60px",
            flexShrink: 0,
          }}
        />

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#f8fafc",
              lineHeight: 1.1,
            }}
          >
            Priyabrata Mondal
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#818cf8",
              fontWeight: 500,
            }}
          >
            AI/Agent Engineer @ QAD
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Building LLM-powered agentic systems
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#64748b",
              marginTop: "4px",
            }}
          >
            priyabratamondal.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
