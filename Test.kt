package com.m21droid.politest.models

import com.google.firebase.database.Exclude
import com.google.firebase.database.IgnoreExtraProperties
import java.io.Serializable

@IgnoreExtraProperties
data class Test(   //створення моделі тесту, який має описані нижче поля, які залишаться
		   //пустими, якщо в них нічого не добавлять.
    var id: String = "",                        	//змінна id тесту.
    var title: String = "",				//змінна назва тесту.
    var c1ass: Int = 0,					//змінна клас тесту.
    var subject: String = "",				//змінна предмет тесту.
    var time: Int = 0,					//змінна час тесту.
    var testers: MutableList<String> = mutableListOf(),	//змінна масив з id учнів, яким
							//призначений цей тест.
    var users: MutableList<String> = mutableListOf()	//змінна масив з id учнів, які 
							//розпочали проходження цього тесту.
) : Serializable {

    @Exclude
    fun toMap(): Map<String, Any?> {			//функція яка перетворює тест на
							//мапу.
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