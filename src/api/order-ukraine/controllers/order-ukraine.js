'use strict';

/**
 * order-ukraine controller
 */
const sendEmail = require('../../../helpers/sendEmail');

const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController(
  'api::order-ukraine.order-ukraine',
  ({ strapi }) => ({
    // some custom logic for POST request
    async create(ctx) {
      const { data, meta } = await super.create(ctx);
      const { category, product, phone, email, full_name, city } =
        data.attributes;

      const emailTemplate = {
        from: 'YourRulesCorsets@ukr.net',
        to: 'YourRulesCorsets@ukr.net',
        subject: 'У вас є нове замовлення по Україні',
        html: `<h3>Категорія: ${category}</h3>
              <p>Ім'я товару: ${product}</p>
              <p>Номере телефону: ${phone}</p>
              <p>Пошта замовника: ${email}</p>
              <p>Ім'я замовника: ${full_name}</p>
              <p>Адрес: ${city}</p>
              `,
      };

      sendEmail(emailTemplate);

      return { data, meta };
    },
  }),
);
