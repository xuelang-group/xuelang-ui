var l=Object.defineProperty;var t=(n,r)=>l(n,"name",{value:r,configurable:!0});import{M as e}from"./Button.c9ce975d.js";import"./vue.esm-bundler.18dcd8e3.js";const u={parameters:{storySource:{source:`import MyButton from '../components/Button/Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyButton },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return { args };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},secondary:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},large:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}},small:{startLoc:{col:17,line:19},endLoc:{col:2,line:28},startBody:{col:17,line:19},endBody:{col:2,line:28}}}}},title:"Example/Button",component:e,argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","default","large"]}}},o=t(n=>({components:{MyButton:e},setup(){return{args:n}},template:'<my-button v-bind="args" />'}),"Template"),s=o.bind({});s.args={primary:!0,label:"Button"};const a=o.bind({});a.args={label:"Button"};const c=o.bind({});c.args={size:"large",label:"Button"};const i=o.bind({});i.args={size:"small",label:"Button"};const g=["Primary","Secondary","Large","Small"];export{c as Large,s as Primary,a as Secondary,i as Small,g as __namedExportsOrder,u as default};
//# sourceMappingURL=Button.stories.5f32b0d0.js.map
