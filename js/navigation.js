const listSectionLink = document.getElementById('listSectionLink');
const addNewSectionLink = document.getElementById('addNewSectionLink');
const contactSectionLink = document.getElementById('contactSectionLink');
const listSection = document.getElementById('listSection');
const addNewSection = document.getElementById('addNewSection');
const contactSection = document.getElementById('contactSection');

function getVisible(section) {
  section.style.display = 'block';
}

function getHidden(section) {
  section.style.display = 'none';
}

listSectionLink.addEventListener('click', () => {
  getVisible(listSection);
  getHidden(addNewSection);
  getHidden(contactSection);
});

addNewSectionLink.addEventListener('click', () => {
  getVisible(addNewSection);
  getHidden(listSection);
  getHidden(contactSection);
});

contactSectionLink.addEventListener('click', () => {
  getVisible(contactSection);
  getHidden(addNewSection);
  getHidden(listSection);
});
