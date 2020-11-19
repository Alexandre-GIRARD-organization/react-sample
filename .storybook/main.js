module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    //"storybook-addon-material-ui/register"
    "@react-theming/storybook-addon" // Add theme selection in addons panel
    //"themeprovider-storybook/register"
  ]
}