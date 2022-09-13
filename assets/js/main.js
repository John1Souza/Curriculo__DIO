function updarteProfileInfo(profileData) {
    document.getElementById("profile.photo");

    
    

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
}

function updarteSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li><i class="fa-brands fa-jedi-order"></i>${skill}</li>`).join('')
}

function updarteHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" tittle="${skill.name}"></li>`).join('')
}

(async () => {
  const profileData = await fetchProfileData();
  updarteProfileInfo(profileData);
  updarteSoftSkills(profileData);
  updarteHardSkills(profileData);
})();
