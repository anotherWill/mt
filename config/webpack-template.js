const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')
const path = require('path')
const jsPath = path.resolve('src', 'template')
const templatePaths = glob.sync(jsPath + '/*.hbs')
const config = require('./config.js')

module.exports = function () {

  let hwps = [];
  for (let i = 0; i < templatePaths.length; i++) {
    let templatePath = templatePaths[i];
		let templateName = templatePath.substring(templatePath.lastIndexOf('\/') + 1, templatePath.lastIndexOf('.'));
		hwps.push(
			new HtmlWebpackPlugin({
				template: templatePath,
				filename: `${templateName}.html`,
				chunks: [templateName],
				hash: true,
				inject: true,
			})
		);
  }
  return hwps;
}

