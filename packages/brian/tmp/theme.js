/**
 * @freesewing/plugin-theme | v0.6.0
 * A freesewing plugin that provides a default theme
 * (c) 2018 Joost De Cock <joost@decock.org> (https://github.com/joostdecock)
 * @license MIT
 */
(this.freesewing = this.freesewing || {}),
  (this.freesewing.plugins = this.freesewing.plugins || {}),
  (this.freesewing.plugins.theme = (function() {
    "use strict";
    return {
      hooks: {
        preRenderSvg: function(e) {
          (this.style +=
            'path,circle,rect{fill:none;stroke:none}path{stroke:#000;stroke-opacity:1;stroke-width:.3;stroke-linecap:round;stroke-linejoin:round}.fabric{stroke-width:.6;stroke:#212121}.lining{stroke-width:.6;stroke:#ff5b77}.interfacing{stroke-width:.6;stroke:#64b5f6}.canvas{stroke-width:.6;stroke:#ff9000}.various{stroke-width:.6;stroke:#4caf50}.note{stroke-width:.4;stroke:#dd60dd}.fill-fabric{fill:#212121}.fill-lining{fill:#ff5b77}.fill-interfacing{fill:#64b5f6}.fill-canvas{fill:#ff9000}.fill-various{fill:#4caf50}.fill-note{fill:#dd69dd}text{font-size:5px;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;fill:#000;text-anchor:start;font-weight:200;dominant-baseline:ideographic}.text-xs{font-size:3px}.text-sm{font-size:4px}.text-lg{font-size:7px}.text-xl{font-size:9px}.text-xxl{font-size:12px}.center{text-anchor:middle}.right{text-anchor:end}.stroke-xs{stroke-width:.1}.stroke-sm{stroke-width:.2}.stroke-lg{stroke-width:.6}.stroke-xl{stroke-width:1}.stroke-xxl{stroke-width:2}.sa{stroke-dasharray:.4,.8}.help{stroke-width:.2;stroke-dasharray:15,1.5,1,1.5}.dotted{stroke-dasharray:.4,.8}.dashed{stroke-dasharray:1,1.5}.lashed{stroke-dasharray:6,6}.hidden{stroke:none;fill:none}'),
            (this.defs +=
              '<g id="notch"><circle cy="0" cx="0" r="1.4" class="fill-mark" /><circle cy="0" cx="0" r="2.8" class="stroke-mark stroke-xl" /></g>'),
            this.attributes.add("freesewing:plugin-theme", "0.6.0"),
            e();
        }
      }
    };
  })());
