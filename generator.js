module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    "devDependencies": {
      "stylus": "^0.54.7",
      "stylus-loader": "^3.0.2"
    },
    "dependencies": {
      "element-ui": "^2.12.0",
      "axios": "^0.19.0",
      "lodash": "^4.17.15"
    }
  })

  // 先删除src/内容
  api.render(files => {
    Object.keys(files)
      .filter(name => name.startsWith("src/"))
      .forEach(name => delete files[name])
  })

  // 渲染
  api.render('./template')
}