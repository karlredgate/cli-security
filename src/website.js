
const LATEST_VERSION = {
    STAGING: -2,
    PRODUCTION: -1,
    LATEST: 0
};

const AKAMAI_ENV = {
    STAGING: 'STAGING',
    PRODUCTION: 'PRODUCTION'
};

function WebSite() {
}

WebSite.AKAMAI_ENV = Object.freeze(AKAMAI_ENV);
WebSite.LATEST_VERSION = Object.freeze(LATEST_VERSION);

module.exports = WebSite;
