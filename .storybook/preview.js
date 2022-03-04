import React from "react"

import { GlobalCss } from "../src/components/styles/global"
import { ResetCss } from "../src/components/styles/reset";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => (
    <>
      <GlobalCss />
      <ResetCss />
      <Story />
    </>
  )
];
