'use strict';

/**
 * saving-money service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saving-money.saving-money');
