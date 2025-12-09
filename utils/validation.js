const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
const isValidUrl = (longUrl) => {
  const urlformate =
   /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g
  return  urlformate.test(longUrl);
};

module.exports = { isValidEmail,isValidUrl };

 

// This code is contributed by Rahul Chauhan