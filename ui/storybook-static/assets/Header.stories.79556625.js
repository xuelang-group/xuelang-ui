var s=Object.defineProperty;var n=(e,r)=>s(e,"name",{value:r,configurable:!0});import{M as t}from"./Header.f420674d.js";import"./Button.c9ce975d.js";import"./vue.esm-bundler.18dcd8e3.js";const m={title:"Example/Header",component:t,parameters:{storySource:{source:`import MyHeader from './Header.vue';

export default {
  title: 'Example/Header',
  component: MyHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { MyHeader },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-header :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:12},endLoc:{col:2,line:22},startBody:{col:17,line:12},endBody:{col:2,line:22}},"logged-out":{startLoc:{col:17,line:12},endLoc:{col:2,line:22},startBody:{col:17,line:12},endBody:{col:2,line:22}}}},layout:"fullscreen"}},o=n(e=>({components:{MyHeader:t},setup(){return{...e}},template:'<my-header :user="user" />'}),"Template"),a=o.bind({});a.args={user:{name:"Jane Doe"}};const d=o.bind({});d.args={user:null};const g=["LoggedIn","LoggedOut"];export{a as LoggedIn,d as LoggedOut,g as __namedExportsOrder,m as default};
//# sourceMappingURL=Header.stories.79556625.js.map
