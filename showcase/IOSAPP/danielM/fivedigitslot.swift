//
//  fivedigitslot.swift
//  danielM
//
//  Created by Student on 10/23/17.
//  Copyright © 2017 Student. All rights reserved.
//

import UIKit

class fivedigitslot: UIViewController {
    
    @IBOutlet weak var labelScore: UILabel!
    @IBOutlet weak var firstField: UITextField!
    @IBOutlet weak var secondField: UITextField!
    @IBOutlet weak var thirdField: UITextField!
    @IBOutlet weak var fourthField: UITextField!
    @IBOutlet weak var fifthField: UITextField!
    @IBOutlet weak var imageDisplay: UIImageView!
    

    
    let game = slotMachineGame.init(gameSize: 5)
    let digit = Digit.init()
    
    @IBAction func function(_ sender: UIButton) {
        
        print(sender.currentTitle!)
        switch sender.currentTitle! {
        case "Spin":
            
            game.spinDigits()
            var allNumbers = game.getDigits()
            firstField.text = String(describing: allNumbers[0])
            secondField.text = String(describing: allNumbers[1])
            thirdField.text = String(describing: allNumbers[2])
            fourthField.text = String(describing: allNumbers[3])
            fifthField.text = String(describing: allNumbers[4])
            labelScore.text = String(describing: game.getScore())
            
            break
            
        case "Reset":
            game.resetGame()
            firstField.text = String(describing: "")
            secondField.text = String(describing: "")
            thirdField.text = String(describing: "")
            labelScore.text = String(describing: game.getScore())
            break

        default:
            break
        }
    }
}
