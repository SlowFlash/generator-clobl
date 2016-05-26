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
      name: 'controlBlockProvide',
      message: 'Что писать в Provide у контрола? (напр. pb.bPbHeader.PbHeader)',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, {
      type: 'input',
      name: 'blockDescriptionName',
      message: 'Как назвать блок в комментах? (напр. Header)',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, {
      type: 'input',
      name: 'viewBlockProvide',
      message: 'Что писать в Provide у View? (напр. pb.bPbHeader.View)',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, {
      type: 'input',
      name: 'soyBlockProvide',
      message: 'Что писать в Provide у Soy? (напр. pb.bPbHeader.Template)',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, {
      type: 'input',
      name: 'soyConstructorTemplateName',
      message: 'Как назвать конструктор Soy? (напр. header)',
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
        controlBlockProvide: this.props.controlBlockProvide,
        blockDescriptionName: this.props.blockDescriptionName
      }
    );
    this.fs.copyTpl(
      this.templatePath('_view.js'),
      this.destinationPath('view.js'), {
        viewBlockProvide: this.props.viewBlockProvide,
        blockDescriptionName: this.props.blockDescriptionName,
        name: this.blockname
      }
    );
    this.fs.copyTpl(
      this.templatePath('_template.soy'),
      this.destinationPath(this.blockname + '.soy'), {
        soyBlockProvide: this.props.soyBlockProvide,
        blockDescriptionName: this.props.blockDescriptionName,
        soyConstructorTemplateName: this.props.soyConstructorTemplateName,
        name: this.blockname
      }
    );
    this.fs.copyTpl(
      this.templatePath('_styles.scss'),
      this.destinationPath(this.blockname + '.scss'), {
        name: this.blockname
      }
    );
  }
});
