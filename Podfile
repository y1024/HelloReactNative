# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'HelloReactNative' do
  # Uncomment the next line if you're using Swift or would like to use dynamic frameworks
  # use_frameworks!

  # Pods for HelloReactNative
  
  
  # Your 'node_modules' directory is probably in the root of your project,
  # but if not, adjust the `:path` accordingly
  pod 'React', :path => './node_modules/react-native', :subspecs => [
  'Core',
  'DevSupport', # Include this to enable In-App Devmenu if RN >= 0.43
  'RCTText',
  'RCTNetwork',
  'RCTWebSocket',
  
#  Native component for “RCTImageView
#  http://blog.csdn.net/qq_28523871/article/details/60601445
  'RCTImage',
  
# https://github.com/facebook/react-native/issues/15049
  #  "react": "^16.2.0",
  #  "react-native": "^0.52.1"
  'BatchedBridge',
  
#   'RCTCxxBridge',

  
  # needed for debugging
  # Add any other subspecs you want to use in your project
  ]
  # Explicitly include Yoga if you are using RN >= 0.42.0
  pod 'yoga', :path => './node_modules/react-native/ReactCommon/yoga'
  
  # Third party deps podspec link
  pod 'DoubleConversion', :podspec => './node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
  pod 'GLog', :podspec => './node_modules/react-native/third-party-podspecs/GLog.podspec'
  pod 'Folly', :podspec => './node_modules/react-native/third-party-podspecs/Folly.podspec'
  

end

#  https://github.com/facebook/react-native/issues/17274
#  "react": "^16.2.0",
#  "react-native": "^0.52.1"
post_install do |installer|
    installer.pods_project.targets.each do |target|
        if target.name == 'yoga'
            target.build_configurations.each do |config|
                config.build_settings['GCC_TREAT_WARNINGS_AS_ERRORS'] = 'NO'
                config.build_settings['GCC_WARN_64_TO_32_BIT_CONVERSION'] = 'NO'
            end
        end
    end
end
