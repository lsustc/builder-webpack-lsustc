const assert = require('assert');

describe('wenpack.base.js test case', () => {

    const baseConfig = require('../../lib/webpack.base');
    console.log(baseConfig);
    it('entry', () => {
        assert.equal(baseConfig.entry.index.indexOf('builder-webpack-lsustc/test/smoke/template/src/index/index.js') > -1, true);
        assert.equal(baseConfig.entry.search.indexOf('builder-webpack-lsusct/test/smoke/template/src/search/index.js') > -1, true);
    });
});
