const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
function isValidUrl(url) {
  const pattern = new RegExp(
    '^' +
       
      '(https?:\\/\\/)?' +
      '((([a-zA-Z0-9-]+)\\.)+[a-zA-Z]{2,})' +
      '(\\:[0-9]{1,5})?' +
      '(\\/.*)?' +
    '$'
  );
  return pattern.test(url);
}


module.exports = { isValidEmail,isValidUrl };
 
 
