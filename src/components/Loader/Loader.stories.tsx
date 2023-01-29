import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";

const meta = {
  title: "Loader",
  component: Loader,
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoComponent = () => {
  return <div>Done Loading</div>;
};
export const Primary: Story = {
  args: {
    isLoading: true,
    children: <DemoComponent />,
  },
  render: (args) => (
    <Loader {...args}>
      <DemoComponent />
    </Loader>
  ),
};
