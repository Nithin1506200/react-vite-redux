import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
const meta = {
  title: 'Ui/button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    isLoading: true,

    children: 'hello world'
  }
};
