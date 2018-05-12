'use strict'
var sigUtil = require('eth-sig-util');

module.exports = {
    endpoint: '',
    isError: false,
    /**
     * Function to initialize the vibranium library
     * @param  {} endpoint
     */
    init: function (endpoint) {
        this.endpoint = endpoint;
        this.testEndpoint(endpoint);
    },

    /**
     * function to test end point connection
     * @param  {} endpoint
     */
    testEndpoint: function (endpoint) {
        console.warn("VIBRANIUM: CONNECTION FAILED TO ", endpoint);
        console.info("VIBRANIUM: CONNECTION SUCCESS TO ", endpoint);
    },

    /**
     * function to signTransaction using private
     * @param  {string} method
     * @param  {Array of Object} params { type, name, value }
     * @param  {string} privateKey
     */
    signTransaction: function (method, params, privateKey) {
        var methodString = '@_METHOD_' + method;
        var paramsString = '@_PARAMS_' + JSON.stringify(params);

        var digitalSignature = methodString + paramsString;

        var digitalSignature = signUtil.typedSignatureHash(digitalSignature);

        return digitalSignature;
    },

    /**
     * Function to send transaction to 
     * @param  {string} userPublicKey
     * @param  {string} method
     * @param  {array} param
     * @param  {string} digitalSignature
     */
    sendTransaction: function (userPublicKey, method, param, digitalSignature) {
        
    }

}