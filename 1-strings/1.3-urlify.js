const assertEqual = require("./1.0-helper");

const customSplice = (word, insertion, index) => {
  const frontPart = word.slice(0, index);
  const backPart = word.slice(index + 1);

  return frontPart + insertion + backPart;
};

const urlify = url => {
  let newUrl = url;
  let currSpaceIndex = url.indexOf(" ");

  while (currSpaceIndex !== -1) {
    newUrl = customSplice(newUrl, "%20", currSpaceIndex);
    currSpaceIndex = newUrl.indexOf(" ", currSpaceIndex + 1);
  }

  return newUrl;
};

//BONUS js built in solution
const url = "mr igor Packo";

assertEqual(url.split(" ").join("%20"), "mr%20igor%20Packo", "URLify string");

// manual algo
assertEqual(urlify(url), "mr%20igor%20Packo", "URLify string");

assertEqual(
  urlify("mortal kombat 10"),
  "mortal%20kombat%2010",
  "URLify string"
);

assertEqual(
  urlify("one two one two"),
  "one%20two%20one%20two",
  "URLify string"
);
