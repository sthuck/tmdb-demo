import type { Meta, StoryObj } from "@storybook/react";

import { MovieGrid } from "./MovieGrid";
import data from "./mock-results.json";

const meta = {
  title: "MovieGrid",
  component: MovieGrid,
  tags: ["autodocs"],
} satisfies Meta<typeof MovieGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: data,
  },
};
