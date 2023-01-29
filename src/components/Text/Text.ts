export enum TextStyle {
  title1 = "title1",
  title2 = "title2",
  primary = "primary",
  secondary = "secondary",
  minor = "minor",
}

const TextStyleToClass = {
  [TextStyle.title1]: "font-serif text-5xl font-semibold	text-zinc-800",
  [TextStyle.title2]: "font-sans text-lg font-bold	text-zinc-700",
  [TextStyle.primary]: "font-sans text-base font-normal	text-neutral-800",
  [TextStyle.secondary]: "font-sans text-sm font-normal	text-neutral-700",
  [TextStyle.minor]: "font-sans text-xs font-normal	text-neutral-600",
};

export const Text = (style: TextStyle) => {
  return TextStyleToClass[style];
};
