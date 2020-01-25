function validasi_input(form){
    pola_username=/^[a-z]{4}[0-9._]{2,8}$/;
    if (!pola_username.test(form.username.value)){
       alert ('harus diawali huruf kecil, tidak boleh ada huruf besar, tidak boleh menggunakan special character kecuali ‘ . ’ (titik) dan ‘ _ ’ (underscore), minimal 8 karakter dan maksimal 12 karakter');
       form.username.focus();
       return false;
    }
 return (true);
 }
 function validasi_input(form){
    pola_password=/^[a-z]{7}[0-9]{1}[?!.*\s]{1}$/;
    if (!pola_password.test(form.password.value)){
      alert ('merupakan 9 digit alphanumeric dengan kombinasi minimal 1 simbol dan 1 angka');
      form.password.focus();
      return false;
    }
    return (true);
  }

  

