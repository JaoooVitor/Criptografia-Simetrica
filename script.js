// Função para criptografar a mensagem
function encryptMessage() {
    const message = document.getElementById("message").value;
    const key = document.getElementById("key").value;
    
    if (!message || !key) {
      alert("Por favor, preencha tanto a mensagem quanto a chave.");
      return;
    }
    
    // Criptografa usando AES com a chave fornecida
    const encrypted = CryptoJS.AES.encrypt(message, key).toString();
    document.getElementById("result").value = encrypted;
  }
  
  // Função para descriptografar a mensagem
  function decryptMessage() {
    const encryptedMessage = document.getElementById("message").value;
    const key = document.getElementById("key").value;
    
    if (!encryptedMessage || !key) {
      alert("Por favor, preencha tanto a mensagem criptografada quanto a chave.");
      return;
    }
  
    try {
      // Descriptografa usando AES com a chave fornecida
      const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key);
      const originalText = decrypted.toString(CryptoJS.enc.Utf8);
      
      if (!originalText) {
        throw new Error("Falha ao descriptografar. Verifique a chave.");
      }
      
      document.getElementById("result").value = originalText;
    } catch (error) {
      alert("Erro: " + error.message);
    }
  }
  
