//
//  ViewController.swift
//  danielM
//
//  Created by Student on 10/23/17.
//  Copyright © 2017 Student. All rights reserved.
//

import UIKit

class threedigitSlot: UIViewController {
    
    @IBOutlet weak var firstField: UITextField!
    @IBOutlet weak var secondField: UITextField!
    @IBOutlet weak var thirdField: UITextField!
    @IBOutlet weak var scoreLabel: UILabel!

    let game = slotMachineGame.init(gameSize: 3)
    let digit = Digit.init()
    
    @IBAction func function(_ sender: UIButton) {
        
        print(sender.currentTitle!)
        switch sender.currentTitle! {
        case "Spin":
            game.spinDigits()
            var allNumbers = game.getDigits()
            firstField.text = String(describing: allNumbers[0])
            firstField.textColor = game.digit.colorHolder[0]
            secondField.text = String(describing: allNumbers[1])
            secondField.textColor = game.digit.colorHolder[1]
            thirdField.text = String(describing: allNumbers[2])
            thirdField.textColor = game.digit.colorHolder[2]
            scoreLabel.text = String(describing: game.getScore())
            
            break
            
        case "Reset":
            game.resetGame()
            firstField.text = String(describing: "")
            secondField.text = String(describing: "")
            thirdField.text = String(describing: "")
            scoreLabel.text = String(describing: game.getScore())
            break
        
        default:
            break
       }
    }
}

