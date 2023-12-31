const cheerio = require('cheerio');
const axios = require('axios');
const { answers, baseUrl, targetTime, questionCount } = require('./data');

const getQuestions = async (url, questionCount) => {
  const response = await axios.get(url);
  const page = cheerio.load(response.data);
  const content = page('body script').text();

  const questionStringsRaw = content.match(/[,]["][\w\s\/(),-.]+["][,]/g);
  const questionStrings = questionStringsRaw
    .map((question) => question.replaceAll(',', '').replaceAll('"', '').trim())
    .splice(0, questionCount);

  const questionIdsRaw = content.match(/(?<=\[\[)(\d+)/g);
  const questionIds = questionIdsRaw
    .map((id) => 'entry.' + id)
    .splice(1, questionCount);

  let questionsObject = {};
  for (let i = 0; i < questionIds.length; i++) {
    questionsObject[questionStrings[i]] = questionIds[i];
  }

  return questionsObject;
};

async function adjustUrl(url, answers, questionCount) {
  const questionsObject = await getQuestions(url, questionCount);
  const questions = Object.keys(questionsObject);

  let answersObject = {};
  questions.forEach((question) => {
    if (answers[question] !== '') {
      answersObject[questionsObject[question]] = answers[question];
    }
  });

  const params = new URLSearchParams(answersObject).toString();

  const finalUrl =
    url.split('?')[0].replace('viewform', 'formResponse') + '?' + params;
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
  let finalUrls = [];

  for (let answer of answers) {
    finalUrls.push(await adjustUrl(baseUrl, answer, questionCount));
  }

  runAtSpecificTime(targetTime, async () => {
    for (let finalUrl of finalUrls) {
      submitForm(finalUrl);
    }
  });
};

main();
