function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9EcNWhjLm/.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
    console.log(modelReady);
}
function gotResults(error,results)
{
    console.log('Got Result');
    if (error)
    {
        console.error(error);

    } 
}