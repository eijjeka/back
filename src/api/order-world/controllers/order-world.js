'use strict';

/**
 * order-world controller
 */
const sendEmail = require('../../../helpers/sendEmail');

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::order-world.order-world',
  () => ({
    async create(ctx) {
      const { data, meta } = await super.create(ctx);
      const {
        category,
        product,
        phone,
        email,
        full_name,
        full_shipping_address,
        State_Province_zip_code,
      } = data.attributes;

      const emailTemplate = {
        from: 'YourRulesCorsets@ukr.net',
        to: 'YourRulesCorsets@ukr.net',
        subject: 'У вас є нове замовлення по Світу 😉',
        html: `<h3>Категорія: ${category}</h3>
              <p>Ім'я товару: ${product}</p>
              <p>Номере телефону: ${phone}</p>
              <p>Пошта замовника: ${email}</p>
              <p>Ім'я замовника: ${full_name}</p>
              <p>Адреса: ${full_shipping_address}</p>
              <p>Штат/Індекс: ${State_Province_zip_code}</p>
              `,
      };

      sendEmail(emailTemplate);

      return { data, meta };
    },
  }),
);
