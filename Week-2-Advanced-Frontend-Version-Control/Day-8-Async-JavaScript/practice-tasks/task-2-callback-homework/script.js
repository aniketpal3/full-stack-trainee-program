function doHomework(subject, callback) {

  console.log(
    `Homework done for ${subject}`
  );

  callback();
}

function finishedHomework() {

  console.log(
    "Now you can play games!"
  );

}

doHomework(
  "JavaScript",
  finishedHomework
);