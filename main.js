function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'bark.gif';
    } else if (results[0].label == "Meowing") {
      img.src = 'meow.gif';
    } else{
      img.src = 'listen.gif';
    }
  }
}
