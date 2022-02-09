/*Check if input string is valid phone number.
Accepted formats are:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
(and similar)
*/
function telephoneCheck(str) {
  /*
  Regular expression breaks up number pieces:
  555 is 3 digits and 5555 is four digits
  
  First part is: ((^1\s?)(\(\d{3}\)|\d{3}\-?)|(^\(\d{3}\)|^\d{3}))
  WHICH MEANS: Starts with 1 + optional space + either (555) or 555 + optional hyphen
  OR: Starts with (555) + optional hyphen or Starts with 555 + optional hyphen
  
  Second part is: (\-?|\s?)\d{3}
  WHICH MEANS: optional hyphen or optional space + 555
  
  Last part is: (\s?|\-?)\d{4}$/
  WHICH MEANS: optional hyphen or optional space + 5555 (and that's where it ends so it can't be longer than 9 or 10 digits)
  */
  
  let numTest = /((^1\s?)(\(\d{3}\)|\d{3}\-?)|(^\(\d{3}\)|^\d{3}))(\-?|\s?)\d{3}(\s?|\-?)\d{4}$/;

  console.log(numTest.test(str));
  return numTest.test(str);
}

//test case is false
telephoneCheck("55 55-55-555-5");
