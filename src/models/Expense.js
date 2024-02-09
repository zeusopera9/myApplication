import Realm from 'realm';

class Expense extends Realm.Object {}
Expense.schema = {
  name: 'Expense',
  primaryKey: 'id',
  properties: {
    id: { type: 'string', indexed: true },
    amount: { type: 'double' },
    description: { type: 'string' },
    date: { type: 'date' },
  },
};

export default new Realm({ schema: [Expense] });