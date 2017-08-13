# axispadding

[![npm](https://img.shields.io/npm/v/chartjs-plugin-axispadding.svg?style=flat-square)](https://npmjs.com/package/chartjs-plugin-axispadding)

[Chart.js](http://www.chartjs.org/) plugin to add axis scale label padding for inner axes. This ensures that axes and scale labels don't touch each other when using multiple axes per side of the chart.

![example](https://raw.githubusercontent.com/andig/chartjs-plugin-axispadding/master/docs/shot.png)

Requires [Chart.js](https://github.com/chartjs/Chart.js/releases) **2.7.0** or later.

## Configuration

To configure this plugin, you can simply add the following entries to your chart options:

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `plugins.axispadding` | `Object/Number` | `{top:6}` | The axispadding options (see `plugins.axispadding.*` options). Accepts a padding object or number.

> **Global options** can be change through `Chart.defaults.global.plugins.axispadding`, which by default will add a half line (6px) of top margin.

For example:

```
{
    plugins: {
        axispadding: {        // enabled by default
            top: 12,          // add 12px top margin
            bottom: 6,        // add 6px bottom margin
        }
    }
}
```

## Development

You first need to install node dependencies (requires [Node.js](https://nodejs.org/)):

```shell
> npm install
```

The following commands will then be available from the repository root:

```shell
> gulp build            // build dist files
> gulp build --watch    // build and watch for changes
> gulp lint             // perform code linting
> gulp package          // create an archive with dist files and samples
```

## License

chartjs-plugin-axispadding is available under the [MIT license](LICENSE.md).
