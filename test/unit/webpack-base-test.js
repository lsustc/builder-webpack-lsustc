const assert = require('assert');

describe('wenpack.base.js test case', () => {

    const baseConfig = require('../../lib/webpack.base');
    console.log(baseConfig);
    it('entry', () => {
        assert.equal(baseConfig.entry.index.includes('builder-webpack-lsustc/test/smoke/template/src/index/index.js'), true);
        assert.equal(baseConfig.entry.search.includes('builder-webpack-lsusct/test/smoke/template/src/search/index.js'), true);
    });
});
