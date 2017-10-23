const serializeUser = user => {
  // create a copy of our user
  const newUser = Object.assign({}, user)

  // replace copy values
	newUser.name = (user.name.length > 10) ? `${user.name.slice(0, 7)}...` : user.name;
	newUser.date = user.date.toJSON();
  // serialize copy
	return JSON.stringify(newUser);
};

module.exports = serializeUser;
