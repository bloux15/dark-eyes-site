function sinscrire() {
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const username = document.getElementById('username').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('password').value.trim();
  
    // Vérifier que tous les champs sont remplis
    if (!nom || !prenom || !username || !contact || !dob || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
  
    // Vérifier nom & prénom (au moins 4 lettres, pas de chiffre)
    const lettresSeulement = /^[A-Za-zÀ-ÿ\s\-]{4,}$/;
    if (!lettresSeulement.test(nom)) {
      alert("Le nom doit contenir au moins 4 lettres et aucun chiffre.");
      return;
    }
    if (!lettresSeulement.test(prenom)) {
      alert("Le prénom doit contenir au moins 4 lettres et aucun chiffre.");
      return;
    }
  
    // Vérifier username (au moins 4 caractères)
    if (username.length < 4) {
      alert("Le nom d'utilisateur doit contenir au moins 4 caractères.");
      return;
    }
  
    // Vérifier âge (10 ans ou +)
    const naissance = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - naissance.getFullYear();
    const monthDiff = today.getMonth() - naissance.getMonth();
    const dayDiff = today.getDate() - naissance.getDate();
    const isOldEnough = age > 10 || (age === 10 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));
  
    if (!isOldEnough) {
      alert("Vous devez avoir au moins 10 ans pour vous inscrire.");
      return;
    }
  
    // Vérifier e-mail ou numéro
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{8,}$/;
    if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
      alert("Veuillez entrer un e-mail ou un numéro de téléphone valide (au moins 8 chiffres).");
      return;
    }
  
    // Vérifier mot de passe (au moins 6 caractères)
    if (password.length < 6) {
      alert("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }
  
    // Si tout est OK
    alert("Inscription réussie !");
    window.location.href = "interface.html";
  }
  