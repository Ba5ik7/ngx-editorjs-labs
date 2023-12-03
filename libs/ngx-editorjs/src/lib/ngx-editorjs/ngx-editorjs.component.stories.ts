import type { Meta, StoryObj } from '@storybook/angular';
import { NgxEditorjsComponent } from './ngx-editorjs.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NgxEditorjsComponent> = {
  component: NgxEditorjsComponent,
  title: 'NgxEditorjsComponent',
};
export default meta;
type Story = StoryObj<NgxEditorjsComponent>;

export const Primary: Story = {
  args: {
    text: 'Click me!',
    padding: 10,
    disabled: true,
  },
};

export const Heading: Story = {
  args: {
    text: 'Click me!',
    padding: 10,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/my-button works!/gi)).toBeTruthy();
  },
};