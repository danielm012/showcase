
import java.awt.Color;
import java.awt.event.*;
import java.util.Random;

import javax.swing.*;

public class CoinFlipGui {
	
	// Components creation and assignment


    // Constructor with initiation objects
    	private void Gui() {
    	
    	JFrame frame = new JFrame("CoinFlipGui");
    	frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
    	JPanel contentholder = new JPanel();
    	contentholder.setLayout(null);
    	
    	// Startup and control of size and location of the objects
    	
    	// First text2 box control and printing 
    	
        JTextField text = new JTextField("", JTextField.CENTER);
        text.setSize(385, 30);
        text.setBackground(Color.WHITE);
        text.setLocation(5, 5);
        
        // Second text2 box print the index of heads and tails
        
        JTextArea text2 = new JTextArea();
        text2.setSize(385, 450);
        text2.setLocation(5, 40);
        
        // the button contains the action and event that control both text2 and text22 box
        ImageIcon searchIcon = new ImageIcon( getClass().getResource("dollar2.gif") );
        JButton Button = new JButton("Flip", searchIcon);       
        Button.setSize(100, 30);
        Button.setLocation(150, 500);
        Button.addActionListener(new ActionListener() {
        	int headcount = 0;
        	
			// The override identifies if the object was not writing into and gives you an error
			@Override
			public void actionPerformed(ActionEvent e) {
				// send text to the text graphic
				text.setText("");
				text2.setText("");
				text2.append(arr1());
				text2.append(printHeads());
				text2.append(printTails());
				}
				public String[] myArray = {"Head", "Tails", "Head", "Tails", "Head","Tails", "Head", "Tails", "Head","Tails"};
				String[] array2 = new String[10];
				Random r = new Random();
				public String arr1(){
				//text2.append("Input:\n ");
				text2.append("\n");
				text2.append("[");
				for(int i=0; i<myArray.length;i++){
				int store = r.nextInt(myArray.length);
				text2.append(myArray[store] + " ");
				array2[i]= myArray[store];
				}
				text.setText(array2.toString());
				text2.append("]");
				return null;
				}
				public String printHeads() {
				headcount = 0;
				text2.append("\n");
				text2.append("\nNumber of Heads: ");
				text2.append("\n");
				for(int i=0; i<myArray.length;i++){
				
				if(array2[i] == "Head"){
				headcount = headcount + 1;
				text2.append("Head index " + i + "\n");
				
				}
				
				}
				return null;
				}
				public String printTails(){
				int tailcount = 0;
				text2.append("\n");
				text2.append("Number of Tails: ");
				text2.append("\n");
				for(int i=0; i<myArray.length;i++){
				if(array2[i] == "Tails"){
				tailcount = tailcount + 1;
				text2.append("Tails index " + i + "\n");
				
				}
				
				}
				text2.append("\nTotal Tails: " + tailcount + "     " + "Total Heads: "+ headcount + "\n");
				return null;
			}
		});
        
        
        
      // adding the objects into existence 
        contentholder.add(text);
        contentholder.add(text2);
        contentholder.add(Button);
        
        
        
        // Main window control size, closing, resizing and visibility
        frame.setContentPane(contentholder);
        frame.setSize(400, 575);
        frame.setResizable(false);
        frame.setVisible(true);

        }

public static void main(String[] args){

// runs the program through a method
SwingUtilities.invokeLater(new Runnable() {

	public void run() 
	{
      new CoinFlipGui().Gui();
	}

});
}
}