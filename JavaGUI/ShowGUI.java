package myfirstgui;

public class ShowGUI {

	public static void main(String[] args) {
		javax.swing.SwingUtilities.invokeLater( new Runnable(){
			public void run(){
				MyFirstJFrame myGUI = new MyFirstJFrame();
			}
		});
	}

}
