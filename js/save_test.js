var klss, klss_text, sbjct, sbjct_text, tm_text, nm_text;

          function output_information_about_klass(){
              klss = document.getElementById("klass");
              klss_text = klss.options[klss.selectedIndex].text; //информация с поля "класс"
              sbjct = document.getElementById("subject");
              sbjct_text = sbjct.options[sbjct.selectedIndex].text; //информация с поля "предмет"
              tm_text = time.value; //информация с поля "время"
              nm_text = name_of_the_test.value; //информация с поля "название теста"
              //console.log(klss_text)
              //console.log(sbjct_text)
              //console.log(name_of_the_test.value)
              //console.log(time.value)  
          }

          function to_MainMenu(){
              document.location.href = "MainMenu.html";
          }


          function save_the_test() {
              output_information_about_klass();
              var psh =  firebase.database().ref().child('/tests/').push();
              //document.write(firebase.database().ref().child('/tests/').push().key);
              psh.update({
              klass: klss_text,
              name_of_test: nm_text,
              subject: sbjct_text,
              time: tm_text,
              id: psh.key,
              //console.log(nm_text)
          })
              document.getElementById("save_button").style.backgroundColor = "darkgrey";
          };