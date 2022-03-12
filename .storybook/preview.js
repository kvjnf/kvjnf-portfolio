import React from "react"
import { ThemeProvider } from "styled-components";

import { GlobalCss, theme } from "../src/components/styles/global"
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
  (Story) => (
    <ThemeProvider theme={theme}>
      <>
        <GlobalCss />
        <ResetCss />
        <Story />
      </>
    </ThemeProvider>
  )
];
