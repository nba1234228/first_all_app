import format from '../../src/util/format';
const expect = require('chai').expect;
// eslint-disable-next-line no-undef
describe('format unit test', function() {
    // eslint-disable-next-line no-undef
    it('parseTimestampToDatetime', function() {
        const result = format.parseTimestampToDatetime(1572248300000);
        console.log(result);
        expect(result).to.be.equal('2019-10-28 15:38:20');
    });
});
