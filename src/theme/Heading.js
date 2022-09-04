// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const Heading = {
  // The styles all button have in common
  baseStyle: {},
  // Two sizes: sm and md
  sizes: {
    xl: {
      fontSize: "80px",
      lineHeight: "100.8px",
      fontWeight: "600",
    },
    lg: {
      fontSize: "72px",
      lineHeight: "90.72px",
      fontWeight: "600",
    },
    md: {
      fontSize: "52px",
      lineHeight: "65.52px",
      fontWeight: "600",
    },
    sm: {
      fontSize: "44px",
      lineHeight: "55.44px",
      fontWeight: "500",
    },
    body: {
      fontSize: "24px",
      lineHeight: "30.24px",
      fontWeight: "700",
    },
  },
  // Two variants: outline and solid
  variants: {},
  // The default size and variant values
  defaultProps: {
    size: "md",
  },
};

export default Heading;
