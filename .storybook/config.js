import { configure, addParameters } from '@storybook/react';
import { DocsPage } from '@storybook/addon-docs/blocks';

addParameters({
  docs: DocsPage,
});

const loadStories = () => {
  const req = require.context('../src', true, /\.stories\.tsx$/);
  return req.keys().map(filename => req(filename));
};

configure(loadStories, module);