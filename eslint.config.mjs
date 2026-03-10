// @ts-check
import skipPrettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt([
  // Add Prettier recommended settings
  eslintPluginPrettierRecommended
])
  // Add Vue flat configurations
  .append(...pluginVue.configs['flat/recommended'])

  // Add Prettier to turn off conflicting rules (from eslint-config-prettier)
  .append(skipPrettier)

  // Add your custom rules
  .append({
    files: ['**/*.vue'],
    name: 'user:vue-overrides',
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  })
