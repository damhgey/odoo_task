odoo.define('pos_update.OrderReceiptUpdate', function(require) {
    'use strict';

    const OrderReceipt = require('point_of_sale.OrderReceipt');
    const Registries = require('point_of_sale.Registries');

    class OrderReceiptUpdate extends OrderReceipt {
        // OrderReceiptUpdate Component
    }

    OrderReceiptUpdate.template = 'OrderReceiptUpdate';

    Registries.Component.add(OrderReceiptUpdate);

    return OrderReceiptUpdate;
});