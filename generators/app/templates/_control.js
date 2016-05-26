goog.provide('<%= controlBlockProvide %>');

goog.require('cl.iControl.Control');
goog.require('goog.ui.Component');



/**
 * Pablo <%= blockDescriptionName %> block

 * @param {cl.iControl.View} view
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {cl.iControl.Control}
 */
<%= controlBlockProvide %> = function(view, opt_domHelper) {
  goog.base(this, view, opt_domHelper);

  this.setSupportedState(goog.ui.Component.State.ALL, false);
  this.setAllowTextSelection(false);

};
goog.inherits(<%= controlBlockProvide %>, cl.iControl.Control);

goog.scope(function() {

  var control = <%= controlBlockProvide %>;


  /**
   * List of <%= blockDescriptionName %> events
   * @enum {string}
   * @const
   */
  control.Event = {
  };


  /**
   * @override
   * @param {Element} element
   */
  control.prototype.decorateInternal = function(element) {
    goog.base(this, 'decorateInternal', element);
  };


  /**
   * @override
   */
  control.prototype.enterDocument = function() {
    goog.base(this, 'enterDocument');
  };

});  // goog.scope
