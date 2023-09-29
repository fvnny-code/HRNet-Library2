import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Modal } from "./Modal";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Component/Modal",
  component: Modal,
  argTypes: {
    onHide: {},
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalStory: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const onHide = canvas.getByRole("button");
    await userEvent.click(onHide);
  },

  args: {
    isShown: true,
    onHide: () => {},
    message: "string",
  },
};

const Template = (args: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && (
        <Modal
          onHide={() => setIsModalOpen(false)}
          isShown={isModalOpen}
          message={"Joiejoiejoie !"}
        />
      )}
    </div>
  );
};
export const Default = Template.bind({});