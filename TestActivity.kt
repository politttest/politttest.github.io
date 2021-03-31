    private var testOld = Test()	//��������� ��������� ������
    private var testNew = Test()
    private var isDisabled = false	//��������� ����� �� ������, ���� ������ �� 
					//�������� (�������� �� ���)
    fun onClick(v: View?) {		//������ ������� ���
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
	//�� ������� ���� �������� �������� ������� �� ���������� ������ "��������". 
	//���� ���� ����� ��������� - ������ ������ ���� �����, ���� �� �� ��� ����
	//��������� ���, ���� ��������� �� ����������� �� ������ "�������� ����" � 
	//������������ ����� ��� ����������, � ��� ����� �'��������� ������ ����, ����
	//�� ����� ����, ���� ���������� �����������. 
	//� ��� �� ��� �� ���� ���������� ������������� ������ ���� ��
	//�������, ���� �� ������� ���� �������� ��� ���� (�� �'������� ������ � ���
	//����� �������) � ��� �������� (�� �'������� ������ �� ���� � �������
	//������). 

	//���� ���� �����������, �� � ��� ����� � ��� ���� ��������, �� � ��������������
	//� �����, ���� ���� �������� ��������. � �� ����� ��������� �������� �����
	//���� �������� ����-����� ���� - ������ ��������� �� ���� ���� � ���
	//�����������.

	//���� ������� ����� �� ����-�� ���� ������� ����-����� ����.






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

	//������� ���� �������� ��� ������ ����: "�������", "�������", "����������",
	//"��������".

	//���� � ����� ���� id (� �� � ��� ������ ����, �������� ���� � ��� ����� �����
	//�������, ����� � ����� � ����, ���� ����� ��� id'���.), �� �� ����
	//���������� ������ �� �������������.
	








	//������� ���� ���������� � ����, �� ������ �������� ����� ����� ���, �� 
	//�������� ��� ������ ����.
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
	
	//���� ��� ������ - ������ ������ ���� �������� � ��� �����������.
        isDisabled = true

	//��� ������ �������� �������� id �����, � ���� �� ��������, ���� ��
	//������� ����, ����� �� ���� ����� ������ �������� - ���� ���������� ��
	//���� ����� � ��������� ����. ���� � ������� - ���� ���������� �� �����.
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
	
	//���� id ����� �� ��������, ����� �� �������� ���� � �� ���� �� ����� ��
	//������ - �� ���������� �� ���� �����, �� ����������� id, �� ������������ ����
	//���� ��������. ���� � ������� - ���� ���������� �� �����.
	
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