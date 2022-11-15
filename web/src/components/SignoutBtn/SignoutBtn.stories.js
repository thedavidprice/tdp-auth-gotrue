// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <SignoutBtn {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import SignoutBtn from './SignoutBtn'

export const generated = () => {
  return <SignoutBtn />
}

export default {
  title: 'Components/SignoutBtn',
  component: SignoutBtn,
}
