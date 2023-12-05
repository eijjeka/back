'use strict';

/**
 * order-world service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::order-world.order-world');
