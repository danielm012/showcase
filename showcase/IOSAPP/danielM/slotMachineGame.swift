//
//  slotMachineGame.swift
//  danielM
//
//  Created by Student on 10/23/17.
//  Copyright © 2017 Student. All rights reserved.
//

import Foundation
import UIKit

class slotMachineGame {
    
    private var size: Int = 0
    private var numberField = [UInt32]()
    private var score: UInt32 = 100
    let digit = Digit.init()
    
    init(gameSize: Int ) {
        size = gameSize
    }
    
    func logic(_ numbers: [UInt32], _ colors: [UIColor]) -> UInt32 {
        if(size == 3) {
            var numEqual = 0
            var colorEqual = 0
            let numberCheck = numbers[0]
            let colorCheck = colors[0]
            
            var i = 0
            while(size > i) {
                if(numberCheck == numbers[i]) {
                    numEqual = numEqual + 1
                }
                if(colorCheck == colors[i]) {
                    colorEqual = colorEqual + 1
                }
                
                i += 1
            }
            if(numEqual == 3 && colorEqual == 3) {
                return 300
            }
            else if (colorEqual == 3) {
                return 75
            }
            else if (numEqual == 3) {
                return 150
            }
            else {
                return 0
            }
        }
        else if (size == 5) {
            var numEqual = 0
            var colorEqual = 0
            let numberCheck = numbers[0]
            let colorCheck = colors[0]
            
            var i = 0
            while(size > i) {
                if(numberCheck == numbers[i]) {
                    numEqual = numEqual + 1
                }
                if(colorCheck == colors[i]) {
                    colorEqual = colorEqual + 1
                }
                
                i += 1
        }
            if(numEqual == 5 && colorEqual == 5) {
                return 300
            }
            else if (colorEqual == 5) {
                return 75
            }
            else if (numEqual == 5) {
                return 150
            }
            else {
                return 0
            }
    }
        return 0;
    }
    
    func resetGame() {
        score = 100
    }
    
    func getScore() -> UInt32 {
        return score
    }
    
    func getDigits() -> [UInt32] {
        return numberField
    }
    
    func spinDigits() {
        numberField.removeAll()
        digit.reset()
        var i = 0;
        
        while(size > i) {
           digit.spinDigit()
           numberField.append(digit.getDigit())
           i = i + 1
        }
        if(score > UInt32(0)) {
           score = score + logic(numberField, digit.colorHolder) - 2
        }
}
}
