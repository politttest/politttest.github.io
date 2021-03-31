package com.m21droid.politest.models

import com.google.firebase.database.Exclude
import com.google.firebase.database.IgnoreExtraProperties
import java.io.Serializable

@IgnoreExtraProperties
data class Test(   //��������� ����� �����, ���� �� ������ ����� ����, �� ����������
		   //�������, ���� � ��� ����� �� ���������.
    var id: String = "",                        	//����� id �����.
    var title: String = "",				//����� ����� �����.
    var c1ass: Int = 0,					//����� ���� �����.
    var subject: String = "",				//����� ������� �����.
    var time: Int = 0,					//����� ��� �����.
    var testers: MutableList<String> = mutableListOf(),	//����� ����� � id ����, ����
							//����������� ��� ����.
    var users: MutableList<String> = mutableListOf()	//����� ����� � id ����, �� 
							//��������� ����������� ����� �����.
) : Serializable {

    @Exclude
    fun toMap(): Map<String, Any?> {			//������� ��� ���������� ���� ��
							//����.
        val map = mutableMapOf<String, String>().apply {
            users.forEach {				
                put(it, it)
            }
        }
        return mapOf(
            "id" to id,
            "title" to title,
            "c1ass" to c1ass,
            "subject" to subject,
            "time" to time,
            "testers" to testers,
            "users" to map
        )
    }

}