module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
   darkMode: 'class',
   theme: {
      fontFamily: {
         sora: ["Sora"]
      },
      extend: {
         // Breakpoints
         screens: {
            'tablet': '640px',
            'laptop': '1024px',
            'desktop': '1280px'
         },
         // Color 
         colors: {
            "purple-200": "#DAC7FC",
            "purple-300": "#CAACFF",
            "purple-500": "#6B49CD",
            "purple-700": "#5D0096",
            "purple-900": "#210035",
            "pink-500": "#AD26FF",
         },
         // fontSize 
         fontSize: {
            13: "13px",
            14: "14px",
            16: "16px",
            20: "20px",
            24: "24px",
            26: "26px",
            32: "32px",
            36: "36px",
            48: "48px",
         },
         // boxShadow
         boxShadow: {
            "md": "6px 6px 16px 0 rgba(0,0,0,0.25), -4px -4px 12px 0 rgba(255,255,255,0.3)"
         }
      },
   },
   plugins: [],
}