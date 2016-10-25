goog.provide('<%= blockNamespace %>.View');

goog.require('aa.lActiveAge.iPage.View');



/**
 * View for <%= blockNamespace %> block
 *
 * @param {Object=} opt_params
 * @param {string=} opt_type
 * @param {String=} opt_modifier
 * @constructor
 * @extends {aa.lActiveAge.iPage.View}
 */
<%= blockNamespace %>.View = function(opt_params, opt_type, opt_modifier) {
  goog.base(this, opt_params, opt_type, opt_modifier);
};
goog.inherits(
    <%= blockNamespace %>.View,
    aa.lActiveAge.iPage.View
);

goog.scope(function() {

  var View = <%= blockNamespace %>.View;


  /**
   * @override
   * @param {Element} element
   */
  View.prototype.decorateInternal = function(element) {
    goog.base(this, 'decorateInternal', element);
  };


  /**
   * @override
   */
  View.prototype.enterDocument = function() {
    goog.base(this, 'enterDocument');
  };

});  // goog.scope
