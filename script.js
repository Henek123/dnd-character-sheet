//loading saved data on load and calculating skills bonus
window.addEventListener("DOMContentLoaded", () =>{
  //load proficiency bonus
  inputLoad(proficiencyBonus);
  for(let i = 0; i < 18; i++){
    loadCheckbox(skills[i]);
  };

  //load saving throws
  for(let i = 0; i < 6; i++){
    loadCheckbox(saveThrows[i]);
  }

  //load single inputs
  for(let i = 0; i < textInputs.length; i++){
      inputLoad(textInputs[i]);
  };
  
  loadAbilityScore(str, strBonus);
  skillBonus(strBonus, skills[3], skillsBonus[3], proficiencyBonus);
  skillBonus(strBonus, saveThrows[0], saveThrowsBonus[0], proficiencyBonus);
  
  loadAbilityScore(dex, dexBonus);
  skillBonus(dexBonus, saveThrows[1], saveThrowsBonus[1], proficiencyBonus);
  skillBonus(dexBonus, skills[0], skillsBonus[0], proficiencyBonus);
  skillBonus(dexBonus, skills[15], skillsBonus[15], proficiencyBonus);
  skillBonus(dexBonus, skills[16], skillsBonus[16], proficiencyBonus);
  skillBonus(dexBonus, saveThrows[1], saveThrowsBonus[1], proficiencyBonus);
  
  loadAbilityScore(con, conBonus);
  skillBonus(conBonus, saveThrows[2], saveThrowsBonus[2], proficiencyBonus);
  
  loadAbilityScore(wis, wisBonus);
  skillBonus(wisBonus, skills[1], skillsBonus[1], proficiencyBonus);
  skillBonus(wisBonus, skills[6], skillsBonus[6], proficiencyBonus);
  skillBonus(wisBonus, skills[9], skillsBonus[9], proficiencyBonus);
  skillBonus(wisBonus, skills[11], skillsBonus[11], proficiencyBonus);
  skillBonus(wisBonus, skills[17], skillsBonus[17], proficiencyBonus);
  skillBonus(wisBonus, saveThrows[3], saveThrowsBonus[3], proficiencyBonus);
  
  loadAbilityScore(int, intBonus);
  skillBonus(intBonus, skills[2], skillsBonus[2], proficiencyBonus);
  skillBonus(intBonus, skills[5], skillsBonus[5], proficiencyBonus);
  skillBonus(intBonus, skills[8], skillsBonus[8], proficiencyBonus);
  skillBonus(intBonus, skills[10], skillsBonus[10], proficiencyBonus);
  skillBonus(intBonus, skills[14], skillsBonus[14], proficiencyBonus);
  skillBonus(intBonus, saveThrows[4], saveThrowsBonus[4], proficiencyBonus);
  
  loadAbilityScore(cha, chaBonus);
  skillBonus(chaBonus, skills[4], skillsBonus[4], proficiencyBonus);
  skillBonus(chaBonus, skills[7], skillsBonus[7], proficiencyBonus);
  skillBonus(chaBonus, skills[12], skillsBonus[12], proficiencyBonus);
  skillBonus(chaBonus, skills[13], skillsBonus[13], proficiencyBonus);
  skillBonus(chaBonus, saveThrows[5], saveThrowsBonus[5], proficiencyBonus);
});

//reading saved stats
const loadAbilityScore = function(ability, abilityBonus){
  if(localStorage.getItem(ability.id) !== null){
    ability.value = localStorage.getItem(ability.id);
  }
  abilityBonusValue(ability, abilityBonus);
  return;
}

//reading strength and setting bonus
let str = document.getElementById("strength");
let strBonus = document.getElementById("str-bonus");
str.addEventListener("change", () => {
  abilityBonusValue(str, strBonus);
  skillBonus(strBonus, skills[3], skillsBonus[3], proficiencyBonus);
  skillBonus(strBonus, saveThrows[0], saveThrowsBonus[0], proficiencyBonus);
});

//reading dexterity and setting bonus
let dex = document.getElementById("dexterity");
let dexBonus = document.getElementById("dex-bonus");
dex.addEventListener("change", () => {
  abilityBonusValue(dex, dexBonus);
  skillBonus(dexBonus, skills[0], skillsBonus[0], proficiencyBonus);
  skillBonus(dexBonus, skills[15], skillsBonus[15], proficiencyBonus);
  skillBonus(dexBonus, skills[16], skillsBonus[16], proficiencyBonus);
  skillBonus(dexBonus, saveThrows[1], saveThrowsBonus[1], proficiencyBonus);
});

//reading constitution and setting bonus
let con = document.getElementById("constitution");
let conBonus = document.getElementById("con-bonus");
con.addEventListener("change", () => {
  abilityBonusValue(con, conBonus);
  skillBonus(conBonus, saveThrows[2], saveThrowsBonus[2], proficiencyBonus);
});

//reading wisdom and setting bonus
let wis = document.getElementById("wisdom");
let wisBonus = document.getElementById("wis-bonus");
wis.addEventListener("change", () => {
  abilityBonusValue(wis, wisBonus);
  skillBonus(wisBonus, skills[1], skillsBonus[1], proficiencyBonus);
  skillBonus(wisBonus, skills[6], skillsBonus[6], proficiencyBonus);
  skillBonus(wisBonus, skills[9], skillsBonus[9], proficiencyBonus);
  skillBonus(wisBonus, skills[11], skillsBonus[11], proficiencyBonus);
  skillBonus(wisBonus, skills[17], skillsBonus[17], proficiencyBonus);
  skillBonus(wisBonus, saveThrows[3], saveThrowsBonus[3], proficiencyBonus);
});

//reading intelgence and setting bonus
let int = document.getElementById("inteligence");
let intBonus = document.getElementById("int-bonus");
int.addEventListener("change", () => {
  abilityBonusValue(int, intBonus);
  skillBonus(intBonus, skills[2], skillsBonus[2], proficiencyBonus);
  skillBonus(intBonus, skills[5], skillsBonus[5], proficiencyBonus);
  skillBonus(intBonus, skills[8], skillsBonus[8], proficiencyBonus);
  skillBonus(intBonus, skills[10], skillsBonus[10], proficiencyBonus);
  skillBonus(intBonus, skills[14], skillsBonus[14], proficiencyBonus);
  skillBonus(intBonus, saveThrows[4], saveThrowsBonus[4], proficiencyBonus);
});

//reading charisma and setting bonus
let cha = document.getElementById("charisma");
let chaBonus = document.getElementById("cha-bonus");
cha.addEventListener("change", () => {
  abilityBonusValue(cha, chaBonus);
  skillBonus(chaBonus, skills[4], skillsBonus[4], proficiencyBonus);
  skillBonus(chaBonus, skills[7], skillsBonus[7], proficiencyBonus);
  skillBonus(chaBonus, skills[12], skillsBonus[12], proficiencyBonus);
  skillBonus(chaBonus, skills[13], skillsBonus[13], proficiencyBonus);
  skillBonus(chaBonus, saveThrows[5], saveThrowsBonus[5], proficiencyBonus);
});

//calculating and saving ability score bonus
const abilityBonusValue = function(ability, abilityBonus){
  if(ability.value){
    abilityBonus.textContent = Math.floor((ability.value - 10) / 2);
  } else{
    abilityBonus.textContent = "";
  }
  saveAbility(ability);
};
//saving ability score bonus
const saveAbility = function(ability){
  if(localStorage.getItem(ability.id) !== ability.value){
    localStorage.setItem(ability.id, ability.value)
  }
}

//reading skills and proficiency
let proficiencyBonus = document.getElementById("proficiency");
let skillsBonus = document.querySelectorAll(".skill-bonus");
let skills = document.querySelectorAll(".skill");

//setting acrobatics bonus
skills[0].addEventListener("change", () =>{
    skillBonus(dexBonus, skills[0], skillsBonus[0], proficiencyBonus);
});

//setting animal handling bonus
skills[1].addEventListener("change", () =>{
    skillBonus(wisBonus, skills[1], skillsBonus[1], proficiencyBonus);
});

//setting arcana bonus
skills[2].addEventListener("change", () =>{
    skillBonus(intBonus, skills[2], skillsBonus[2], proficiencyBonus);
});

//setting athletics bonus
skills[3].addEventListener("change", () =>{
    skillBonus(strBonus, skills[3], skillsBonus[3], proficiencyBonus);
});

//setting deception bonus
skills[4].addEventListener("change", () =>{
    skillBonus(chaBonus, skills[4], skillsBonus[4], proficiencyBonus);
});

//setting history bonus
skills[5].addEventListener("change", () =>{
  skillBonus(intBonus, skills[5], skillsBonus[5], proficiencyBonus);
});

//setting insight bonus
skills[6].addEventListener("change", () =>{
    skillBonus(wisBonus, skills[6], skillsBonus[6], proficiencyBonus);
});

//setting intimidation bonus
skills[7].addEventListener("change", () =>{
    skillBonus(chaBonus, skills[7], skillsBonus[7], proficiencyBonus);
});

//setting invegistation bonus
skills[8].addEventListener("change", () =>{
    skillBonus(intBonus, skills[8], skillsBonus[8], proficiencyBonus);
});

//setting medicine bonus
skills[9].addEventListener("change", () =>{
    skillBonus(wisBonus, skills[9], skillsBonus[9], proficiencyBonus);
});

//setting nature bonus
skills[10].addEventListener("change", () =>{
    skillBonus(intBonus, skills[10], skillsBonus[10], proficiencyBonus);
});

//setting preception bonus
skills[11].addEventListener("change", () =>{
    skillBonus(wisBonus, skills[11], skillsBonus[11], proficiencyBonus);
});

//setting performance bonus
skills[12].addEventListener("change", () =>{
    skillBonus(chaBonus, skills[12], skillsBonus[12], proficiencyBonus);
});

//setting persuasion bonus
skills[13].addEventListener("change", () =>{
    skillBonus(chaBonus, skills[13], skillsBonus[13], proficiencyBonus);
});

//setting religion bonus
skills[14].addEventListener("change", () =>{
    skillBonus(intBonus, skills[14], skillsBonus[14], proficiencyBonus);
});

//setting shleight of hand bonus
skills[15].addEventListener("change", () =>{
    skillBonus(dexBonus, skills[15], skillsBonus[15], proficiencyBonus);
});

//setting stealth bonus
skills[16].addEventListener("change", () =>{
    skillBonus(dexBonus, skills[16], skillsBonus[16], proficiencyBonus);
});

//setting survival bonus
skills[17].addEventListener("change", () =>{
    skillBonus(wisBonus, skills[17], skillsBonus[17], proficiencyBonus);
});

//reading saving throws
let saveThrows = document.querySelectorAll(".saves");
let saveThrowsBonus = document.querySelectorAll(".saves-bonus");

//setting str save bonus
saveThrows[0].addEventListener("change", () => {
    skillBonus(strBonus, saveThrows[0], saveThrowsBonus[0], proficiencyBonus);
})

//setting dex save bonus
saveThrows[1].addEventListener("change", () => {
    skillBonus(dexBonus, saveThrows[1], saveThrowsBonus[1], proficiencyBonus);
})

//setting con save bonus
saveThrows[2].addEventListener("change", () => {
    skillBonus(conBonus, saveThrows[2], saveThrowsBonus[2], proficiencyBonus);
})

//setting wis save bonus
saveThrows[3].addEventListener("change", () => {
    skillBonus(wisBonus, saveThrows[3], saveThrowsBonus[3], proficiencyBonus);
})

//setting int save bonus
saveThrows[4].addEventListener("change", () => {
    skillBonus(intBonus, saveThrows[4], saveThrowsBonus[4], proficiencyBonus);
})

//setting cha save bonus
saveThrows[5].addEventListener("change", () => {
    skillBonus(chaBonus, saveThrows[5], saveThrowsBonus[5], proficiencyBonus);
})

//calculating and saving skill bonus and saving throws
const skillBonus = function(baseStatBonus, skill, skillBonus, proficiency){
    let value;
    if(skill.checked){
      localStorage.setItem(skill.id, true);
      value = +baseStatBonus.textContent + +proficiency.value;
      //console.log(value);
    } else{
        skill.checked = false;
      localStorage.removeItem(skill.id);
        value = +baseStatBonus.textContent;
    }
    skillBonus.value = value;
};
//loading skill bonus and saving throws
const loadSkillBonusproficiency = function(skill){
  if(localStorage.getItem(skill.id) === "true"){
    skill.checked = true;
  }
}
//adding listener on profficency bonus change
proficiencyBonus.addEventListener("change", () =>{
    skillBonus(dexBonus, skills[0], skillsBonus[0], proficiencyBonus);
    skillBonus(wisBonus, skills[1], skillsBonus[1], proficiencyBonus);
    skillBonus(intBonus, skills[2], skillsBonus[2], proficiencyBonus);
    skillBonus(strBonus, skills[3], skillsBonus[3], proficiencyBonus);
    skillBonus(chaBonus, skills[4], skillsBonus[4], proficiencyBonus);
    skillBonus(intBonus, skills[5], skillsBonus[5], proficiencyBonus);
    skillBonus(wisBonus, skills[6], skillsBonus[6], proficiencyBonus);
    skillBonus(chaBonus, skills[7], skillsBonus[7], proficiencyBonus);
    skillBonus(intBonus, skills[8], skillsBonus[8], proficiencyBonus);
    skillBonus(wisBonus, skills[9], skillsBonus[9], proficiencyBonus);
    skillBonus(intBonus, skills[10], skillsBonus[10], proficiencyBonus);
    skillBonus(wisBonus, skills[11], skillsBonus[11], proficiencyBonus);
    skillBonus(chaBonus, skills[12], skillsBonus[12], proficiencyBonus);
    skillBonus(chaBonus, skills[13], skillsBonus[13], proficiencyBonus);
    skillBonus(intBonus, skills[14], skillsBonus[14], proficiencyBonus);
    skillBonus(dexBonus, skills[15], skillsBonus[15], proficiencyBonus);
    skillBonus(dexBonus, skills[16], skillsBonus[16], proficiencyBonus);
    skillBonus(wisBonus, skills[17], skillsBonus[17], proficiencyBonus);
    skillBonus(strBonus, saveThrows[0], saveThrowsBonus[0], proficiencyBonus);
    skillBonus(dexBonus, saveThrows[1], saveThrowsBonus[1], proficiencyBonus);
    skillBonus(conBonus, saveThrows[2], saveThrowsBonus[2], proficiencyBonus);
    skillBonus(wisBonus, saveThrows[3], saveThrowsBonus[3], proficiencyBonus);
    skillBonus(intBonus, saveThrows[4], saveThrowsBonus[4], proficiencyBonus);
    skillBonus(chaBonus, saveThrows[5], saveThrowsBonus[5], proficiencyBonus);
    inputSave(proficiencyBonus);
});

//loading and saving single inputs
const inputSave = function(input){
  localStorage.setItem(input.id, input.value);
  return;
}
const inputLoad = function(input){
  if(localStorage.getItem(input.id) !== null){
    input.value = localStorage.getItem(input.id);
  }
  return;
};
let characterName = document.querySelector("#char-name")
characterName.addEventListener("change", () => {
  inputSave(characterName);
});
//loading checkbox inputs
const loadCheckbox = function(input){
  if(localStorage.getItem(input.id) !== null){
    input.checked = true;
  }
  return;
};

//saving checkbox input
const saveCheckbox = function(input){
  if(input.checked === true){
    localStorage.setItem(input.id, true);
  } else{
    localStorage.removeItem(input.id, true);
  }
};

//testing

let textInputs = document.querySelectorAll(".text-input");
for(let i = 0; i < textInputs.length; i++){
  textInputs[i].addEventListener("change", () => {
    inputSave(textInputs[i]);
  })
};

document.addEventListener("DOMContentLoaded", () => {
  inputLoad(characterName);
  createCantripInput(8);
  createSpellInput(1, 12);
  createSpellInput(2, 13);
  createSpellInput(3, 13);
  createSpellInput(4, 13);
  createSpellInput(5, 9);
  createSpellInput(6, 9);
  createSpellInput(7, 9);
  createSpellInput(8, 7);
  createSpellInput(9, 7);
  
//saving and loading circle 1 prepared mark
  let circle1Prepared = document.querySelectorAll(".prepared-1");
  for(let i = 0; i < circle1Prepared.length; i++){
    circle1Prepared[i].addEventListener("change", () => {
      saveCheckbox(circle1Prepared[i]);
      });
    };
   for(let i = 0; i < circle1Prepared.length; i++){
      loadCheckbox(circle1Prepared[i]);
   };
//saving and loading circle 1 spells
  // let circle1Spells = document.querySelectorAll(".spell-lvl-1");
  // for(let i = 0; i < circle1Spells.length; i++){
  //   circle1Spells[i].addEventListener("change", () => {
  //     inputSave(circle1Spells[i]);
  //     });
  //   };
  //  for(let i = 0; i < circle1Spells.length; i++){
  //     inputLoad(circle1Spells[i]);
  //  };
  
  //reding spells input
  let spellCircles = [];
  for(let spellLevel = 1; spellLevel < 10; spellLevel++){
   spellCircles.push(document.querySelectorAll(`.spell-lvl-${spellLevel}`));
  };
  
  //loading and saving spells
  for(let spellLevel = 0; spellLevel < 9; spellLevel++){
    for(let spellNumber = 0; spellNumber < spellCircles[spellLevel].length; spellNumber++){
         spellCircles[spellLevel][spellNumber].addEventListener("change", () => {
       inputSave(spellCircles[spellLevel][spellNumber]);
       });
     };
    for(let spellNumber = 0; spellNumber < spellCircles[spellLevel].length; spellNumber++){
       inputLoad(spellCircles[spellLevel][spellNumber]);
    }
  }
  
  
  //reding prepared spells checkbox
  let spellCirclesPrepared = [];
  for(let spellLevel = 1; spellLevel < 10; spellLevel++){
   spellCirclesPrepared.push(document.querySelectorAll(`.prepared-${spellLevel}`));
  };
  
  //loading and saving prepared spells checkbox
  for(let spellLevel = 0; spellLevel < 9; spellLevel++){
    for(let spellNumber = 0; spellNumber < spellCirclesPrepared[spellLevel].length; spellNumber++){
         spellCirclesPrepared[spellLevel][spellNumber].addEventListener("change", () => {
       saveCheckbox(spellCirclesPrepared[spellLevel][spellNumber]);
       });
     };
    for(let spellNumber = 0; spellNumber < spellCirclesPrepared[spellLevel].length; spellNumber++){
       loadCheckbox(spellCirclesPrepared[spellLevel][spellNumber]);
    }
  }
});


const createCantripInput = function(num){
  let div = document.createElement("div");
  div.classList.add("flex-row-nowrap");
  div.classList.add("center");
  let input = document.createElement("input");
  input.classList.add(`cantrip`)
  div.append(input)
  let parent = document.querySelector(`.cantrips`);
  //console.log(circle);
  for(let i = 0; i < num; i++){
    parent.appendChild(div.cloneNode(true));
    //console.log(i);
  }
  return;
};

const createSpellInput = function(circle, num){
  let div = document.createElement("div");
  div.classList.add("flex-row-nowrap");
  div.classList.add("full-width");
  div.classList.add("center");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add(`prepared-${circle}`);
  let input = document.createElement("input");
  input.classList.add(`spell-lvl-${circle}`);
  input.classList.add(`full-width`);
  div.append(checkbox, input);
  let parent = document.querySelector(`.circle-${circle}`);
  //console.log(circle);
  for(let i = 0; i < num; i++){
    input.id = `spell-lvl-${circle}-${i}`
    checkbox.id = `prepared-${circle}-${i}`
    parent.appendChild(div.cloneNode(true));
    //console.log(i);
  }
  return;
};

