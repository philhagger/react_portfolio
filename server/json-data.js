const casual = require('casual');

casual.define('user', () => {
  return {
    id: casual.uuid,
    dob: casual.unix_time,
    firstName: casual.first_name,
    lastName: casual.last_name,
    email: casual.email,
    name: () => {
      return `${this.firstName} ${this.lastName}`;
    },
    active: casual.boolean
  };
});

module.exports = () => {
  const data = { users: [] };
  for (let i = 0; i < 1000; i++) {
    data.users.push(casual.user);
  }
  return data;
};
