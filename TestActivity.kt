    private var testOld = Test()	//створення приватних змінних
    private var testNew = Test()
    private var isDisabled = false	//створення флагу на кнопці, який показує її 
					//активніть (блакитна чи сіра)
    fun onClick(v: View?) {		//виклик функція яка
        if (isDisabled) {               
            return
        }

        when (v) {
            
		...

            button_test -> {
                onClickButton()
            }
            
		...
		
        }
    }

    private fun checkButton() {		
        button_test.isEnabled = testOld.id != testNew.id ||
                testOld.title != testNew.title ||
                testOld.c1ass != testNew.c1ass ||
                testOld.subject != testNew.subject ||
                testOld.time != testNew.time
    }
	//від функції вище залежить візуальна частина та функціонал кнопки "Зберегти". 
	//якщо тест тільки создається - кнопка завжди буде синьої, тому що за той дуже
	//маленький час, який проходить між натисканням на кнопку "створити тест" і 
	//відображенням форми для заповнення, у базі даних з'являється пустий тест, який
	//має тільки ключ, який генерується автоматично. 
	//В той же час на формі заповнення відображаеться одразу клас та
	//предмет, тому не співпадає старі значення цих полів (які з'явилися одразу в базі
	//даних пустими) і нові значення (які з'явилися одразу на формі зі спадних
	//списків). 

	//якщо тест оновлюється, то в базі даних є вже якісь значення, які і завантажуються
	//у форму, тому вони спочатку ідентичні. А як тільки змінюється змінюєтся хочаб
	//одне значення будь-якого поля - кнопка змінюється на синій колір і стає
	//клікабельною.

	//Дана функція реагує на будь-які зміни значеня будь-якого поля.






    private fun checkItems() {
        if (testNew.id.isEmpty()) {
            textView_test_questions.gone()
            textView_test_testers.gone()
            textView_test_results.gone()
            textView_test_delete.gone()
        } else {
            textView_test_questions.visible()
            textView_test_testers.visible()
            textView_test_results.visible()
            textView_test_delete.visible()
        }
    }

	//функція вище відображає або скриває поля: "Питання", "Тестери", "Результати",
	//"Видалити".

	//Якщо у теста немає id (а як я вже описав вище, спочатку тест в базі даних зовсім
	//порожній, тільки у нього є ключ, який пізніше стає id'ком.), то всі вище
	//перечислені кнопки не відображаються.
	








	//функція ниже починається з того, що робить перевірку полей перед тим, як 
	//зберегти або змінити тест.
    private fun onClickButton() {
        hideKeyboard()

        if (testNew.title.isEmpty()) {
            showToast(R.string.test_toast_title)
            return
        }
        if (testNew.c1ass < 1) {
            showToast(R.string.test_toast_class)
            return
        }
        if (testNew.subject.isEmpty()) {
            showToast(R.string.test_toast_subject)
            return
        }
        if (testNew.time < 1) {
            showToast(R.string.test_toast_time)
            return
        }
	
	//якщо все гаразд - кнопка горить синім кольором і стає клікабельною.
        isDisabled = true

	//далі змінной надається значення id тесту, з яким ми працюэмо, якщо він
	//дорівнює нулю, тобто ми його тільки хочемо створити - тому переходимо до
	//бази даних і оновлюємо тест. Якщо є помилки - вони виводяться на екрані.
        val testId = testNew.id
        if (testId.isEmpty()) {
            val reference = KEY_TESTS.ref().push()
            testNew.id = reference.key ?: ""
            reference.updateChildren(testNew.toMap()) { error, _ ->
                if (error == null) {
                    testNew.apply {
                        testOld = Test(id, title, c1ass, subject, time)
                    }
                    checkButton()
                    checkItems()
                } else {
                    showToast(R.string.main_error)
                }
                isDisabled = false
            }
        } 
	
	//якщо id тесту не нульовий, тобто ми редагуємо його і ми маємо на дісплеї всі
	//кнопки - ми звертаємося до бази даних, до конкретного id, та встановлюємо йому
	//наші значення. Якщо є помилки - вони виводяться на екрані.
	
	else {
            KEY_TESTS.ref().child(testId).setValue(testNew.toMap()) { error, _ ->
                if (error == null) {
                    testNew.apply {
                        testOld = Test(id, title, c1ass, subject, time)
                    }
                    checkButton()
                } else {
                    showToast(R.string.main_error)
                }
                isDisabled = false
            }
        }
    }

    companion object {
        private val subjects = mutableListOf<String>()
    }

}