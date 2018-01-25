import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ImageBackground,
    Button,
    NativeModules,
} from 'react-native';

var HelloReactNativeManager = NativeModules.HelloReactNativeManager;

class HelloReactNative extends Component {

    constructor(props) {
        super(props);
        if (props) {
            this.state = props;
        }
        else {
            this.state = {
                name: '',
                password: ''
            };
        }
    }

    updateName(text) {
        this.setState({
            name: text,
        });
    }

    updatePassword(text) {
        this.setState({
            password: text,
        });
    }

    render() {
        return (

            <View style={styles.container}>
                <ImageBackground style={styles.back} source={require('./LogIn_Background.jpg')}>
                    <Image style={styles.logo} source={require('./resources/LogIn_Icon.png')}/>

                    <View style={styles.top}>
                        <View style={styles.content}>
                            <Image style={styles.icon} source={require('./resources/LogIn_Account.png')}/>
                            <TextInput
                                style={styles.input}
                                placeholder={'请输入账号'}
                                autoFocus={true}
                                onChange={(e) => this.updateName(
                                    e.nativeEvent.text
                                )}
                                value={this.state.name}
                            />
                        </View>
                        <View style={styles.line}>
                        </View>
                    </View>

                    <View style={[styles.next]}>
                        <View style={styles.content}>
                            <Image style={styles.icon} source={require('./resources/LogIn_Password.png')}/>
                            <TextInput
                                style={styles.input}
                                placeholder={'请输入密码'}
                                secureTextEntry={true}
                                onChangeText={(text) => this.updatePassword(
                                    text
                                )}
                                value={this.state.password}
                            />
                        </View>
                        <View style={styles.line}>
                        </View>
                    </View>

                    <View style={{
                        backgroundColor: '#E84051', marginTop: 40, width: 140,
                        height: 38, alignSelf: 'center', borderRadius: 17, alignItems: 'center'
                    }}>
                        <Button style={styles.login}
                                onPress={() => {

                                    console.log('HelloReactNativeManager:' + HelloReactNativeManager);
                                    HelloReactNativeManager.loginButtonClick(this.state.name,this.state.password);
                                }}
                                title="登录"
                                color="#ffffff"
                        />
                    </View>


                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'

    },
    logo: {
        alignSelf: 'center',
        marginTop: 89,
        marginBottom: 44,
    },
    back: {
        flex: 1,
    },
    top: {
        marginLeft: 77,
        marginRight: 77,
    },
    next: {
        marginTop: 27,
        marginLeft: 77,
        marginRight: 77,
    },
    content: {
        flexDirection: 'row',
        marginLeft: 0,
        marginRight: 0,
        justifyContent: 'center',
        height: 32,
    },
    icon: {
        alignSelf: 'center',
    },
    input: {
        marginLeft: 10,
        flex: 1,
        color: '#fff',
    },
    line: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        height: 0.5,
    },

    login: {},

});
//  项目名要有所对应
AppRegistry.registerComponent("HelloReactNative", () => HelloReactNative);

