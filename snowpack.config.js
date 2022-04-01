const production = process.env.NODE_END === 'production'
const removeConsole = () => production ? ['transform-remove-console'] : [];
// const removeConsole = () => ['transform-remove-console'] ;

module.exports = {
    mount: {
        public: '/',
        src: '/_dist_'
    },
    plugins: [

        ['@snowpack/plugin-svelte', {
            preprocess: require('svelte-preprocess')({
                scss: {
                    // Global Scss with <style lang="scss"></style>
                    prependData: '@import "./src/scss/main.scss"'
                },
                postcss: {
                    plugins: [
                        require('autoprefixer')()
                    ]
                },
                babel: {
                    plugins: removeConsole()
                }
            })
        }],

        ['@snowpack/plugin-babel', {
            transformOptions: {
                plugins: removeConsole()
            }
        }],
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-optimize',
    ],
    alias: {
        '~': './src'
    }
}