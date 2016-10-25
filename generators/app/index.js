'use strict';
//Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Генерирующий генератор для блоков ' + chalk.red('Clobl') + '!'
    ));

    var prompts = [{
      type: 'input',
      name: 'blockNamespace',
      message: 'Namespace (напр. aa.lActiveAge.bHeader)',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, {
      type: 'input',
      name: 'blockName',
      message: 'Название блока? (напр. Header)',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.blockname = this.appname.replace(/\s+/g, '-');
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_control.js'),
      this.destinationPath(this.blockname + '.js'), {
        blockNamespace: this.props.blockNamespace,
        blockName: this.props.blockName
      }
    );
    this.fs.copyTpl(
      this.templatePath('_view.js'),
      this.destinationPath('view.js'), {
          blockNamespace: this.props.blockNamespace,
          blockName: this.props.blockName
      }
    );
    this.fs.copyTpl(
      this.templatePath('_template.soy'),
      this.destinationPath(this.blockname + '.soy'), {
          blockNamespace: this.props.blockNamespace,
          blockName: this.props.blockName.toLowerCase()
      }
    );
    this.fs.copyTpl(
      this.templatePath('_styles.scss'),
      this.destinationPath(this.blockname + '.scss'), {
      }
    );
  }
});
