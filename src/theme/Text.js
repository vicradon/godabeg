// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Text = {
  // The styles all button have in common
  baseStyle: {},
  // Two sizes: sm and md
  sizes: {
    md: {
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: "500",
    },
    sm: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "500",
    },
  },
  // Two variants: outline and solid
  variants: {},
  // The default size and variant values
  defaultProps: {
    size: "md",
  },
};
