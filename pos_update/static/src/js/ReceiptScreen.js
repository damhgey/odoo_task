odoo.define('pos_update.ReceiptScreen', function(require) {
    'use strict';

    const ReceiptScreen = require('point_of_sale.ReceiptScreen');
    const Registries = require('point_of_sale.Registries');

    const ReceiptScreenUpdate = ReceiptScreen =>
        class extends ReceiptScreen {

            async printReceiptUpdate() {
                const isPrinted = await this._printReceipt();
                if (isPrinted) {
                    this.currentOrder._printed = true;
                }
            }

            //@override
            async printReceipt() {
                document.getElementById('pos_receipt_container_update').className = "pos-receipt-container-update";
                await super.printReceipt(...arguments);
                document.getElementById('pos_receipt_container_update').className = "pos-receipt-container";
                return true;
            }
        };

    Registries.Component.extend(ReceiptScreen, ReceiptScreenUpdate);

    return ReceiptScreenUpdate;
});
