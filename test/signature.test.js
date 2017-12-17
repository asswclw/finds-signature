const { expect } = require('chai'),
    signUtil = require('../lib/signature');

describe('test signature', function () {
    it('test get location', (done) => {
        const signRet = signUtil.sign({
            apiName: 'gpsp.point.locate',
            params: {
                bizType: 'general',
                entityNames: 'eid12345678',
                activeTime: '30',
                fields: `["lon","lat","gtm","altitude"]`,
            },
            timestamp: new Date().getTime(),
            sis: 'cf8c6883d6de0b19b660dddd216e253f3a04a28ce9c3ce90bb4414a3ad85f5be', //this is not exist
            sik: 'S020000Fk4I', //this is not exist
        });
        expect(signRet).to.be.a('String');
        done();
    });
});
