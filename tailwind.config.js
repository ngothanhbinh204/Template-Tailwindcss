/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Đảm bảo quét các file HTML trong thư mục gốc
    "./src/**/*.{js,ts,jsx,tsx}", // Quét các file JavaScript và TypeScript trong thư mục src
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Mobile nhỏ
        md: "850px", // Tablet
        lg: "1024px", // Laptop nhỏ
        xl: "1280px", // Desktop
        "2xl": "1536px", // Màn hình lớn
      },
      container: {
        center: true, // Đảm bảo container luôn căn giữa
        padding: {
          DEFAULT: "10px", // Padding mặc định
          sm: "10px", // Padding cho màn hình nhỏ
          md: "10px", // Padding cho màn hình trung bình
          lg: "10px", // Padding cho màn hình lớn
          xl: "10px", // Padding cho màn hình rất lớn
          "2xl": "10px", // Padding cho màn hình cực lớn
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Thêm font Inter vào font mặc định
      },
      colors: {
        primary: "#AD7314", // Màu chính
        muted: "#6B7280",
        neu0: "#333333",
        neu1: "#545454",
        neu2: "#6e6e73",
        neu3: "#979797",
        neu4: "#bfbfbf",
        neu5: "#ebebf0",
        neu6: "#E6E6E8",
        neu7: "#424242",
        neu444: "#444444",
      },
      fontSize: {
        h1: ["40px", { lineHeight: "150%", fontWeight: "700" }],
        h2: ["38px", { lineHeight: "150%", fontWeight: "700" }],
        h3: ["20px", { lineHeight: "150%", fontWeight: "600" }],
        h4: ["18px", { lineHeight: "150%", fontWeight: "600" }],
        h5: ["14px", { lineHeight: "150%", fontWeight: "600" }],
        body20: ["20px", { lineHeight: "150%", fontWeight: "400" }],
        body18: ["18px", { lineHeight: "150%", fontWeight: "400" }],
        body16: ["16px", { lineHeight: "150%", fontWeight: "400" }],
        body12: ["12px", { lineHeight: "150%", fontWeight: "400" }],
        body: ["14px", { lineHeight: "150%", fontWeight: "400" }],
        small: ["12px", { lineHeight: "150%", fontWeight: "400" }],
      },
      boxShadow: {
        shadow1: "0px 1px 37px 0px rgba(0, 0, 0, 0.16)",
        shadow2: "0px 2px 12px 0px rgba(20, 20, 43, 0.08)",
        shadowLink: "1px 0 0 currentColor",
      },
      lineHeight: {
        leading_btn: "19.5px",
      },
    },
    variants: {
      extend: {
        display: ["group-focus"],
        opacity: ["group-focus"],
        inset: ["group-focus"],
      },
    },
  },
  plugins: [],
};
