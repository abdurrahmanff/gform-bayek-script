const cheerio = require('cheerio');
const axios = require('axios');
const answers = require('./answers');

const getQuestions = async (url) => {
  const response = await axios.get(url);
  const page = cheerio.load(response.data);
  const content = page('body script').text();

  const questionStringsRaw = content.match(/[,]["][\w\s\/(),]+["][,]/g);
  const questionStrings = questionStringsRaw
    .map((question) => question.replaceAll(',', '').replaceAll('"', ''))
    .splice(0, questionStringsRaw.length - 2);

  const questionIdsRaw = content.match(/(?<=\[\[)(\d+)/g);
  const questionIds = questionIdsRaw.map((id) => 'entry.' + id).splice(1);

  let questionsObject = {};
  for (let i = 0; i < questionIds.length; i++) {
    questionsObject[questionStrings[i]] = questionIds[i];
  }
  return questionsObject;
};

async function adjustUrl(url, answers) {
  const questionsObject = await getQuestions(url);
  const questions = Object.keys(questionsObject);

  let answersObject = {};
  questions.forEach((question) => {
    if (answers[question] !== '') {
      answersObject[questionsObject[question]] = answers[question];
    }
  });

  const params = new URLSearchParams(answersObject).toString();

  const finalUrl = url.replace('viewform', 'formResponse') + '&' + params;
  return finalUrl;
}

async function submitForm(finalUrl) {
  try {
    const response = await fetch(finalUrl);
    if (response.status == 200) {
      console.log('Success');
    } else {
      throw new Error(response.statusText);
    }
  } catch (e) {
    console.log(e.message);
  }
}

function runAtSpecificTime(targetTime, callback) {
  const currentTime = new Date().getTime();
  const targetTimeInMillis = new Date(targetTime).getTime();

  const delay = targetTimeInMillis - currentTime;
  setTimeout(callback, delay);
}

const main = async () => {
  const url =
    'https://docs.google.com/forms/d/e/1FAIpQLSffIWgmhdjI_7yrFErgS_zeYahwF7I7n2sRSRYztolUDj-CzA/viewform?usp=sf_link';

  let finalUrls = [];

  for (let answer of answers) {
    finalUrls.push(await adjustUrl(url, answer));
  }

  const targetTime = '2023-07-30T07:26:30'; // Replace with your desired date and time
  runAtSpecificTime(targetTime, async () => {
    for (let finalUrl of finalUrls) {
      submitForm(finalUrl);
    }
  });
};

main();
