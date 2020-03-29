import Vue from 'vue';
class Format {
    constructor() {
        this.date = new Date();
        // 数据库保存的东八区时间段，需要换算
        this.timezoneOffset = 8 * 3600 * 1000;
    }

    zero(val) {
        return val < 10 ? `0${val}` : val;
    }

    parseTimestampToDatetime(timestamp) {
        const ts = timestamp + this.timezoneOffset;
        this.date.setTime(ts);
        const year = this.date.getUTCFullYear();
        const month = this.date.getUTCMonth() + 1;
        const day = this.date.getUTCDate();
        const hour = this.date.getUTCHours();
        const minute = this.date.getUTCMinutes();
        const second = this.date.getUTCSeconds();
        return `${year}-${this.zero(month)}-${this.zero(day)} ${this.zero(hour)}:${this.zero(minute)}:${this.zero(second)}`;
    }
}
const format = new Format();
Vue.prototype.$format = format;
export default format;
