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
      message: 'Название блока (напр. Header)',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, {
      type: 'input',
      name: 'rootClass',
      message: 'Root class (напр. b-header)',
      //Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, {
      type: 'confirm',
      name: 'isPage',
      message: 'Page?',
      //Defaults to the project's folder name if the input is skipped
      default: false
    }
    // , {
    //   type: 'checkbox',
    //   name: 'require',
    //   message: 'Подключаемые модули',
    //   choices: [{
    //     name: 'Utils',
    //     value: 'utils',
    //     checked: true
    //   }, {
    //     name: 'Animation',
    //     value: 'animation',
    //     checked: false
    //   }]
    // }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.blockname = this.appname.replace(/\s+/g, '-');
    }.bind(this));
  },

  writing: function () {
    if (this.props.isPage) {
      this.fs.copyTpl(
      this.templatePath('i-page/_control.js'),
      this.destinationPath(this.blockname + '.js'), {
        blockNamespace: this.props.blockNamespace,
        blockName: this.props.blockName
      }
      );
      this.fs.copyTpl(
        this.templatePath('i-page/_view.js'),
        this.destinationPath('view.js'), {
            blockNamespace: this.props.blockNamespace,
            blockName: this.props.blockName
        }
      );
      this.fs.copyTpl(
        this.templatePath('i-page/_template.soy'),
        this.destinationPath(this.blockname + '.soy'), {
            blockNamespace: this.props.blockNamespace,
            blockName: this.props.blockName.toLowerCase(),
            rootClass: this.props.rootClass
        }
      );
    } else {
      this.fs.copyTpl(
      this.templatePath('default/_control.js'),
      this.destinationPath(this.blockname + '.js'), {
        blockNamespace: this.props.blockNamespace,
        blockName: this.props.blockName
      }
      );
      this.fs.copyTpl(
        this.templatePath('default/_view.js'),
        this.destinationPath('view.js'), {
            blockNamespace: this.props.blockNamespace,
            blockName: this.props.blockName
        }
      );
      this.fs.copyTpl(
        this.templatePath('default/_template.soy'),
        this.destinationPath(this.blockname + '.soy'), {
            blockNamespace: this.props.blockNamespace,
            blockName: this.props.blockName.toLowerCase(),
            rootClass: this.props.rootClass
        }
      );
    }
    this.fs.copyTpl(
      this.templatePath('_styles.scss'),
      this.destinationPath(this.blockname + '.scss'), {
        rootClass: this.props.rootClass
      }
    );
  }
});
