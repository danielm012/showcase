package myfirstgui;

import javax.swing.JFrame;

public class MyFirstJFrame extends JFrame{

	public MyFirstJFrame(){
		MyFirstJPanel jp = new MyFirstJPanel();
		add(jp);
		
		
		setDefaultCloseOperation(EXIT_ON_CLOSE);//make sure application ends when window is closed
		setSize(400,400);
		setVisible(true);
		
	}
	
}
