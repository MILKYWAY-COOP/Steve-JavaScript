const PRESENTATION_ID = '1CqfOGqcRBi-Y7NVYSTxcVCCj3UoebAQLZe38Qws1w3k';

const GeneratePresetationData = () => {
  let sheet = SpreadsheetApp.getActiveSheet();
  let StudentNames = getDataFromSheet(sheet);
  let slides = getSlides();
  writeDataToSlides(slides, StudentNames);
};

const getDataFromSheet = (sheet) => {
  let dataRange = sheet.getDataRange();
  let data = dataRange.getValues();
  data.shift(); //Used to get rid of headers. ie The first row.
  return data;
};

const getSlides = () => {
  let presentation = SlidesApp.openById(PRESENTATION_ID);
  let slides = presentation.getSlides();
  return slides;
};

const writeDataToSlides = (slides, StudentNames) => {
  let ds = slides[0];
  let Duplicate = true;
  if (Duplicate === true) {
    for (let i = 1; i < StudentNames.length; i++) {
      ds.duplicate();
      if (i === StudentNames.length) {
        Duplicate = false;
      }
    }
  }
  let nowSlides = getSlides();
  for (let index = 1; index <= StudentNames.length; index++) {
    let j = 0;
    nowSlides[index].replaceAllText(StudentNames[j], StudentNames[index]);
    j++;
  }
};
