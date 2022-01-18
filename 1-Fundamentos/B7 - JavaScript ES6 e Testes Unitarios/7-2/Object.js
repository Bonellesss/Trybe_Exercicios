const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const newKey = (object, name, value) => object[name] = value

newKey(customer, 'lastname', 'Carlos');

console.log(customer);