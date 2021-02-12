import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, SafeAreaView } from 'react-native';
import Styles from './styles';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Button, Snackbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../constants';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../redux/reducer';

const mapState = (state: AppState) => ({
  createCustomerResponse: state.createCustomer.createCustomerResponseReducer.customerInfo,
});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

const validationSchema = yup.object().shape({
  email: yup.string().label('Email').email('Invalid Email').required(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(5, 'The password must be more than 5 characters.'),
});
type PropsFromRedux = ConnectedProps<typeof connector>;
const Header: React.FC<PropsFromRedux> = (props: PropsFromRedux) => {
  const { createCustomerResponse } = props;
  const [visible, setVisibility] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      console.log('created user =', createCustomerResponse);
    });
    return unsubscribe;
  }, [createCustomerResponse, navigation]);
  const navigation = useNavigation();
  const signUp = () => {
    navigation.navigate(ScreenNames.RegisterScreen);
  };
  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log('Values', values);
        }}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <React.Fragment>
            <View style={Styles.mainContainer}>
              <Image
                source={{ uri: 'https://dummyimage.com/600X600/C4C4C4/ffffff.png' }}
                style={Styles.logoStyle}
              />
              <View style={Styles.container}>
                <View style={Styles.loginContainer}>
                  <TextInput
                    defaultValue={formikProps.values.email}
                    placeholder="Email address"
                    style={[Styles.inputLabel, Styles.textStyle]}
                    keyboardType="email-address"
                    onChangeText={formikProps.handleChange('email')}
                    onBlur={formikProps.handleBlur('email')}
                  />
                  <Text style={Styles.formErrorMessage}>
                    {formikProps.touched.email && formikProps.errors.email}
                  </Text>
                  <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    value={formikProps.values.password}
                    style={[Styles.inputLabel, Styles.textStyle]}
                    onChangeText={formikProps.handleChange('password')}
                    maxLength={120}
                    onBlur={formikProps.handleBlur('password')}
                  />
                  <Text style={Styles.formErrorMessage}>
                    {formikProps.touched.password && formikProps.errors.password}
                  </Text>

                  <View style={Styles.forgotContainer}>
                    <TouchableOpacity onPress={() => console.log('forgot password')}>
                      <Text style={Styles.forgotTextStyle}> Forgotten your password ? </Text>
                    </TouchableOpacity>
                  </View>
                  <Button
                    color="#fff"
                    onPress={formikProps.handleSubmit}
                    mode="contained"
                    labelStyle={Styles.nextButtonText}
                    style={Styles.nextButtonContainer}
                  >
                    {'  '}Log In{'  '}
                  </Button>
                </View>
              </View>
              <View style={Styles.bottomView}>
                <View>
                  <Text style={Styles.privacyTextStyle}>
                    By logging in you agree to Gear Prep’s privacy policy and terms of use
                  </Text>
                </View>
                <View style={Styles.signupView}>
                  <Text style={Styles.signupTextStyle}>Don't have an account? </Text>
                  <TouchableOpacity>
                    <Text style={Styles.signupStyle} onPress={() => signUp()}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </React.Fragment>
        )}
      </Formik>
      {createCustomerResponse !== null ? (
        <View style={Styles.snackbarContainer}>
          <Snackbar
            visible={visible}
            onDismiss={() => setVisibility(false)}
            action={{
              label: 'Log In ',
              onPress: () => {
                setVisibility(false);
              },
            }}
            duration={Snackbar.DURATION_MEDIUM}
          >
            Congratulations, your account has been successfully created.
          </Snackbar>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default connector(Header);
