{
    'name': "POS Update",
    'summary': """POS Update""",
    'description': """POS Update""",
    'author': 'Ahmed Elsayed Eldamhogy',
    'category': 'Point of Sale',
    'version': '16.0',
    'depends': ['point_of_sale'],
    'data': [
    ],
    'demo': [],

    'assets': {
        'point_of_sale.assets': [
            'pos_update/static/src/js/**/*',
            'pos_update/static/src/xml/**/*',
        ],

    },

    'installable': True,
    'auto_install': False,
}
