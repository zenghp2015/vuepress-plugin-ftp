const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const { build } = require('vuepress')
const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

module.exports = (options, ctx) => {
  const { parsed } = dotenvExpand(dotenv.config())
  const siteOptions = { sourceDir: ctx.sourceDir, theme: '@vuepress/theme-default' }
  return {
    name: 'vuepress-plugin-ftp',
    extendCli: cli => {
      cli.command('deploy [targetDir]', '').action(() => {
        build(siteOptions).then(() => {
          const config = {
            user: parsed.SERVER_USER || '',
            password: parsed.SERVER_PASS || '',
            host: parsed.SERVER_HOST || '127.0.0.1',
            port: parsed.SERVER_PORT || 21,
            localRoot: parsed.SERVER_OUTDIR || ctx.outDir,
            remoteRoot: parsed.SERVER_REMOTE_ROOT || './',
            include: parsed.SERVER_REMOTE_INCLUDE || ['*', '**/*']
          }
          console.log('开始上传...')
          return ftpDeploy.deploy(config)
        }).then(res => console.log('finished:', res)).catch(err => console.log(err))
      })
    }
  }
}
