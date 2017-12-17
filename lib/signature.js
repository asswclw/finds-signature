/**
 * Created by chenliwei on 17/6/9.
 */


const crypto = require('crypto');
const qs = require('querystring');

/**
 * sign
 * @author asswclw
 * @date 2017/12/17
 * @param { String } apiName, finds api name
 * @param { Object } params, the params needed for the api
 * @param { timestamp } timestamp, current timestamp
 * @param { String } sis
 * @param { String } sik
 * @returns {*}
 */
exports.sign = function ({ apiName, params, timestamp, sis, sik }) {
    const signUrl = `/rest/${apiName}/sik/${sik}`;

    // generate signature
    const sign = crypto.createHmac("sha256", sis);
    sign.update(signUrl, 'utf8');// 必须使用utf8编码
    let paramNams = '';
    if (qs.stringify(params).length > 0) {
        paramNams = Object.keys(params);

        paramNams.sort();// 将url参数按照参数名称进行升序排序
        paramNams.forEach((name) => {
            sign.update(name, 'utf8');
            sign.update(params[name], 'utf8');
        });
    } else {
        console.log('have no params');
    }
    // 3.时间戳
    sign.update(`${timestamp}`, 'utf8');
    const sig = sign.digest('hex');

    return sig;
};

