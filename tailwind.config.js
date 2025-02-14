/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-", // Thêm tiền tố tw-
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Mobile nhỏ
        md: "768px", // Tablet
        lg: "1024px", // Laptop nhỏ
        xl: "1280", // Desktop
        "2xl": "1536px", // Màn hình lớn
      },
      container: {
        center: true, // Đảm bảo container luôn căn giữa
        padding: {
          DEFAULT: "1rem", // Padding mặc định
          // sm: "1rem",  // Padding cho màn hình nhỏ
          // md: "2rem",  // Padding cho màn hình trung bình
          // lg: "80px",  // Padding cho màn hình lớn
          // xl: "80px",  // Padding cho màn hình rất lớn
          // "2xl": "80px", // Padding cho màn hình cực lớn 
        },
      },
      maxWidth: {
        container: "1312px", // Kích thước tối đa của container
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Thêm font Inter vào font mặc định
      },
      colors: {
        primary: "rgb(245, 164, 24)", // Màu chính
        secondary: "rgb(255, 217, 0)",
        black: "rgba(0, 0, 0, 1)",
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
        h1: ["36px", { lineHeight: "150%", fontWeight: "700" }],
        h2: ["28px", { lineHeight: "150%", fontWeight: "700" }],
        h3: ["20px", { lineHeight: "150%", fontWeight: "600" }],
        h4: ["18px", { lineHeight: "150%", fontWeight: "600" }],
        h5: ["14px", { lineHeight: "150%", fontWeight: "600" }],
        body20: ["20px", { lineHeight: "150%", fontWeight: "400" }],
        body18: ["18px", { lineHeight: "150%", fontWeight: "400" }],
        body16: ["16px", { lineHeight: "150%", fontWeight: "400" }],
        body12: ["12px", { lineHeight: "150%", fontWeight: "400" }],
        bodymain: ["14px", { lineHeight: "150%", fontWeight: "400" }],
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
