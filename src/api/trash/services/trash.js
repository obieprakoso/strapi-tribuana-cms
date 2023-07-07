'use strict';

/**
 * trash service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trash.trash');
