'use strict';

import Chart from 'chart.js';

var helpers = Chart.helpers;

/**
 * Plugin based on discussion from Chart.js issue #2745.
 * @see https://github.com/chartjs/Chart.js/issues/2745
 */
Chart.defaults.global.plugins.axispadding = {
	top: 6,
	bottom: 0
};

Chart.plugins.register({
	id: 'axispadding',

	beforeInit: function(chart, options) {
		this.options = options;

		this.addPadding(chart.options.scales.xAxes, ['top', 'bottom']);
		this.addPadding(chart.options.scales.yAxes, ['left', 'right']);
	},
	
	addPadding: function(axes, positions) {
		var me = this;

		positions.forEach(function(position) {
			var inner = true;
			var axisBatch = axes.filter(function(axis) {
				return axis.display 
					&& axis.scaleLabel 
					&& axis.scaleLabel.display 
					&& axis.scaleLabel.labelString
					&& axis.position == position;
			});

			axisBatch.forEach(function(axis, idx) {
				var isInnerAxis = axisBatch.length > 1 && idx < axisBatch.length-1;
				if (isInnerAxis) {
					axis.scaleLabel.padding = me.options;
				}
			});
		});
	},
});
