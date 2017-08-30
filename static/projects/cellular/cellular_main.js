/** Program code for the Cellular Automata simulation.
 * By Robin Hu
 *
 */

var getProcessingInstance = function() {
	return Processing.getInstanceById("main_canvas");
};
var helper = {
	getElem: function(id) {
		return document.getElementById(id);
	}
};

//Initialize Event Handlers
var initEventHandlers = function() {
	helper.getElem('btn_start').addEventListener('click', function() {
		getProcessingInstance().loop();
	});

	helper.getElem('btn_stop').addEventListener('click', function() {
		getProcessingInstance().noLoop();
	});

	helper.getElem('btn_clear').addEventListener('click', function() {
		getProcessingInstance().clearWorld();
	});

	helper.getElem('btn_random').addEventListener('click', function() {
		getProcessingInstance().randomizeWorld();
	});

	var ruleInput = helper.getElem('txt_rule');

	var applyRule = function() {
		var rule = ruleInput.value;
		getProcessingInstance().parseRule(rule);
	};

	helper.getElem('rule_selection').addEventListener('change', function() {
		ruleInput.value = this.value;
		applyRule()
	});

	ruleInput.addEventListener('change', function() {
		applyRule();
	});

};

(function() {
	initEventHandlers();
})();