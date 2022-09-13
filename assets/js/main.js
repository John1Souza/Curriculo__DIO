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

(async () => {
  const profileData = await fetchProfileData();
  updarteProfileInfo(profileData);
})();
