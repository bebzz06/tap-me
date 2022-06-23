import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Tap-me/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Test = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Test.args = {
  label: "TEST",
};

export const Test2 = Template.bind({});
Test2.args = {
  label: "TEST2",
};

export const Clickme = Template.bind({});
Clickme.args = {
  label: "CLickme",
};

export const Small = Template.bind({});
Small.args = {
  label: "Small",
};
