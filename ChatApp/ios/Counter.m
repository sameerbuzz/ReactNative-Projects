//
//  Counter.m
//  ChatApp
//
//  Created by Appinventiv on 10/02/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

// RCT_EXTERN_REMAP_MODULE --> use this to rename exposed swift class name

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"
@interface RCT_EXTERN_MODULE(Counter, RCTEventEmitter)
RCT_EXTERN_METHOD(increment)
RCT_EXTERN_METHOD(getCount: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(
  decrement: (RCTPromiseResolveBlock)resolve
  rejecter: (RCTPromiseRejectBlock)reject
)
RCT_EXTERN_METHOD(
  inc: (RCTPromiseResolveBlock)resolve
  rejecter: (RCTPromiseRejectBlock)reject
)
@end
