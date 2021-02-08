var klss, klss_text, sbjct, sbjct_text, tm_text, nm_text;

          function output_information_about_klass(){
              klss = document.getElementById("klass");
              klss_text = klss.options[klss.selectedIndex].text; //информация с поля "класс"
              sbjct = document.getElementById("subject");
              sbjct_text = sbjct.options[sbjct.selectedIndex].text; //информация с поля "предмет"
              tm_text_v = time.value; //информация с поля "время"
              tm_text = Number(tm_text_v);
              nm_text = document.getElementById("name_of_the_test").value; //информация с поля "название теста"
              
              //console.log(klss_text)
              //console.log(sbjct_text)
              //console.log(name_of_the_test.value)
              //console.log(time.value)  
          };

          function to_MainMenu(){
              document.location.href = "MainMenu.html";
          }


          function save_the_test() {
              output_information_about_klass();
              //var psh =  firebase.database().ref().child('/tests/').push();
              //document.write(firebase.database().ref().child('/tests/').push().key);
              if (nm_text == "") {
              window.alert("поле: 'Назва теста' має бути заповненим!"); 
              return;
            }
              /*psh.update({
              c1ass: klss_text,
              title: nm_text,
              subject: sbjct_text,
              time: tm_text,
              id: psh.key,
              //console.log(nm_text)
          })*/
              console.log(tm_text_v);
              console.log(tm_text);
              document.getElementById("save_button").style.backgroundColor = "darkgrey";
              document.getElementById("save_button").onclick = "";
              window.alert("Тест було створено. Щоб добавити питання/учнів або редагувати тест - натисніть на кнопку 'Тести' на головному меню.");
          };