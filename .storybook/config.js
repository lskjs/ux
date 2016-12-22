import { wrapModules } from './storybook';
const stories = require('glob!./story.pattern')
wrapModules(stories, module);
