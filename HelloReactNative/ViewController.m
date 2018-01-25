//
//  ViewController.m
//  HelloReactNative
//
//  Created by 杜晓星 on 2018/1/23.
//  Copyright © 2018年 杜晓星. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>


@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
// https://www.jianshu.com/p/ce71b4a8a246
// https://www.jianshu.com/p/6d1ee919ded3
    
#ifdef DEBUG
    NSURL * jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
#else
    NSURL * jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"bundle/index.ios" withExtension:@"jsbundle"];
#endif
    
    
    // 从原生组件传递属性到React Native
    NSDictionary *initialProperties = @{
                                        @"name":@"wangpenfei",
                                        @"password":@"123456",
                                        };
    
    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"HelloReactNative"
                                                  initialProperties:initialProperties
                                                      launchOptions:nil];



    [self.view addSubview:rootView];
    rootView.frame = self.view.bounds;
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
