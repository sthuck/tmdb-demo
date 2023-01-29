import React from "react";
import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Select } from "./Select";
import { HasName } from "./types";

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = new Array(10)
  .fill(0)
  .map(() => ({ name: faker.color.human(), id: faker.datatype.uuid() }));
export const Primary: Story = {
  args: {
    options,
  },
  render: (args) => {
    const [value, setValue] = useState<HasName>();
    return <Select {...args} onChange={setValue} value={value} />;
  },
};
