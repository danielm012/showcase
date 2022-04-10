//
//  Digit.swift
//  danielM
//
//  Created by Student on 10/23/17.
//  Copyright © 2017 Student. All rights reserved.
//

import Foundation
import UIKit

class Digit {
    
    private var currentDigit: UInt32?
    private var currentColor: UIColor?
    var colorHolder = [UIColor]()
    
    var color = [0: UIColor.blue, 1: UIColor.red, 2: UIColor.green, 3: UIColor.purple]
    
    func spinDigit() {
        currentColor = pickColor()
        currentDigit = pickDigit()
    }
    
    
    func pickColor() -> UIColor {
        let random: Int = Int(arc4random_uniform(4))
        let answer = color[random]
        colorHolder.append(answer!)
        return answer!
    }
    
    
    func pickDigit() -> UInt32{
        let answer = arc4random_uniform(10)
        return answer
    }
    
    func getDigit() -> UInt32 {
        return currentDigit!
    }
    
    func getColor() -> UIColor {
        return currentColor!
    }
    
    func reset() {
        colorHolder.removeAll()
    }
}

