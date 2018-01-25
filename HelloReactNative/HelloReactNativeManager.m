//
//  HelloReactNativeManager.m
//  HelloReactNative
//
//  Created by 杜晓星 on 2018/1/24.
//  Copyright © 2018年 杜晓星. All rights reserved.
//

#import "HelloReactNativeManager.h"

@implementation HelloReactNativeManager

// 参数 在Javascript中访问模块的名
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(loginButtonClick:(NSString *)name password:(NSString *)password)
{
    RCTLogInfo(@"name:%@ password:%@", name, password);
}



@end
