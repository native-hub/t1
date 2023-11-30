/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./components",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
  {
    titlePrefix: "",
    directory: "./screens",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:screens(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

const getStories = () => {
  return {
    "./components/Base/index.stories.tsx": require("../components/Base/index.stories.tsx"),
    "./components/Button/index.stories.tsx": require("../components/Button/index.stories.tsx"),
    "./components/ButtonIcon/index.stories.tsx": require("../components/ButtonIcon/index.stories.tsx"),
    "./components/Card/index.stories.tsx": require("../components/Card/index.stories.tsx"),
    "./screens/base/index.stories.tsx": require("../screens/base/index.stories.tsx"),
    "./screens/character/index.stories.tsx": require("../screens/character/index.stories.tsx"),
    "./screens/characters/index.stories.tsx": require("../screens/characters/index.stories.tsx"),
    "./screens/launch/index.stories.tsx": require("../screens/launch/index.stories.tsx"),
  };
};

configure(getStories, module, false);
