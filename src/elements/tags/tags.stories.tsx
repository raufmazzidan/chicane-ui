import type { Meta, StoryObj } from "@storybook/react";

import { Tags } from "./index";

const meta = {
  title: "Elements/Tags",
  component: Tags,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tags>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    label: "Tags Number 1",
  },
};
