﻿function OnGUI (){
	if (GUI.Button (Rect (Screen.width/2 - 50, Screen.height/2 +30, 100, 30), "Play Game")) {
		Application.LoadLevel (1);
	}
	if (GUI.Button (Rect (Screen.width/2 - 50, Screen.height/2 +70, 100, 30), "Quit Game")) {
		Application.Quit();
	}
	
}