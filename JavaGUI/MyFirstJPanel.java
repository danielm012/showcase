package myfirstgui;

import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class MyFirstJPanel extends JPanel implements ActionListener{
	
	private JLabel lblOut;
	private JTextField jtf1;
	private JTextField jtf2;
	private JButton jbAdd;
	private JButton jbSub;
	private JButton jbDiv;
	private JButton jbMult;
	
	
	public MyFirstJPanel(){
		setLayout(new GridLayout(3,1));
		 lblOut = new JLabel("Hi Everyone!!!!");
		 
		 jtf1 = new JTextField("num1", 8);
		 jtf2 = new JTextField("num2", 8);
		 
		 add(lblOut);
		 
		 JPanel tfPanel = new JPanel();
		 tfPanel.setLayout(new GridLayout(1,2));
		 tfPanel.add(jtf1);
		 tfPanel.add(jtf2);
		 add(tfPanel);

		 jbAdd = new JButton(" + ");
		 jbSub = new JButton(" - ");
		 jbDiv = new JButton(" / ");
		 jbMult = new JButton(" * ");
		 
		 jbAdd.addActionListener(this);//make the button listen for a click
		 jbSub.addActionListener(this);//make the button listen for a click
		 jbDiv.addActionListener(this);//make the button listen for a click
		 jbMult.addActionListener(this);//make the button listen for a click
		 
		 JPanel btnPanel = new JPanel();
		 btnPanel.setLayout(new GridLayout(1,4));
		 btnPanel.add(jbAdd);
		 btnPanel.add(jbSub);
		 btnPanel.add(jbDiv);
		 btnPanel.add(jbMult);
		 
		 add(btnPanel);
		 
		 
	}

	public int getIntFromTextField(JTextField jtf)throws Exception{
		int num = -999999999;
		try{
			num =  Integer.parseInt(jtf.getText());
		}
			catch(Exception e){
			throw new Exception("Invalid Input: "+ e.getMessage());
		}
		return num;
	}
	//for homework write 
	//public double getDoubleFromTextField(JTextField jtf){
	//}
	//for homework overload the add,sub, div, mult methods to use double
	public int div(int a, int b) throws Exception{
		if(b !=0){
			return a / b;
		}
		else{
			throw new Exception("Cannot divide by zero");
		}
	}
	public int add(int a, int b){
		return a + b;
	}
	public int sub(int a, int b){
		return a - b;
	}
	public int mult(int a, int b){
		return a * b;
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		String actCmd = e.getActionCommand();//get cmd off the face of the btn
		try{
			//for homework num1, num2, solution must be double
			int num1 = getIntFromTextField(jtf1);//Integer.parseInt(jtf1.getText());
			int num2 = getIntFromTextField(jtf2);//Integer.parseInt(jtf2.getText());
			int solution = -999999999;                 //System.out.print("The action was "+ actCmd);//not in gui   //lblOut.setText("action was: "+ actCmd);
			switch(actCmd){
			case " + "://add
				solution = add(num1, num2);	
				break;
			case " - "://sub
				solution = sub(num1 ,num2);
				break;
			case " / "://div
				solution = div(num1, num2);//num1 / num2;
				break;
			case " * "://mult
				solution = mult(num1 , num2);
				break;
			default:
				lblOut.setText("we have nutty gui");
			}
			lblOut.setText(num1 +" "+ actCmd +" " + num2 + " = "+ solution);//set the lblOut
		}
		catch(Exception exc){
			lblOut.setText(exc.getMessage());
		}
		
	}
	
	
	
	
	
	
	
	
	

}
