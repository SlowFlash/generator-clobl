goog.provide('<%= blockNamespace %>.<%= blockName %>');

goog.require('aa.lActiveAge.iPage.Page');



/**

 * @param {cl.iControl.View} view
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {aa.lActiveAge.iPage.Page}
 */
<%= blockNamespace %>.<%= blockName %> = function(view, opt_domHelper) {
  goog.base(this, view, opt_domHelper);

};
goog.inherits(
    <%= blockNamespace %>.<%= blockName %>,
    aa.lActiveAge.iPage.Page
);

goog.scope(function() {

  var <%= blockName %> = <%= blockNamespace %>.<%= blockName %>,
      View = <%= blockNamespace %>.View;


  /**
   * @override
   * @param {Element} element
   */
  <%= blockName %>.prototype.decorateInternal = function(element) {
    goog.base(this, 'decorateInternal', element);
  };


  /**
   * @override
   */
  <%= blockName %>.prototype.enterDocument = function() {
    goog.base(this, 'enterDocument');
  };

});  // goog.scope
