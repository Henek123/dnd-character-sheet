//loading saved data on load and calculating skills bonus
window.addEventListener("DOMContentLoaded", () =>{
  //load proficency bonus
  inputLoad(proficencyBonus);
  for(let i = 0; i < 18; i++){
    inputLoad(skills[i]);
  };

  //load saving throws
  for(let i = 0; i < 6; i++){
    inputLoad(saveThrows[i]);
  }

  //load single inputs
  for(let i = 0; i < textInputs.length; i++){
      inputLoad(textInputs[i]);
  };
  
  loadAbilityScore(str, strBonus);
  skillBonus(strBonus, skills[3], skillsBonus[3], proficencyBonus);
  skillBonus(strBonus, saveThrows[0], saveThrowsBonus[0], proficencyBonus);
  
  loadAbilityScore(dex, dexBonus);
  skillBonus(dexBonus, saveThrows[1], saveThrowsBonus[1], proficencyBonus);
  skillBonus(dexBonus, skills[0], skillsBonus[0], proficencyBonus);
  skillBonus(dexBonus, skills[15], skillsBonus[15], proficencyBonus);
  skillBonus(dexBonus, skills[16], skillsBonus[16], proficencyBonus);
  skillBonus(dexBonus, saveThrows[1], saveThrowsBonus[1], proficencyBonus);
  
  loadAbilityScore(con, conBonus);
  skillBonus(conBonus, saveThrows[2], saveThrowsBonus[2], proficencyBonus);
  
  loadAbilityScore(wis, wisBonus);
  skillBonus(wisBonus, skills[1], skillsBonus[1], proficencyBonus);
  skillBonus(wisBonus, skills[6], skillsBonus[6], proficencyBonus);
  skillBonus(wisBonus, skills[9], skillsBonus[9], proficencyBonus);
  skillBonus(wisBonus, skills[11], skillsBonus[11], proficencyBonus);
  skillBonus(wisBonus, skills[17], skillsBonus[17], proficencyBonus);
  skillBonus(wisBonus, saveThrows[3], saveThrowsBonus[3], proficencyBonus);
  
  loadAbilityScore(int, intBonus);
  skillBonus(intBonus, skills[2], skillsBonus[2], proficencyBonus);
  skillBonus(intBonus, skills[5], skillsBonus[5], proficencyBonus);
  skillBonus(intBonus, skills[8], skillsBonus[8], proficencyBonus);
  skillBonus(intBonus, skills[10], skillsBonus[10], proficencyBonus);
  skillBonus(intBonus, skills[14], skillsBonus[14], proficencyBonus);
  skillBonus(intBonus, saveThrows[4], saveThrowsBonus[4], proficencyBonus);
  
  loadAbilityScore(cha, chaBonus);
  skillBonus(chaBonus, skills[4], skillsBonus[4], proficencyBonus);
  skillBonus(chaBonus, skills[7], skillsBonus[7], proficencyBonus);
  skillBonus(chaBonus, skills[12], skillsBonus[12], proficencyBonus);
  skillBonus(chaBonus, skills[13], skillsBonus[13], proficencyBonus);
  skillBonus(chaBonus, saveThrows[5], saveThrowsBonus[5], proficencyBonus);
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
  skillBonus(strBonus, skills[3], skillsBonus[3], proficencyBonus);
  skillBonus(strBonus, saveThrows[0], saveThrowsBonus[0], proficencyBonus);
});

//reading dexterity and setting bonus
let dex = document.getElementById("dexterity");
let dexBonus = document.getElementById("dex-bonus");
dex.addEventListener("change", () => {
  abilityBonusValue(dex, dexBonus);
  skillBonus(dexBonus, skills[0], skillsBonus[0], proficencyBonus);
  skillBonus(dexBonus, skills[15], skillsBonus[15], proficencyBonus);
  skillBonus(dexBonus, skills[16], skillsBonus[16], proficencyBonus);
  skillBonus(dexBonus, saveThrows[0], saveThrowsBonus[0], proficencyBonus);
});

//reading constitution and setting bonus
let con = document.getElementById("constitution");
let conBonus = document.getElementById("con-bonus");
con.addEventListener("change", () => {
  abilityBonusValue(con, conBonus);
  skillBonus(conBonus, saveThrows[0], saveThrowsBonus[0], proficencyBonus);
});

//reading wisdom and setting bonus
let wis = document.getElementById("wisdom");
let wisBonus = document.getElementById("wis-bonus");
wis.addEventListener("change", () => {
  abilityBonusValue(wis, wisBonus);
  skillBonus(wisBonus, skills[1], skillsBonus[1], proficencyBonus);
  skillBonus(wisBonus, skills[6], skillsBonus[6], proficencyBonus);
  skillBonus(wisBonus, skills[9], skillsBonus[9], proficencyBonus);
  skillBonus(wisBonus, skills[11], skillsBonus[11], proficencyBonus);
  skillBonus(wisBonus, skills[17], skillsBonus[17], proficencyBonus);
  skillBonus(wisBonus, saveThrows[0], saveThrowsBonus[0], proficencyBonus);
});

//reading intelgence and setting bonus
let int = document.getElementById("inteligence");
let intBonus = document.getElementById("int-bonus");
int.addEventListener("change", () => {
  abilityBonusValue(int, intBonus);
  skillBonus(intBonus, skills[2], skillsBonus[2], proficencyBonus);
  skillBonus(intBonus, skills[5], skillsBonus[5], proficencyBonus);
  skillBonus(intBonus, skills[8], skillsBonus[8], proficencyBonus);
  skillBonus(intBonus, skills[10], skillsBonus[10], proficencyBonus);
  skillBonus(intBonus, skills[14], skillsBonus[14], proficencyBonus);
  skillBonus(intBonus, saveThrows[0], saveThrowsBonus[0], proficencyBonus);
});

//reading charisma and setting bonus
let cha = document.getElementById("charisma");
let chaBonus = document.getElementById("cha-bonus");
cha.addEventListener("change", () => {
  abilityBonusValue(cha, chaBonus);
  skillBonus(chaBonus, skills[4], skillsBonus[4], proficencyBonus);
  skillBonus(chaBonus, skills[7], skillsBonus[7], proficencyBonus);
  skillBonus(chaBonus, skills[12], skillsBonus[12], proficencyBonus);
  skillBonus(chaBonus, skills[13], skillsBonus[13], proficencyBonus);
  skillBonus(chaBonus, saveThrows[0], saveThrowsBonus[0], proficencyBonus);
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

//reading skills and proficency
let proficencyBonus = document.getElementById("proficiency");
let skillsBonus = document.querySelectorAll(".skill-bonus");
let skills = document.querySelectorAll(".skill");

//setting acrobatics bonus
skills[0].addEventListener("change", () =>{
    skillBonus(dexBonus, skills[0], skillsBonus[0], proficencyBonus);
});

//setting animal handling bonus
skills[1].addEventListener("change", () =>{
    skillBonus(wisBonus, skills[1], skillsBonus[1], proficencyBonus);
});

//setting arcana bonus
skills[2].addEventListener("change", () =>{
    skillBonus(intBonus, skills[2], skillsBonus[2], proficencyBonus);
});

//setting athletics bonus
skills[3].addEventListener("change", () =>{
    skillBonus(strBonus, skills[3], skillsBonus[3], proficencyBonus);
});

//setting deception bonus
skills[4].addEventListener("change", () =>{
    skillBonus(chaBonus, skills[4], skillsBonus[4], proficencyBonus);
});

//setting history bonus
skills[5].addEventListener("change", () =>{
  skillBonus(intBonus, skills[5], skillsBonus[5], proficencyBonus);
});

//setting insight bonus
skills[6].addEventListener("change", () =>{
    skillBonus(wisBonus, skills[6], skillsBonus[6], proficencyBonus);
});

//setting intimidation bonus
skills[7].addEventListener("change", () =>{
    skillBonus(chaBonus, skills[7], skillsBonus[7], proficencyBonus);
});

//setting invegistation bonus
skills[8].addEventListener("change", () =>{
    skillBonus(intBonus, skills[8], skillsBonus[8], proficencyBonus);
});

//setting medicine bonus
skills[9].addEventListener("change", () =>{
    skillBonus(wisBonus, skills[9], skillsBonus[9], proficencyBonus);
});

//setting nature bonus
skills[10].addEventListener("change", () =>{
    skillBonus(intBonus, skills[10], skillsBonus[10], proficencyBonus);
});

//setting preception bonus
skills[11].addEventListener("change", () =>{
    skillBonus(wisBonus, skills[11], skillsBonus[11], proficencyBonus);
});

//setting performance bonus
skills[12].addEventListener("change", () =>{
    skillBonus(chaBonus, skills[12], skillsBonus[12], proficencyBonus);
});

//setting persuasion bonus
skills[13].addEventListener("change", () =>{
    skillBonus(chaBonus, skills[13], skillsBonus[13], proficencyBonus);
});

//setting religion bonus
skills[14].addEventListener("change", () =>{
    skillBonus(intBonus, skills[14], skillsBonus[14], proficencyBonus);
});

//setting shleight of hand bonus
skills[15].addEventListener("change", () =>{
    skillBonus(dexBonus, skills[15], skillsBonus[15], proficencyBonus);
});

//setting stealth bonus
skills[16].addEventListener("change", () =>{
    skillBonus(dexBonus, skills[16], skillsBonus[16], proficencyBonus);
});

//setting survival bonus
skills[17].addEventListener("change", () =>{
    skillBonus(wisBonus, skills[17], skillsBonus[17], proficencyBonus);
});

//reading saving throws
let saveThrows = document.querySelectorAll(".saves");
let saveThrowsBonus = document.querySelectorAll(".saves-bonus");

//setting str save bonus
saveThrows[0].addEventListener("change", () => {
    skillBonus(strBonus, saveThrows[0], saveThrowsBonus[0], proficencyBonus);
})

//setting dex save bonus
saveThrows[1].addEventListener("change", () => {
    skillBonus(dexBonus, saveThrows[1], saveThrowsBonus[1], proficencyBonus);
})

//setting con save bonus
saveThrows[2].addEventListener("change", () => {
    skillBonus(conBonus, saveThrows[2], saveThrowsBonus[2], proficencyBonus);
})

//setting wis save bonus
saveThrows[3].addEventListener("change", () => {
    skillBonus(wisBonus, saveThrows[3], saveThrowsBonus[3], proficencyBonus);
})

//setting int save bonus
saveThrows[4].addEventListener("change", () => {
    skillBonus(intBonus, saveThrows[4], saveThrowsBonus[4], proficencyBonus);
})

//setting cha save bonus
saveThrows[5].addEventListener("change", () => {
    skillBonus(chaBonus, saveThrows[5], saveThrowsBonus[5], proficencyBonus);
})

//calculating and saving skill bonus and saving throws
const skillBonus = function(baseStatBonus, skill, skillBonus, proficency){
    let value;
    if(skill.checked){
      localStorage.setItem(skill.id, true);
      value = +baseStatBonus.textContent + +proficency.value;
      //console.log(value);
    } else{
        skill.checked = false;
      localStorage.removeItem(skill.id);
        value = +baseStatBonus.textContent;
    }
    skillBonus.value = value;
};
//loading skill bonus and saving throws
const loadSkillBonusProficency = function(skill){
  if(localStorage.getItem(skill.id) === "true"){
    skill.checked = true;
  }
}
//adding listener on profficency bonus change
proficencyBonus.addEventListener("change", () =>{
    skillBonus(dexBonus, skills[0], skillsBonus[0], proficencyBonus);
    skillBonus(wisBonus, skills[1], skillsBonus[1], proficencyBonus);
    skillBonus(intBonus, skills[2], skillsBonus[2], proficencyBonus);
    skillBonus(strBonus, skills[3], skillsBonus[3], proficencyBonus);
    skillBonus(chaBonus, skills[4], skillsBonus[4], proficencyBonus);
    skillBonus(intBonus, skills[5], skillsBonus[5], proficencyBonus);
    skillBonus(wisBonus, skills[6], skillsBonus[6], proficencyBonus);
    skillBonus(chaBonus, skills[7], skillsBonus[7], proficencyBonus);
    skillBonus(intBonus, skills[8], skillsBonus[8], proficencyBonus);
    skillBonus(wisBonus, skills[9], skillsBonus[9], proficencyBonus);
    skillBonus(intBonus, skills[10], skillsBonus[10], proficencyBonus);
    skillBonus(wisBonus, skills[11], skillsBonus[11], proficencyBonus);
    skillBonus(chaBonus, skills[12], skillsBonus[12], proficencyBonus);
    skillBonus(chaBonus, skills[13], skillsBonus[13], proficencyBonus);
    skillBonus(intBonus, skills[14], skillsBonus[14], proficencyBonus);
    skillBonus(dexBonus, skills[15], skillsBonus[15], proficencyBonus);
    skillBonus(dexBonus, skills[16], skillsBonus[16], proficencyBonus);
    skillBonus(wisBonus, skills[17], skillsBonus[17], proficencyBonus);
    skillBonus(strBonus, saveThrows[0], saveThrowsBonus[0], proficencyBonus);
    skillBonus(dexBonus, saveThrows[1], saveThrowsBonus[1], proficencyBonus);
    skillBonus(conBonus, saveThrows[2], saveThrowsBonus[2], proficencyBonus);
    skillBonus(wisBonus, saveThrows[3], saveThrowsBonus[3], proficencyBonus);
    skillBonus(intBonus, saveThrows[4], saveThrowsBonus[4], proficencyBonus);
    skillBonus(chaBonus, saveThrows[5], saveThrowsBonus[5], proficencyBonus);
    proficencyBonusSave(proficencyBonus);
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
  
let example = document.querySelectorAll(".spell-lvl-1");
//console.log(example);
})

const createCantripInput = function(num){
  let div = document.createElement("div");
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
    parent.appendChild(div.cloneNode(true));
    //console.log(i);
  }
  return;
};
let example = document.querySelector(".spell-lvl-1");
//console.log(example);