//
//  Counter.swift
//  ChatApp
//
//  Created by Appinventiv on 10/02/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
@objc(Counter)
class Counter: RCTEventEmitter {
  
  private var count = 0
   @objc
   func increment() {
     count += 1
     print("count is \(count)")
    sendEvent(withName: "onIncrement", body: ["count": count])
   }
  
  // we need to override this method and
  // return an array of event names that we can listen to
  override func supportedEvents() -> [String]! {
    return ["onIncrement"]
  }
  
  @objc
  func getCount(_ callback: RCTResponseSenderBlock) {
    let number = 20
    let name = "sameer"
    callback([count, number, name])
  }
  
  override func constantsToExport() -> [AnyHashable : Any]! {
    return ["initialCount": 0]
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
   func decrement(
     _ resolve: RCTPromiseResolveBlock,
     rejecter reject: RCTPromiseRejectBlock
   ) -> Void {
     if (count == 0) {
       let error = NSError(domain: "", code: 200, userInfo: nil)
       reject("E_COUNT", "count cannot be negative", error)
     } else {
       count -= 1
       resolve("count was decremented")
     }
   }
  
  @objc
  func inc(
    _ resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) -> Void {
    if (count < 0) {
      let error = NSError(domain: "", code: 200, userInfo: nil)
      reject("E_COUNT", "count cannot be negative", error)
    } else {
      count += 1
      resolve("count was incremented")
    }
  }
  
}
