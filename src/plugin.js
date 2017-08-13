'use strict';

import Chart from 'chart.js';

/**
 * Plugin based on discussion from Chart.js issue #4505
 * @see https://github.com/chartjs/Chart.js/issues/4505
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
			var axisBatch = axes.filter(function(axis) {
				return axis.display 
					&& axis.scaleLabel 
					&& axis.scaleLabel.display 
					&& axis.scaleLabel.labelString
					&& axis.position == position;
			});

			// axes are layed out from inner to outer axis
			axisBatch.forEach(function(axis, idx) {
				var isInnerAxis = axisBatch.length > 1 && idx < axisBatch.length-1;
				if (isInnerAxis) {
					axis.scaleLabel.padding = me.options;
				}
			});
		});
	},
});
