import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextStyle } from "./Text";

const meta = {
  title: "Text",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="space-y-2">
        {Object.values(TextStyle).map((style) => {
          return (
            <div key={style}>
              <span className={Text(style as TextStyle)}>
                {style} Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, laborum? Vero fugiat natus debitis amet minima ratione
                blanditiis, voluptas id labore est facilis vitae unde rerum
                expedita fuga tempore dicta.
              </span>
            </div>
          );
        })}
      </div>
    );
  },
};
