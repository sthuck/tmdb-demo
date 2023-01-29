import React from "react";
import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Card",
    description: faker.lorem.paragraphs(1),
    metadataRow: `${faker.date.future()} | ${faker.address.city()}`,
    image: faker.image.city(),
  },
  render: (args) => <Card {...args} className="w-96" />,
};
