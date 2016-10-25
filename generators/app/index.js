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
      default: this.appname
    }, {
      type: 'input',
      name: 'blockName',
      message: 'Название блока (напр. Header)',
      default: this.appname
    }, {
      type: 'confirm',
      name: 'isPage',
      message: 'Page?',
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
    var dir_control = '_control.js',
        dir_view = '_view.js',
        dir_template = '_template.soy';

    if (this.props.isPage) {
        dir_control = 'i-page/' + dir_control;
        dir_view = 'i-page/' + dir_view;
        dir_template = 'i-page/' + dir_template;
    } else {
        dir_control = 'default/' + dir_control;
        dir_view = 'default/' + dir_view;
        dir_template = 'default/' + dir_template;
    }

    this.fs.copyTpl(
        this.templatePath(dir_control),
        this.destinationPath(this.blockname + '.js'), {
            blockNamespace: this.props.blockNamespace,
            blockName: this.props.blockName
        }
    );
    this.fs.copyTpl(
        this.templatePath(dir_view),
        this.destinationPath('view.js'), {
            blockNamespace: this.props.blockNamespace,
            blockName: this.props.blockName,
            rootClass: this.blockname
        }
    );
    this.fs.copyTpl(
        this.templatePath(dir_template),
        this.destinationPath(this.blockname + '.soy'), {
            blockNamespace: this.props.blockNamespace,
            blockName: this.props.blockName.toLowerCase(),
            rootClass: this.blockname
        }
    );
    this.fs.copyTpl(
        this.templatePath('_styles.scss'),
        this.destinationPath(this.blockname + '.scss'), {
            rootClass: this.blockname
        }
    );
  }
});
