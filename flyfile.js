const notifier = require('node-notifier')

export async function src (fly, opts) {
  await fly.source(opts.src || 'src/**/*.js').babel().target('dist')
  notify('💥 compiled javascript')
}

// notification helper
function notify (msg) {
  return notifier.notify({
    title: 'chrome-sidebar',
    message: msg,
    icon: false
  })
}

export async function build (fly) {
  fly.start('src')
}

const uglifyOpts = {
  compress: {
    drop_console: true,
    join_vars: true
  }
}

export async function minify (fly) {
  await fly.source('dist/**/*.js').uglify(uglifyOpts).target('dist')
  notify('📦 minified javascript')
}

export async function dist (fly) {
  await fly.start('src')
  fly.start('minify')
}

export default async function (fly) {
  fly.start('src')
  await fly.watch('src/**/*.js', ['src'])
}
