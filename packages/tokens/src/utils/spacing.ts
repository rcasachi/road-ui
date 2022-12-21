import { PropertyValue } from "../type";

export const spacingUtils = {
  ox: (value: PropertyValue<"overflowX">) => ({ overflowX: value }),
  oy: (value: PropertyValue<"overflowY">) => ({ overflowY: value }),
  size: (value: PropertyValue<"width">) => ({
    width: value,
    height: value,
  }),
};
