import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const alt = "Syed Abdul Muqeeth — AI & Behavioral Psychology Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(125deg, #080c19 20%, #30205d 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#c4b5fd", fontSize: 26 }}>
          HUMAN BEHAVIOR. INTELLIGENT SYSTEMS.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -3 }}>
            {DATA.fullName}
          </div>
          <div style={{ fontSize: 34, color: "#e9d5ff" }}>
            {DATA.role}
          </div>
          <div style={{ fontSize: 26, color: "#cbd5e1" }}>
            Human-AI interaction · AI agents · Robotics
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#c4b5fd" }}>
          <span>{DATA.location}</span>
          <span>@ungaaaabungaaa</span>
        </div>
      </div>
    ),
    size
  );
}
