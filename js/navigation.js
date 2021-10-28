const listSectionLink = document.getElementById('listSectionLink');
const addNewSectionLink = document.getElementById('addNewSectionLink');
const contanctSectionLink = document.getElementById('contactSectionLink');
const listSection = document.getElementById('listSection');
const addNewSection = document.getElementById('addNewSection');
const contactSection = document.getElementById('contactSection');

function getVisible(section) {
  section.style.display = 'block';
}

function getHidden(section) {
  section.style.display = 'none';
}

listSectionLink.addEventListener('click', () => { getVisible(listSection); });
listSectionLink.addEventListener('click', () => { getHidden(addNewSection); });
listSectionLink.addEventListener('click', () => { getHidden(contactSection); });

addNewSectionLink.addEventListener('click', () => { getVisible(addNewSection); });
addNewSectionLink.addEventListener('click', () => { getHidden(listSection); });
addNewSectionLink.addEventListener('click', () => { getHidden(contactSection); });

contanctSectionLink.addEventListener('click', () => { getVisible(contactSection); });
contanctSectionLink.addEventListener('click', () => { getHidden(addNewSection); });
contanctSectionLink.addEventListener('click', () => { getHidden(listSection); });
